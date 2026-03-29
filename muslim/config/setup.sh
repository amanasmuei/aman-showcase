#!/bin/bash
# Aman Muslim — Setup Script
# Sets up the Islamic daily companion configuration

set -e

echo "============================================"
echo "  Aman Muslim — Setup"
echo "  Your daily Islamic ibadah companion"
echo "============================================"
echo ""

# Check for .env file
if [ ! -f "$(dirname "$0")/telegram.env" ]; then
  if [ -f "$(dirname "$0")/telegram.env.example" ]; then
    echo "[INFO] Copying telegram.env.example to telegram.env..."
    cp "$(dirname "$0")/telegram.env.example" "$(dirname "$0")/telegram.env"
    echo "[ACTION REQUIRED] Edit config/telegram.env with your actual values before running."
  else
    echo "[WARNING] telegram.env.example not found. Skipping env copy."
  fi
else
  echo "[OK] telegram.env already exists."
fi

# Load environment variables
if [ -f "$(dirname "$0")/telegram.env" ]; then
  set -a
  source "$(dirname "$0")/telegram.env"
  set +a
  echo "[OK] Environment variables loaded."
fi

# Validate required environment variables
echo ""
echo "Validating configuration..."

MISSING_VARS=()

if [ -z "${TELEGRAM_BOT_TOKEN}" ]; then
  MISSING_VARS+=("TELEGRAM_BOT_TOKEN")
fi

if [ -z "${AMAN_MCP_ENDPOINT}" ]; then
  MISSING_VARS+=("AMAN_MCP_ENDPOINT")
fi

if [ ${#MISSING_VARS[@]} -gt 0 ]; then
  echo ""
  echo "[WARNING] The following required variables are not set:"
  for var in "${MISSING_VARS[@]}"; do
    echo "  - $var"
  done
  echo ""
  echo "Edit config/telegram.env and fill in the missing values."
  echo "Setup paused. Re-run this script after updating the env file."
  exit 1
fi

echo "[OK] All required variables are set."

# Verify directory structure
echo ""
echo "Verifying directory structure..."

REQUIRED_DIRS=(
  "identity"
  "rules"
  "workflows"
  "skills"
  "content/hadith"
  "content/guides"
  "content/templates"
  "config"
)

SHOWCASE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ALL_DIRS_OK=true

for dir in "${REQUIRED_DIRS[@]}"; do
  if [ -d "${SHOWCASE_ROOT}/${dir}" ]; then
    echo "  [OK] ${dir}/"
  else
    echo "  [MISSING] ${dir}/"
    ALL_DIRS_OK=false
  fi
done

if [ "$ALL_DIRS_OK" = false ]; then
  echo ""
  echo "[WARNING] Some directories are missing. The companion may not work correctly."
fi

# Print summary
echo ""
echo "============================================"
echo "  Setup Complete"
echo "============================================"
echo ""
echo "Bot Name:     ${AMAN_BOT_NAME:-Aman Muslim}"
echo "Language:     ${AMAN_DEFAULT_LANGUAGE:-ms,en (bilingual)}"
echo "Prayer Method:${AMAN_PRAYER_METHOD:-JAKIM (Malaysia)}"
echo "MCP Endpoint: ${AMAN_MCP_ENDPOINT}"
echo ""
echo "Next steps:"
echo "  1. Start your Telegram bot using the token in telegram.env"
echo "  2. Message the bot and say: 'I'm in [your city]'"
echo "  3. Choose your preferences (language, what you want)"
echo "  4. Say 'pagi' or 'good morning' to start your first daily check-in"
echo ""
echo "Bismillah. May this companion help you with your ibadah."
echo ""
