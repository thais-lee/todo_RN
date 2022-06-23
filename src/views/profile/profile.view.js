import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  authActions,
  selectCurrentUser,
  selectIsLoggedIn,
} from '@myapp/features/auth/auth.slice';

const ProfileView = ({navigation}) => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("useeffect call");
    dispatch(authActions.getUserInfo())
  }, [dispatch]);

  return (
    <View style={styles.home}>
      <Text>{currentUser?.userName}</Text>
      <View style={{}} />
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

export default ProfileView;
