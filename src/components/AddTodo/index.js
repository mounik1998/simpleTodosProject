import {Component} from 'react'
import './index.css'

class AddTodo extends Component {
  state = {newTodoItem: ''}

  newTodo = e => {
    const newTodoItem = e.target.value

    this.setState({newTodoItem})
  }

  addTodo = () => {
    const {newTodoItem} = this.state
    const {addNewTodo} = this.props
    if (newTodoItem.length !== 0) {
      addNewTodo(newTodoItem)
    }
    this.setState({newTodoItem: ''})
  }

  render() {
    const {newTodoItem} = this.state

    return (
      <div className="add-todo-text-container">
        <input
          id="addTodoItem"
          className="input-text-element"
          type="text"
          value={newTodoItem}
          onChange={this.newTodo}
        />
        <label htmlFor="addTodoItem">
          <button className="add-button" type="button" onClick={this.addTodo}>
            Add
          </button>
        </label>
      </div>
    )
  }
}

export default AddTodo
