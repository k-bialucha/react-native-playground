import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TodoProps = {
    navigation: {
        navigate: (name: string, params: Object) => any,
    },
}

class Todo extends React.Component<TodoProps> {
    static navigationOptions = {
      title: 'Todos',
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>Lista</Text>
        </View>
      );
    }
  }

export default Todo;

/*
Todo.navigationOptions = {}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});