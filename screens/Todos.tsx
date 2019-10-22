import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationStackScreenComponent } from 'react-navigation-stack';

import List from '../components/Todo/List';

const Todos: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <List />
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
  },
});

export default Todos;
