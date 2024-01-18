module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['universe/native', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
  },
};
