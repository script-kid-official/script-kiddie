import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemText, Collapse, Typography, Divider } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(() => ({
    itemHeader: {
        color: '#fff',
        fontSize: '15px',
        textAlign: 'center'
    },
    item: {
        textAlign: 'center',
        padding: '8px 20px 0 0',
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
            <Divider style={{ margin: '1em 0' }} />
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
    <ListItem ListItem button onClick={handleNavToggle} >
        <ListItemText classes={{ primary: classes.itemHeader }} >
            {parent.icon ? <Icon style={{ color: '#ffeb3b', margin: '0 5px -5px 0', fontSize: 22 }}>{parent.icon}</Icon> : ''}{parent.id}
        </ListItemText>
        {openMenuToggle ? <ExpandLess style={{ color: '#70c0ff' }} /> : <ArrowForwardIosIcon style={{ color: '#70c0ff', fontSize: '12px' }} />}
    </ListItem >
)

export default AppDrawerItem
