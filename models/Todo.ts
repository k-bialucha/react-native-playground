class Todo {
  id: string;
  title: string;
  checked: boolean;

  constructor(title: string, checked: boolean) {
    this.title = title;
    this.checked = checked;

    // TODO: find better Todo ID
    this.id = `${Date.now() + Math.floor(Math.random() * 10000)}`;
  }
}

export default Todo;
