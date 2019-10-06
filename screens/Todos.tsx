import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const TodosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingTop: 40,
    paddingBottom: 40,
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: 40,
    color: '#d77',
    fontWeight: '600',
    paddingLeft: 10,
  },
});

export default TodosScreen;
