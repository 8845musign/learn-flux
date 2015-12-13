import {keys} from "./Action"
import {Store} from "material-flux"

export default class CountStore extends Store {
    constructor(...args) {
        super(...args);
        this.state = {
            count : 0
        };
        
        this.register(keys.countUp, this.onCountUp);
    }
    
    onCountUp() {
        var count = this.getCount() + 1;
        
        this.setState({
            count: count
        });
    }
    
    getCount() {
        return this.state.count;
    }
 }