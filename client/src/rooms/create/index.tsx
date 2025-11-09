import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateRoomRequest } from "../../classes/Room";
import Button from "../../component/button";
import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";
import Select from "../../component/select";
import TextBox from "../../component/text-box";
import TextInput from "../../component/text-input";
import useNotify from "../../hooks/useNotify";
import { useCreateRoomMutation } from "../../services/rooms";

const playerOption = [
  { value: "1", label: "1 Player" },
  { value: "2", label: "2 Players" },
  { value: "3", label: "3 Players" },
  { value: "4", label: "4 Players" },
  { value: "5", label: "5 Players" },
  { value: "6", label: "6 Players" },
  { value: "7", label: "7 Players" },
  { value: "8", label: "8 Players" },
];

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [playerCount, setPlayerCount] = useState("1");
  const [roomDescription, setRoomDescription] = useState("");

  const navigate = useNavigate();
  const { notifySuccess, notifyError, ToastRenderer } = useNotify();

  const [createRoom] = useCreateRoomMutation();

  const handleCreateRoom = async () => {
    if (!roomName) {
      notifyError("Room name is required");
      return;
    }

    if (
      !playerCount ||
      isNaN(parseInt(playerCount)) ||
      parseInt(playerCount) < 1
    ) {
      notifyError("Player count must be a valid number greater than 0");
      return;
    }

    const roomData: CreateRoomRequest = {
      name: roomName,
      max_players: parseInt(playerCount),
      description: roomDescription || undefined,
    };

    const result = await createRoom(roomData);
    if (result.error) {
      notifyError("Failed to create room");
    } else {
      const createdRoom = result.data;
      notifySuccess("Room created successfully");
      navigate(`/rooms/${createdRoom.id}/lobby`);
    }
  };

  return (
    <CenterAlign>
      <ToastRenderer />
      <Card style={{ minWidth: "350px" }}>
        <h3>Create Room</h3>
        <div
          style={{
            width: "100%",
            paddingLeft: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <TextInput
            label="Room Name"
            style={{ width: "100%" }}
            value={roomName}
            onChange={(event) => setRoomName(event.target.value)}
          />
          <Select
            label="Number of Players"
            options={playerOption}
            onChange={(event) => setPlayerCount(event.target.value)}
          />
          <TextBox
            label="Room Description"
            style={{ width: "100%" }}
            value={roomDescription}
            onChange={(event) => setRoomDescription(event.target.value)}
          />
          <Button onClick={handleCreateRoom}>Create Room</Button>
        </div>
      </Card>
    </CenterAlign>
  );
};

export default CreateRoom;
