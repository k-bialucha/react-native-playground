import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// TODO: component types

const Todos = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.todosContainer}>
        {/* render todos here */}
      </ScrollView>
    </View>
  );
};

Todos.navigationOptions = {
  title: "Todos",
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  todosContainer: {},
  // singleTodo: {},
});
