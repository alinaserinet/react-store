import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useRouteMatch} from "react-router-dom/cjs/react-router-dom";

const TabItem = ({title, to, icon: Icon}) => {
    const {url} = useRouteMatch();
    const checkUrl = url.split('/').slice(1).includes(to.split('/')[1]);
    return (
        <Link
            className={`tab--item ${checkUrl ? 'active' : ''}`}
            to={to}>
            <Icon size='26px'/>
            <span className='tab--item__title'>{title}</span>
        </Link>
    );
};

export default TabItem;