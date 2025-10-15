#!/bin/bash

ACTIONLINT_VERSION="v1.6.26" # Use a specific version for stability
ACTIONLINT_BIN="./node_modules/.bin/actionlint-bin"

# Check if actionlint is already downloaded
if [ ! -f "$ACTIONLINT_BIN" ]; then
  echo "Downloading actionlint $ACTIONLINT_VERSION..."
  curl -sL https://github.com/rhysd/actionlint/releases/download/${ACTIONLINT_VERSION}/actionlint_${ACTIONLINT_VERSION}_$(uname -s)_$(uname -m).tar.gz | tar -xz -C $(dirname $ACTIONLINT_BIN) actionlint
  mv $(dirname $ACTIONLINT_BIN)/actionlint $ACTIONLINT_BIN
  chmod +x $ACTIONLINT_BIN
fi

# Execute actionlint with all arguments passed to this script
exec "$ACTIONLINT_BIN" "$@"
