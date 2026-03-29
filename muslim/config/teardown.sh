#!/bin/bash
# Aman Muslim — Teardown Script
# Cleans up runtime files, session data, and optionally resets configuration

set -e

echo "============================================"
echo "  Aman Muslim — Teardown"
echo "============================================"
echo ""

# Load environment variables if present
if [ -f "$(dirname "$0")/telegram.env" ]; then
  set -a
  source "$(dirname "$0")/telegram.env"
  set +a
  echo "[OK] Environment variables loaded."
fi

# Confirm before destructive actions
if [ "${1}" != "--force" ]; then
  echo "This will clean up runtime files and session cache."
  echo "User memory and ibadah progress stored in the MCP memory server will NOT be deleted."
  echo ""
  read -r -p "Continue? (y/N): " confirm
  if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "Teardown cancelled."
    exit 0
  fi
fi

SHOWCASE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# Remove any runtime/temp files (if they exist)
echo ""
echo "Cleaning up runtime files..."

CLEANUP_TARGETS=(
  "${SHOWCASE_ROOT}/.session_cache"
  "${SHOWCASE_ROOT}/.temp"
  "${SHOWCASE_ROOT}/logs/session.log"
)

for target in "${CLEANUP_TARGETS[@]}"; do
  if [ -e "$target" ]; then
    rm -rf "$target"
    echo "  [REMOVED] $target"
  else
    echo "  [SKIP] $target (not found)"
  fi
done

# Optionally remove the .env file
if [ "${2}" == "--reset-env" ]; then
  echo ""
  echo "Removing telegram.env (--reset-env flag set)..."
  if [ -f "$(dirname "$0")/telegram.env" ]; then
    rm "$(dirname "$0")/telegram.env"
    echo "  [REMOVED] config/telegram.env"
    echo "  [NOTE] Run setup.sh again to reconfigure."
  fi
fi

echo ""
echo "============================================"
echo "  Teardown Complete"
echo "============================================"
echo ""
echo "Note: User ibadah progress, prayer streaks, and hadith history"
echo "are stored in the MCP memory server and are NOT affected by this script."
echo ""
echo "To fully reset a user's memory, use the memory management tools"
echo "in your MCP interface directly."
echo ""
