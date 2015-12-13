import {Action} from "material-flux"

export const keys = {
    "countUp" : "countUp"
}

export default class CountUpAction extends Action {
    countUp() {
        this.dispatch(keys.countUp);
    }
}