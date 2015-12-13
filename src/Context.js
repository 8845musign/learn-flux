import Action from "./Action"
import Store from "./Store"
import {Context} from "material-flux";

export default class CountContext extends Context {
    constructor() {
        super();
        this.action = new Action(this);
        this.store = new Store(this);
    }
}