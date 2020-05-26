import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemText, Collapse, Divider } from '@material-ui/core';
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
        {
            parent.children.map(child => {
                return <Collapse in={openMenuToggle} timeout="auto" unmountOnExit><NavLink key={child.id} className={classes.navLink} to={child.path}>
                    <ListItem button className={clsx(classes.item)} >
                        <ListItemText  >
                            {child.id}
                        </ListItemText>
                    </ListItem>
                </NavLink>

                </Collapse>
            })
        }
        <Divider className={classes.divider} />
    </>

    )
}

export default AppDrawerItem
