import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import ThemeSwitch from './ThemeSwitch';
import {useDispatch} from 'react-redux';
import {authActions} from '@myapp/features/auth/auth.slice';

const SettingView = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.home}>
      <ThemeSwitch />
      <Button
        title="Log out"
        onPress={() => {
          dispatch(authActions.logout());
        }}
      />
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
