const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const packagePath =
    '/home/nicholas/Projects/web3/ribon-shared';

config.resolver = {
    nodeModulesPaths: [packagePath]
}
config.watchFolders = [packagePath]

console.log(config);
module.exports = config;
