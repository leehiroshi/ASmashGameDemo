const {ccclass, property} = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}


    onExitClick(){
        cc.director.loadScene("Menu");
    }
}
