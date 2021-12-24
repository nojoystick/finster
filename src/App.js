import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Navbar } from './components';
import { makeStyles } from '@material-ui/core';
import useDimensions from './utils/useDimensions';

const useStyles = makeStyles({
  bodyStart: {
    opacity: '0%',
    transition: 'opacity 5s',
  },
  bodyEnd: {
    backgroundColor: 'transparent',
    overflow: 'scroll',
    opacity: '100%',
    transition: 'opacity 2s',
  },
});

const App = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useDimensions();
  const classes = useStyles();

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    setIsMobile(width < 1000);
  }, [width]);

  return (
    <>
      <div className={show ? classes.bodyEnd : classes.bodyStart}>
        <HashRouter>
          <Navbar isMobile={isMobile} />
        </HashRouter>
      </div>
    </>
  );
};

export default App;
