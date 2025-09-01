import logo from "../assets/lunch-klub.svg";
import Button from "../component/button";
import Card from "../component/card";
import CenterAlign from "../component/containers/center-align";
import TextInput from "../component/text-input";
import LinkText from "../component/text/link-text";
import colorPallette from "../constants/colors";

import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <CenterAlign
            style={{
                gap: "1.5rem",
            }}
        >
            <img src={logo} height={150} width={150} alt="Lunch Klub Logo" className="login-logo" />
            <Card style={{ padding: "1.5rem 1rem", gap: "1.5rem" }}>
                <TextInput
                    id="room-code-input"
                    placeholder="Enter room code"
                    type="text"
                    onChange={(event) => {
                        console.log(event.target.value);
                    }}
                />
                <Button
                    id="landing-button"
                    className="landing-button"
                    onClick={() => {
                        navigate("/rooms/create/guest");
                    }}
                >
                    Join Room
                </Button>
            </Card>
            <LinkText onClick={() => navigate("/login")} style={{
                color: colorPallette.primaryLightGray,
            }}>Want to create a room? Login</LinkText>
        </CenterAlign>
    );
}
export default Landing;