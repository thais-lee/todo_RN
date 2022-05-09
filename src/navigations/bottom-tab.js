import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Feather';
// import HomeView from '@myapp/views/home/home.view';
import HomeView from '@myapp/views/home/home.view';
import SettingView from '@myapp/views/setting/setting.view.js';
import ProfileView from '@myapp/views/profile/profile.view.js';
import TodoView from '@myapp/views/todo/index.js';
import LoginView from '@myapp/views/auth/login.view';

const Tab = createBottomTabNavigator();
const HomeIcon = props => <Icon {...props} name="home" />;
const SettingIcon = props => <Icon {...props} name="settings" />;
const ProfileIcon = props => <Icon {...props} name="user" />;
const TodoIcon = props => <Icon {...props} name="layers" />;
const KeyIcon = props => <Icon {...props} name="key" />;

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
            return <HomeIcon color={color} size={size} />;
          },
        }}
        component={HomeView}
      />
      <Tab.Screen
        name="Todo"
        options={{
          tabBarIcon: ({color, size}) => {
            return <TodoIcon color={color} size={size} />;
          },
        }}
        component={TodoView}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color, size}) => {
            return <ProfileIcon color={color} size={size} />;
          },
        }}
        component={ProfileView}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({color, size}) => {
            return <SettingIcon color={color} size={size} />;
          },
        }}
        component={SettingView}
      />
      <Tab.Screen
        name="Auth"
        options={{
          tabBarIcon: ({color, size}) => {
            return <KeyIcon color={color} size={size} />;
          },
        }}
        component={LoginView}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
