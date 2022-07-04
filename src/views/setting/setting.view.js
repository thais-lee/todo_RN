import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {authActions} from '@myapp/features/auth/auth.slice';
import {useTheme, Switch} from 'react-native-paper';
import {PreferencesContext} from '@myapp/features/theme/context';

const SettingView = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  return (
    <View style={styles.home}>
      <Switch
        color={theme.colors.primary}
        onValueChange={toggleTheme}
        value={isThemeDark}
      />
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
  },
});

export default SettingView;
