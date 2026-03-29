#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$REPO_DIR/backup/$(date +%Y%m%d-%H%M%S)"

echo "=== Aman Monitor Setup ==="
echo ""

if ! command -v npx &> /dev/null; then
  echo "Error: npx not found. Please install Node.js first."
  exit 1
fi

if [ ! -f "$REPO_DIR/.env" ]; then
  if [ -f "$SCRIPT_DIR/telegram.env.example" ]; then
    echo "No .env file found. Creating from template..."
    cp "$SCRIPT_DIR/telegram.env.example" "$REPO_DIR/.env"
    echo "Please edit .env with your Telegram bot token and API key, then run setup.sh again."
    exit 0
  fi
fi

echo "Backing up existing ecosystem files..."
mkdir -p "$BACKUP_DIR"

for file in ~/.acore/core.md ~/.aflow/flow.md ~/.arules/rules.md ~/.askill/skills.md; do
  if [ -f "$file" ]; then
    dir_name=$(basename "$(dirname "$file")")
    cp "$file" "$BACKUP_DIR/${dir_name}__$(basename "$file")"
    echo "  Backed up: $file"
  fi
done

echo "  Backup saved to: $BACKUP_DIR"
echo ""

mkdir -p ~/.acore ~/.aflow ~/.arules ~/.askill

echo "Installing Aman Monitor configuration..."
cp "$REPO_DIR/identity/core.md" ~/.acore/core.md
echo "  Identity: ~/.acore/core.md"

cp "$REPO_DIR/workflows/flow.md" ~/.aflow/flow.md
echo "  Workflows: ~/.aflow/flow.md"

cp "$REPO_DIR/rules/rules.md" ~/.arules/rules.md
echo "  Rules: ~/.arules/rules.md"

cp "$REPO_DIR/skills/monitor-skill.md" ~/.askill/skills.md
echo "  Skills: ~/.askill/skills.md"

echo ""
echo "=== Setup Complete ==="
echo ""
echo "To start Aman Monitor:"
echo "  1. Make sure .env has your TELEGRAM_BOT_TOKEN and LLM API key"
echo "  2. Run: npx @aman_asmuei/achannel add telegram"
echo "  3. Run: npx @aman_asmuei/achannel serve"
echo ""
echo "Tip: Add the akit web-search tool for real-time data fetching."
echo "     Run: npx @aman_asmuei/akit add web-search"
echo ""
echo "To restore your previous config: bash $SCRIPT_DIR/teardown.sh $BACKUP_DIR"
