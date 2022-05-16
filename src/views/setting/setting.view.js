import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import ThemeSwitch from './ThemeSwitch';

const SettingView = ({navigation}) => {
  return (
    <View style={styles.home}>
      <ThemeSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E6D5B8',
  },
});

export default SettingView;
