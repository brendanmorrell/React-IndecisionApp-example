import React from 'react';



export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)

    if(!error){
      e.target.elements.option.value=''
    }
    this.setState(() => ({error}));
  };

  render() {
    return (
      <div>
        {this.state.error && !this.props.removeErrorIfError && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" placeholder="Type option to add here..."></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
