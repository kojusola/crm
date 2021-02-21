import Header from "../components/Header";

import { Link } from "react-router-dom";

import "./styles/About.css";

function About() {
    return (
        <div className="about">
            <Header heading="About" />
            <p>
                PaperWork, pw and other Paper products are trademarks of Juvenix
                Ltd.
            </p>
            <h1>Support</h1>
            <p>
                For help with the service, see our&nbsp;
                <Link
                    to="help-and-faq"
                    className="content-link-item"
                    style={{ textDecoration: "underline" }}
                >
                    Help and FAQ.
                </Link>
                &nbsp;You can also visit our&nbsp;
                <Link
                    to="forum"
                    className="content-link-item"
                    style={{ textDecoration: "underline" }}
                >
                    Forum
                </Link>
                &nbsp;and raise questions there.
            </p>
            {/* <h1>Contact Us</h1>
            <p>
                If you need to contact about this Privacy Policy, You can
                contact us:
            </p>
            <ul>
                <li>By email: contact@juvenix.com.ng</li>
            </ul> */}
        </div>
    );
}

export default About;
