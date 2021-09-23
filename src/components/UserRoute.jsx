import {Redirect, Route, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const UserRoute = ({path, children, ...rest}) => {
    const token = useSelector(({user}) => user.token);
    const location = useLocation();

    if(!token) {

        return <Redirect to={{
            pathname: '/login',
            state: {
                referrer: location,
            }
        }} />
    }

    return (
        <Route path={path} {...rest} >
            {children}
        </Route>
    );
};

export default UserRoute;