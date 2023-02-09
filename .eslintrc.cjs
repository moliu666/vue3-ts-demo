module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: [['~', './src']]
    }
  },
  rules: {
    'no-console': 'error', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'off', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'global-require': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false }
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'main', 'default'] // 需要忽略的组件名
      }
    ]
  }
};
