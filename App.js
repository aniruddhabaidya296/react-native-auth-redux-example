import React from 'react';

//REDUX
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

//MAiN ROUTE FILE
import Routes from './src/screens/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
