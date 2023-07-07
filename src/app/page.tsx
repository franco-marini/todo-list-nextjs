import TaskList from '@/components/task-list';
import { ITask } from '@/server/task/task.model'

import styles from './page.module.css'

const tasks: ITask[] = [{
  _id: "1",
  name: "Have breakfast",
  isDone: true
},
{
  _id: "2",
  name: "Make the bed",
  isDone: true
},
{
  _id: "3",
  name: "Do the laundry",
  isDone: true
},
{
  _id: "4",
  name: "Study next js",
  isDone: false
}];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
    </main>
  )
}
