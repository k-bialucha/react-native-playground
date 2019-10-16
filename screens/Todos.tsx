import React from 'react';
import { View, StyleSheet } from 'react-native';

import List from '../components/Todo/List';

const TodosScreen = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <List />
    </View>
  </View>
);

TodosScreen.navigationOptions = {
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

export default TodosScreen;
