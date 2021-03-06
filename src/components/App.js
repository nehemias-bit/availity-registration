import React from 'react';
import ProviderRegistration from './ProviderRegistration';

class App extends React.Component {

  // I know you don't typically do this? I just wanted to do something with that data
  // instead of having a form that does nothing and this is what I thought of.
  // This method will download the data into a .json file and the user clicks submit
  onRegisterSubmit = (firstAndLast, npiNumber, businessAddress,
    telephoneNumber, emailAddress) => {

    const name = JSON.stringify(firstAndLast);
    const npiNum = JSON.stringify(npiNumber);
    const busnAddress = JSON.stringify(businessAddress);
    const telephoneNum = JSON.stringify(telephoneNumber);
    const emailAdd = JSON.stringify(emailAddress);
    const blob = new Blob([name, npiNum, busnAddress, telephoneNum,
      emailAdd], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = "register-info.json";
    link.href = url;

    link.click();
    console.log(name);

  }

  render() {
    return (
      <div>
        <ProviderRegistration onRegister={this.onRegisterSubmit} />
      </div>
    );
  }

}

export default App;