// apps/native/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  // Map the module name to the correct path relative to your monorepo
  'packages/ui': path.resolve(__dirname, '../../packages/ui'),
};

// Optionally add the monorepo root to watch folders
defaultConfig.watchFolders = [
  path.resolve(__dirname, '../../packages/ui'),
];

module.exports = defaultConfig;
