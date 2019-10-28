import React from 'react';
import Todo from '../models/Todo';

interface TodosContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (todoId: string) => void;
}

const TodosContext = React.createContext<TodosContext>(null);

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

  addTodo = (text: string) => {
    const newTodo = new Todo(text, false);
    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({ todos: updatedTodos });
  };

  toggleTodoCheckedState = (todoId: string) => {
    const { todos } = this.state;

    const todosUpdated = todos.map((todo: Todo) => {
      if (todo.id === todoId) return { ...todo, checked: !todo.checked };

      return todo;
    });

    this.setState({ todos: todosUpdated });
  };

  render() {
    const { children } = this.props;

    const value = {
      todos: this.state.todos,
      addTodo: this.addTodo,
      toggleTodo: this.toggleTodoCheckedState,
    };

    return (
      <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
    );
  }
}

export const TodosConsumer = TodosContext.Consumer;
export default TodosContext;
