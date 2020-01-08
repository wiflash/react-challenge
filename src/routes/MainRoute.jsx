import React from "react";
import { Provider } from "unistore/react";
import { store } from "../store";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Masuk from "../pages/Masuk";


class MainRoute extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profil" component={Profil} />
                        <Route exact path="/masuk" component={Masuk} />
                        <Route path="/:kategori" component={Home} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default MainRoute;