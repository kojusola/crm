import { Link, useRouteMatch } from "react-router-dom";

import {
    Gauge,
    History,
    Settings,
    ChartLine,
    Lifebuoy,
    Box,
    TrendingUp,
} from "tabler-icons-react";

// import { ContactsBook as Contacts } from "@styled-icons/remix-line/ContactsBook";
import { Contacts } from "@styled-icons/typicons/Contacts";

import { Contact } from "@styled-icons/boxicons-solid/Contact";

// const BlackContact = styled(Contact)`
//     color: #0e9168;
// `;

function NavBarLink({ label, to, title, shouldHideNavText }) {
    let match = useRouteMatch({
        path: to,
    });

    return (
        <li className="nav-bar-link-li">
            <Link to={to} className="nav-bar-link-item" title={title}>
                <span
                    style={{
                        backgroundColor: match ? "#E2F8D8" : "transparent",
                        display: "inline-block",
                        height: "auto",
                        padding: 8,
                        borderRadius: "50%",
                    }}
                >
                    {to === "/dashboard" && (
                        <Gauge size={25} color={match ? "#0e9168" : "black"} />
                    )}
                    {to === "/contacts" && (
                        <Contacts
                            size={24}
                            color={match ? "#0e9168" : "black"}
                        />
                    )}
                    {to === "/call-history" && (
                        <History
                            size={25}
                            color={match ? "#0e9168" : "black"}
                        />
                    )}

                    {to === "/sales" && (
                        <TrendingUp
                            size={25}
                            color={match ? "#0e9168" : "black"}
                        />
                    )}
                    {to === "/products-and-services" && (
                        <Box size={25} color={match ? "#0e9168" : "black"} />
                    )}
                    {to === "/settings" && (
                        <Settings
                            size={25}
                            color={match ? "#0e9168" : "black"}
                        />
                    )}
                </span>
                <span
                    className={
                        shouldHideNavText === true
                            ? "nav-link-text hidden"
                            : "nav-link-text"
                    }
                >
                    {label}
                </span>
            </Link>
        </li>
    );
}

export default NavBarLink;
