import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Tab, Tabs, Toolbar} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },

}))

const TopHeader = () => {
    const classes = useStyles();
    return (
        <AppBar position={"static"} color="default">
            <Toolbar>
                <Tabs value="one" aria-label="simple tabs example">
                    <Tab label="Tools" className={classes.typographyStyles} variant={'h4'} component={Link}
                         to={"/shop"}/>
                    <Tab value="one" label="one" component={Link} to={"/one"}/>
                    <Tab value="two" label="two" component={Link} to={"/two"}/>
                    <Tab value="three" label="three" component={Link} to={"/three"}/>
                    <Tab value="four" label="four" component={Link} to={"/four"}/>
                    <Tab value="five" label="five" component={Link} to={"/five"}/>
                    <Tab value="six" label="six" component={Link} to={"/six"}/>
                    <Tab value="seven" label="seven" component={Link} to={"/seven"}/>
                    <Tab value="eight" label="eight" component={Link} to={"/eight"}/>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
};

export default TopHeader