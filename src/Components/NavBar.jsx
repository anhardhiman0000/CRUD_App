import React from 'react'; 

import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom'; //Navlin using to lint component of navbar

const useStyle = makeStyles({
    header: {
        background: '#f54242',

    },

    tabs: {
        color: '#f5e642',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20,
        // display: 'flex',
        // textAlign: 'justify',
        fontWeight: 'bold',
    }
});

const NavBar = () => {
    const classes = useStyle();
    return (
        //AppBar material ui property
        <AppBar position="static" className={classes.header}>  
            <Toolbar>
                <NavLink className={classes.tabs} to="all" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;