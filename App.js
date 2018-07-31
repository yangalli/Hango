import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/store/reducers'
import Routes from './Routes';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {

  componentWillMount = () => {
    var config = {
      apiKey: "AIzaSyAzZGLbXHiWkemtCFBZ9IwC-3rMVNhLuMk",
      authDomain: "hango-6a57a.firebaseapp.com",
      databaseURL: "https://hango-6a57a.firebaseio.com",
      projectId: "hango-6a57a",
      storageBucket: "hango-6a57a.appspot.com",
      messagingSenderId: "538188638273"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  

});
