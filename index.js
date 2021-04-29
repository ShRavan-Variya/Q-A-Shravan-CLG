/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/navigator/Navigation';
import editprofile from './src/screens/editprofile'; 
import launch from './src/screens/Launch';
import publicnewip from './src/screens/publicnewip';
// import example from './src/screens/rating';
import swiperefresh from './src/screens/swiperefresh';
import timezone from './src/screens/timezone';





AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;
// LogBox.ignoreAllLogs(value)




