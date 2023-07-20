export const AddTask = ({
  taskList,
  setTaskList,
  selectedTask,
  setSelectedTask,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTask.id) {
      const date = new Date();
      const updatedTask = taskList.map((task) =>
        task.id === selectedTask.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : task
      );

      setTaskList(updatedTask);
      setSelectedTask({});

    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      setSelectedTask({})
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          onChange={(e) =>
            setSelectedTask({ ...selectedTask, name: e.target.value })
          }
          value={selectedTask.name || ''}
          autoComplete="off"
          placeholder="Add Task"
          maxLength={25}
          minLength={2}
          required
        />
        <button type="submit">{selectedTask.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};
