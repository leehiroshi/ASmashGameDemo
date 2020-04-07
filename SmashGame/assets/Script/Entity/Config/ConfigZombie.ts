

const { ccclass, property } = cc._decorator;
/**
 * 僵尸配置表
 */
export default class ConfigZombie {
    //id 
    private _id: number;

    //名字
    private _name: string; 
    //是否是人
    private _man: boolean;  
    //能量消耗
    private _energy: number;
   

    //图片
    private _icon: string;
    public get man(): boolean {
        return this._man;
    }
    public set man(value: boolean) {
        this._man = value;
    }
    public get energy(): number {
        return this._energy;
    }
    public set energy(value: number) {
        this._energy = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }
 
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}
