import React from 'react';
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handleDeleteOptions}>Remove All</button>
      {!props.hasOptions && <h4>Please add an option to get started</h4>}
      {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />))
      }
    </div>
  );
}

export default Options;
