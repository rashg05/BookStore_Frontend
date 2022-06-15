import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lander from "../pages/lander/lander";
import Home from "../pages/home/home";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Lander} />
                    <Route exact path="/Home" component={Home} />
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Router