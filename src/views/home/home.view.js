import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Appbar, FAB, useTheme} from 'react-native-paper';

const HomeView = ({navigation}) => {
  const theme = useTheme();
  return (
    <View style={styles.home}>
      <Text style={{color: theme.colors.text}}>HomePage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#E6D5B8',
  },
});

export default HomeView;
