

const { ccclass, property } = cc._decorator;
/**
 * 道具配置表
 */
export default class ConfigProp {
    //id 
    private _id: number;
   


    //名字
    private _name: string;


    //类型
    private _type: number;


    //能量消耗
    private _energy: number;
    
    //图片
    private _icon: string;

    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }

    public get energy(): number {
        return this._energy;
    }
    public set energy(value: number) {
        this._energy = value;
    }
    
    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}
