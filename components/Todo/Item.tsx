import React from 'react';
import { Text } from 'react-native';

interface ItemProps {
  title: string;
  checked: boolean;
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({ title, checked, onPress }) => {
  return (
    <Text style={{ fontSize: 30 }} onPress={onPress}>
      {title} [{checked ? 'checked' : 'not checked'}]
    </Text>
  );
};

export default Item;
