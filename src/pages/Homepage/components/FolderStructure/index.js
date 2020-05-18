import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '2em '
    }
});
const FolderStructure = () => {
    const classes = useStyles();
    return (<section className="FolderStructure">
        <Grid container spacing={3} justify='center'>
            <Grid item xs={6} >
                <Paper className={classes.paper}  >
                    <TreeView
                        className={classes.root}
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        <TreeItem nodeId="1" label="src">
                            <TreeItem nodeId="2" label="api">
                                <TreeItem nodeId="0" label="index.js" />
                                <TreeItem nodeId="0" label="API Functions" />
                            </TreeItem>
                            <TreeItem nodeId="3" label="assets">
                                <TreeItem nodeId="4" label="icons">
                                    <TreeItem nodeId="0" label="Icon resources" />
                                </TreeItem>
                                <TreeItem nodeId="5" label="resources">
                                    <TreeItem nodeId="6" label="Images and other resources" />
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="7" label="components">
                                <TreeItem nodeId="8" label="AppDrawer">
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="9" label="AppHeader">
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="10" label="AppFooter">
                                    <TreeItem nodeId="11" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="12" label="AppNavBar">
                                    <TreeItem nodeId="13" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="0" label="index.js" />
                                <TreeItem nodeId="0" label="Common App Components" />
                            </TreeItem>
                            <TreeItem nodeId="14" label="global">
                                <TreeItem nodeId="0" label="global.css" />
                                <TreeItem nodeId="0" label="appRoutes.module.js" />
                                <TreeItem nodeId="0" label="Global App files" />
                            </TreeItem>
                            <TreeItem nodeId="15" label="pages">
                            <TreeItem nodeId="22" label="BoilerplateInfo">
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="16" label="Homepage">
                                    <TreeItem nodeId="17" label="components">
                                        <TreeItem nodeId="18" label="FolderStructure">
                                            <TreeItem nodeId="0" label="index.js" />
                                        </TreeItem>
                                    </TreeItem>
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="19" label="Posts">
                                    <TreeItem nodeId="20" label="components">
                                        <TreeItem nodeId="21" label="PostItem">
                                            <TreeItem nodeId="0" label="index.js" />
                                        </TreeItem>
                                    </TreeItem>
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="25" label="Users">
                                    <TreeItem nodeId="26" label="components">
                                        <TreeItem nodeId="27" label="UserItem">
                                            <TreeItem nodeId="0" label="index.js" />
                                        </TreeItem>
                                    </TreeItem>
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="25" label="utils">
                                <TreeItem nodeId="26" label="common">
                                    <TreeItem nodeId="0" label="index.js" />
                                </TreeItem>
                                <TreeItem nodeId="27" label="hooks">
                                    <TreeItem nodeId="0" label="useToggle.js" />
                                </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="0" label="App.js" />
                            <TreeItem nodeId="0" label="index.js" />
                        </TreeItem>
                    </TreeView>
                </Paper>
            </Grid>
        </Grid>
    </section>
    )
}

export default FolderStructure
