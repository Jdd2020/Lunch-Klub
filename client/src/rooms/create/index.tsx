import Button from "../../component/button";
import Card from "../../component/card";
import Checkbox from "../../component/checkbox";
import CenterAlign from "../../component/containers/center-align";
import Select from "../../component/select";
import TextInput from "../../component/text-input";

const playerOption = [
    { value: "1", label: "1 Player" },
    { value: "2", label: "2 Players" },
    { value: "3", label: "3 Players" },
    { value: "4", label: "4 Players" },
    { value: "5", label: "5 Players" },
    { value: "6", label: "6 Players" },
    { value: "7", label: "7 Players" },
    { value: "8", label: "8 Players" }
]


const CreateRoom = () => {
    return (
        <CenterAlign>
            <Card>
                <TextInput label="Room Name" />
                <Select
                    label="Number of Players"
                    options={playerOption}
                    onChange={(event) => console.log(event.target.value)}
                />
                <Checkbox
                    label="Enable Voice Chat"
                    onChange={(event) => console.log(event.target.checked)}
                />
                <Button onClick={() => console.log("Create Room Clicked")}>Create Room</Button>
            </Card>
        </CenterAlign>
    );
};


export default CreateRoom;
