import React from 'react';
import { View, Text } from 'react-native';

import Item from './Item';

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
  state = {
    items,
  };

  toggleItemCheckedState(updateIndex: number) {
    const itemsUpdated = this.state.items.map((item, index) => {
      if (index === updateIndex) return { ...item, checked: !item.checked };

      return item;
    });

    this.setState({ items: itemsUpdated });
  }

  render() {
    const itemsRendered = this.state.items.map((todo, index) => (
      <Item
        title={todo.title}
        checked={todo.checked}
        onPress={() => {
          this.toggleItemCheckedState(index);
        }}
      />
    ));

    return <View>{itemsRendered}</View>;
  }
}

export default List;
