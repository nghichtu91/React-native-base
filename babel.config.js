module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@Components': './src/components',
          '@Models': './src/models',
          '@Navigators': './src/navigators',
          '@Screens': './src/screens',
          '@Services': './src/services',
          '@Theme': './src/theme',
          '@Utils': './src/utils',
          '@Assets': './src/assets',
          '@I18n': './src/i18n',
          '@Store': './src/store',
        },
      },
    ],
  ],
};
