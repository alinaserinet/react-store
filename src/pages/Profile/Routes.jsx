import {Switch, Route, useRouteMatch} from "react-router-dom/cjs/react-router-dom";
import Profile from "./Profile";
import Orders from "./Orders";
import Order from "./Order";

const Routes = () => {
    const {path} = useRouteMatch();
    console.log(`${path}/orders`)
    return (
        <Switch>
            <Route path={`${path}/`} exact>
                <Profile />
            </Route>
            <Route path={`${path}/orders`} exact>
                <Orders />
            </Route>
            <Route path={`${path}/orders/:id`}>
                <Order />
            </Route>
        </Switch>
    );
};

export default Routes;