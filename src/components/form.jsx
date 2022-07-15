import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    exp: 'junior',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.tututu(this.state);
    this.resetState();
  };

  resetState = () => this.setState({ name: '', tag: '' });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім'я
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />{' '}
        </label>
        <label>
          {' '}
          Прізвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <br />
        <p>Your exp</p>
        <label>
          <p>Junior</p>
          <input
            type="radio"
            name="exp"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.exp === 'junior'}
          />
        </label>
        <label>
          <p>Middle</p>
          <input
            type="radio"
            name="exp"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.exp === 'middle'}
          />
        </label>
        <label>
          <p>Senior</p>
          <input
            type="radio"
            name="exp"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.exp === 'senior'}
          />
        </label>

        <br />
        <br />
        <button type="submit">Відправити</button>
      </form>
    );
  }
}

export default Form;
