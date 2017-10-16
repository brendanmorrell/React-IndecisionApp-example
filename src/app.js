class IndecisionApp extends React.Component{
  constructor (props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options:[]
    }
  }

  handlePick() {
    const randomNum = Math.floor((Math.random()*this.state.options.length))
    console.log(this.state.options[randomNum])
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handleAddOption(option) {

    const upperCaseOption = option.toUpperCase();
    const upperCaseOptions = this.state.options.map((option) => option.toUpperCase());

    if (!option) {
      return 'Enter valid value to add item:';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists:'
    } else if (upperCaseOptions.indexOf(upperCaseOption ) > -1) {
      return 'Options are not case-sensitive. Please create a unique option:'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
  //es6 spread is another way he could have done
  //        options: [...prevState.options, option]

      }
    })
  }


  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          hasOptions={this.state.options.length > 0}
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

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

    this.setState(() => {
      return {error}
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
      <h2>{props.subtitle}</h2>
    </div>
  );
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
      {
        props.options.map((option) => <Option key={option} optionText={option} />)
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <p>Option: {props.optionText}</p>
    </div>
  );
}

const rootApp = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, rootApp);
