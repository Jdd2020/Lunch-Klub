import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import TextInput from "../../component/text-input";


const CreateRoom = () => {
    return (
        <CenterAlign>
            <Card>
                <TextInput label="Room Name" />
                {/* Room creation form goes here */}

            </Card>
        </CenterAlign>
    );
};


export default CreateRoom;
