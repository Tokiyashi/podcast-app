module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'next'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/consistent-type-imports': ['off'],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowExpressions: true },
    ],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
  },
};
