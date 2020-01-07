import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Masuk from "../pages/Masuk";
import Daftar from "../pages/Daftar";


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/masuk" component={Masuk} />
                <Route exact path="/daftar" component={Daftar} />
                <Route path="/:kategori" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;