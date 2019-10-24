import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  style: {};
}

const BottomPanel: React.FC<Props> = ({ style }) => (
  <View style={style}>
    <Text>Bottom PANEL</Text>
  </View>
);

export default BottomPanel;
