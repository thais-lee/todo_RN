import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const AddInput = ({addTask}) => {
  const [task, setTask] = useState('');

  const clearText = () => {
    setTask('');
  };
  const onChangeText = text => {
    setTask(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addTaskWrapper}>
      <TextInput
        placeholder="Writing Task..."
        style={styles.input}
        value={task}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        onPress={() => {
          if (task === null || task === '') return;
          setTask(addTask(task));

          clearText();
        }}
        style={styles.addWrapper}>
        <Icon name="plus" color="#1B1A17" size={25} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addTaskWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flex: 0.15,
    bottom: 8,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F0A500',
    borderRadius: 20,
    width: 250,
    borderWidth: 1,
    borderColor: '#E6D5B8',
    marginLeft: 15,
  },
  addWrapper: {
    backgroundColor: '#F0A500',
    borderRadius: 40,
    marginRight: 15,
    justifyContent: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6D5B8',
  },
});
export default AddInput;
