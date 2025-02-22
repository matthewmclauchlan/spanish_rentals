import { withExpo } from '@expo/next-adapter';
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'expo-modules-core',
    'expo-constants',
    'expo-linking',
    'expo-web-browser'
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config: Configuration) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Force webpack to resolve "appwrite" from the installed node_modules
      appwrite: require.resolve('appwrite')
    };
    return config;
  }
});

export default nextConfig;
