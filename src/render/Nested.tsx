import * as React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from "react-router";

type R =
    "/"
    | "/about"
    | "/home"
    | "/topics"
    | "/topics/rendering"
    | "/topics/props-v-state"
    | "/topics/components/:a/:b"

let r = (r: R) => r;

type Props = {
    className?: string
    // match?: any
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
                {this.props.match.params.b}
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
    background: grey;
`;

class SubArea extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <Switch>
                    <Route exact path={r("/topics")} render={() => (<h1>Default</h1>)} />
                    <Route exact path={r("/topics/rendering")} render={() => (<h1>Rendering</h1>)} />
                    <Route exact path={r("/topics/components/:a/:b")} component={Components} />
                    <Route exact path={r("/topics/props-v-state")} component={StyledState} />
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
                        <Link to={"/topics/components/a/b"}> Components </Link>
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