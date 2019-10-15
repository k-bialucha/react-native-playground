import React from "react";
import { View, Button, StyleSheet } from "react-native";

// TODO: component types

const Home = props => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <Button title="Go to Todos page" onPress={() => navigate("Todos")} />
    </View>
  );
};

Home.navigationOptions = {
  title: "Home",
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
