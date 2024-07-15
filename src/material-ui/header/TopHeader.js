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
                    <Tab label="shop" className={classes.typographyStyles} variant={'h4'} component={Link}
                         to={"/shop"}/>
                    <Tab value="one" label="dashboard" component={Link} to={"/dashboard"}/>
                    <Tab value="two" label="album" component={Link} to={"/album"}/>
                    <Tab value="three" label="blog" component={Link} to={"/blog"}/>
                    <Tab value="four" label="pricing" component={Link} to={"/pricing"}/>
                    <Tab value="five" label="signin" component={Link} to={"/signin"}/>
                    <Tab value="six" label="signinside" component={Link} to={"/signinside"}/>
                    <Tab value="seven" label="signup" component={Link} to={"/signup"}/>
                    <Tab value="eight" label="stickyfooter" component={Link} to={"/stickyfooter"}/>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
};

export default TopHeader