import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import Select from "../../component/select";
import TextInput from "../../component/text-input";


const CreateRoom = () => {
    return (
        <CenterAlign>
            <Card>
                <TextInput label="Room Name" />
                <Select
                    label="Select Room Type"
                    options={[
                        { value: "public", label: "Public" },
                        { value: "private", label: "Private" },
                    ]}
                    onChange={(event) => console.log(event.target.value)}
                />
            </Card>
        </CenterAlign>
    );
};


export default CreateRoom;
