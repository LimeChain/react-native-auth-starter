import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {HomeScreen} from '../screens/home';
import {LoginScreen} from '../screens/login';
import {AuthLoadingScreen} from '../screens/auth_loading';
import {RegisterScreen} from '../screens/register';
import {observer, inject} from 'mobx-react';
import DrawerContent from '../screens/drawer_content/drawer_content';
import {ROUTES} from '../util/util';

const AuthStack = createStackNavigator({
  [ROUTES.MainLogin]: {
    screen: inject('loginFormStore', 'userStore')(observer(LoginScreen)),
  },
  [ROUTES.MainRegister]: {
    screen: inject('registerFormStore', 'userStore')(observer(RegisterScreen)),
  },
});

const AppHomeStack = createStackNavigator({
  [ROUTES.MainHome]: {
    screen: inject('loginFormStore', 'userStore')(observer(HomeScreen)),
  },
});

// The stack for the drawer screen
const AppStack = createDrawerNavigator(
  {
    [ROUTES.MainHome]: {
      screen: AppHomeStack,
    },
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerWidth: 170,
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      [ROUTES.AuthLoading]: {
        screen: AuthLoadingScreen,
      },
      [ROUTES.AppStack]: {
        screen: AppStack,
      },
      [ROUTES.AuthStack]: {
        screen: AuthStack,
      },
    },
    {
      initialRouteName: ROUTES.AuthLoading,
    },
  ),
);
