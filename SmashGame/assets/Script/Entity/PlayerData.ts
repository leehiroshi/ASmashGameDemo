import UserProp from "./UserPropData";


const {ccclass, property} = cc._decorator;

export default class Player {
    //id 
    private _id: string;
 
    //状态
    private _state: number;

    //名字
    private _name: string;
     
    //血量 默认3
    private _hp: number;
    //类型
    private _type: number;

    //能量
    private _energy: number;
    //道具数
    private _userProp: Array<UserProp>;
    
    public get userProp(): Array<UserProp> {
        return this._userProp;
    }
    public set userProp(value: Array<UserProp>) {
        this._userProp = value;
    }
    
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    } 
    
    public get hp(): number {
        return this._hp;
    }
    public set hp(value: number) {
        this._hp = value;
    }

    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
    }
  
    public get state(): number {
        return this._state;
    }
    public set state(value: number) {
        this._state = value;
    }

    
    public get energy(): number {
        return this._energy;
    }
    public set energy(value: number) {
        this._energy = value;
    }

 
  
}
