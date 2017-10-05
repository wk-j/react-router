import * as React from "react";

import { HashRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

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

class Topics extends React.Component {
    render() {
        let match = {
            url: "/topics",
            path: "topic"
        };
        return (
            <div>

                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}> Rendering with React </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}> Components </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}> Props v. State </Link>
                    </li>
                </ul>

                <Route exact path="/topics/rendering" render={() => (
                    <h3>Rendering</h3>
                )} />

                <Route exact path="/topics/components" component={Compoents} />

            </div>

        );
    }
}

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
)


export const Nested = BasicExample;