module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Disable problematic rules temporarily
    'no-unused-vars': 'warn',
    'no-undef': 'warn'
  }
};