import React from 'react';
import { View, Text } from 'react-native';

import Todo from '../../models/Todo';

const items: Todo[] = [
  new Todo('first todo', false),
  new Todo('second todo', false),
  new Todo('other todo', true),
];

const List = () => {
  const itemsRendered = items.map(todo => (
    <Text key={todo.title}>
      {todo.title} [{todo.checked ? 'checked' : 'not checked'}]
    </Text>
  ));
  return <View>{itemsRendered}</View>;
};

export default List;
