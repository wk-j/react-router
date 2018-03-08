import * as React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { withRouter, RouteProps, Router, RouterProps } from "react-router";

type R =
    "/"
    | "/about"
    | "/home"
    | "/topics"
    | "/topics/rendering"
    | "/topics/props-v-state"
    | "/topics/components/:a/:b"

type Props = {
    className?: string
}

type MyRouteProps = RouteProps & { path?: R }

const MyRoute = (props: MyRouteProps) => <Route {...props} />

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

type RouterParams = {
    match: { params: { a: string, b: string } }
}

class Components extends React.Component<Props & RouterParams, {}> {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>
                    {this.props.match.params.a}
                </h1>
                <h1>
                    {this.props.match.params.b}
                </h1>
            </div>
        );
    }
}

class State extends React.Component<Props, {}> {
    render() {
        return (<h1 className={this.props.className}>Stats</h1>);
    }
}

const StyledState = styled(State) `
    padding: 5px;
    color: green;
`;

class SubArea extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <Switch>
                    <MyRoute exact path="/topics" render={() => (<h1>Default</h1>)} />
                    <MyRoute exact path="/topics/rendering" render={() => (<h1>Rendering</h1>)} />
                    <MyRoute exact path="/topics/components/:a/:b" component={Components} />
                    <MyRoute exact path="/topics/props-v-state" component={StyledState} />
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
                        <Link to="/topics/rendering"> Rendering with React </Link>
                    </li>
                    <li>
                        <Link to="/topics/components/a/b"> Components </Link>
                    </li>
                    <li>
                        <Link to="/topics/props-v-state"> Props v. State </Link>
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
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
                <MyRoute exact path="/" component={Home} />
                <MyRoute path="/about" component={About} />
                <MyRoute path="/topics" component={Topics} />
            </Switch>
        </div>
    </HashRouter>
)

export const Nested = BasicExample;