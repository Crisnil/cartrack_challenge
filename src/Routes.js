
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Listing from "./Listing";
import Details from "./component/Details";

export default function Routes(props) {

    return (
        <Router>
                <Switch>
                    <Route path={`/:teamId`}>
                        <Details {...props}/>
                    </Route>
                    <Route path="/">
                        <Listing {...props}/>
                    </Route>
                </Switch>
        </Router>
    );
}



