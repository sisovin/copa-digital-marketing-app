module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-visual-regression',
  ],
  framework: '@storybook/react',
  visualRegression: {
    viewports: [320, 768, 1024],
    diffThreshold: 0.1,
  },
};
