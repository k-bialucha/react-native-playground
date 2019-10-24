import React from 'react';
import Todo from '../models/Todo';

const TodosContext = React.createContext({});

interface Props {
  children: React.ReactElement;
}
interface State {
  todos: Todo[];
}

const todos: Todo[] = [
  new Todo('first todo', false),
  new Todo('second todo', false),
  new Todo('other todo', true),
];

export class TodosProvider extends React.Component<Props, State> {
  state = {
    todos,
  };

  addTodo = text => {
    const newTodo = new Todo(text, false);
    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({ todos: updatedTodos });
  };

  render() {
    const { children } = this.props;

    return (
      <TodosContext.Provider value={{ ...this.state, addTodo: this.addTodo }}>
        {children}
      </TodosContext.Provider>
    );
  }
}

export const TodosConsumer = TodosContext.Consumer;
export default TodosContext;
