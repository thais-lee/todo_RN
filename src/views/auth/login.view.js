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
} from 'react-native';

const LoginView = ({navigation}) => {
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
              <Text style={{color: '#15133C', fontWeight:'bold', fontSize: 25}}>Banana Corporator</Text>
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={email => {
                  setuserEmail(email);
                }}
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
                  setuserPassword(password);
                }}
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
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle}>New here? Register</Text>
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
    backgroundColor: '#E6D5B8',
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
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
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
});
export default LoginView;
