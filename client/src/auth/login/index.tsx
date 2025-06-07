import Button from "../../component/button";
import "./index.css"
import logo from "../../assets/lunch-klub.svg"
import TextInput from "../../component/text-input";

const LoginLanding  = () => {
    return (
        <div className="login-landing" id="login-landing">
            <div className="login-landing-box">
                <div>Welcome</div>
                <img src={logo} height={100} width={100} alt="Lunch Klub Logo" className="login-logo"/>
                <TextInput
                    id="username-input"
                    label="Username:"
                    type="text"
                    onChange={(event) => {
                        console.log(event.target.value)
                    }}
                />
                <TextInput
                    id="password-input"
                    label="Password:"
                    type="password"
                    onChange={(event) => {
                        console.log(event.target.value)
                    }}
                />
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