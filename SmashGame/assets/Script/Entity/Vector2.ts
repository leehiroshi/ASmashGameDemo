
const {ccclass, property} = cc._decorator;

@ccclass
export default class Vector2 {
 
     /**
     * x
     */
    private _x: number;
    
    /**
     * y
     */
    private _y: number;
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

}
