import {Redirect, Route, useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const LoginRoute = ({path, children, ...rest}) => {
    const token = useSelector(({user}) => user.token);
    const {state} = useLocation();
    const redirectPath = state?.referrer || '/profile';
    if(token) {
        return <Redirect to={redirectPath} />
    }

    return (
        <Route path={path} {...rest} >
            {children}
        </Route>
    );
};

export default LoginRoute;