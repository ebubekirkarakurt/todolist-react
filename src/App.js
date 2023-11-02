import React, { Component } from 'react';
import Main from './components/containers/Main';
import {Provider} from 'react-redux';
import { store, persistor } from "./redux/reducers/store.js";
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />        
        </PersistGate>
      </Provider>
    )
  }
}