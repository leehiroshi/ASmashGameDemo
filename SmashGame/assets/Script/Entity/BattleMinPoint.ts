
import ZombieBaseData from "./ZombieBaseData";

const { ccclass, property } = cc._decorator;
/**
 * 小关
 */
export default class BattleMinPoint {
    /***
	 * 第几波
	 */
    private _index: number;
    /**
	 * 间隔秒速
	 */
    private _sec: number;
   
    /***
	 * 取几个僵尸
	 */
    private _size: number;
   
    /***
	 * 僵尸集合
	 */
	private _list: Array<ZombieBaseData>;
    public get list(): Array<ZombieBaseData> {
        return this._list;
    }
    public set list(value: Array<ZombieBaseData>) {
        this._list = value;
    }
    public get index(): number {
        return this._index;
    }
    public set index(value: number) {
        this._index = value;
    }
    
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }
    public get sec(): number {
        return this._sec;
    }
    public set sec(value: number) {
        this._sec = value;
    }
}
