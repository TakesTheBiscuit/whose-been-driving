import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WBD
          </Typography>
          <MenuItem  className="navbar-item"><NavLink  className="navbar-item" to="/dates">Dates</NavLink></MenuItem>
          <MenuItem  className="navbar-item"><NavLink  className="navbar-item" to="/dates">Drivers</NavLink></MenuItem>
          <MenuItem  className="navbar-item"><NavLink  className="navbar-item" to="/dates">Peeps</NavLink></MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
