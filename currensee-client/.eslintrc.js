module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^\\w"],
          // aliases
          ["^@"],
          // Side effect imports.
          ["^\\u0000"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ["^"],
          // Relative imports.
          // Anything that starts with a dot.
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
    "no-console": "error",
    "no-underscore-dangle": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["variable", "function"], format: ["camelCase"] },
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["PascalCase", "camelCase", "UPPER_CASE"],
      },
      { selector: ["typeAlias", "enumMember"], format: ["PascalCase"] },
      {
        selector: ["interface"],
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "import/first": "error",
    "react/prop-types": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    "no-duplicate-imports": "error",
    "func-names": ["error", "as-needed"],
    "import/no-unused-modules": [2, { unusedExports: true }],
    "import/no-default-export": "error",
    "react/prefer-stateless-function": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [".*", "./*/", "!./"],
      },
    ],
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  root: true,
  plugins: ["simple-import-sort", "import", "react", "@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
