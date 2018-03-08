import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./Hello";
import { Nested } from "./nested/Nested";

import "../Style.css";

type Props = {

}

// ReactDOM.render(<App /> , document.getElementById("app"));
ReactDOM.render(<Nested />, document.getElementById("nested"));