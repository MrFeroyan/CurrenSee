module.exports = {
	env: {
	  node: true,
	  es2022: true,
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
		{ selector: ["interface"], format: ["PascalCase"] },
	  ],
	  "import/first": "error",
	  "no-duplicate-imports": "error",
	  "func-names": ["error", "as-needed"],
	  "import/no-unused-modules": [2, { unusedExports: true }],
	  "no-restricted-imports": [
		"error",
		{
		  patterns: [".*", "./*/", "!./"],
		},
	  ],
	  "prettier/prettier": ["error", { singleQuote: false }],
	  "security/detect-object-injection": "off",
	  "no-underscore-dangle": "off",
	},
	extends: [
	  "eslint:recommended",
	  "plugin:@typescript-eslint/recommended",
	  "plugin:security/recommended",
	  "plugin:prettier/recommended",
	  "prettier",
	],
	parser: "@typescript-eslint/parser",
	root: true,
	plugins: ["simple-import-sort", "import", "@typescript-eslint"],
	parserOptions: {
	  sourceType: "module",
	  project: "tsconfig.json",
	  tsconfigRootDir: __dirname,
	}
  };
  