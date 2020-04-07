const { ccclass, property } = cc._decorator;

/**
 * 游戏数据配置
 */
export default class Config {

    static isDebug: boolean = true;

    /**
     * 总关卡数
     */
    totalCount: number = 52;
    /**
     * 一页多少行
     */
    rowCount = 6;
    /**
     * 一页多少列
     */
    columnCount = 4;

    pixelPerMeter: number = 100;

    private static instance;

    //单例
    static getInstance(): Config {
        if (this.instance == null) {
            this.instance = new Config();
        }
        return this.instance;
    }

    getPrefabPath(prefabType: PrefabType) {

        switch (prefabType) {
            case PrefabType.MenuPageItem:
                return "Prefab/UI/SceneMenu/MenuPageItem"
            case PrefabType.LevelIconItem:
                return "Prefab/UI/SceneMenu/LevelIconItem"
        }

    }

    private _position: cc.Vec2 = new cc.Vec2();
    worldPositionToScreen(worldPosition: cc.Vec2) {
        this._position.x = worldPosition.x * this.pixelPerMeter;
        this._position.y = worldPosition.y * this.pixelPerMeter;

        return this._position;
    }

}

export enum PrefabType {
    MenuPageItem,
    LevelIconItem,
}
