import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import Card from "../component/card";
import CenterAlign from "../component/containers/center-align";
import { useGetUserQuery, useLogoutMutation } from "../services/auth";


const Profile = () => {
    const { data: user, isLoading, error } = useGetUserQuery();
    const navigate = useNavigate();

    const [logout] = useLogoutMutation();
    const [logoutError, setLogoutError] = useState<string | null>(null);

    const handleLogout = async () => {
        try {
            await logout({}).unwrap();
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
            if (error && typeof error === "object" && "detail" in error) {
                setLogoutError((error as { detail: string }).detail);
            } else {
                setLogoutError("An unknown error occurred.");
            }
        }
    };

    if (isLoading || !user) return <div>Loading...</div>;
    if (error) return <div>Error loading user profile</div>;

    return (
        <CenterAlign>
            <Card>
                <h1>User Profile</h1>
                <p>Email: {user.email}</p>
                <p>Name: {user.first_name} {user.last_name}</p>
                <p>Status: {user.is_active ? 'Active' : 'Inactive'}</p>
                <Button onClick={handleLogout}>Logout</Button>
                <Button onClick={() => navigate("/rooms/create")}>Create Room</Button>
                {logoutError && <p>{`Error: ${logoutError}`}</p>}
            </Card>
        </CenterAlign>
    );

};

export default Profile;
