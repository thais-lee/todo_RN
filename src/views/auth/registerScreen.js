import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import InputItem from './component/inputItem';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '@myapp/features/auth/auth.slice';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);

  const [isAgree, setIsAgree] = useState(false);

  const dispatch = useDispatch();
  const onRegisterPress = () => {
    if (!!emailAddress && !!name && !!userName && !!password) {
      dispatch(
        authActions.register({
          emailAddress,
          userName,
          name,
          surname,
          phoneNumber,
          address,
          gender,
          dateOfBirth: "",
          password,
        }),
      );
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('@myapp/asset/bananaRegister.jpg')}
            style={{
              resizeMode: 'stretch',
              width: '100%',
            }}
          />
        </View>
        <KeyboardAvoidingView>
          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Name"
              iconName="person"
              style={{width: '48%'}}
              onChange={name => {
                setName(name);
              }}
            />
            <InputItem
              iconName="person"
              style={{width: '48%'}}
              placehoderContent="SurName"
              onChange={sname => {
                setSurname(sname);
              }}
            />
          </View>
          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Email"
              iconName="mail"
              onChange={address => {
                setEmailAddress(address);
              }}
            />
          </View>
          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Username"
              onChange={usname => setUserName(usname)}
              iconName="ios-at-outline"
            />
          </View>
          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Phone"
              iconName="call-sharp"
              onChange={phone => setPhoneNumber(phone)}
            />
          </View>
          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Address"
              iconName="location-sharp"
              onChange={addr => {
                setAddress;
              }}
            />
          </View>

          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Gender"
              style={{width: '48%'}}
              iconName="md-female"
              onChange={gender => {
                setGender(gender);
              }}
            />
            <View style={styles.date}>
              <Text style={{width: '80%', fontWeight: '400', paddingLeft: 10}}>
                {dateOfBirth.toLocaleDateString('en-US')}
              </Text>
              <Icon
                name="md-calendar"
                size={20}
                onPress={() => setOpenCalendar(true)}
              />
            </View>

            <DatePicker
              modal
              mode="date"
              date={dateOfBirth}
              open={openCalendar}
              onConfirm={date => {
                setDateOfBirth(date);
                setOpenCalendar(false);
              }}
              onCancel={() => {
                setOpenCalendar(false);
              }}
            />
          </View>
          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Password"
              iconName="eye-sharp"
              onChange={pass => setPassword(pass)}
            />
          </View>
          <View style={styles.agree}>
            <Icon
              style={{marginLeft: 5}}
              name={isAgree ? 'checkbox-outline' : 'square-outline'}
              onPress={() => setIsAgree(!isAgree)}
              size={30}
            />
            <Text style={{marginLeft: 6}}>
              I read and agree to Term & Conditions
            </Text>
          </View>
          <TouchableOpacity
            onPress={onRegisterPress}
            style={isAgree ? styles.registerButton : styles.disableButton}
            activeOpacity={0.75}
            disabled={isAgree ? false : true}>
            <Text style={styles.textRes}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have account? Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  date: {
    flexDirection: 'row',
    height: 50,
    width: '48%',
    justifyContent: 'space-between',
    borderColor: '#FFEF82',
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    padding: 8,
  },
  agree: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  registerButton: {
    height: 65,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1c40f',
    alignSelf: 'center',
    borderRadius: 8,
  },
  disableButton: {
    height: 65,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7f8c8d',
    alignSelf: 'center',
    borderRadius: 8,
  },
  textRes: {
    color: '#ecf0f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  loginText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
