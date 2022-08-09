module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@flows': './src/flows',
          '@containers': './src/containers',
          '@config': './src/config',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@state': './src/state',
          '@utils': './src/utils',
          '@typings': './src/types',
        },
      },
    ],
  ],
};
