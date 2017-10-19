import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined,
    removeErrorIfError: false
  }
  handlePick = () => {
    const randomNum = Math.floor((Math.random()*this.state.options.length))
    const option = this.state.options[randomNum]
    this.setState(() => ({selectedOption: option}))
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: false}));
  };
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: [],
        removeErrorIfError: true
      }
    });
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options:prevState.options.filter((option) => option !== optionToRemove),
        removeErrorIfError: true
      }
    });
  };
  handleAddOption = (option) => {
    const upperCaseOption = option.toUpperCase();
    const upperCaseOptions = this.state.options.map((option) => option.toUpperCase());

    if (!option) {
      this.setState(() => ({removeErrorIfError: false}));
      return 'Enter valid value to add item:';
    } else if (this.state.options.indexOf(option) > -1) {
      this.setState(() => ({removeErrorIfError: false}));
      return 'This option already exists:'
    } else if (upperCaseOptions.indexOf(upperCaseOption ) > -1) {
      this.setState(() => ({removeErrorIfError: false}));
      return 'Options are not case-sensitive. Please create a unique option:'
    }
                                    //both .concat and ES6 spread (...) both work. Wanted to show both ways
    this.setState((prevState) => ({options: [...prevState.options, option]} || {options: prevState.options.concat([option])}));
  };
  //predefined 'lifecycle methods' (constructor is one too). not available on stateless components check documentation on goolge to see all of them and the order they fire in
  componentDidMount() {
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)

    if(json && options.length > 0) {
      console.log('options on initial mount: ', options);
      this.setState(() => ({options}));
    } else {
      console.log('Options array not found in localStorage on initial mount')
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    console.log('saving data')
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
          <div className="container">
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className="widget">
              <Options
                hasOptions={this.state.options.length > 0}
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
                removeErrorIfError={this.state.removeErrorIfError}
              />
            </div>
          </div>

        <OptionModal
        selectedOption={this.state.selectedOption}
        handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
};
