import Spawner from "./Spawner";
import { UnitType } from "../../../Configuration/UnitConfig";
import Vector2 from "../../../Entity/Vector2";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSceneCtrl extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

        Spawner.getInstance().spawn(this.node, UnitType.Normal, new cc.Vec2(0, 0));
        Spawner.getInstance().spawn(this.node, UnitType.Normal, new cc.Vec2(-2, -1));
        Spawner.getInstance().spawn(this.node, UnitType.Normal, new cc.Vec2(2, -2));
        Spawner.getInstance().spawn(this.node, UnitType.Normal, new cc.Vec2(1, -1));

    }

    // update (dt) {}
}
