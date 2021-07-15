import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/image.jpg';
import clsx from 'clsx';
import anime from 'animejs/lib/anime.es.js';

const useStyles = makeStyles({
  subHeader: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    '& .imageContainer': {
      borderRadius: '50%',
      transform: 'translateX(-1000px)',
      display: 'flex',
      padding: 5,
      '& img': {
        transform: 'scale(0)',
        width: 'clamp(100px,12vw,850px)',
        borderRadius: '52%',
        transitionDuration: '3s',
      }
    },
    '& .textContainer': {
      textAlign: 'center',
      transitionDuration: '1.8s',
      transform: 'translateX(+1000px)',
    },
    '& h2': {
      margin:10,
      fontSize: 'clamp(20px,30px,40px)',
    },
    '& h3': {
      fontSize: 'clamp(16px,1.2vw,100px)',
      margin: 0,
      fontWeight: 400,
      letterSpacing: 3,
    }
  },
  day: {
    color: 'black',
    '& .imageContainer': {
      border: '2px solid grey',
      transitionDuration: '2s',
    },
  },
  night: {
    color: 'white',
    '& .imageContainer': {
      border: '2px solid white',
      transitionDuration: '2s',
    },
  },
});


function SubHeader({ theme }) {

  useEffect(() => {
    anime({
      targets: '.imageContainer',
      translateX: 0,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.image',
      scale: 1,
      easing: 'easeInOutSine'
    });
    anime({
      targets: '.textContainer',
      translateX: 0,
      easing: 'easeInOutQuad'
    });
  }, []);

  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.subHeader]: true,
        [classes.day]: theme === 'day',
        [classes.night]: theme === 'night',
      })}>
      <div className={'imageContainer'}>
        <img className={'image'} alt='' src={image} />
      </div>
      <div className={'textContainer'}>
        <h2>{'Aahad Aazar'}</h2>
        <h3>{'UI / UX Engineer ☕️ 🏊🏻‍♂️ 🖥'}</h3>
      </div>
    </div>
  )
}

export default SubHeader;

