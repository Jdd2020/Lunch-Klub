import Button from "../../../component/button";
import Card from "../../../component/card";
import CenterAlign from "../../../component/containers/center-align";
import TextInput from "../../../component/text-input";

const RoomCreateGuest = () => {
    return (
        <CenterAlign>
            <Card>
                <h3 style={{ letterSpacing: ".5px" }}>Room found!</h3>
                <TextInput
                    placeholder="Enter room name"
                    label="Display Name"
                />
                <Button>Enter</Button>
            </Card>
        </CenterAlign>
    );
}

export default RoomCreateGuest;