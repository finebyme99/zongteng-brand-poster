#!/usr/bin/env bash
set -euo pipefail

REPO="${REPO:-finebyme99/zongteng-brand-poster}"
REF="${REF:-main}"
SKILL_NAME="${SKILL_NAME:-zongteng-brand-poster}"
CODEX_HOME_DIR="${CODEX_HOME:-$HOME/.codex}"
DEST_ROOT="${DEST_ROOT:-$CODEX_HOME_DIR/skills}"
DEST="$DEST_ROOT/$SKILL_NAME"

tmp_dir="$(mktemp -d)"
cleanup() {
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

echo "Cloning $REPO@$REF..."
git clone --depth 1 --branch "$REF" "https://github.com/$REPO.git" "$tmp_dir/repo" >/dev/null

src="$tmp_dir/repo/zongteng-brand-poster"
test -f "$src/SKILL.md"
test -d "$src/references"
test -d "$src/assets"
test -d "$src/scripts"

mkdir -p "$DEST_ROOT"
if [ -e "$DEST" ]; then
  backup="$DEST.backup.$(date +%Y%m%d%H%M%S)"
  echo "Existing skill found. Moving it to $backup"
  mv "$DEST" "$backup"
fi

cp -R "$src" "$DEST"

test -f "$DEST/SKILL.md"
test -d "$DEST/references"
test -d "$DEST/assets"
test -d "$DEST/scripts"

echo "Installed $SKILL_NAME to $DEST"
echo "Restart Codex to pick up the updated skill."
