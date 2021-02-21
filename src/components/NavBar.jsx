import React from "react";

import "./styles/NavBar.css";

import { Link } from "react-router-dom";

import { NavHeader, NavBarLink } from "./";

import {
    ArrowLeftCircleFill,
    ArrowRightCircleFill,
} from "@styled-icons/bootstrap/";

import { Lifebuoy } from "tabler-icons-react";

function NavBar(props) {
    const { shouldHideNavText, expandIcon } = props;

    function handleChangeWidth() {
        props.handleChangeWidth();
    }

    const routes = [
        {
            to: "/dashboard",
            label: "Dashboard",
        },
        {
            to: "/contacts",
            label: "Contacts",
        },
        {
            to: "/call-history",
            label: "Call History",
        },
        {
            to: "/sales",
            label: "Sales",
        },
        {
            to: "/products-and-services",
            label: "Products / Services",
        },
    ];

    const bottom_routes = [{ to: "/settings", label: "Settings" }];

    return (
        <div className="nav-bar" id="navBar" style={{ width: props.width }}>
            <NavHeader />
            <ul>
                {routes.map((item, id) => {
                    return (
                        <NavBarLink
                            to={item.to}
                            label={item.label}
                            title={item.label}
                            shouldHideNavText={shouldHideNavText}
                            key={item.label}
                        />
                    );
                })}

                {/* <li>
                    <Link to="/documents">Documents</Link>
                </li> */}
            </ul>

            <div className="hamburger-div">
                <ul>
                    {bottom_routes.map((item, id) => {
                        return (
                            <NavBarLink
                                to={item.to}
                                label={item.label}
                                title={item.label}
                                shouldHideNavText={shouldHideNavText}
                                key={item.label}
                            />
                        );
                    })}
                    <li className="nav-bar-link-li" title="Help and Support">
                        <Link
                            to="/help-and-support"
                            target="_blank"
                            className="nav-bar-link-item"
                        >
                            {" "}
                            <span
                                style={{
                                    backgroundColor: "transparent",
                                    display: "inline-block",
                                    height: "auto",
                                    padding: 8,
                                    borderRadius: "50%",
                                }}
                            >
                                <Lifebuoy size={24} color="black" />
                            </span>
                            <span
                                className={
                                    shouldHideNavText === true
                                        ? "nav-link-text hidden"
                                        : "nav-link-text"
                                }
                            >
                                Help and Support
                            </span>
                        </Link>
                    </li>
                    <li className="nav-bar-link-li" title="Toggle nav bar">
                        <button
                            className="hamburger-icon"
                            onClick={handleChangeWidth}
                        >
                            {expandIcon === "left" && (
                                <span
                                    style={{
                                        backgroundColor: "transparent",
                                        display: "inline-block",
                                        height: "auto",
                                        padding: 8,
                                        borderRadius: "50%",
                                    }}
                                >
                                    <ArrowLeftCircleFill
                                        size={20}
                                        color="black"
                                    />
                                </span>
                            )}

                            {expandIcon === "right" && (
                                <span
                                    style={{
                                        backgroundColor: "transparent",
                                        display: "inline-block",
                                        height: "auto",
                                        padding: 8,
                                        borderRadius: "50%",
                                    }}
                                >
                                    <ArrowRightCircleFill
                                        size={20}
                                        color="black"
                                    />
                                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
