import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { Header, NavigationStackScreenComponent } from 'react-navigation-stack';

import List from '../components/Todo/List';
import BottomPanel from '../components/Todo/BottomPanel';

import TodosContext from '../context/TodosContext';

const KEYBOARD_OFFSET: number = 15;

const Todos: NavigationStackScreenComponent = () => {
  const todosContext = useContext(TodosContext);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Header.HEIGHT + KEYBOARD_OFFSET}
      style={styles.container}
    >
      <View style={styles.content}>
        <List
          style={styles.list}
          todos={todosContext.todos}
          onTodoClick={todosContext.toggleTodo}
        />
        <BottomPanel style={styles.bottomPanel} />
      </View>
    </KeyboardAvoidingView>
  );
};

Todos.navigationOptions = {
  title: 'Todos',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  content: {
    padding: 10,
    display: 'flex',
    height: '100%',
  },
  list: {
    flex: 1,
    paddingBottom: 10,
  },
  bottomPanel: {},
});

export default Todos;
