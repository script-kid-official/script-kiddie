import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemText, Collapse, Typography, Divider } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    itemHeader: {
        color: '#fff',
        fontSize: '15px',
        textAlign: 'center'
    },
    item: {
        textAlign: 'center',
        fontSize: '10px',
        padding: '8px 8px 0 0',
        color: 'white'
    }
}));

function AppDrawerItem({ parent }) {
    const [openMenuToggle, setOpenMenuToggle] = useState(false);
    const classes = useStyles();

    const handleNavToggle = (e) => {
        setOpenMenuToggle(!openMenuToggle);
    };

    return (<>
        <ParentItem handleNavToggle={handleNavToggle} openMenuToggle={openMenuToggle} parent={parent} classes={classes} />
        <Collapse in={openMenuToggle} timeout="auto" unmountOnExit>
            <Divider />
            {
                parent.children.map(child => {
                    return <NavLink key={child.id} to={child.path}>
                        <ListItem button className={classes.item} >
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

const ParentItem = ({ classes, parent, handleNavToggle, openMenuToggle }) => (
    <ListItem button onClick={handleNavToggle}>
        <ListItemText classes={{ primary: classes.itemHeader }} >
            {parent.id}
        </ListItemText>
        {openMenuToggle ? <ExpandLess style={{ color: '#70c0ff' }} /> : <ExpandMore style={{ color: '#70c0ff' }} />}
    </ListItem>
)



export default AppDrawerItem
