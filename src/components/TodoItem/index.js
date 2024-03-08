// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    console.log('triggered')
    deleteTodo(id)
  }

  return (
    <li className="list-alignment">
      <p>{title}</p>
      <button onClick={onDelete} type="button" className="delete-button">
        delete
      </button>
    </li>
  )
}

export default TodoItem
