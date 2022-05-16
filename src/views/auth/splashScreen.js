import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    }, 5000);
  }, []);

  return (
    <ImageBackground
      source={require('@myapp/asset/banana.jpg')}
      style={{flex: 1, width: '100%'}}>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
  activityIndicator: {
    alignItems: 'center',
  },
});
