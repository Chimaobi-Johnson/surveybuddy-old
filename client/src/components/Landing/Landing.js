import React from 'react';
import * as classes from './Landing.module.css';

const landing = props => {
     return (
       <div className={classes.LandingMain}>
            <div className={classes.LandingCurve}>
            <h4>SURVEYBUDDY</h4>

              <div className={classes.LandingText}>
                  <h3>Write Customized Surveys and Send Out to Your Users</h3>
                  <div className={classes.ShortLine}></div>
                  {/* <h2>Get Feedback as Soon they Respond</h2>
                  <h2>Review and Analyze Data</h2> */}
              </div>
            </div>
            {/*
          <div className={classes.ArrowBox}>
            <div className={classes.Arrow}></div>
            <h2>LOGIN TO GET STARTED</h2>
          </div>
          */}
      </div>
     )
}

export default landing;
