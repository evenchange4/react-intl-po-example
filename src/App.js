import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class App extends Component {
  render() {
    return (
      <FormattedMessage
        id="welcome"
        defaultMessage="Hello Michael Hsu!"
      />
    );
  }
}

export default App;
