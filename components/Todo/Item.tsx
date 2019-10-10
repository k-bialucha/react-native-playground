import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface ItemProps {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({ title, checked, onPress }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ ...styles.textBase, ...(checked ? styles.textChecked : {}) }}
        onPress={onPress}
      >
        {title}
      </Text>
      <Switch value={checked} onValueChange={onPress}></Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBase: {
    fontSize: 28,
  },
  textChecked: {
    textDecorationStyle: 'double',
    textDecorationLine: 'line-through',
  },
});

export default Item;
