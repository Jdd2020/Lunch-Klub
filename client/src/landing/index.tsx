import Button from "../component/button";
import Card from "../component/card";
import CenterAlign from "../component/containers/center-align";
import colorPallette from "../constants/colors";

const Landing = () => {
    return (
        <CenterAlign>
            <Card>
                <h1 style={{
                    color: colorPallette.textGray,
                    fontWeight: "700",
                    fontSize: "1.75rem",
                    textAlign: "center",
                }}
                > Welcome to Lunch Klub!</h1>
                <p>This is the landing page of our application.</p>
                <Button
                    id="landing-button"
                    className="landing-button"
                    onClick={() => {
                        console.log("Landing button clicked");
                    }}
                >
                    Click Me
                </Button>
            </Card>
        </CenterAlign>
    );
}
export default Landing;