import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderWithModule from './components/HeaderWithModule'
// import HeaderNested from './components/HeaderNested'

const Home = () => (
  <h2>Home</h2>
)

const Body = ({location}) => (
  <h2>{location.pathname.slice(1)}</h2>
)

function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderWithModule/>
        <Route path='/' exact component={Home} />
        <Route path='/*' component={Body} />
      </Router>
    </div>
  );
}

export default App;
