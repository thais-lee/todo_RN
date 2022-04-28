import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, As} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {editTask} from '../store/db';
import ModalInput from './ModalInput';

const TodoItem = ({item, modalVisible, handleVisibleModal, checkTask, deleteTodo, getTodoApi}) => {

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [visible, setVisible] = useState(false);

  const editTaskApi = async () => {
    await editTask({key: item.key, title: title, description: description});
    getTodoApi();
  };

  const [isExtended, setExtended] = useState(false);
  return (
    <View style={styles.container}>

      {item.isDone && <View style={styles.isCompleteBadge} />}

      <View style={styles.checkWraper}>
        <TouchableOpacity
          onPress={() => {
            checkTask(item.key);
          }}>
          <Icon
            name={item.isDone === true ? 'check-square' : 'square'}
            size={30}
            color="#42C2FF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textWrapper}>

        <Text style={styles.textTitle}>{item.title}</Text>

        <Text
          numberOfLines={isExtended ? 0 : 1}
          style={styles.textDescription}
          onPress={() => setExtended(!isExtended)}>
          {item.description}
        </Text>

      </View>

      <View style={styles.editWrapper}>

        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}>
          <Icon name="edit-2" size={30} color="#006778" />
        </TouchableOpacity>

      </View>

      <View style={styles.deleteWraper}>
        <TouchableOpacity onPress={() => deleteTodo(item.key)}>
          <Icon name="trash-2" size={30} color="#FF1818" />
        </TouchableOpacity>
      </View>

      <ModalInput
        handleVisibleModal={()=> setVisible(false)}
        modalVisible={visible}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSaveFunction={editTaskApi}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#EFFFFD',
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
  checkWraper: {
    flex: 0.1,
    padding: 10,
  },
  textWrapper: {
    flex: 0.7,
  },
  deleteWraper: {
    flex: 0.1,
  },
  editWrapper: {
    flex: 0.1,
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#383838',
  },
  textDescription: {
    color: '#180A0A',
  },
  isCompleteBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 8,
    height: '100%',
    backgroundColor: '#85C88A',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default TodoItem;
