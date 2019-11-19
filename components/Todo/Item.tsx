import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface ItemProps {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({ title, checked, onPress }) => (
  <View style={styles.container}>
    <Text
      style={{ ...styles.textBase, ...(checked ? styles.textChecked : {}) }}
      onPress={onPress}
    >
      {title}
    </Text>
    <Switch value={checked} onValueChange={onPress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  textBase: {
    flex: 1,
    marginRight: 30,
    fontSize: 28,
    textAlign: 'justify',
  },
  textChecked: {
    textDecorationStyle: 'double',
    textDecorationLine: 'line-through',
  },
});

export default Item;
