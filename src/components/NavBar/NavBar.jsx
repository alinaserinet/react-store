import React from "react";
import {Link} from "react-router-dom";
import {IoIosArrowBack, IoMdSearch} from 'react-icons/io';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
const NavBar = () => {
    const location = useHistory();
    return (
        <nav className='nav-bar'>
            <div className='container'>
                <div className='nav-bar__items'>
                    <Link to={'/'}>
                        <IoIosArrowBack size={24} />
                    </Link>
                    <h2 className='brand-title'>Shop</h2>
                    <button className='search-btn'>
                        <IoMdSearch size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;