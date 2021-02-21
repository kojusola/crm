import "./styles/Footer.css";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-div">
            <div className="footer-list">
                <ul>
                    <li>
                        <Link className="footer-links" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="footer-links" to="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link className="footer-links" to="terms-of-use">
                            Terms of Use
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
