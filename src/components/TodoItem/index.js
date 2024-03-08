// Write your code here
import {Component} from 'react'
import EditSaveButton from '../EditSaveButton'
import './index.css'

class TodoItem extends Component {
  state = {clicked: false, title: '', todoStatus: 'not-completed'}

  componentDidMount() {
    const {todoDetails} = this.props
    const {title} = todoDetails
    this.setState({title})
  }

  onDelete = () => {
    const {deleteTodo, todoDetails} = this.props
    const {id} = todoDetails
    console.log('triggered')
    deleteTodo(id)
  }

  editAndSaveTrigger = clicked => {
    this.setState({clicked})
  }

  updatedText = e => {
    const editedTodoText = e.target.value
    console.log(editedTodoText)
    this.setState({title: editedTodoText})
  }

  markCompleteOrNot = e => {
    console.log(e.target.checked)
    const todoStatus = e.target.checked ? 'completed' : 'not-completed'
    this.setState({todoStatus})
  }

  render() {
    const {clicked, title, todoStatus} = this.state
    const {todoDetails} = this.props
    const {id} = todoDetails

    return (
      <li className="list-alignment">
        <div className="checkbox-todo-aligment">
          <input id={id} onChange={this.markCompleteOrNot} type="checkbox" />
          <label htmlFor={id}>
            {clicked ? (
              <input onChange={this.updatedText} value={title} type="text" />
            ) : (
              <p className={todoStatus}>{title}</p>
            )}
          </label>
        </div>

        <div className="todo-buttons-alignment">
          <EditSaveButton
            editAndSaveTrigger={this.editAndSaveTrigger}
            className="todo-buttons"
          />
          <button
            onClick={this.onDelete}
            type="button"
            className="delete-button todo-buttons"
          >
            delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
