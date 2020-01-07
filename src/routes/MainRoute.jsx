import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Masuk from "../pages/Masuk";
import Keluar from "../pages/Keluar";


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profil" component={Profil} />
                <Route exact path="/masuk" component={Masuk} />
                <Route exact path="/keluar" component={Keluar} />
                <Route path="/:kategori" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;