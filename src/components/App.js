import React from 'react';
import ProviderRegistration from './ProviderRegistration';

class App extends React.Component {

  onRegisterSubmit = (term) => {

    const fileData = JSON.stringify(term);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = "register-info.json";
    link.href = url;

    link.click();
    console.log(term);

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