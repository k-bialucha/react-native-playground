import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

interface Props {
  style: {};
}

const BottomPanel: React.FC<Props> = ({ style }) => {
  const [text, setText] = useState('');

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
          console.warn('button press - adding text:', text);
          setText('');
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
