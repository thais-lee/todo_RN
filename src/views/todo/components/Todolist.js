import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, As} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoList = ({item, checkedTask, deleteItem}) => {
  const [isExtended, setExtended] = useState(false);
  return (
    <View style={styles.container}>
      {item.isComplete && <View style={styles.isCompleteBadge} />}
      <View style={styles.checkWraper}>
        <TouchableOpacity
          onPress={() => {
            checkedTask(item.key);
          }}>
          <Icon
            name={item.isComplete === true ? 'check-square' : 'square'}
            size={30}
            color="#42C2FF"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text
          numberOfLines={isExtended ? 0 : 1}
          style={styles.text}
          onPress={() => setExtended(!isExtended)}>
          {item.value}
        </Text>
      </View>
      <View style={styles.editWrapper}>
        <TouchableOpacity>
          <Icon name="edit-2" size={30} color="#006778" />
        </TouchableOpacity>
      </View>
      <View style={styles.deleteWraper}>
        <TouchableOpacity onPress={() => deleteItem(item.key)}>
          <Icon name="trash-2" size={30} color="#FF1818" />
        </TouchableOpacity>
      </View>
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
  text: {
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

export default TodoList;
