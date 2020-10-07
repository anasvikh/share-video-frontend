import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';

function App() {
  const [isAuthorized, setAuthorized] = React.useState(false);

  return (
    <div className="App">
      { isAuthorized ?
        <Layout /> :
        <Login onAuthorize={() => setAuthorized(true)} />}
    </div>
  );
}

export default App;
