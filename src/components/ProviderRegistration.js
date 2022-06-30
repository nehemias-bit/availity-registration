import React from 'react';
import '../styles/style.css';

class ProviderRegistration extends React.Component {

  state = {
    firstAndLast: '', npiNumber: '', businessAddress: '',
    telephoneNumber: '', emailAddress: ''
  };

  onFormSubmit = (e) => {

    e.preventDefault();

    this.props.onRegister(this.state.firstAndLast, this.state.npiNumber, this.state.businessAddress,
      this.state.telephoneNumber, this.state.emailAddress);


  }

  render() {
    return (
      <div className="formContainer">

        <h2>Availity Registration</h2>

        <form onSubmit={this.onFormSubmit}>
          <label for="fullname"><h3>First and Last Name:</h3></label>
          <input type="text" id="fullname" value={this.state.firstAndLast}
            onChange={(e) => this.setState({ firstAndLast: e.target.value })}></input>

          <label for="npinum"><h3>NPI Number:</h3></label>
          <input type="text" id="npinum" value={this.state.npiNumber}
            onChange={(e) => this.setState({ npiNumber: e.target.value })}></input>

          <label for="bussadd"><h3>Budiness Address:</h3></label>
          <input type="text" id="bussadd" value={this.state.businessAddress}
            onChange={(e) => this.setState({ businessAddress: e.target.value })}></input>

          <label for="telnum"><h3>Telephone Number:</h3></label>
          <input type="text" id="telnum" value={this.state.telephoneNumber}
            onChange={(e) => this.setState({ telephoneNumber: e.target.value })}></input>

          <label for="email"><h3>Email Address:</h3></label>
          <input type="text" id="email" value={this.state.emailAddress}
            onChange={(e) => this.setState({ emailAddress: e.target.value })}></input>

          <input type="submit" value="Submit" />
        </form>
      </div>);
  }

}

export default ProviderRegistration;