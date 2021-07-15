import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import anime from 'animejs/lib/anime.es.js';
import { ReactComponent as html } from '../../assets/skill-icons/html.svg';
import { ReactComponent as css } from '../../assets/skill-icons/css.svg';
import { ReactComponent as sass } from '../../assets/skill-icons/sass.svg';
import { ReactComponent as javascript } from '../../assets/skill-icons/javascript.svg';
import { ReactComponent as reactImg } from '../../assets/skill-icons/react.svg';
import { ReactComponent as npm } from '../../assets/skill-icons/npm.svg';
import { ReactComponent as github } from '../../assets/skill-icons/github.svg';
import { ReactComponent as materialUi } from '../../assets/skill-icons/materialUi.svg';



const useStyles = makeStyles({
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    margin:'20px 0px',
    '& .skill': {
      display: 'flex',
      borderRadius: '5px',
      alignItems: 'center',
      opacity: 0,
      '&:not(:last-child)': {
        marginBottom: 20,
      },
      '& .skillName': {
        fontWeight: 600,
        margin: 0,
        fontSize: 'clamp(20px, 1.9vw, 80px)',
      },
      '& .img': {
        width: 'clamp(20px, 22px, 100px)',
        margin: '0px 5px 0px 0px',
      },
      '& .NPM': {
        height: 'fit-content',
      },
      '& .Github, & .MaterialUI': {
        height: 'auto',
      },
    },
    '& .more': {
      opacity: 0,
      fontSize: 'clamp(16px, 1.9vw, 80px)',
      fontWeight: 600,
      margin: 0,
    },
  },
  day: {
    color: '#393939',
    '& .skill': {
      // background: 'white',
      '& .img': {
        fill: '#393939 !important',
      },
      '& .SASS': {
        '& path:nth-child(2)': {
          fill: '#393939 !important',
        },
      },
      '& .Github': {
        '& g': {
          fill: '#393939 !important',
        },
      },
    }
  },
  night: {
    color: '#dddddd',
    '& .skill': {
      // background: 'black',
      '& .img': {
        fill: '#dddddd !important',
      },
      '& .SASS': {
        '& path:nth-child(2)': {
          fill: '#dddddd !important',
        },
      },
      '& .Github': {
        '& g': {
          fill: '#dddddd !important',
        },
      },
      '& .NPM': {
        '& path:nth-child(1)': {
          fill: 'transparent',
        },
      },
    }
  },
});

const skillsArray = [
  {
    name: 'HTML',
    src: html,
  },
  {
    name: 'CSS',
    src: css,
  },
  {
    name: 'SASS',
    src: sass,
  },
  {
    name: 'Javascript',
    src: javascript,
  },
  {
    name: 'React',
    src: reactImg,
  },
  {
    name: 'NPM',
    src: npm,
  },
  {
    name: 'Github',
    src: github,
  },
  {
    name: 'MaterialUI',
    src: materialUi
  },
]


function Skills({ theme }) {

  useEffect(() => {
    anime({
      targets: '.skill',
      keyframes: [
        { translateY: 400 },
        { opacity: 1, translateY: 0 },
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: false,
      delay: anime.stagger(80)
    });
    anime({
      targets: '.more',
      keyframes: [
        { translateY: 700 },
        { opacity: 1, translateY: 0 },
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: false,
    });
  }, []);

  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.skillsContainer]: true,
        [classes.day]: theme === 'day',
        [classes.night]: theme === 'night',
      })}>
      {
        skillsArray.map(o => {
          const { src: SkillImage } = o;
          return (
            <div
              key={o.name}
              className={'skill'}>
              {/* <div className={'imgContainer'}>
                <img style={{
                  width: o.width,
                }} className={'skillImg'} alt={`#${o.name}`} src={o.src} />
              </div> */}
              <SkillImage
                className={`${o.name} img`}
                style={{
                  width: o.width,
                  margin: o.margin,
                }} />
              <p className={'skillName'}>
                {o.name}
              </p>
            </div>
          )
        })
      }
      <p className={'more'}>
        {'and much more.....!'}
      </p>
    </div>
  )
}

export default Skills;

