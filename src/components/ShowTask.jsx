export const ShowTask = ({
  taskList,
  setTaskList,
  setSelectedTask,
}) => {
  const handleEdit = (id) => {
    const Task = taskList.find((task) => task.id === id);
    setSelectedTask(Task);
  };
  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(todo.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
