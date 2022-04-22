import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const ModalInput = ({handlePress, modalVisible}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(false)} style={{backgroundColor:'red'}}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => handlePress(!modalVisible)}
        onDismiss={() => handlePress(false)}>
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Insert new Task</Text>
            <View style={{width: '100%'}}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Title: </Text>
                <TextInput
                  style={[styles.input, {height: 50}]}
                  multiline={true}
                  placeholderTextColor="black"
                  placeholder="Type here"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputTitle}>Description: </Text>
                <TextInput
                  style={[styles.input, {height: 100}]}
                  multiline={true}
                  placeholderTextColor="black"
                  placeholder="Type here"
                />
              </View>
            </View>
            <View style={styles.controlButtonView}>
              <Pressable
                onPress={() => handlePress(false)}
                style={[
                  styles.controlButton,
                  {marginEnd: 12, backgroundColor: '#4D77FF'},
                ]}>
                <Text style={[styles.textSave]}>Save</Text>
              </Pressable>
              <Pressable
                onPress={() => handlePress(false)}
                style={[styles.controlButton]}>
                <Text style={styles.textCancel}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </TouchableWithoutFeedback>
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
    flexWrap: 'wrap',
  },
  inputTitle: {
    width: 70,
    color: '#2C3333',
    alignSelf: 'flex-start',
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
