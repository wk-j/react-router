import { MyLink, MyRoute } from "./MyTypes";
import * as React from "react"
import { Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home";

type Props = {
    className?: string
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

export class Topics extends React.Component {
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <MyLink to="/topics/rendering"> Rendering with React </MyLink>
                    </li>
                    <li>
                        <Link to="/topics/components/a/b"> Components </Link>
                    </li>
                    <li>
                        <MyLink to="/topics/props-v-state"> Props v. State </MyLink>
                    </li>
                    <li>
                        <MyLink to="/"> Home </MyLink>
                    </li>
                </ul>

                <SubArea />
            </div>
        );
    }
}