import Button from "../../component/Button";
import "./index.css"

const LoginLanding  = () => {
    return (
        <div className="login-landing" id="login-landing">
            <div className="login-landing-box">
                <div>Welcome</div>
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