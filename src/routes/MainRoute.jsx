import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Masuk from "../pages/Masuk";


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profil" component={Profil} />
                <Route exact path="/masuk" component={Masuk} />
                <Route path="/:kategori" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;