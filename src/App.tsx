import React from 'react';
import AppContainer from './routes';
import UserStore from './stores/UserStore';
//import {observer, inject, Provider} from 'mobx-react';

export interface Props {
  //  userStore: UserStore;
}

class App extends React.Component<Props> {
  render() {
    return <AppContainer />;
  }
}

export default App;
