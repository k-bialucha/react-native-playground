import React, { useState, useContext } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

import TodosContext from '../../context/TodosContext';

interface Props {
  style: {};
}

const BottomPanel: React.FC<Props> = ({ style }) => {
  const [text, setText] = useState('');
  const todosContext = useContext(TodosContext);

  return (
    <View style={{ ...style, ...styles.layout }}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={value => setText(value)}
        placeholder="new todo..."
      />
      <Button
        title="+ Add"
        onPress={() => {
          setText('');
          todosContext.addTodo(text);
        }}
        disabled={!text}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default BottomPanel;
