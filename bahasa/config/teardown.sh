#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR="${1:-}"

if [ -z "$BACKUP_DIR" ]; then
  echo "Usage: bash teardown.sh <backup-directory>"
  echo ""
  echo "Available backups:"
  ls -d "$(dirname "$0")/../backup/"*/ 2>/dev/null || echo "  No backups found."
  exit 1
fi

if [ ! -d "$BACKUP_DIR" ]; then
  echo "Error: Backup directory not found: $BACKUP_DIR"
  exit 1
fi

echo "=== Restoring from backup: $BACKUP_DIR ==="
echo ""

for file in "$BACKUP_DIR"/*; do
  filename=$(basename "$file")
  # Parse dir-name from backup filename (e.g., ".acore__core.md" -> ~/.acore/core.md)
  dir_part="${filename%%__*}"
  file_part="${filename#*__}"
  target="$HOME/$dir_part/$file_part"

  if [ -d "$HOME/$dir_part" ]; then
    cp "$file" "$target"
    echo "  Restored: $target"
  fi
done

echo ""
echo "=== Restore Complete ==="
echo "Your previous aman ecosystem config is back."
