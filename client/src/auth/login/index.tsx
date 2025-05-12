import Button from "../../component/Button";
import "./index.css"
import logo from "../../assets/lunch-klub.svg"

const LoginLanding  = () => {
    return (
        <div className="login-landing" id="login-landing">
            <div className="login-landing-box">
                <div>Welcome</div>
                <img src={logo} height={100} width={100} alt="Lunch Klub Logo" className="login-logo"/>
                <div className="login-text-input-container">
                    <div className="login-text-input-label">Username:</div>
                    <input type="text" className="login-text-input"/>
                </div>
                <div className="login-text-input-container">
                    <div className="login-text-input-label">Password:</div>
                    <input type="password" className="login-text-input" id="password"/>
                </div>
                <Button
                    id="login-button"
                    className="login-button"
                    onClick={() => {
                        console.log("Login button clicked")
                    }}
                >
                    Login
                </Button>
                <div id="forgot-password-text">Forgot Password?</div>
            </div>
        </div>
    )
}

export default LoginLanding;