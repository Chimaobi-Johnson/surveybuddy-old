import React, { Component } from 'react';
import * as classes from './TopNav.module.css';


class TopNav extends Component {

  render () {

    return (
      <nav className={classes.TopNav}>
       <div className={classes.TopMenuBtn}></div>
       <div className={classes.TopMenu}>
        <h4>LOGIN</h4>
        <div className={classes.NavigationBox}>
           <ul>
             <li>Dashboard</li>
             <li>Credits: 10</li>
             <li>Add Credits</li>
             <li>Surveys</li>
           </ul>
        </div>
      </div>

        {/*  <div className={classes.Profile}>
             <div className={classes.Picture}></div>
             <div className={classes.ProfileName}>Welcome Chimaobi</div>
          </div>
          */}

      </nav>
    )
  }
}

export default TopNav;
