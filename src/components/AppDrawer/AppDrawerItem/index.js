import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemText, Collapse, Typography, Divider } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


function AppDrawerItem({ parent, classes }) {
    const [openMenuToggle, setOpenMenuToggle] = useState(false);
    const handleNavToggle = (e) => {
        setOpenMenuToggle(!openMenuToggle);
    };
    return (<>
        <ListItem button className={classes.categoryHeader} onClick={handleNavToggle}>
            <ListItemText classes={{ primary: classes.categoryHeaderPrimary }} >
                {parent.id}
            </ListItemText>
            {openMenuToggle ? <ExpandLess style={{ color: '#70c0ff' }} /> : <ExpandMore style={{ color: '#70c0ff' }} />}
        </ListItem>
        <Collapse in={openMenuToggle} timeout="auto" unmountOnExit>
            <Divider />
            {
                parent.children.map(child => {
                    return <NavLink key={child.id} className={classes.navLink} to={child.path}>
                        <ListItem button className={clsx(classes.item)} >
                            <ListItemText >
                                <Typography variant="body2">
                                    {child.id}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </NavLink>

                })
            }
            <Divider style={{ margin: '1em 0' }} />
        </Collapse>
    </>
    )
}

export default AppDrawerItem
