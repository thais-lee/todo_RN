import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Modal, Pressable} from 'react-native';
import ModalInput from '../todo/components/ModalInput';

const ProfileView = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleVisibleModal = props => {
    setModalVisible(props);
  };
  return (
    <View style={styles.home}>
      <Button title="ShowModal" onPress={() => setModalVisible(true)} />
      <View style={{}}>
        <ModalInput
          handlePress={handleVisibleModal}
          modalVisible={modalVisible}
        />
      </View>
    </View>
  );
  // return (
  //   <View style={styles.centeredView}>
  //     <Modal
  //       animationType="slide"
  //       transparent={true}
  //       visible={modalVisible}
  //       onRequestClose={() => {
  //         setModalVisible(!modalVisible);
  //       }}
  //     >
  //       <View style={styles.centeredView}>
  //         <View style={styles.modalView}>
  //           <Text style={styles.modalText}>Hello World!</Text>
  //           <Pressable
  //             style={[styles.button, styles.buttonClose]}
  //             onPress={() => setModalVisible(!modalVisible)}
  //           >
  //             <Text style={styles.textStyle}>Hide Modal</Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </Modal>
  //     <Pressable
  //       style={[styles.button, styles.buttonOpen]}
  //       onPress={() => setModalVisible(true)}
  //     >
  //       <Text style={styles.textStyle}>Show Modal</Text>
  //     </Pressable>
  //   </View>
  // )
};

const styles = StyleSheet.create({
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#E6D5B8'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ProfileView;
