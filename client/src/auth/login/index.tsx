import logo from "../../assets/lunch-klub.svg";
import Button from "../../component/button";
import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import LinkText from "../../component/link-text";
import TextInput from "../../component/text-input";
import colorPallette from "../../constants/colors";

const LoginLanding = () => {
    return (
        <CenterAlign>
            <Card style={{
                gap: "1.5rem",
                color: colorPallette.textGray,
                fontWeight: "700",
                fontSize: "1.75rem",
            }}>
                <div>Welcome</div>
                <img src={logo} height={100} width={100} alt="Lunch Klub Logo" className="login-logo" />
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
                <LinkText >Forgot Password?</LinkText>
            </Card>
        </CenterAlign>
    )
}

export default LoginLanding;