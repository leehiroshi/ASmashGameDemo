
import BattleMinPoint from "./BattleMinPoint";

const { ccclass, property } = cc._decorator;
/**
 * 关卡
 */
export default class BattlePoint {
   
    private _id: string;
   
     /***
	 * 关卡名
	 */
    private _name: string;
  
   
    /***
	 * 小关集合
	 */
    private _list: Array<BattleMinPoint>;
    public get list(): Array<BattleMinPoint> {
        return this._list;
    }
    public set list(value: Array<BattleMinPoint>) {
        this._list = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    
}
