import sharedConfig from "./packages/config/eslint-preset.js";
import globals from "globals/index.js";
import tseslint from "typescript-eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  ...sharedConfig,
  {
    // Backend-specific configurations
    files: ["apps/backend/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        project: true, // Let typescript-eslint find the tsconfig.json
        tsconfigRootDir: __dirname + "/apps/backend", // Ruta relativa al tsconfig.json del backend
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Example override
    },
    ignores: ["apps/backend/dist/"],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    // Frontend-specific configurations
    files: ["apps/frontend/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname + "/apps/frontend", // Ruta relativa al tsconfig.json del frontend
      },
    },
    rules: {
      // example override for frontend
      // '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    ignores: [
      "apps/frontend/.next/",
      "apps/frontend/out/",
      "apps/frontend/postcss.config.mjs",
      "apps/frontend/next.config.ts",
      "apps/frontend/next-env.d.ts",
    ],
  },
  {
    // Ignorar el propio archivo de configuración raíz
    ignores: ["eslint.config.mjs"],
  },
);
