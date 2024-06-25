import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.nodeBuiltin } },
  { ignores: ['node_modules/*', 'db/*'] },
  pluginJs.configs.recommended,
];
