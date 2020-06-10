import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/styles";
import { Tab, Tabs } from "@material-ui/core";

const TabsContainer = styled.div`
    background-color: ${p => p.theme.cardColor};
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
`;
// Object for configuring default material UI styles
const styles = {
    indicator: {
        backgroundColor: "#1890ff",
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

    const { indicator, centered, tab } = props.classes;
    return (
        <>
            <TabsContainer>
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
            </TabsContainer>
            {selectedTab === 0 && props.tab1}
            {selectedTab === 1 && props.tab2}
            {selectedTab === 2 && props.tab3}
        </>
    );
};

export default withStyles(styles)(MaterialTabs);
