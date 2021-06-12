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


cd ardGame if you using npm

npm install if you using yarn

yarn if all depedencies is installed, and than run it on android / ios

yarn ios /yarn android

test cases yarn run test --u (For Testing/ jest)