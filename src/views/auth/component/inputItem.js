import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputItem = props => {
  return (
    <View style={[styles.Wrapper, props.style]}>
      <TextInput
        onChangeText={props.onChange}
        placeholder={props.placehoderContent}
        placeholderTextColor="#8b9cb5"
        autoCapitalize="sentences"
        returnKeyType="next"
        blurOnSubmit={false}
        underlineColorAndroid="#f000"
        style={[styles.input]}
      />
      <Icon name={props.iconName} size={20} />
    </View>
  );
};

export default InputItem;

const styles = StyleSheet.create({
  Wrapper: {
    borderColor: '#FFEF82',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'space-between',
    padding: 8,
    height: 50,
    width: '100%',
  },
  icon: {
    fontSize: 20,
    width: '10%',
  },
  input: {
    marginRight: 5,
    height: 40,
    width: '80%',
  },
});
