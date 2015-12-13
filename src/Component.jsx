"use strict";
import React from "react"
import ActionCreator from "./Action"
import Store from "./Store"

export default class Component extends React.Component {
    constructor(...args) {
        super(...args);
        this.store = this.props.context.store;
        this.state = {
            count: this.store.getCount()
        };
    }

    _onChange() {
        this.setState({
            count: this.store.getCount()
        });
    }
    
    componentDidMount() {
        this.store.onChange(this._onChange.bind(this));
    }
    
    componentWillUnMount() {
        this.store.removeAllChangeListeners();
    }

    onCountUp() {
        var { context } = this.props; 
        context.action.countUp();
    }

    render() {
        return (
            <div>
                <button onClick={this.onCountUp.bind(this)}>Count Up</button>

                <p>
                    Count: {this.state.count}
                </p>
            </div>
        );
    }
}