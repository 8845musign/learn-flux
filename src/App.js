"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component.jsx";
import Context from "./Context"

var context = new Context();

ReactDOM.render(
    React.createElement(Component, { context }),
    document.getElementById('app')
)