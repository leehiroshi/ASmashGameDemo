const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuUI extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    onExitClick(){
        cc.director.loadScene("Splash");
    }
}
