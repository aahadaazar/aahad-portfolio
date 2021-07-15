import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#EC487F'
    }
  },
});

const useStyles = makeStyles({
  light: {
    color: 'white'
  },
  dark: {
    color: 'black',
  }
});

export default function CustomSwitch({ theme, setTheme }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={outerTheme}>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        component="label" container alignItems="center">
        <Grid
          className={clsx({
            [classes.dark]: theme === 'day',
            [classes.light]: theme === 'night',
          })}
          item><WbSunnyIcon /></Grid>
        <Grid item>
          <Switch
            disableRipple
            color={'secondary'}
            onChange={() => {
              setTheme(theme === 'day' ? 'night' : 'day')
            }}
            checked={theme === 'night'} // relevant state for your case
          />
        </Grid>
        <Grid
          className={clsx({
            [classes.dark]: theme === 'day',
            [classes.light]: theme === 'night',
          })}
          item><Brightness2Icon /></Grid>
      </Grid>
    </ThemeProvider>
  )
}
