#!/bin/bash

ACTIONLINT_VERSION="v1.6.26" # Use a specific version for stability
ACTIONLINT_BIN="./node_modules/.bin/actionlint-bin"

# Determine OS and Architecture for download URL
OS_NAME=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH_NAME=$(uname -m)

# Adjust arch name for GitHub releases if necessary
if [ "$OS_NAME" == "darwin" ]; then
  if [ "$ARCH_NAME" == "x86_64" ]; then
    ARCH_NAME="amd64"
  elif [ "$ARCH_NAME" == "arm64" ]; then
    ARCH_NAME="arm64"
  fi
fi

# Remove 'v' prefix from version for filename
VERSION_WITHOUT_V=${ACTIONLINT_VERSION#v}

DOWNLOAD_URL="https://github.com/rhysd/actionlint/releases/download/${ACTIONLINT_VERSION}/actionlint_${VERSION_WITHOUT_V}_${OS_NAME}_${ARCH_NAME}.tar.gz"

# Check if actionlint is already downloaded
if [ ! -f "$ACTIONLINT_BIN" ]; then
  echo "Downloading actionlint $ACTIONLINT_VERSION from $DOWNLOAD_URL..."
  mkdir -p $(dirname $ACTIONLINT_BIN) # Ensure directory exists
  curl -sL "$DOWNLOAD_URL" | tar -xz -C $(dirname $ACTIONLINT_BIN) actionlint
  mv $(dirname $ACTIONLINT_BIN)/actionlint $ACTIONLINT_BIN
  chmod +x $ACTIONLINT_BIN
fi

# Execute actionlint with all arguments passed to this script
exec "$ACTIONLINT_BIN" "$@"