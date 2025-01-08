import _import from "eslint-plugin-import";
import preferArrow from "eslint-plugin-prefer-arrow";
import unicorn from "eslint-plugin-unicorn";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/.eslintrc",
      "**/node_modules",
      "**/npm-debug.log",
      "**/Dockerfile*",
      "**/docker-compose*",
      "**/.dockerignore",
      "**/.git",
      "**/.gitignore",
      "**/README.md",
      "**/.vscode",
      "**/.nyc_output",
      "**/logs",
      "**/.husky",
      "**/public",
      "**/logs",
      "**/dist",
      "**/build",
      "**/.github",
      "**/.vercel",
      "**/.next",
    ],
  },
  ...compat.extends(
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      "prefer-arrow": preferArrow,
      unicorn,
      "@typescript-eslint": typescriptEslint,
      prettier,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: "module",

      parserOptions: {
        project: "tsconfig.json",
      },
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],

      "@typescript-eslint/adjacent-overload-signatures": "error",

      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array",
        },
      ],

      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/explicit-function-return-type": "off",

      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
          accessibility: "explicit",
        },
      ],

      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/indent": "off",

      "@typescript-eslint/member-delimiter-style": [
        "off",
        {
          multiline: {
            delimiter: "none",
            requireLast: true,
          },

          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],

      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-parameter-properties": "off",

      "@typescript-eslint/no-shadow": [
        "warn",
        {
          hoist: "all",
        },
      ],

      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/semi": ["off", null],

      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          path: "always",
          types: "prefer-import",
          lib: "always",
        },
      ],

      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/typedef": "off",
      "@typescript-eslint/unified-signatures": "warn",
      "arrow-parens": ["off", "always"],
      "brace-style": ["off", "off"],
      "comma-dangle": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "no-useless-catch": "off",
      complexity: "off",
      "constructor-super": "error",
      curly: "off",
      "dot-notation": "off",
      "eol-last": "off",
      eqeqeq: ["warn", "always"],
      "guard-for-in": "error",

      "id-denylist": [
        "error",
        "any",
        "Number",
        "number",
        "String",
        "string",
        "Boolean",
        "boolean",
        "Undefined",
        "undefined",
      ],

      "id-match": "error",
      "import/no-deprecated": "error",
      "import/no-extraneous-dependencies": "off",
      "import/no-internal-modules": "off",
      "import/no-unassigned-import": "warn",
      "import/order": "off",
      indent: "off",
      "linebreak-style": "off",
      "max-classes-per-file": "off",
      "max-len": "off",
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",

      "no-console": [
        "warn",
        {
          allow: [
            "warn",
            "dir",
            "timeLog",
            "assert",
            "clear",
            "count",
            "countReset",
            "group",
            "groupEnd",
            "table",
            "dirxml",
            "error",
            "groupCollapsed",
            "Console",
            "profile",
            "profileEnd",
            "timeStamp",
            "context",
          ],
        },
      ],

      "no-debugger": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",

      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],

      "no-empty-function": "off",
      "no-eval": "error",
      "no-extra-bind": "error",
      "no-extra-semi": "off",
      "no-fallthrough": "off",
      "no-invalid-this": "off",
      "no-irregular-whitespace": "off",
      "no-multiple-empty-lines": "off",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-param-reassign": "error",
      "no-redeclare": "error",
      "no-return-await": "error",
      "no-sequences": "error",
      "no-shadow": "off",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unsafe-finally": "error",
      "no-unused-expressions": "off",
      "no-unused-labels": "error",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-var": "error",
      "no-void": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],

      "padded-blocks": [
        "off",
        {
          blocks: "never",
        },
        {
          allowSingleLineBlocks: true,
        },
      ],

      "prefer-arrow/prefer-arrow-functions": "off",
      "prefer-const": "error",
      "prefer-object-spread": "error",
      "quote-props": "off",
      quotes: "off",
      radix: "error",
      semi: "off",
      "space-before-function-paren": "off",
      "space-in-parens": ["off", "never"],
      "unicorn/prefer-ternary": "error",
      "use-isnan": "error",
      "valid-typeof": "off",
      "no-case-declarations": "off",
    },
  },
  {
    files: ["**/*.astro"],

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },

    rules: {},
  },
];
