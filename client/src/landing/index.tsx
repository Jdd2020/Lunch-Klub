import logo from "../assets/lunch-klub.svg";
import Button from "../component/button";
import Card from "../component/card";
import CenterAlign from "../component/containers/center-align";
import TextInput from "../component/text-input";

const Landing = () => {
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
                        console.log("Landing button clicked");
                    }}
                >
                    Join Room
                </Button>

            </Card>
        </CenterAlign>
    );
}
export default Landing;