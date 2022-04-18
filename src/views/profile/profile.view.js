import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const ProfileView = ({navigation }) => {
  return (
    <View style={styles.home}>
      <Text style ={{color: 'black'}} >ProfileView</Text>
        <Button title='Home' onPress={()=> {navigation.navigate('Home')}}/>
    </View>
  );
  
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#E6D5B8'
  },
});

export default ProfileView