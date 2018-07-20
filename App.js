import React from 'react';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/store/reducers'
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  

});
