/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import { Text , View} from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';
//import { Header } from 'react-native/Libraries/NewAppScreen';
import { AppRegistry } from 'react-native';
import App from './App'; // Assuming your root component is App.js

// Register the root component
AppRegistry.registerComponent('MyApp', () => App);

