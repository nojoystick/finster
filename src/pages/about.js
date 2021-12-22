import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    padding: '0px 150px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  para: {
    fontFamily: 'Finster',
    fontSize: '24pt',
    zIndex: '2',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <p className={classes.para}>
        in the worlds beyond the light of the sun <br />
        where all of mans work will be done <br />
        rest and victory will all be won <br />
        <br />
        I will be seeing you <br />
        be ready to meet god <br />
        i love you <br />
        in the sky lord in the sky <br />
        jesus saves <br />
        get in the tree of life <br />
        time won't wait dont miss heaven <br />
        <br />
        visions of other worlds by howard finster <br />
        god bless two thousand and eight-hundred seventy
      </p>
    </div>
  );
};

export default About;
