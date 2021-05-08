import { Link } from "react-router-dom";
import hero1 from "../assets/imgs/hero1.png";
import Input from "../components/Input.jsx"
import "./styles/Home.css";
import "./styles/Login.css";

function Login() {
    return (
        <div className="background">
            <div className="home-container">
                <div className="col-md-12">
                    <div
                        className="col-md-6 float-left pt-5 pr-5 pr-2"
                        style={{
                            position: "relative",
                            height: "auto",
                        }}
                    >
                        <div className="col-md-12 float-right pt-3 pl-2 pr-2">
                            <img
                                src={hero1}
                                alt=""
                                className="col-md-11 float-right"
                            />
                        </div>
                    </div>
                </div>
                <div className="page-heading col-md-6 float-left bg-white vh-100">
                    <form className="w-75 mx-auto">
                        <div>
                            <p className="form-head text-center font-weight-bold mb-1 display-3">pw</p>
                            <p className="text-center text-secondary font-weight-light">Login to the crm</p>
                        </div>
                        <Input
                            name="email" 
                            title="Email" 
                            inputType="text" 
                            placeholder="example@gmail.com" 
                        />
                        <Input
                            name="password" 
                            title="Password" 
                            inputType="password" 
                            placeholder="enter your password" 
                        />
                        <button
                            type="button"
                            className="btn btn-primary col-md-12"
                            data-trigger="#side-menu"
                        >
                        Login
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;
