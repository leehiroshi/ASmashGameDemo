import GameObject from "./GameObject";
import { StateMachine } from "../../Common/FSM/FSM";


const {ccclass, property} = cc._decorator;

@ccclass
/**
 * 静止的游戏对象
 */
export default class StaticGameObject extends GameObject {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

        /**
        * 状态管理
        */
        this.state = new StateMachine({
            initial: 'start',
            states: {
                start: ['end', 'start'],
                end: ['start']
            },

            /**
             * In addition to the general-purpose events, transitions can be observed using your specific transition and state names:
             * onAfter<TRANSITION> - fired after a specific TRANSITION completes
             * onBefore<TRANSITION> - fired before a specific TRANSITION begins
             * on<STATE> - fired when entering a specific STATE
             * onChange - fired after any transition
             */
            methods: {

            }
        });


    }

    // update (dt) {}
}
