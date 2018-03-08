import * as React from "react"
import { MyRoute } from "./MyTypes";
import { Menu } from "./Menu";
import { Switch, HashRouter } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Topics } from "./Tipics";

const BasicExample = () => (
    <HashRouter>
        <div>
            <Menu />
            <hr />
            <Switch>
                <MyRoute exact path="/" component={Home} />
                <MyRoute path="/about" component={About} />
                <MyRoute path="/topics" component={Topics} />
            </Switch>
        </div>
    </HashRouter>
)

export const Nested = BasicExample;