import {Component} from 'react'
import './index.css'

class EditSaveButton extends Component {
  state = {clicked: false}

  changeButtonName = () => {
    const {clicked} = this.state
    const {editAndSaveTrigger} = this.props
    editAndSaveTrigger(!clicked)
    this.setState(prevVal => ({clicked: !prevVal.clicked}))
  }

  render() {
    const {clicked} = this.state
    const buttonName = clicked ? 'Save' : 'Edit'
    return (
      <div className="edit-save-button-alignment">
        <button
          onClick={this.changeButtonName}
          type="button"
          className="edit-save-button"
        >
          {buttonName}
        </button>
      </div>
    )
  }
}

export default EditSaveButton
