import React, { useEffect, useState } from 'react';
import { styles } from './MainView.styles';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Skills from '../../components/Skills/Skills';
import anime from 'animejs/lib/anime.es.js';


var myDate = new Date();
var hours = myDate.getHours();

const portfolioLinks = [
  {
    name: 'Github',
    link: 'www.github.com/aahadaazar'
  },
  {
    name: 'LinkedIn',
    link: 'www.linkedin.com/in/aahad-aazar-b83b77197'
  },
  {
    name: 'Instagram',
    link: 'www.instagram.com/abdulaahadaazar'
  }
]

function MainView({ classes, repo }) {
  const [theme, setTheme] = useState('day');

  useEffect(() => {
    const isDayTime = hours > 6 && hours < 20;
    setTheme(isDayTime ? 'day' : 'night');
  }, []);
  useEffect(() => {
    anime({
      targets: '.links',
      keyframes: [
        { translateX: 4000 },
        { opacity: 1, translateX: 0 },
      ],
      duration: 4000,
      easing: 'easeOutElastic(0.5, 1.5)',
      loop: false,
      delay: anime.stagger(80)
    });
  }, []);

  return (
    <div className={clsx({
      [classes.root]: true,
      [classes.day]: theme === 'day',
      [classes.night]: theme === 'night',
    })}>
      <Header theme={theme} setTheme={setTheme} />
      <SubHeader theme={theme} />
      <div className={'lowerContainer'}>
        <Skills theme={theme} />
        <div className={'projects links'}>
          <p
            style={{
              margin: 0,
              fontWeight: 600
            }}
          >{'Projects'}</p>
          {
            repo.map(o => {
              return (
                <p key={o.id}>
                  <a
                    style={{
                      color: 'inherit',
                      marginBottom: 10,
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                    target='_blank' rel='noreferrer' href={`https://github.com/${o.full_name}`}>
                    {o.name}
                  </a>
                </p>
              );
            })
          }
        </div>
        <div className={'portfolioLinks'}>
          {portfolioLinks.map(o => {
            return <div className={'links'} key={o.name}>
              <p>
                <a rel="noreferrer" target="_blank" href={`https://${o.link}`}>
                  {o.name}
                </a>
              </p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
};

export default withStyles(styles)(MainView);

