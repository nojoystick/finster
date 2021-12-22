import FrameImg from '../assets/frame.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    maxWidth: '100%',
    zIndex: '1',
  },
});

const Frame = () => {
  const classes = useStyles();
  return <img className={classes.img} src={FrameImg} alt={'frame'} />;
};

export default Frame;
