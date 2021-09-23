import {IoIosArrowForward} from 'react-icons/io';
import {Link} from "react-router-dom";
const MenuItem = ({title, description, to}) => {
    return (
        <div className='menu-item'>
            <div>
                <h3 className='menu-item-title'>{title}</h3>
                <span className='menu-item-description'>{description}</span>
            </div>
            <Link to={to} >
                <IoIosArrowForward size={30} className='icon' />
            </Link>
        </div>
    );
};

export default MenuItem;