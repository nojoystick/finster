import React, { useState, useEffect } from 'react';
import { useLocation, Route, NavLink } from 'react-router-dom';
import * as Components from '../pages';
import * as Routes from '../constants/routes';

import { makeStyles } from '@material-ui/styles';

const useNavbarStyles = makeStyles({
  titleHeader: {
    fontFamily: 'Finster',
    fontSize: '40px',
    padding: '10px 20px 10px 20px',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    zIndex: '2',
    position: 'relative',
    transition:
      'opacity 4s, background-color 0.5s, border-color 0.5s, box-shadow 0.5s',
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    border: '3px solid rgba(255, 255, 255, 0.0)',
    alignItems: 'flex-end',
  },
  floatRight: {
    float: 'right',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: (props) => props.theme && props.theme.background,
    color: (props) => props.theme && props.theme.text,
    transition: 'opacity 4s',
  },
});

export default function Navbar({ isMobile }) {
  const location = useLocation();
  const [isOnHome, setIsOnHome] = useState(location.pathname === Routes.HOME);
  const [isOnOtherWorlds, setIsOnOtherWorlds] = useState(
    location.pathname === Routes.OTHER_WORLDS
  );
  const classes = useNavbarStyles({ isOnHome: isOnHome });

  useEffect(() => {
    const isHome = location.pathname === Routes.HOME;
    const isOtherWorlds = location.pathname === Routes.OTHER_WORLDS;
    setIsOnHome(isHome);
    setIsOnOtherWorlds(isOtherWorlds);
  }, [location]);

  return (
    <>
      <header className={classes.titleHeader}>
        {!isOnOtherWorlds && (
          <div className={`${classes.floatRight}`}>
            {isOnHome ? (
              <NavLink exact to={Routes.ABOUT}>
                about
              </NavLink>
            ) : (
              <NavLink exact to={Routes.HOME}>
                home
              </NavLink>
            )}
          </div>
        )}
      </header>
      <div id='body' className={classes.body}>
        <Route
          exact
          path={Routes.HOME}
          render={() => <Components.Start isMobile={isMobile} />}
        />
        <Route
          path={Routes.ABOUT}
          render={() => <Components.About isMobile={isMobile} />}
        />
        <Route
          path={Routes.OTHER_WORLDS}
          render={() => <Components.Art isMobile={isMobile} />}
        />
      </div>
    </>
  );
}
