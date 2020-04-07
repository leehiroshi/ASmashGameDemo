
const { ccclass, property } = cc._decorator;

@ccclass
/**
 * 单位的一些配置
 */
export default class UnitConfig {

    private static _instance;

    static getInstance() {
        if (!this._instance) this._instance = new UnitConfig();

        return this._instance;
    }

    getPath(unitType: UnitType) {

        switch (unitType) {

            case UnitType.Normal:
                return "Prefab/UnitSmashable/UnitNormal"
                break;

        }

    }


}

export enum UnitType {
    Normal,
}