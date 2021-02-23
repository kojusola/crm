import { Link } from "react-router-dom";

import { TopNavBar } from "../components";

// import home_img1 from "../assets/imgs/home_img1.svg";
import hero1 from "../assets/imgs/hero1.png";
import "./styles/Home.css";

function Home() {
    return (
        <div className="bg-grey">
            <TopNavBar />
            <div className="page-content-container home-container">
                <ul className="nav home-nav col-md-12">
                    <li className="nav-item pt-3 ml-3 float-right">
                        <Link to="/dashboard">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-trigger="#side-menu"
                            >
                                Open Dashboard
                            </button>
                        </Link>
                    </li>
                    {/* <li className="nav-item float-right">
                        <Link className="nav-link pt-4" to="/">
                            Active
                        </Link>
                    </li> */}
                    <li className="nav-item dropdown float-right">
                        <a
                            className="nav-link dropdown-toggle pt-4"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Resources
                        </a>
                        <div className="dropdown-menu float-right">
                            <Link to="/" className="dropdown-item pt-3 pb-3">
                                Action
                            </Link>
                            <Link
                                to="/help-and-support"
                                className="dropdown-item pt-3 pb-3"
                                target="_blank"
                            >
                                Help and Support
                            </Link>
                            <Link
                                to="/help-and-support"
                                className="dropdown-item pt-3 pb-3"
                                target="_blank"
                            >
                                Blog
                            </Link>
                            {/* <div className="dropdown-divider"></div>
                            <a className="dropdown-item pt-3 pb-3" href="#">
                                Separated link
                            </a> */}
                        </div>
                    </li>
                    {/* <li className="nav-item float-right">
                        <Link to="/" className="nav-link pt-4" href="#">
                            Link
                        </Link>
                    </li> */}
                </ul>
                <div className="col-md-12">
                    <div className="page-heading col-md-5 float-left">
                        <h1>
                            Empowering businesses with better tools for better
                            results.
                        </h1>
                        <p className="tagline">
                            A robust suite of styled components, powered by
                            Bootstrap 4. Ready to take your Website or App up a
                            notch? (#WIP) &nbsp;
                        </p>
                        <div style={{ marginTop: "30px" }}>
                            <Link to="/dashboard">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    data-trigger="#side-menu"
                                >
                                    Open Dashboard &gt;&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-md-7 float-left pt-5 pl-5 pr-0"
                        style={{
                            position: "relative",
                            height: "auto",
                            // border: "1px solid",
                        }}
                    >
                        <div className="col-md-12 float-right pt-3 pl-5 pr-0">
                            <img
                                src={hero1}
                                alt=""
                                className="col-md-11 float-right"
                                // style={{ position: "absolute", right: 0 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-12" style={{ clear: "both" }}>
                    <div className="col-md-12 page-heading">
                        {/* <h2>This spreadsheet fills itself.</h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
