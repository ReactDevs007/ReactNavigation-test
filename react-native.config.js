// react-native.config.js
module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink
        ios: null,
      },
    },
  },
  resolver: {
    /* resolver options */
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], //add here
  },
};
