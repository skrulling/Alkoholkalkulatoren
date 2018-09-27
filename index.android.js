/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Kalkulatoren from './components/kalkulatoren.js'
import Hvordan from './components/hvordan.js'
import Hovedmeny from './components/hovedmeny.js'
import FullKalkulatoren from './components/fullkalkulator.js'
import HvordanPromille from './components/hvordanPromille.js'
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Vibration
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const Alkoholkalkulatoren = StackNavigator({
  Home: { screen: Hovedmeny },
  Hvordan: { screen: Hvordan },
  Kalkulatoren: { screen: Kalkulatoren },
  Promillekostnad: { screen: FullKalkulatoren },
  HvordanPromille: { screen: HvordanPromille },
});


AppRegistry.registerComponent('Alkoholkalkulatoren', () => Alkoholkalkulatoren);
