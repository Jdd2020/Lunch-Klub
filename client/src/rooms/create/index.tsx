import Button from "../../component/button";
import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import Select from "../../component/select";
import TextBox from "../../component/text-box";
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
            <Card style={{ minWidth: "350px" }}>
                <h3>Create Room</h3>
                <div style={{
                    width: "100%",
                    paddingLeft: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                }}>
                    <TextInput label="Room Name" style={{ width: "100%" }} />
                    <Select
                        label="Number of Players"
                        options={playerOption}
                        onChange={(event) => console.log(event.target.value)}
                    />
                    <TextBox label="Room Description" style={{ width: "100%" }} />
                    <Button onClick={() => console.log("Create Room Clicked")}>Create Room</Button>
                </div>
            </Card>
        </CenterAlign>
    );
};


export default CreateRoom;
