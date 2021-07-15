import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '../Switch/Switch';


const useStyles = makeStyles({
  header: {
    //
  },
});


function Header({ theme, setTheme }) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Switch
        setTheme={setTheme}
        theme={theme} />
    </div>
  )
}

export default Header;

