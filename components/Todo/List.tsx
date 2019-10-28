import React from 'react';
import { View } from 'react-native';

import Item from './Item';

import Todo from '../../models/Todo';

interface Props {
  style: {};
  todos: Todo[];
}

class List extends React.Component<Props> {
  toggleItemCheckedState(updateIndex: number) {
    const { todos: items } = this.props;

    const itemsUpdated = items.map((item, index) => {
      if (index === updateIndex) return { ...item, checked: !item.checked };

      return item;
    });
  }

  render() {
    const { style, todos } = this.props;

    const itemsRendered = todos.map((todo, index) => (
      <Item
        key={`${todo.title}[#${index + 1}]`}
        title={todo.title}
        checked={todo.checked}
        onPress={() => {
          this.toggleItemCheckedState(index);
        }}
      />
    ));

    return <View style={style}>{itemsRendered}</View>;
  }
}

export default List;
