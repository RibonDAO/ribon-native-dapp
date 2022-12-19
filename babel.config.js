module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './src/assets/',
            components: './src/components',
            config: './src/config',
            constants: './src/state/constants',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            services: './src/services',
            styles: './src/styles',
            testUtils: './src/testUtils',
            types: './src/types',
            contexts: './src/state/contexts',
          },
        },
      ],
      ["react-native-reanimated/plugin"],
    ],
    env: {
      production: {
        plugins: [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '',
            rootPathSuffix: 'src'
          }
        ]
      }
    }
  };
};
