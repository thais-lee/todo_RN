import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import AddInput from './components/AddInput';
import TodoList from './components/Todolist';

const TodoView = () => {
  const [data, setData] = useState([]);
  const addTask = value => {
    setData(prevTodo => {
      return [
        {
          key: Date.now(),
          value: value,
          isComplete: false,
        },
        ...prevTodo,
      ];
    });
  };

  const checkedTask = key => {
    setData(prevTodo => {
      return prevTodo.map(todo => {
        if (todo.key === key) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
    });
  };

  const deleteItem = key => {
    setData(prevTodo => {
      return prevTodo.filter(todo => todo.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.header}>Your Task</Text>
      </View>
      <View style={{flex: 0.775}}>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TodoList
              item={item}
              checkedTask={checkedTask}
              deleteItem={deleteItem}
            />
          )}
        />
      </View>

      <AddInput addTask={addTask}></AddInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6D5B8',
  },
  header: {
    marginTop: 15,
    fontSize: 35,
    marginLeft: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: 'black'
  },
  text: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerBar: {
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flex: 0.115

  },
});
export default TodoView;