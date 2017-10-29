/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * App @nedimtas
 */

import React, { Component } from 'react';
import {
  //Platform,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/component/LoginForm';

//const instructions = Platform.select({
//  ios: 'Sign In',
//  android: 'Sign In',
//});

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDpjXNLZ2cSxBEFQ8fZcr03L9WhrcOjKqQ',
      authDomain: 'ogrencikayit-723fe.firebaseapp.com',
      databaseURL: 'https://ogrencikayit-723fe.firebaseio.com',
      projectId: 'ogrencikayit-723fe',
      storageBucket: 'ogrencikayit-723fe.appspot.com',
      messagingSenderId: '665315437462'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
