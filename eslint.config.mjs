import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js base + TypeScript compatibility
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Your custom setup
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Enable prettier plugin to report format issues as lint errors
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 100,
        },
      ],
    },
  },

  // Disable ESLint rules that conflict with Prettier
  prettier,
];

export default eslintConfig;