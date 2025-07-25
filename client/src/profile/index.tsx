import Card from "../component/card";
import CenterAlign from "../component/containers/center-align";
import { useGetUserQuery } from "../services/auth";


const Profile = () => {
    const { data: user, isLoading, error } = useGetUserQuery();

    if (isLoading || !user) return <div>Loading...</div>;
    if (error) return <div>Error loading user profile</div>;

    return (
        <CenterAlign>
            <Card>
                <h1>User Profile</h1>
                <p>Email: {user.email}</p>
                <p>Name: {user.first_name} {user.last_name}</p>
                <p>Status: {user.is_active ? 'Active' : 'Inactive'}</p>
            </Card>
        </CenterAlign>
    );

};

export default Profile;
