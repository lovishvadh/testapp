/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Root } from "native-base";

import Dashboard from './views/Dashboard/index';

const App = () => {
  return (
    <Root>
      <StatusBar barStyle={"default"} />
      <Dashboard />
    </Root>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
