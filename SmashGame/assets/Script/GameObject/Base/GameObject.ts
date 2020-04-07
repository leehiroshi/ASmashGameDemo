import { StateMachine } from "../../Common/FSM/FSM";


const { ccclass, property } = cc._decorator;


@ccclass
/**
 * 所有游戏对象的基类，包含一些基本的参数
 *
 */
export default class GameObject extends cc.Component {

    /**
       * 状态管理
       */
    state: StateMachine;

    /**
     *方法代理，根据不同的状态，代理不同的update方法
     */
    public updateDelegateFunc: (deltaTime: number) => void;

    /**
     * 单位类型
     */
    type: number;

    /**
     * 单位在游戏世界的坐标
     */
    worldPosition: cc.Vec2 = new cc.Vec2();

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    getScreenPosition() {
        return this.node.position;
    }

    getScale() {
        return this.node.scale;
    }

    // update (dt) {}
}
