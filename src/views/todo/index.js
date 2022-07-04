import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import TodoItem from './components/TodoItem';

import {
  editTask,
  checkTask,
  addTodo,
  deleteTodo,
  getTodo,
} from '../todo/store/db';

import ModalInput from './components/ModalInput';
import Icon from 'react-native-vector-icons/Feather';
import {Appbar, FAB, useTheme} from 'react-native-paper';


const TodoView = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibleModal = props => {
    setModalVisible(props);
  };

  const getTodoApi = async () => {
    try {
      const listOfTask = await getTodo();
      setData(listOfTask.list);
    } catch (error) {
      console.log(error);
    }
  };
  const addTodoApi = async () => {
    if (title !== '') {
      await addTodo({title: title, description: description});
    }
    getTodoApi();
    setTitle('');
    setDescription('');
  };

  const deleteTodoApi = async key => {
    await deleteTodo(key);
    getTodoApi();
  };

  const checkTaskApi = async key => {
    await checkTask(key);
    getTodoApi();
  };

  const editApi = async item => {
    await editTask(item);
    getTodoApi();
  };

  useEffect(() => {
    getTodoApi();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.header}>Your Task</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TodoItem
              item={item}
              modalVisible={modalVisible}
              handleVisibleModal={handleVisibleModal}
              checkTask={checkTaskApi}
              editTask={editApi}
              deleteTodo={deleteTodoApi}
              getTodoApi={getTodoApi}
            />
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addWrapper}>
        <Icon name="plus" color="#42C2FF" size={35} style={{padding: 7}} />
      </TouchableOpacity>

      <ModalInput
        handleVisibleModal={handleVisibleModal}
        modalVisible={modalVisible}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSaveFunction={addTodoApi}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E6D5B8',
  },
  header: {
    marginTop: 15,
    fontSize: 35,
    marginLeft: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerBar: {
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flex: 0.115,
  },

  list: {
    flex: 0.88,
  },
  addWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    // backgroundColor: '#F7F5F2',
    borderRadius: 30,
  },
});

export default TodoView;
