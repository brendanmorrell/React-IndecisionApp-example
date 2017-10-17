//when you hit remove all, make it remove the 'this item already exists' type messages


class IndecisionApp extends React.Component{
  constructor (props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: [],
      removeErrorIfError: false
    }
  }
  handlePick() {
    const randomNum = Math.floor((Math.random()*this.state.options.length))
    alert(this.state.options[randomNum])
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
        removeErrorIfError: true
      }
    });
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options:prevState.options.filter((option) => option !== optionToRemove),
        removeErrorIfError: true
      }
    });
  };
  handleAddOption(option) {
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
  }
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
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
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
    );
  }
}
IndecisionApp.defaultProps = {

};

class AddOption extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)

    if(!error){
      e.target.elements.option.value=''
    }
    this.setState(() => ({error}));


  }

  render() {
    return (
      <div>
        {this.state.error && !this.props.removeErrorIfError && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Type option to add here..."></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props) => {
  return (
    <div>
      <button
         disabled={!props.hasOptions}
         onClick={props.handlePick}
         >
           What Should I Do?
       </button>
     </div>
  );
}

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

const rootApp = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, rootApp);
