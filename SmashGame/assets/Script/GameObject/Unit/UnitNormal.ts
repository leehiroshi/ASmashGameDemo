import { StateMachine } from "../../Common/FSM/FSM";
import { UnitType } from "../../Configuration/UnitConfig";
import UnitBaseSmashable from "../Base/UnitBaseSmashable";
import Config from "../../Configuration/Config";

const { ccclass, property } = cc._decorator;

@ccclass
/**
 * 这种类型的单位只能直线运动，径直向玩家冲过去
 */
export default class UnitNormal extends UnitBaseSmashable {

    private TAG = "UnitNormal";

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private _self = this;

    start() {
        this.type = UnitType.Normal;

        /**
       * 状态管理
       */
        this.state = new StateMachine({
            initial: 'start',
            states: {
                start: ['running'],
                running: ["smashed"],
                smashed: ["recycle"],
                recycle: []
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
                    console.log(this.TAG + `,State changed from ${prev} to ${next}`);
                },

                onStart(prev: any, ...param: any) {

                },

                onRunning(prev: any, ...param: any) {
                    param[2].apply(param[0], [param[1]]);

                    console.log("");

                },

                onSmashed(prev: any, ...param: any) {

                },

                onRecycle(prev: any, ...param: any) {

                },

            }
        });

        this.state.to("running", this, this.onRunningUpdate, this.setUpdateDelegate);

    }

    private setUpdateDelegate(func: any) {

        this.updateDelegateFunc = func;
    }

    /**
     * 更新位置
     * @param deltaTime 
     */
    onRunningUpdate(deltaTime: number) {
        console.log(this.TAG + ",onStartUpdate");

        this.worldPosition.x += this.velocity.x * deltaTime;
        this.worldPosition.y += this.velocity.y * deltaTime;
        this.node.position = Config.getInstance().worldPositionToScreen(this.worldPosition);

    }

    update(dt) {
        if (this.updateDelegateFunc)
            this.updateDelegateFunc(dt);


    }
}
