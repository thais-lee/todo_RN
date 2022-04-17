import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from '../views/home/home.view.js';
import SettingView from '../views/setting/setting.view.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
const Tab = createBottomTabNavigator();
const HomeIcon = props => <Icon {...props} name="home" />;
const SettingIcon = props => <Icon {...props} name="settings" />;

const BottomTab = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => {
            return <HomeIcon color={color} size = {size}/>;
          },
        }}
        component={HomeView}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({color, size}) => {
            return <SettingIcon color={color} size = {size}/>;
          },
        }}
        component={SettingView}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
