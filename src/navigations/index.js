import * as React from 'react';

import BottomTab from './bottom-tab';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '@myapp/views/auth/registerScreen';
import LoginView from '@myapp/views/auth/loginScreen';

const Stack = createNativeStackNavigator();
const isLoggedIn = false;

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <React.Fragment>
            <Stack.Screen
              name="Login"
              component={LoginView}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </React.Fragment>
        ) : (
          <Stack.Screen
            name="Bottom tabs"
            component={BottomTab}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
