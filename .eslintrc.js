module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@next/next/no-img-element": "off",
    "array-bracket-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    indent: ["error", 4],
    "no-unreachable": "error",
    "object-curly-spacing": ["error", "always"],
    semi: "error",
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
