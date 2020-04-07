const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelIconItem extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private _levelNumer = -1;

    start() {

    }

    setLevelNumber(levelNum: number) {
        this.label.string = "" + levelNum;
        this._levelNumer = levelNum;
    }

    // update (dt) {}

    onClick() {

        // cc.director.preloadScene("Menu", function () {
        //   cc.log("Next scene preloaded");

        cc.director.loadScene("MainGame");
        // });

    }
}
