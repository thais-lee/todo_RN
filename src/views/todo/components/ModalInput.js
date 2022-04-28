import React from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const ModalInput = props => {

  const handlePressSave = () => {
    props.handleSaveFunction();
    props.handleVisibleModal(false);
  };

  const handleCancel = () => {
    props.setTitle('');
    props.setDescription('');
    props.handleVisibleModal(false);
  };

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={props.modalVisible}
      onRequestClose={() => handlePress(!props.modalVisible)}>

      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Task</Text>
          <View style={{width: '100%'}}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Title: </Text>

              <TextInput
                style={[styles.input, {height: 50}]}
                multiline={true}
                placeholderTextColor="#F2F2F2"
                placeholder="Type here"
                value={props.title}
                onChangeText={title => props.setTitle(title)}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Description: </Text>

              <TextInput
                style={[styles.input, {height: 100}]}
                multiline={true}
                placeholderTextColor="#F2F2F2"
                placeholder="Type here"
                value={props.description}
                onChangeText={desc => props.setDescription(desc)}
              />
            </View>
          </View>
          <View style={styles.controlButtonView}>

            <Pressable
              onPress={() => {
                handlePressSave();
                console.log({title: props.title, des: props.description});
              }}
              style={[
                styles.controlButton,
                {marginEnd: 12, backgroundColor: '#4D77FF'},
              ]}>
              <Text style={[styles.textSave]}>Save</Text>
            </Pressable>

            <Pressable
              onPress={() => handleCancel()}
              style={[styles.controlButton]}>
              <Text style={styles.textCancel}>Cancel</Text>
            </Pressable>
            
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#EFFFFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalView: {
    marginVertical: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalText: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  controlButton: {
    // backgroundColor: '#FFF6EA',
    borderRadius: 5,
    padding: 10,
    borderColor: '#5F7464',
    borderWidth: 0.5,
  },
  textCancel: {
    textAlign: 'center',
    color: '#95D1CC',
  },
  controlButtonView: {
    flexDirection: 'row',
    padding: 10,
  },
  textSave: {
    textAlign: 'center',
    color: '#FDF6EC',
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  inputTitle: {
    color: '#2C3333',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  input: {
    marginLeft: 10,
    backgroundColor: '#C0D8C0',
    color: '#323232',
    width: '100%',
    borderRadius: 10,
    margin: 10,
  },
});

export default ModalInput;
