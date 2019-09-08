import React, {Component} from 'react';
import Navigation from './Navigation/Navigation';
import {Provider} from 'react-redux';
import Store from './Store/configureStore';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    let persistor = persistStore(Store);
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
