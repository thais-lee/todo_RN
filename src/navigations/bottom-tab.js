import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from '../views/home/home.view.js';
import SettingView from '../views/setting/setting.view.js';

const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Setting" component={SettingView} />
    </Stack.Navigator>
  );
};

export default BottomTab;
