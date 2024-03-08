import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'
import AddTodo from '../AddTodo'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteTodoItem = id => {
    console.log(id)
    const {todoList} = this.state
    const updatedTodoList = todoList.filter(item => item.id !== id)
    console.log(updatedTodoList)
    this.setState({todoList: updatedTodoList})
  }

  addNewTodo = todo => {
    const {todoList} = this.state
    const newTodo = {id: uuid(), title: todo}
    const todoCheckAlreadyExists = todoList.filter(item => item.title === todo)
    if (todoCheckAlreadyExists.length === 0) {
      const newTodoList = [...todoList, newTodo]
      console.log(newTodoList)
      this.setState({todoList: newTodoList})
    }
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="outer-container">
        <div className="inner-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <h1>Simple Todos</h1>
          <ul>
            {todoList.map(item => (
              <TodoItem
                deleteTodo={this.deleteTodoItem}
                todoDetails={item}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
