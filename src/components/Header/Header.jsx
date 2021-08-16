const Header = ({title}) => {
    return (
        <header className='main-header'>
            <div className='container'>
                <h1 className='page-title'>{title}</h1>
            </div>
        </header>
    );
};

export default Header;