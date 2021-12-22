import CanvasImg from '../assets/canvas.png';
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

const Canvas = () => {
  const classes = useStyles();
  return <img className={classes.img} src={CanvasImg} alt={'frame'} />;
};

export default Canvas;
