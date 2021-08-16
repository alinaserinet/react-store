const Information = ({name, email}) => {
    return (
        <div>
            <h3 className='profile-name'>{name}</h3>
            <span className='profile-email'>{email}</span>
        </div>
    );
};

export default Information;