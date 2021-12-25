
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

export default function Routes(props) {

    return (
        <Router>
                <Switch>
                    <Route path={`/:topicId`}>
                        <Topic {...props}/>
                    </Route>
                    <Route path="/">
                        <Listing {...props}/>
                    </Route>
                </Switch>
        </Router>
    );
}



function Topic(props) {

    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}