import * as React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        );
    }
}

class Topic extends React.Component {
    render() {
        return (
            <div>
                Topic
            </div>
        );
    }
}

class Compoents extends React.Component {
    render() {
        return (<h1>Components</h1>)
    }
}

class State extends React.Component {
    render() {
        return (<h1>Stats</h1>);
    }
}

class SubArea extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/topics/rendering" render={() => (<h1>Rendering</h1>)} />
                <Route exact path="/topics/components" component={Compoents} />
                <Route exact path="/topics/props-v-state" component={State} />
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
                        <Link to="/topics/components"> Components </Link>
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
    <Router>
        <div>
            <Menu />
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
)

export const Nested = BasicExample;