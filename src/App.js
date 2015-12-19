"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Store from "./Store"
import Provider from "./Provider.jsx";

let store = Store();

ReactDOM.render(
    <Provider store={store}/>,
    document.getElementById('app')
)