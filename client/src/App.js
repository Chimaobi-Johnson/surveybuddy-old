import React from 'react';
import TopNav from './containers/Navigation/TopNav';
import Landing from './components/Landing/Landing';
import AuthModal from './containers/Authentication/AuthModal';
import './App.css';

function App() {
  return (
    <div className="App">
        <TopNav />
        <Landing />
        <AuthModal />      
    </div>

     // pass authreducer from here starting from AuthModal down to TopNav and the rest of the page
     // two reducers authreducer and users reducers for a start

  );
}

export default App;
