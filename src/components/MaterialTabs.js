import React, { useState } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@bit/mui-org.material-ui.styles";
import Paper from "@bit/mui-org.material-ui.paper";
import Tabs from "@bit/mui-org.material-ui.tabs";
import Tab from "@bit/mui-org.material-ui.tab";

const styles = {
    root: {
        flexGrow: 1,
        // color: "#0098f0",
        // backgroundColor: "#27293D",
    },
    indicator: {
        backgroundColor: "#0098f0",
    },
    centered: {
        justifyContent: "space-around",
    },
    tab: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.5rem",
    },
    tabRoot: {
        color: "#999",
        "&:hover": {
            // color: "#ffffff",
            // opacity: 1,
        },
        "&$tabSelected": {
            color: "#1890ff",
        },
        textTransform: "initial",
    },
    tabSelected: {
        color: "#1890ff",
    },
};

const MaterialTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const tabStyle = {
        root: props.classes.tabRoot,
        selected: props.classes.tabSelected,
    };

    const { root, indicator, centered, tab } = props.classes;
    return (
        <>
            <Paper className={root}>
                <Tabs
                    classes={{
                        indicator: indicator,
                        centered: centered,
                    }}
                    value={selectedTab}
                    onChange={handleChange}
                    textColor='primary'
                    centered>
                    <Tab label='Stats' className={tab} classes={tabStyle} />
                    <Tab label='Timeline' className={tab} classes={tabStyle} />
                    <Tab
                        label='Activities'
                        className={tab}
                        classes={tabStyle}
                    />
                </Tabs>
            </Paper>
            {selectedTab === 0 && props.tab1}
            {selectedTab === 1 && props.tab2}
            {selectedTab === 2 && props.tab3}
        </>
    );
};

export default withStyles(styles)(MaterialTabs);
