const lintstagedrc = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --config eslint.config.mjs",
    "prettier --write",
  ],
  "*.{json,css,md}": ["prettier --write"],
  ".github/workflows/*.{yml,yaml}": ["npx actionlint"],
};

export default lintstagedrc;
