import Button from "../../component/Button";
import "./index.css"

const LoginLanding  = () => {
    return (
        <div className="login-landing" id="login-landing">
            <div className="login-landing-box">
                <div>Login</div>
                <div className="login-text-input-container">
                    <div className="login-text-input-label">Username:</div>
                    <input type="text" className="login-text-input"/>
                </div>
                <div className="login-text-input-container">
                    <div className="login-text-input-label">Password:</div>
                    <input type="text" className="login-text-input"/>
                </div>
                <Button
                    id="login-button"
                    className="login-button"
                    onClick={() => {
                        console.log("Login button clicked")
                    }}
                >
                    Click
                </Button>
            </div>
        </div>
    )
}

export default LoginLanding;