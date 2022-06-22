import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  authActions,
  selectIsPendingLoggedIn,
} from '@myapp/features/auth/auth.slice';

const LoginView = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const isPendingLoggedIn = useSelector(selectIsPendingLoggedIn);

  if(isPendingLoggedIn) return(
    <ActivityIndicator />
  )
    
  return (
    <View style={styles.mainBody}>
      <ScrollView
        style={{width: '100%'}}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('@myapp/asset/banana.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.headerTextWrapper}>
              <Text
                style={{color: '#15133C', fontWeight: 'bold', fontSize: 25}}>
                Banana Corporator
              </Text>
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={email => {
                  setUserEmail(email);
                }}
                // value={userEmail}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={password => {
                  setUserPassword(password);
                }}
                // value={userPassword}
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  // console.log(TEST, API);
                  const ac = authActions.login({
                    userEmail,
                    userPassword,
                  });
                  dispatch(ac);
                  // setUserEmail('');
                  // setUserPassword('');
                }}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.register}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>New here? Register</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  headerTextWrapper: {
    alignContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    // width:'100%'
  },
  inputStyle: {
    flex: 1,
    // color: 'black',das
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFEF82',
  },
  buttonStyle: {
    backgroundColor: '#f1c40f',
    borderWidth: 0,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    // width:'100%'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  register: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  registerText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
export default LoginView;
