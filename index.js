/**
 * @format
 */
import 'react-native-gesture-handler';


import {AppRegistry} from 'react-native';
import SignIn from './srs/Screens/Signup/SignIn';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SignIn);
