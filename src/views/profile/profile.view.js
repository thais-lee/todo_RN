import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {
  Avatar,
  List,
  Text,
  Surface,
  Title,
  Subheading,
} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';
import {
  authActions,
  selectCurrentUser,
  selectIsLoggedIn,
} from '@myapp/features/auth/auth.slice';

const ListOfBasicInfo = () => {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <List.Section>
      <List.Subheader style={{fontSize: 18}}>
        Personal Information
      </List.Subheader>
      <List.Item
        title="Birthday"
        description="hahaha"
        left={props => <List.Icon {...props} icon="cake" />}
      />
      <List.Item
        title="Email"
        description="haahha"
        left={props => <List.Icon {...props} icon="email" />}
      />
      <List.Item
        title="Phone"
        description="0123 456 789"
        left={props => <List.Icon {...props} icon="phone" />}
      />
      <List.Item
        title="Home"
        description="123 Banana Street, Ha Noi"
        left={props => <List.Icon {...props} icon="home" />}
      />
      <List.Item
        title="Identity Number"
        description="0123 456 789"
        left={props => <List.Icon {...props} icon="smart-card" />}
      />
      <List.Item
        title="Gender"
        description="Male"
        left={props => <List.Icon {...props} icon="gender-male-female" />}
      />
      <List.Item
        title="Nationality"
        description="East's Laos"
        left={props => <List.Icon {...props} icon="human" />}
      />
    </List.Section>
  );
};

const ProfileView = ({navigation}) => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('useeffect call');
    dispatch(authActions.getUserInfo());
  }, [dispatch]);

  console.log('currentUser: ', currentUser);
  return (
    <ScrollView style={styles.home}>
      {/* <Text variant="titleMedium">{currentUser.fullName}</Text> */}
      <Surface>
        <Surface>
          <Image
            source={require('@myapp/asset/bananaRegister.jpg')}
            style={{
              width: '100%',
              padding: 10,
              height: 180,
              backgroundColor: 'black',
            }}
          />
        </Surface>
      </Surface>
      <View style={{marginLeft: 8, flexDirection: 'row'}}>
        <Avatar.Image
          source={require('@myapp/asset/banana.png')}
          style={{marginTop: -60}}
          size={140}
        />
        <View style={{marginLeft: 15}}>
          <Title>{currentUser?.fullName}</Title>
          <Subheading>@{currentUser?.userName}</Subheading>
        </View>
      </View>
      <View style={styles.info}>
        <ListOfBasicInfo />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#E6D5B8',
  },
  info: {
    backgroundColor: '#ecf0f1',
    margin: 20,
    borderRadius: 10,
  },
});

export default ProfileView;
