import { useActionState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/lunch-klub.svg";
import Button from "../../component/button";
import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import LinkText from "../../component/link-text";
import TextInput from "../../component/text-input";
import colorPallette from "../../constants/colors";

type LoginFormState = {
    errorUsername?: string;
    errorPassword?: string;
    isSuccess?: boolean;
}

const initLoginFormState: LoginFormState = {
    errorUsername: undefined,
    errorPassword: undefined,
    isSuccess: false,
}

const LoginLanding = () => {
    const navigate = useNavigate();

    const [loginFormState, submitAction, isPending] = useActionState<LoginFormState, FormData>(
        async (prevState: LoginFormState, formData: FormData) => {
            // handle login logic here
            const username = formData.get("username") as string;
            const password = formData.get("password") as string;
            console.log("Login attempt with username:", username, "and password:", password);

            let errorUsername: string | undefined = undefined;
            let errorPassword: string | undefined = undefined;

            if (!username) errorUsername = "Username is required";
            if (!password) errorPassword = "Password is required";

            if (errorUsername || errorPassword) return {
                ...prevState,
                errorUsername,
                errorPassword,
                isSuccess: false
            }

            // Simulate a login request
            if (username === "testuser" && password === "password123") {
                console.log("Login successful");
                return { ...prevState, isSuccess: true };
            }
            console.log("Login failed");
            return {
                ...prevState,
                errorUsername: username ? undefined : "Username is required",
                errorPassword: password ? undefined : "Password is required",
                isSuccess: false
            };
        },
        initLoginFormState
    );

    return (
        <CenterAlign>
            <Card style={{
                gap: "1.5rem",
                color: colorPallette.textGray,
                fontWeight: "700",
                fontSize: "1.75rem",
            }}>
                <div>Welcome!</div>
                <img src={logo} height={100} width={100} alt="Lunch Klub Logo" className="login-logo" />
                <form action={submitAction}>
                    <TextInput
                        id="username-input"
                        label="Username:"
                        name="username"
                        type="text"
                        error={loginFormState.errorUsername}
                    />
                    <TextInput
                        id="password-input"
                        label="Password:"
                        type="password"
                        name="password"
                        error={loginFormState.errorPassword}
                    />
                    <Button
                        id="login-button"
                        className="login-button"
                        type="submit"
                    >
                        Login
                        <i className="fa-solid fa-right-to-bracket" />
                    </Button>
                </form>
                <LinkText >Forgot Password?</LinkText>
            </Card>
            <LinkText
                onClick={() => navigate("/signup")}
                style={{ color: colorPallette.textLightGray }}>Don't have an account? Sign up</LinkText>
        </CenterAlign>
    )
}

export default LoginLanding;