import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Suspense fallback={<div className="text">Загрузка...</div>}>
          <Switch>
            <Route exact path="/"
              render={(props) =>
                // <Login {...props} />
                <Layout />
              }
            />
          </Switch>
        </Suspense>
      </Router> */}
      <Layout />
      {/* <video width="320" height="240" controls
          onPause={event => console.log(`Pause ${event.currentTarget.currentTime} sec`)}
          onPlay={event => console.log(`Play ${event.currentTarget.currentTime} sec`)}>
          <source src="http://kuraj.nailium.zerocdn.com/4729dfd572ab2a17e7693047d2115d47:2020100623/him/s1/How.I.Met.Your.Mother.s1.e01.Rus.[Kuraj-Bambey.Ru].mp4" />
          Your browser does not support the video tag.
        </video> */}
    </div>
  );
}

export default App;
