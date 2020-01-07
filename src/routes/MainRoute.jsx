import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Kategori from "../pages/Kategori";
import Masuk from "../pages/Masuk";
import Daftar from "../pages/Daftar";


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/:kategori" component={Kategori} />
                <Route exact path="/masuk" component={Masuk} />
                <Route exact path="/daftar" component={Daftar} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;