// lots is borrowed from
// https://codepen.io/yuanchuan/pen/f70a1f9435dc90197b253b26b4d69d42

import React, { useEffect, useState } from 'react';
import Colors from '../assets/colors';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  clouds: {
    overflow: 'hidden',
    width: '1px',
    height: '1px',
    transform: 'translate(-100%, -100%)',
    borderRadius: '50%',
    filter: 'url(#filter)',
    transition: 'box-shadow 3s',
    boxShadow: (props) => props.boxShadow,
    content: (props) => props.boxShadow,
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '-1',
  },
});

function rn(from, to) {
  return ~~(Math.random() * (to - from + 1)) + from;
}

function rs() {
  return arguments[rn(1, arguments.length) - 1];
}

function getBoxShadows(max) {
  let ret = [];
  for (let i = 0; i < max; ++i) {
    ret.push({
      vw: rn(1, 100),
      vh: rn(1, 100),
      vmin1: rn(20, 40),
      vmin2: rn(1, 20),
    });
  }
  return ret;
}

function parseBoxShadows(boxShadows) {
  let ret = [];
  boxShadows.forEach((boxShadow) => {
    ret.push(`
    ${boxShadow.vw}vw ${boxShadow.vh}vh ${boxShadow.vmin1}vmin ${
      boxShadow.vmin2
    }vmin
    ${rs(
      Colors.clouds.sky,
      Colors.clouds.highlight1,
      Colors.clouds.white,
      Colors.clouds.highlight2
    )}
  `);
  });
  return ret.join(',');
}

const StartClouds = () => {
  const [boxShadows, setBoxShadows] = useState(getBoxShadows(50));
  const classes = useStyles({ boxShadow: parseBoxShadows(boxShadows) });

  const animateBoxShadow = () => {
    const i = Math.round(Math.random() * 50);
    const bsCopy = boxShadows.slice();
    bsCopy[i].vw = bsCopy[i].vw === 100 ? 1 : bsCopy[i].vw + 1;
    bsCopy[i].vh = bsCopy[i].vh === 100 ? 1 : bsCopy[i].vh + 1;
    setBoxShadows(bsCopy);
  };

  useEffect(() => {
    const sub = setInterval(animateBoxShadow, 6000);
    const sub2 = setInterval(animateBoxShadow, 2500);
    return function cleanup() {
      clearInterval(sub);
      clearInterval(sub2);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={classes.clouds} id='cloud'></div>
      <svg width='0'>
        <filter id='filter'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='.01'
            numOctaves='10'
          />
          <feDisplacementMap in='SourceGraphic' scale='240' />
        </filter>
      </svg>
    </>
  );
};

export default StartClouds;
