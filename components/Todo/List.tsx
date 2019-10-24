import React from 'react';
import { View } from 'react-native';

import Item from './Item';

import Todo from '../../models/Todo';

const todos: Todo[] = [
  new Todo('first todo', false),
  new Todo('second todo', false),
  new Todo('other todo', true),
];

interface Props {
  style: {};
}

interface State {
  items: Todo[];
}

class List extends React.Component<Props, State> {
  state = {
    items: todos,
  };

  toggleItemCheckedState(updateIndex: number) {
    const { items } = this.state;

    const itemsUpdated = items.map((item, index) => {
      if (index === updateIndex) return { ...item, checked: !item.checked };

      return item;
    });

    this.setState({ items: itemsUpdated });
  }

  render() {
    const { style } = this.props;
    const { items } = this.state;

    const itemsRendered = items.map((todo, index) => (
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
