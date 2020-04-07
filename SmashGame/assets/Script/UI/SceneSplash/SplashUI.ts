

const {ccclass, property} = cc._decorator;

@ccclass
/**
 * 
 */
export default class SplashUI extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        cc.director.preloadScene("Menu", function () {
            cc.log("Next scene preloaded");
    
        });

    }

    // update (dt) {}
    startMenu(){
        cc.director.loadScene("Menu");
    }
    
  
}
