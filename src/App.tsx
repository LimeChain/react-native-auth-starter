import React from 'react';
import AppContainer from './routes';
import UserStore from './stores/UserStore';
//import {observer, inject, Provider} from 'mobx-react';

export interface Props {
  //  userStore: UserStore;
}

class App extends React.Component<Props> {
  //constructor(props: Props) {
  //  super(props);
  //  console.log('App constructor');
  //  console.log(this.props.userStore);
  //}

  render() {
    return <AppContainer />;
  }
}

//export default inject('userStore')(observer(App));
export default App;
