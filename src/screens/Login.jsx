import { Link } from "react-router-dom";

// import home_img1 from "../assets/imgs/home_img1.svg";
import hero1 from "../assets/imgs/hero1.png";
import "./styles/Home.css";

function Login() {
    return (
        <div className="bg-grey">
            <div className="page-content-container home-container">
                <div className="col-md-12">
                    <div className="page-heading col-md-5 float-left">
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

export default Login;
