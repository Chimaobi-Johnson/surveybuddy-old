import React, { Component } from 'react';
import * as classes from './TopNav.module.css';


class TopNav extends Component {

  render () {

    return (
      <nav className={classes.TopMenu}>
        <h4>LOGIN</h4>
        <div className={classes.NavigationBox}>
           <ul>
             <li>Dashboard</li>
             <li>Credits: 10</li>
             <li>Add Credits</li>
             <li>Surveys</li>
           </ul>
        </div>
      </nav>
    )
  }
}

export default TopNav;
