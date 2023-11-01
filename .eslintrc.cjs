const path = require('path')

module.exports = {
  extends: ['react-app'],
  plugins: ['react', 'import'],
  rules: {
    'no-console': 'warn',
    'no-useless-escape': 'off',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        groups: [
          'builtin',
          'external',
          'internal',
          'object',
          'parent',
          'sibling',
          'type',
          'index',
        ],
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/default': 'warn',
    'import/export': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
        paths: [path.resolve(__dirname)],
      },
    },
  },
}
