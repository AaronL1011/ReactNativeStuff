import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import ListItem from './components/ListItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (textValue) => {
    setTodos((todos) => [
      { key: `${todos.length + 1}`, text: textValue },
      ...todos
    ]);
  };

  const removeTodo = (todoKey) => {
    setTodos(todos.filter((todo) => todo.key !== todoKey));
  };

  return (
    <View style={styles.screen}>
      <TaskInput onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={(itemData) => (
          <ListItem
            text={itemData.item.text}
            id={itemData.item.key}
            onDelete={removeTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  }
});
