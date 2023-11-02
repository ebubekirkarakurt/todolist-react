import React from 'react'
import styles from './TodoItem.style.js'
import { Button } from 'reactstrap'


export default function Todoitem({task, deleteTodo, completeTodo}) {
  return (
    <div>
        <div style={styles.taskContainer}>
          <div style={styles.taskWrapper}>
            <p style={{...styles.task, textDecoration: task.completed === true ? 'line-through' : 'none' }}>{task.text}</p>
            <div style={styles.iconsWrapper}>
              <Button color="success" style={styles.completedIcon} onClick={() =>completeTodo(task.text)}>Complate Task</Button>
              <Button color="danger" style={styles.deleteIcon} onClick={() => deleteTodo(task.text)}>Delete Task</Button>
            
            </div>
          </div>
        </div>
    </div>
  )
}