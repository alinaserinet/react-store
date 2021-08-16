import './Profile.scss';

const Avatar = ({image}) => {
    return (
        <span className='avatar-box' style={{backgroundImage: `url(${image})`}}>
        </span>
    );
};

export default Avatar;