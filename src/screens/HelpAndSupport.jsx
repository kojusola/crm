import { Link } from "react-router-dom";

import { TopNavBar } from "../components";

import "./styles/HelpAndSupport.css";

function HelpAndSupport() {
    return (
        <div className="bg-grey">
            <TopNavBar />
            <div className="page-content-container">
                <div className="page-heading">
                    <h1>Help and Support</h1>
                    <p className="tagline">
                        A set of sections for help and support to be put
                        here.&nbsp;
                        <Link to="/dashboard">Go back to Dashboard</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HelpAndSupport;
