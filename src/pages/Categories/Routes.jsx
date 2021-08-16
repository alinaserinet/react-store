import {Route, Switch, useRouteMatch} from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";

const Routes = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/`} exact>
                <Categories />
            </Route>
            <Route path={`${path}/:title`} exact>
                <Category />
            </Route>
        </Switch>
    );
};

export default Routes;