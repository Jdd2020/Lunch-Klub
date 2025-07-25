import { useActionState, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/lunch-klub.svg";
import Button from "../../component/button";
import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import TextInput from "../../component/text-input";
import ErrorText from "../../component/text/error-text";
import LinkText from "../../component/text/link-text";
import colorPallette from "../../constants/colors";
import { useLoginMutation } from "../../services/auth";

type LoginFormState = {
    errorGeneral?: string;
    errorEmail?: string;
    errorPassword?: string;
    isSuccess?: boolean;
}

const initLoginFormState: LoginFormState = {
    errorGeneral: undefined,
    errorEmail: undefined,
    errorPassword: undefined,
    isSuccess: false,
}

const LoginLanding = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login] = useLoginMutation();

    const [loginFormState, submitAction, isPending] = useActionState<LoginFormState, FormData>(
        async (prevState: LoginFormState, formData: FormData) => {
            // handle login logic here
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            console.log("Login attempt with email:", email, "and password:", password);

            let errorEmail: string | undefined = undefined;
            let errorPassword: string | undefined = undefined;

            if (!email) errorEmail = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(email)) errorEmail = "Invalid email format";

            if (!password) errorPassword = "Password is required";
            else if (password.length < 6) errorPassword = "Password must be at least 6 characters long";
            else if (password.length > 20) errorPassword = "Password must be at most 20 characters long";
            else if (!/[A-Z]/.test(password)) errorPassword = "Password must contain at least one uppercase letter";
            else if (!/[a-z]/.test(password)) errorPassword = "Password must contain at least one lowercase letter";
            else if (!/[0-9]/.test(password)) errorPassword = "Password must contain at least one number";

            if (errorEmail || errorPassword) {
                if (errorEmail) setEmail("");
                if (errorPassword) setPassword("");
                return {
                    errorGeneral: "Incomplete form submission",
                    errorEmail,
                    errorPassword,
                    isSuccess: false
                };
            }

            login({ email, password })
                .unwrap().then(() => {
                    navigate("/profile");
                }).catch((error) => {
                    console.error("Login failed:", error);
                });


            setPassword("");
            return {
                ...prevState,
                errorEmail: errorEmail,
                errorPassword: errorPassword,
                errorGeneral: "Invalid email or password",
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
                minWidth: "300px"
            }}>
                <div>Welcome!</div>
                <img src={logo} height={100} width={100} alt="Lunch Klub Logo" className="login-logo" />
                {loginFormState.errorGeneral && (
                    <ErrorText>{loginFormState.errorGeneral}</ErrorText>
                )}
                <form action={submitAction} style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                    <TextInput
                        id="email-input"
                        label="Email:"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        style={{ width: "250px" }}
                        error={loginFormState.errorEmail}
                    />
                    <TextInput
                        id="password-input"
                        label="Password:"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        style={{ width: "250px" }}
                        error={loginFormState.errorPassword}
                    />
                    <Button
                        id="login-button"
                        className="login-button"
                        type="submit"
                    >
                        {isPending ? (
                            <span>
                                <i className="fa-solid fa-spinner fa-spin" />
                            </span>
                        ) : (
                            <>
                                Login
                                <i className="fa-solid fa-right-to-bracket" />
                            </>
                        )}
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