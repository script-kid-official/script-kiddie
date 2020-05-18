import React from 'react';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppRoutes from 'global/AppRoutes.module'
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppDrawer = (props) => {
    const { appDrawerIsOpen, toggleDrawer } = props

    const handletoggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        toggleDrawer()
    };

    return (
        <section className="AppDrawer">
            {<Drawer
                anchor="left"
                open={appDrawerIsOpen}
                onClick={handletoggleDrawer}>

                <Divider />
                <List style={{ width: '250px' }}>
                    {AppRoutes.map(route => {
                        return <ListItem key={route.id}>
                            <ListItemIcon><FontAwesomeIcon icon={route.icon} /></ListItemIcon>
                            <Link to={route.path} style={{textDecoration: 'none'}}><ListItemText primary={route.name}/></Link>
                        </ListItem>
                    })}
                </List>
                <Divider />
            </Drawer>}
        </section>
    );
}

export default withRouter(AppDrawer)