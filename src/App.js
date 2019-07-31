import React from 'react';
import HeaderWithModule from './components/HeaderWithModule'
import HeaderNested from './components/HeaderNested'

function App() {
  return (
    <div className="App">
      <div>
        <p>With jsonx module implementation</p>
        <HeaderWithModule/>
      </div>
      <div>
        <p>With importing nested Header structure</p>
        <HeaderNested/>
      </div>
    </div>
  );
}

export default App;
