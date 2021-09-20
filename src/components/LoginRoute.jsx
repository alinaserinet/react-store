import {Redirect, Route, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const LoginRoute = ({path, children, ...rest}) => {
    const token = useSelector(({user}) => user.token);
    if(token) {
        return <Redirect to='/profile' />
    }

    return (
        <Route path={path} {...rest} >
            {children}
        </Route>
    );
};

export default LoginRoute;