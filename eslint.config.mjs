import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier/flat';
import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: tsPlugin.configs.recommended.rules,
  },
  {
    rules: {
      quotes: ['error', 'single'],
    },
  },
  prettier,
];

export default config;
