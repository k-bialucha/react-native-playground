import React from 'react';
import { ScrollView } from 'react-native';

import Item from './Item';

import Todo from '../../models/Todo';

interface Props {
  style: {};
  todos: Todo[];
  onTodoClick: (id: string) => void;
}

const List: React.FC<Props> = ({ style, todos, onTodoClick }) => {
  const itemsRendered = todos.map((todo: Todo) => (
    <Item
      key={`${todo.title}[#${todo.id}]`}
      title={todo.title}
      checked={todo.checked}
      onPress={() => {
        onTodoClick(todo.id);
      }}
    />
  ));

  return <ScrollView style={style}>{itemsRendered}</ScrollView>;
};

export default List;
