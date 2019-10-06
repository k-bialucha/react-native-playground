import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodosScreen from './screens/Todos';

export default function App() {
  return (
    <View style={styles.container}>
      <TodosScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
