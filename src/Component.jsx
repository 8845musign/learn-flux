"use strict";
import React from "react"
import * as Action from './Action'

export default class Component extends React.Component {
    constructor(...args) {
        super(...args);
    }

    onCountUp() {
        this.props.store.dispatch(Action.increment(1));
    }

    render() {
        let count = this.props.store.getState().count;
        return (
            <div>
                <button onClick={this.onCountUp.bind(this)}>Count Up</button>

                <p>
                    Count: {count}
                </p>
            </div>
        );
    }
}