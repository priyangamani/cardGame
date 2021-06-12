/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};


This is findCardGame developed in ReactNative Component using React Js.

node and ( npm or yarn )

git clone https://github.com/priyangamani/cardGame.git


cd cardGame 

yarn install

yarn if all depedencies is installed, and than run it on android / ios

yarn ios /yarn android

yarn run test --u (For Testing)