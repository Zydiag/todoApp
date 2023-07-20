import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { ShowTask } from "./components/ShowTask"
import { useEffect, useState } from "react"

const App = () => {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || [])
  const [selectedTask, setSelectedTask] = useState({})

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }, [taskList])
  
  return (
    <div className='App container'>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
    </div>
  )
}
export default App