module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '@myapp',
        rootPathSuffix: 'src',
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName:'@env',
        path:'.env'
      }
    ]
  ],

  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {rootPathPrefix: '@', rootPathSuffix: 'src'},
        // {"path": '.env', "moduleName": '@env'},
      ],
    },
  },
};
