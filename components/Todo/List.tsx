import React from 'react';
import { View, Text } from 'react-native';

import Todo from '../../models/Todo';

const items: Todo[] = [
  new Todo('first todo', false),
  new Todo('second todo', false),
  new Todo('other todo', true),
];

interface ListState {
  items: Todo[];
}

class List extends React.Component<{}, ListState> {
  items = items;

  toggleItemCheckedState(updateIndex: number) {
    const itemsUpdated = this.state.items.map((item, index) => {
      if (index === updateIndex) return { ...item, checked: !item.checked };

      return item;
    });

    this.setState({ items: itemsUpdated });
  }

  render() {
    const itemsRendered = this.state.items.map(todo => (
      <Text key={todo.title}>
        {todo.title} [{todo.checked ? 'checked' : 'not checked'}]
      </Text>
    ));
    return <View>{itemsRendered}</View>;
  }
}

export default List;
