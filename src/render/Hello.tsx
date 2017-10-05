import { Router, HashRouter, BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import * as React from "react";
import { RouteComponentProps } from "react-router";

type Props = {

}

class About extends React.Component {
    render() {
        return <h1>About</h1>
    }
}

class Home2 extends React.Component {
    render() {
        return (<h1>Home2</h1>)
    }
}

class Home1 extends React.Component {
    render() {
        return (<h1>Home1</h1>)
    }
}

class Home extends React.Component<RouteComponentProps<Props>, {}> {
    click = (e) => {
        this.props.history.push("/about");
    };

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.click}>About</button>

                <div className="ui segment">
                    <div className="ui menu">
                        <Link className="red item" to='/home/h1'>Home 1</Link>
                        <Link to='/home/h2' className="orange item">Home 2</Link>
                    </div>
                </div>

                <Switch>
                    <div className="ui segment">
                        <Route exact path='/home/h1' component={Home1} />
                        <Route exact path='/home/h2' component={Home2} />
                    </div>
                </Switch>
            </div>
        );
    }
}

export class Header extends React.Component<RouteComponentProps<{}>, {}> {
    go = (e) => {
        this.props.history.push("/home")
    };

    render() {
        return (
            <div className="ui menu">
                <Link className="red item" to='/'>Home</Link>
                <Link to='/about' className="orange item">About</Link>
                <button onClick={this.go}>Go Home</button>
            </div>
        );
    }
}

export class App extends React.Component<Props, {}> {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route component={Header} />
                    <Switch>
                        <div className="ui segment">
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                        </div>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}