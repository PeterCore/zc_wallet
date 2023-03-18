module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {unstable_transformProfile: 'hermes-stable'},
    ],
  ],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src',
        rootPathPrefix: '@/',
      },
    ],
  ],
};
