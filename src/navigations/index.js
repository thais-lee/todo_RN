import * as React from 'react';

import BottomTab from './bottom-tab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '@myapp/views/auth/registerScreen';
import LoginView from '@myapp/views/auth/loginScreen';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '@myapp/features/auth/auth.slice';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  return (
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
  );
};

export default Navigator;
