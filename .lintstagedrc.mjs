export default {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --config eslint.config.mjs',
    'prettier --write',
  ],
  '*.{json,css,md}': [
    'prettier --write',
  ],
};