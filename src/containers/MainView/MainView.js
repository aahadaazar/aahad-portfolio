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
    link: 'shorturl.at/ouLU0'
  },
  {
    name: 'LinkedIn',
    link: 'shorturl.at/nsLZ6'
  },
  {
    name: 'Instagram',
    link: 'shorturl.at/aqMQS'
  }
]

function MainView({ classes }) {
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
        <div className={'portfolioLinks'}>
          {portfolioLinks.map(o => {
            return <div className={'links'} key={o.name}>
              <p>
                {o.name}{': '}
                <a rel="noreferrer" target="_blank" href={`https://${o.link}`}>
                  {o.link}
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

