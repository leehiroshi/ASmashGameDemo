import UnitConfig, { UnitType } from "../../../Configuration/UnitConfig";
import { PoolMgr } from "../../../Common/Pool/PoolMgr";
import Config from "../../../Configuration/Config";
import UnitBaseSmashable from "../../../GameObject/Base/UnitBaseSmashable";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Spawner {

    private static _spawner;

    static getInstance() {
        if (!this._spawner) this._spawner = new Spawner();

        return this._spawner;

    }

    spawn(parent: cc.Node, unitType: UnitType, worldPosition: cc.Vec2) {

        let path = UnitConfig.getInstance().getPath(UnitType.Normal);

        PoolMgr.getInstance().spawnFromPath(path, this.onUnitSpawned, this, unitType, parent, worldPosition);
    }

    /**
    * 异步加载单位回调
    * @param args
    */
    private onUnitSpawned(...args) {

        let unitType = args[0][0] as UnitType;
        let parent = args[0][1] as cc.Node;
        let worldPosition = args[0][2] as cc.Vec2;
        let unit = args[1] as cc.Node;
        let unitBase = unit.getComponent(UnitBaseSmashable) as UnitBaseSmashable;

        unitBase.worldPosition = worldPosition;

        unit.parent = parent;

        unit.position = Config.getInstance().worldPositionToScreen(worldPosition);


    }


}
