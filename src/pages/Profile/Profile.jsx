import Template from "../../Template/MainTemplate";
import {Avatar, Information} from "../../components/Profile";

const Profile = () => {
    return (
        <Template title='My Profile'>
            <div className='profile-info'>
                <Avatar image='/profile.jpeg'/>
                <Information name='User User' email='user@gmail.com'/>
            </div>
        </Template>
    );
};

export default Profile;