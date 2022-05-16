import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'todos';

//init
//store KEY:  [{title: , description: , isDone: }, {}, {}]

const saveTodo = async newTodos => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(newTodos));
  } catch (error) {
    console.log(error);
  }
};

export async function getTodo() {
  try {
    let todo = await AsyncStorage.getItem(KEY);
    todo = JSON.parse(todo);
    return todo;
  } catch (error) {}
}

export async function addTodo(newTask) {
  let todos = await getTodo();
  if (todos === null) {
    await saveTodo({
      list: [
        {
          key: Date.now(),
          title: newTask.title,
          description: newTask.description,
          isDone: false,
        },
      ],
    });
  } else {
    todos.list.push({
      key: Date.now(),
      title: newTask.title,
      description: newTask.description,
      isDone: false,
    });
    await saveTodo(todos);
  }
  return todos;

}

export async function deleteTodo(key) {
  let todos = await getTodo();
  todos.list = todos.list.filter(todo => todo.key !== key);
  await saveTodo(todos);
  return todos;
}

export async function checkTask(key) {
  let todos = await getTodo();
  todos.list = todos.list.map(todo => {
    if (todo.key === key) todo.isDone = !todo.isDone;
    return todo;
  });
  saveTodo(todos);
}

export async function editTask(item) {
  let todos = await getTodo();
  todos.list = todos.list.map(todo => {
    if (item.key === todo.key) {
      todo.title = item.title;
      todo.description = item.description;
    }
    return todo;
  });
  saveTodo(todos);
}
