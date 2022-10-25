// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props

  const {title, id} = todo

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo">{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
