import React from "react"
import Store from "./Store"
import Component from './Component.jsx'

export default class Provider extends React.Component {
    constructor(...args) {
        super(...args);
        
        this.props.store.subscribe(this.onChange.bind(this));
    }

    onChange() {
        let state = this.props.store.getState();
        this.setState(state);
    }

    render() {
        return (
            <Component store={this.props.store} />
        )
    }
}