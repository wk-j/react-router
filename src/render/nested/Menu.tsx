import * as React from "react";
import { MyLink } from "./MyTypes";

export class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li><MyLink to="/">Home</MyLink></li>
                <li><MyLink to="/about">About</MyLink></li>
                <li><MyLink to="/topics">Topics</MyLink></li>
            </ul>
        );
    }
}