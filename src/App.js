import React, { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar, Footer } from "./components";
import {
    // Home,/
    About,
    Contacts,
    Dashboard,
    CallHistory,
    Sales,
    ProductsAndServices,
    PrivacyPolicy,
    HelpAndSupport,
    Settings,
} from "./screens";

// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Content(props) {
    return (
        <>
            <NavBar
                width={props.navWidth}
                handleChangeWidth={props.handleChangeWidth}
                shouldHideNavText={props.shouldHideNavText}
                expandIcon={props.expandIcon}
            />
            <div
                className={props.contentClassName}
                style={{
                    overflow: "hidden",
                }}
            >
                {props.children}
                <Footer />
            </div>
        </>
    );
}

function App() {
    const [navWidth, setNavWidth] = useState(80);
    const [widthOffset, setWidthOffset] = useState(140);
    const [contentClassName, setContentClassName] = useState(
        "content-container-expanded"
    );
    const [shouldHideNavText, setShouldHideNavText] = useState(true);
    const [expandIcon, setExpandIcon] = useState("right");

    function handleChangeWidth() {
        if (navWidth === 250) {
            setNavWidth(80);
            setWidthOffset(140);
            setContentClassName("content-container-expanded");
            setShouldHideNavText(true);
            setExpandIcon("right");
        } else {
            setNavWidth(250);
            setWidthOffset(310);
            setContentClassName("content-container-collapsed");
            setShouldHideNavText(false);
            setExpandIcon("left");
        }
    }
    const routes = [
        // { route: "/dashboard", component: <Dashboard /> },
        { route: "/contacts", component: <Contacts /> },
        { route: "/call-history", component: <CallHistory /> },
        { route: "/sales", component: <Sales /> },
        { route: "/about", component: <About /> },
        { route: "/privacy-policy", component: <PrivacyPolicy /> },
        {
            route: "/products-and-services",
            component: <ProductsAndServices />,
        },
        { route: "/settings", component: <Settings /> },
    ];
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}
                    <Route path="/help-and-support">
                        <HelpAndSupport />
                    </Route>
                    <Route exact path="/">
                        <Content
                            navWidth={navWidth}
                            widthOffset={widthOffset}
                            contentClassName={contentClassName}
                            shouldHideNavText={shouldHideNavText}
                            expandIcon={expandIcon}
                            handleChangeWidth={handleChangeWidth}
                        >
                            <Dashboard />
                        </Content>
                    </Route>
                    {routes.map((item, id) => {
                        return (
                            <Route path={item.route} key={id}>
                                <Content
                                    navWidth={navWidth}
                                    widthOffset={widthOffset}
                                    contentClassName={contentClassName}
                                    shouldHideNavText={shouldHideNavText}
                                    expandIcon={expandIcon}
                                    handleChangeWidth={handleChangeWidth}
                                >
                                    {item.component}
                                </Content>
                            </Route>
                        );
                    })}
                </Switch>
            </div>
        </Router>
    );

    // return (
    //     <div>
    //         <header>
    //             <h1>We now have Auth!</h1>
    //         </header>
    //         <AmplifySignOut />
    //     </div>
    // );
}

export default App;
