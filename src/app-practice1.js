class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Please enter valid option';
    }
    const upperCaseOptions = (this.state.options.map((option) => option.toUpperCase()));
    const upperCaseOption = option.toUpperCase();

    if(upperCaseOptions.indexOf(upperCaseOption) >-1 ) {
      return 'Exists already, fucko';
    }
    this.setState((prevState) => {
      return {
        //both of these work to recreate the array. Spread (... is ES6)
        options: [...prevState.options, option] || prevState.options.concat(option)
      }
    })
    console.log()
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
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
    console.log(this.state.error)
    this.setState(() => {
      return {error}
    });
    this.props
  }
  render() {
    return (
      <div>
        {this.state.error && <h3>{this.state.error}</h3>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder='Add new options here...' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
