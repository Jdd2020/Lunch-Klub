import { useParams } from "react-router-dom";

import Card from "../../component/card";
import CenterAlign from "../../component/containers/center-align";


const RoomLobby = () => {
    const { roomId } = useParams();

    return (
        <CenterAlign>
            <Card>
                <div
                    style={{
                        fontSize: "24px",
                        fontWeight: "200",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                    }}
                >Room: {roomId}</div>

            </Card>
        </CenterAlign>
    )
}

export default RoomLobby;