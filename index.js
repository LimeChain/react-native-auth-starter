/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react';
import stores from './src/stores';
import {YellowBox} from 'react-native';

/*
 * Temporary added ignorance for warning about deprication of some React methods.
 */

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const MobX = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MobX);
