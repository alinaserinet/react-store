import TabItem from "./TabItem";
import {RiHome2Line, RiStackLine, RiShoppingCartLine, RiUser3Line} from "react-icons/ri";
import {MdFavoriteBorder} from "react-icons/md";

const Tabs = () => {
    return (
        <div className='mobile-tabs'>
            <TabItem icon={RiHome2Line} to='/' title='Home'/>
            <TabItem icon={RiStackLine} to='/categories' title='Categories'/>
            <TabItem icon={RiShoppingCartLine} to='/cart' title='Cart'/>
            <TabItem icon={MdFavoriteBorder} to='/favorite' title='Favorite'/>
            <TabItem icon={RiUser3Line} to='/profile' title='Profile'/>
        </div>
    );
};

export default Tabs;