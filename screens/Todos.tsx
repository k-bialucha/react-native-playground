import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationStackScreenComponent } from 'react-navigation-stack';

import List from '../components/Todo/List';
import BottomPanel from '../components/Todo/BottomPanel';

import TodosContext from '../context/TodosContext';

const Todos: NavigationStackScreenComponent = () => {
  const todosContext = useContext(TodosContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <List style={styles.list} todos={todosContext.todos} />
        <BottomPanel style={styles.bottomPanel} />
      </View>
    </View>
  );
};

Todos.navigationOptions = {
  title: 'Todos',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 15,
    display: 'flex',
    height: '100%',
  },
  list: {
    flex: 1,
  },
  bottomPanel: {
    borderTopWidth: 2,
    borderTopColor: 'green',
  },
});

export default Todos;
