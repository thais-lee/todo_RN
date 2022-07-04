import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GeneralView from './views/General/index';
import ApartmentView from './views/Apartment/index';
import DetailView from './views/Detail/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const GeneralStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="General" component={GeneralView} />
      <Stack.Screen name="Detail" component={DetailView} />
    </Stack.Navigator>
  );
};

const ApartmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Apartment" component={ApartmentView} />
      <Stack.Screen name="Detail" component={DetailView} />
    </Stack.Navigator>
  );
};

const GeneralInformationView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="General-Stack"
        component={GeneralStack}
        options={{tabBarLabel: 'General'}}
      />
      <Tab.Screen
        name="Apartment-Stack"
        component={ApartmentStack}
        options={{tabBarLabel: 'Apartment'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    // backgroundColor: '#E6D5B8',
  },
});

export default GeneralInformationView;
