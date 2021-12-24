import Colors from '../assets/colors';
import { makeStyles } from '@material-ui/core';
import * as Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { StartClouds } from '../components';

const useStyles = makeStyles({
  main: {
    padding: (props) => (props.isMobile ? '30px 30px' : '50px 150px'),
    marginTop: '40px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  enter: {
    margin: 'auto',
    zIndex: '1',
    fontFamily: 'Finster',
    fontSize: '36pt',
    backgroundColor: Colors.red,
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: '0.2s',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  title: {
    fontSize: (props) => (props.isMobile ? '60pt' : '96pt'),
    padding: '0px',
    margin: '0px',
    lineSpacing: '1',
    zIndex: '2',
    marginBottom: '150px',
  },
});

const Start = ({ isMobile }) => {
  console.log(isMobile);
  const classes = useStyles({ isMobile: isMobile });
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>
        HOWARD FINSTER FROM GOD VISIONS OF OTHER WORLDS
      </h1>
      <button className={classes.enter}>
        <Link className={classes.link} to={Routes.OTHER_WORLDS}>
          enter
        </Link>
      </button>
      <StartClouds />
    </div>
  );
};

export default Start;
