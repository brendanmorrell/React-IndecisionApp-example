import React from 'react';

const Option = (props) => {
  return (
    <div>
      <p>Option: {props.optionText+' '}<button
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
        >
          Remove
        </button>
      </p>

    </div>
  );
}
export default Option;