import MenuPageItem from "./MenuPageItem";
import { PoolMgr } from "../../Common/Pool/PoolMgr";
import Logger from "../../Common/Utils/Logger";
import Config, { PrefabType } from "../../Configuration/Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuLevelCtrl extends cc.Component {

    private TAG="MenuLevelCtrl";

    @property(cc.PageView)
    pageView: cc.PageView = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    private pageItems: MenuPageItem[] = new Array();
    private pageCount = -1;//总共需要的页数

    start() {

        this.pageCount = Math.ceil(Config.getInstance().totalCount / (Config.getInstance().rowCount * Config.getInstance().columnCount))//多少页

        this.pageView.content.removeAllChildren();

        for (let i = 0; i < this.pageCount; ++i) {

            PoolMgr.getInstance().spawnFromPath(Config.getInstance().getPrefabPath(PrefabType.MenuPageItem), this.onPageItemSpawned, this, i);
        }
    }

    onDisable() {

    }

    /**
     * 异步加载当前页面回调
     */
    onPageItemSpawned(...args) {

        let pageItem = args[1].getComponent(MenuPageItem) as MenuPageItem;

        let currentPageIndex = args[0][0];//当前页面索引

        pageItem.currentIndex = currentPageIndex;

        this.pageItems.push(pageItem)

        pageItem.initContent(currentPageIndex);

        if (this.pageItems.length == this.pageCount) {//所有page已经加载完毕，由于节点异步加载，并不知道哪个页面先加载完成，等所有加载完，做个排序
            this.pageItems.sort((a, b) => {
                return a.currentIndex > b.currentIndex ? 1 : -1;
            });

            this.initPage();
        }

    }

    initPage() {

        for (let i = 0; i < this.pageItems.length; ++i) {
            this.pageView.addPage(this.pageItems[i].node);
        }

    }


    // update (dt) {}

    onPageChanged(args: any) {

        let currentPageIndex = this.pageView.getCurrentPageIndex();

        console.log("currentPageIndex:" + currentPageIndex);

    }

}
