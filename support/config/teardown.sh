#!/bin/bash

# =============================================================================
# Aman Support — Teardown Script
# Removes showcase files from your Claude project directory
# =============================================================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

CLAUDE_DIR="$HOME/.claude"
PROJECT_DIR=""

echo ""
echo "================================================"
echo "  Aman Support — Teardown"
echo "================================================"
echo ""
echo -e "${YELLOW}Warning: This will remove support agent files from your project.${NC}"
echo "A backup will be created before any files are deleted."
echo ""

# Detect target project directory
if [ -n "$1" ]; then
  PROJECT_DIR="$1"
else
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
  exit 1
fi

# Confirm
echo ""
read -p "Remove Aman Support files from '$PROJECT_DIR'? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
  echo "Teardown cancelled."
  exit 0
fi

echo ""

# Backup first
BACKUP_DIR="$PROJECT_DIR/.backup_support_teardown_$(date +%Y%m%d_%H%M%S)"
echo -e "${YELLOW}Creating backup at:${NC}"
echo "  $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

FOUND_ANYTHING=false
for dir in identity rules workflows skills content; do
  if [ -d "$PROJECT_DIR/$dir" ]; then
    cp -r "$PROJECT_DIR/$dir" "$BACKUP_DIR/"
    FOUND_ANYTHING=true
  fi
done

if [ "$FOUND_ANYTHING" = false ]; then
  echo ""
  echo "No Aman Support files found in '$PROJECT_DIR'."
  echo "Nothing to remove."
  rmdir "$BACKUP_DIR" 2>/dev/null || true
  exit 0
fi

echo -e "${GREEN}Backup complete.${NC}"
echo ""

# Remove files
echo "Removing Aman Support files..."
echo ""

for dir in identity rules workflows skills content; do
  if [ -d "$PROJECT_DIR/$dir" ]; then
    rm -rf "$PROJECT_DIR/$dir"
    echo -e "  ${GREEN}✓${NC} Removed $dir/"
  fi
done

# Remove env if it exists
if [ -f "$PROJECT_DIR/config/.env" ]; then
  echo ""
  read -p "Remove config/.env as well? (yes/no): " REMOVE_ENV
  if [ "$REMOVE_ENV" = "yes" ]; then
    cp "$PROJECT_DIR/config/.env" "$BACKUP_DIR/.env.backup"
    rm "$PROJECT_DIR/config/.env"
    echo -e "  ${GREEN}✓${NC} Removed config/.env (backed up)"
  else
    echo "  Keeping config/.env"
  fi
fi

echo ""
echo "================================================"
echo -e "${GREEN}  Teardown complete.${NC}"
echo "================================================"
echo ""
echo "Your files were backed up to:"
echo "  $BACKUP_DIR"
echo ""
echo "To restore, run:"
echo "  cp -r $BACKUP_DIR/* $PROJECT_DIR/"
echo ""
