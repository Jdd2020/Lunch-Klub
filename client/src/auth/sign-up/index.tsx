import styled from "styled-components";
import logo from "../../assets/lunch-klub.svg";
import Button from "../../component/button";
import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import TextInput from "../../component/text-input";
import LinkText from "../../component/text/link-text";
import colorPallette from "../../constants/colors";

const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
`;

const SignUp = () => {
    return (
        <CenterAlign>
            <Card>
                <div style={{
                    color: colorPallette.textGray,
                    fontWeight: "700",
                    fontSize: "1.75rem",
                    marginBottom: "1rem"
                }}>Join the club!</div>
                <img src={logo} height={100} width={100} alt="Lunch Klub Logo" className="login-logo" />
                <FormRow>
                    <TextInput
                        id="first-name-input"
                        label="First Name:"
                        type="text"
                        onChange={(event) => {
                            console.log(event.target.value);
                        }}
                    />
                    <TextInput
                        id="last-name-input"
                        label="Last Name:"
                        type="text"
                        onChange={(event) => {
                            console.log(event.target.value);
                        }}
                    />
                </FormRow>
                <TextInput
                    id="email-input"
                    label="Email:"
                    type="email"
                    onChange={(event) => {
                        console.log(event.target.value);
                    }}
                    style={{ width: "100%" }}
                />
                <TextInput
                    id="password-input"
                    label="Password:"
                    type="password"
                    onChange={(event) => {
                        console.log(event.target.value);
                    }}
                    style={{ width: "100%" }}
                />
                <Button
                    id="signup-button"
                    className="signup-button"
                    onClick={() => {
                        console.log("Sign Up button clicked");
                    }}
                >
                    Sign Up
                    <i className="fa-solid fa-user-plus" />
                </Button>
            </Card>
            <LinkText
                style={{ color: colorPallette.textLightGray, }}
            >Already have an account? Log in</LinkText>
        </CenterAlign>
    )
}

export default SignUp;