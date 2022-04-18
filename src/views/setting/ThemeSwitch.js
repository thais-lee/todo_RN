import React, {useState} from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';

const ThemeSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style = {styles.container}>
      <View>
        <Text style= {styles.text}>Dark</Text>
      </View>
      <View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
          <Text style = {styles.text}>Light</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    text: {
        color: 'black'
    }
})
export default ThemeSwitch;
