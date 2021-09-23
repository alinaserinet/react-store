import Template from "../../Template/MainTemplate";
import {Avatar, Information, MenuItem} from "../../components/Profile";

const Profile = () => {
    return (
        <Template title='My Profile'>
            <div className='profile-info'>
                <Avatar image='/profile.jpeg'/>
                <Information name='User User' email='user@gmail.com'/>
            </div>
            <div className='profile-menu'>
                <MenuItem title={'My Orders'} description={'you have 12 orders'} to={'/profile/orders'} />
            </div>
        </Template>
    );
};

export default Profile;