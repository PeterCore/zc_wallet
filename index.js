/**
 * @format
 */
import 'react-native-get-random-values';

// Import the the ethers shims (**BEFORE** ethers)
import 'react-native-url-polyfill/auto';

import '@ethersproject/shims';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
