import * as React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

type R = 
      "/"
    | "/about"
    | "/home"
    | "/topics"
    | "/topics/rendering"
    | "/topics/props-v-state"
    | "/topics/components"

let r = (r: R) => r;

type Props = {
    className? : string
}

class Home extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

class About extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        );
    }
}

class Topic extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                Topic
            </div>
        );
    }
}

class Compoents extends React.Component<Props, {}> {
    render() {
        return (<h1>Components</h1>)
    }
}

class _State extends React.Component<Props, {}> {
    render() {
        return (<h1 className={this.props.className}>Stats</h1>);
    }
}

const State = styled(_State)`
    background: grey;
`;

class SubArea extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <Switch>
                    <Route exact path={r("/topics")} render={() => (<h1>Default</h1>)} />
                    <Route exact path={r("/topics/rendering")} render={() => (<h1>Rendering</h1>)} />
                    <Route exact path={r("/topics/components")} component={Compoents} />
                    <Route exact path={r("/topics/props-v-state")} component={State} />
                </Switch>
            </div>
        );
    }
}

class Topics extends React.Component {
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={r("/topics/rendering")}> Rendering with React </Link>
                    </li>
                    <li>
                        <Link to={r("/topics/components")}> Components </Link>
                    </li>
                    <li>
                        <Link to={r("/topics/props-v-state")}> Props v. State </Link>
                    </li>
                </ul>

                <SubArea />
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to={r("/")}>Home</Link></li>
                <li><Link to={r("/about")}>About</Link></li>
                <li><Link to={r("/topics")}>Topics</Link></li>
            </ul>
        );
    }
}

const BasicExample = () => (
    <HashRouter>
        <div>
            <Menu />
            <hr />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </Switch>
        </div>
    </HashRouter>
)

export const Nested = BasicExample;