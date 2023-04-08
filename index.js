/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import App from './src/screens/App'
import {name as appName} from './app.json';
import Navigator from './src/main/navigation/Navigator';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Navigator);
