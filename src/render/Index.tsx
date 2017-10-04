import * as React from "react";
import * as ReactDOM from "react-dom";
import BasicExample from "./Basic";


import "../Style.css";

type Props = {

}

class App extends React.Component<{}, {}> {

    render() {
        return(
            <div>
                <BasicExample/>
            </div>
        );
    }

}

ReactDOM.render(<App /> , document.getElementById("app"));