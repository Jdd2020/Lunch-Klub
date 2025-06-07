import Button from "../component/button"

const Landing = () => {
    return (
        <div>
        <h1>Welcome to the Landing Page</h1>
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
        </div>
    );
}
export default Landing;