import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports"; // Tambahkan ini
import globals from "globals";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: ["dist", "src-tauri", ".next"], // Tambahkan dist dan src-tauri agar tidak di-scan
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Agar tidak error 'localStorage' atau 'window'
      },
    },
  },
  // Hapus baris compat.extends("next/core-web-vitals") jika tidak pakai Next.js
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "unused-imports": unusedImports,
    },
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      // Fitur Auto-Clean Import
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Pengaturan T3 Stack lainnya
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        project: true, // Dibutuhkan untuk Type-Checked rules
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);