const lintstagedrc = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --config eslint.config.mjs",
    "prettier --write",
  ],
  "*.{json,css,md}": ["prettier --write"],
  ".github/workflows/*.{yml,yaml}": ["bash scripts/run-actionlint.sh"],
};

export default lintstagedrc;
