import { PoolMgr } from "../../Common/Pool/PoolMgr";
import LevelIconItem from "./LevelIconItem";
import Config, { PrefabType } from "../../Configuration/Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MenuPageItem extends cc.Component {

    private TAG: string = "MenuPageItem";

    /**
     * 子条目
     */
    @property(cc.Prefab)
    levelIconPrefab: cc.Prefab = null;

    @property(cc.Float)
    topPadding: number = 10;

    @property(cc.Float)
    bottomPadding: number = 10;

    @property(cc.Float)
    leftPadding: number = 10;

    @property(cc.Float)
    rightPadding: number = 10;

    /**
     * 当前页面索引
     */
    currentIndex: number = -1;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    initContent(pageIndex: number) {

        this.node.removeAllChildren();

        /**
         * 一页中放多少个关卡图标
         */
        let totalLevelInOnePage = (Config.getInstance().rowCount * Config.getInstance().columnCount)
        /**
         * 关卡图标水平间距
         */
        let spaceX = (this.node.width - this.leftPadding - this.rightPadding) / Config.getInstance().columnCount;
        /**
         * 关卡图标垂直间距
         */
        let spaceY = (this.node.height - this.topPadding - this.bottomPadding) / Config.getInstance().rowCount;

        let x;//当前关卡图标y坐标
        let y;//当前关卡图标x坐标
        let currentLevel//当前关卡数

        for (let i = 0; i < Config.getInstance().rowCount; ++i) {
            for (let j = 0; j < Config.getInstance().columnCount; ++j) {

                currentLevel = pageIndex * totalLevelInOnePage + i * Config.getInstance().columnCount + j + 1;

                if (currentLevel > Config.getInstance().totalCount) break;//超过总共关卡数

                x = this.leftPadding + spaceX / 2 + j * spaceX - this.node.width / 2;
                y = this.node.height - (this.topPadding + spaceY / 2 + i * spaceY) - this.node.height / 2;

                PoolMgr.getInstance().spawnFromPath(Config.getInstance().getPrefabPath(PrefabType.LevelIconItem), this.onLevelIconItemSpawned, this,
                    currentLevel, x, y);

            }

        }

    }

    setContent(pageIndex: number) {
        console.log(this.TAG + ",pageIndex:" + pageIndex);
    }

    /**
     * 异步加载关卡图标回调
     * @param args
     */
    onLevelIconItemSpawned(...args) {

        let level = args[0][0];//当前关卡数

        let itemNode = args[1];

        let levelIconItem = itemNode.getComponent(LevelIconItem) as LevelIconItem;

        levelIconItem.setLevelNumber(level);

        itemNode.x = args[0][1];//x坐标
        itemNode.y = args[0][2];//y坐标

        // console.log(this.TAG + ",x:" + args[0][1] + ",y" + args[0][2] + ",level:" + level);

        this.node.addChild(itemNode);

    }

    // update (dt) {}
}
