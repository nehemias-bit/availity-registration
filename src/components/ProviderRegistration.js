import React from 'react';

class ProviderRegistration extends React.Component {

  state = { term: '' };

  onFormSubmit = (e) => {

    e.preventDefault();

    this.props.onRegister(this.state.term);


  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Name</label>
          <input type="text" value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}></input>
        </form>
      </div>);
  }

}

export default ProviderRegistration;