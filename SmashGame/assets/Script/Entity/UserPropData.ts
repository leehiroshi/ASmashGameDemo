const {ccclass, property} = cc._decorator;

/**
 * 用户道具类
 */
export default class UserProp {
    //id 
    private _id: string;
 
    //名字
    private _name: string;

    //类型ID
    private _propId: number;
    
  
     
    //状态
    private _state: number;

    //剩余
    private _count: number;
    public get count(): number {
        return this._count;
    }
    public set count(value: number) {
        this._count = value;
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
  
    public get state(): number {
        return this._state;
    }
    public set state(value: number) {
        this._state = value;
    }
     
    public get propId(): number {
        return this._propId;
    }
    public set propId(value: number) {
        this._propId = value;
    }
    
  
}
