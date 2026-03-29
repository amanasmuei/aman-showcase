#!/bin/bash

# =============================================================================
# Aman Support — Setup Script
# Copies showcase files into your Claude project directory
# =============================================================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

SHOWCASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLAUDE_DIR="$HOME/.claude"
PROJECT_DIR=""

echo ""
echo "================================================"
echo "  Aman Support — Setup"
echo "================================================"
echo ""

# Detect target project directory
if [ -n "$1" ]; then
  PROJECT_DIR="$1"
else
  # Try to find a Claude project directory
  if [ -d "$CLAUDE_DIR/projects" ]; then
    echo "Available Claude project directories:"
    ls "$CLAUDE_DIR/projects"
    echo ""
    read -p "Enter your project directory name (or full path): " PROJECT_DIR
    if [[ "$PROJECT_DIR" != /* ]]; then
      PROJECT_DIR="$CLAUDE_DIR/projects/$PROJECT_DIR"
    fi
  else
    read -p "Enter the full path to your Claude project directory: " PROJECT_DIR
  fi
fi

if [ ! -d "$PROJECT_DIR" ]; then
  echo -e "${RED}Error: Directory '$PROJECT_DIR' does not exist.${NC}"
  echo "Please create the directory first or provide a valid path."
  exit 1
fi

# Backup existing files
BACKUP_DIR="$PROJECT_DIR/.backup_support_$(date +%Y%m%d_%H%M%S)"
if [ -d "$PROJECT_DIR/identity" ] || [ -d "$PROJECT_DIR/rules" ] || [ -d "$PROJECT_DIR/workflows" ]; then
  echo -e "${YELLOW}Existing files found. Creating backup at:${NC}"
  echo "  $BACKUP_DIR"
  mkdir -p "$BACKUP_DIR"
  for dir in identity rules workflows skills content config; do
    if [ -d "$PROJECT_DIR/$dir" ]; then
      cp -r "$PROJECT_DIR/$dir" "$BACKUP_DIR/"
    fi
  done
  echo -e "${GREEN}Backup complete.${NC}"
  echo ""
fi

# Copy files
echo "Copying Aman Support files to: $PROJECT_DIR"
echo ""

for dir in identity rules workflows skills content; do
  if [ -d "$SHOWCASE_DIR/$dir" ]; then
    mkdir -p "$PROJECT_DIR/$dir"
    cp -r "$SHOWCASE_DIR/$dir/"* "$PROJECT_DIR/$dir/"
    echo -e "  ${GREEN}✓${NC} $dir/"
  fi
done

# Copy env example (not setup.sh itself)
if [ -f "$SHOWCASE_DIR/config/telegram.env.example" ]; then
  mkdir -p "$PROJECT_DIR/config"
  cp "$SHOWCASE_DIR/config/telegram.env.example" "$PROJECT_DIR/config/"
  echo -e "  ${GREEN}✓${NC} config/telegram.env.example"
fi

echo ""
echo "================================================"
echo -e "${GREEN}  Setup complete!${NC}"
echo "================================================"
echo ""
echo "Next steps:"
echo ""
echo "  1. Copy and fill in your environment variables:"
echo "     cp $PROJECT_DIR/config/telegram.env.example $PROJECT_DIR/config/.env"
echo "     nano $PROJECT_DIR/config/.env"
echo ""
echo "  2. Add your FAQs:"
echo "     Tell the bot: 'Add FAQ: Q: [question] A: [answer]'"
echo "     Or review the template: $PROJECT_DIR/content/templates/faq-template.md"
echo ""
echo "  3. Set your escalation contact:"
echo "     Tell the bot: 'My name is [name]. Escalate to me at [contact].'"
echo ""
echo "  4. Add the bot to your customer Telegram group or share the 1:1 link."
echo ""
echo "  5. Test with: 'What are your business hours?'"
echo ""
echo "Questions? Check the getting started guide:"
echo "  $PROJECT_DIR/content/guides/getting-started.md"
echo ""
