import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'

import Router from './Router'

const store = configureStore();

export default function App() {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
}

const styles = StyleSheet.create({

});
