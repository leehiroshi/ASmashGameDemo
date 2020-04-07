import { StateMachine } from "./FSM";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FSMTest extends cc.Component {

    state = new StateMachine({
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
            
            onChange: (prev: string, next: string) => {
                console.log(`State changed from ${prev} to ${next}`);
            },
            onBeforeStart: (prev: string, param: string) => {
                let self=this;
                console.log(`We can check the parameters before the start: ${param}`);
            },
            onStart: (prev: any, param: any) => {
                console.log(`Game Start! ${param}`);
            },

            onAfterStart: (next: string) => {
                console.log(`Going to ${next} state`);
            },


            onEnd: (prev: any, param: any) => {
                console.log(`Game over! ${param}`);
            }
        }
    });

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.state.to('end', 'Is it the End of the Line for the RED team?');
        this.state.to('start', 'Hello world!');

    }

    // update (dt) {}
}
