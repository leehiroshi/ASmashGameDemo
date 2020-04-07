import GameObject from "./GameObject";
import { StateMachine } from "../../Common/FSM/FSM";


const { ccclass, property } = cc._decorator;

@ccclass
/**
 * 所有可运动游戏对象的基类
 */
export default class DynamicGameObject extends GameObject {
    /**
     * 速度向量
     */
    velocity: cc.Vec2 = new cc.Vec2(0, 1);

    /**
     * 加速度向量
     */
    acceleration: cc.Vec2 = new cc.Vec2(0, 8);


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {


    }

    // update (dt) {}
}
