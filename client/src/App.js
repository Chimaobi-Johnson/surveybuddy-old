import React from 'react';
import TopNav from './containers/Navigation/TopNav';
import Landing from './components/Landing/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
        <TopNav />
        <Landing />
    </div>
  );
}

export default App;
