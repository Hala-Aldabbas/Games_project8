import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProgressBar.styles.scss';

const ProgressBar = () => (
  <div className="progress-bar">
    <CircularProgress size={0} />
  </div>
)
 
export default ProgressBar;
