/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MyApp from './src/index';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => MyApp);
