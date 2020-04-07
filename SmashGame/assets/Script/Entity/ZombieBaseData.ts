import Vector2 from "./Vector2";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ZombieBaseData {
 
    private _id: string;

    /**
     * 僵尸类型 配置表
     */
    private _type: number;
   

    /**
     * 状态 
     */
    private _state: number;


    /**
     * 血量 点一下 100  长按 150
     */
    private _hp: number;

    
     /**
      * 初始化位置
     */
    private _initPositionVec: Vector2;
    
     /**
      * 速度向量 秒米 、100像素=1米
     */
    private _velocityVec: Vector2;
    /**
     * 加速度向量
     */
    private _accelerationVec: Vector2;

    public get initPositionVec(): Vector2 {
        return this._initPositionVec;
    }
    public set initPositionVec(value: Vector2) {
        this._initPositionVec = value;
    }


    public get accelerationVec(): Vector2 {
        return this._accelerationVec;
    }
    public set accelerationVec(value: Vector2) {
        this._accelerationVec = value;
    }

    public get velocityVec(): Vector2 {
        return this._velocityVec;
    }
    public set velocityVec(value: Vector2) {
        this._velocityVec = value;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
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
}
