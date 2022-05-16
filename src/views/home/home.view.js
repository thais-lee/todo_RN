import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const HomeView = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Text style={{color: 'black'}}>HomePage</Text>
      <Button
        title="Setting"
        onPress={() => {
          navigation.navigate('Setting');
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

export default HomeView;
