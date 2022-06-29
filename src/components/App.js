import React from 'react';
import ProviderRegistration from './ProviderRegistration';

class App extends React.Component {

  onRegisterSubmit = (term) => {

  }

  render() {
    return (
      <div>
        <ProviderRegistration onRegister={this.onRegisterSubmit} />
      </div>
    );
  };

}

export default App;