import "./styles/NavHeader.css";

import { Link } from "react-router-dom";

function NavHeader() {
    return (
        <div className="nav-header">
            <h1>
                <Link className="icon-link-item" to="/">
                    pw
                </Link>
            </h1>
        </div>
    );
}

export default NavHeader;
