import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {HomeScreen} from '../screens/home';
import {LoginScreen} from '../screens/login';
import {RegisterScreen} from '../screens/register';
import {observer, inject} from 'mobx-react';

export enum ROUTES {
  MainHome = 'MainHome',
  MainLogin = 'MainLogin',
  MainRegister = 'MainRegister',

  RootDrawer = 'RootDrawer',
  RootStack = 'RootStack',
}

// The stack for the main navigation
const HomeStack = createStackNavigator({
  [ROUTES.MainHome]: {
    screen: HomeScreen,
  },
});

// The stack for the main navigation
const LoginStack = createStackNavigator({
  [ROUTES.MainLogin]: {
    screen: inject('userStore')(observer(LoginScreen)),
  },
});

// The stack for the main navigation
const RegisterStack = createStackNavigator({
  [ROUTES.MainRegister]: {
    screen: inject('userStore')(observer(RegisterScreen)),
  },
});

// The stack for the drawer screen
const DrawerNavigator = createDrawerNavigator(
  {
    [ROUTES.MainHome]: {
      screen: HomeStack,
    },
    [ROUTES.MainLogin]: {
      screen: LoginStack,
    },
    [ROUTES.MainRegister]: {
      screen: RegisterStack,
    },
  },
  {
    drawerPosition: 'left',
  },
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
