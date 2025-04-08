const todos = [
  { task: 'make some roasted peanut', id: crypto.randomUUID() },
  { task: 'boil some eggs', id: crypto.randomUUID() },
  { task: 'find time to draw', id: crypto.UUID() }
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

function MonthList() {
  return (
    <ul>
    {months.map((month, index) => (<li key={index}>{month}</li>))}
    </ul>
  );
}
