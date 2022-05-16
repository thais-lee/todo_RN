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

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [surName, setSurname] = useState('');
  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

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
            <InputItem placehoderContent="Email" iconName="mail" />
          </View>
          <View style={styles.wrapper}>
            <InputItem placehoderContent="Username" iconName="ios-at-outline" />
          </View>
          <View style={styles.wrapper}>
            <InputItem placehoderContent="Phone" iconName="call-sharp" />
          </View>
          <View style={styles.wrapper}>
            <InputItem placehoderContent="Address" iconName="location-sharp" />
          </View>

          <View style={styles.wrapper}>
            <InputItem
              placehoderContent="Gender"
              style={{width: '48%'}}
              iconName="md-female"
              onChange={name => {
                setName(name);
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
            <InputItem placehoderContent="Password" iconName="eye-sharp" />
          </View>
          <View style={styles.agree}>
            <Icon name="square-outline" size={30} />
            <Text>I read and agree to Term & Conditions</Text>
          </View>
          <TouchableOpacity style={styles.registerButton}>
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
