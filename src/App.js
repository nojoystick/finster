import { useState, useEffect, useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import { Navbar, StartClouds } from './components';
import useFullscreenStatus from './utils/useFullscreen';
import Colors from './assets/colors';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  body: {
    backgroundColor: 'transparent',
    height: '100%',
    overflow: 'scroll',
  },
});

const App = () => {
  const maximizableElement = useRef(null);
  let [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  const classes = useStyles();

  return (
    <div className={classes.body} ref={maximizableElement}>
      <HashRouter>
        <Navbar />
      </HashRouter>
      <StartClouds />
    </div>
  );
};

export default App;
