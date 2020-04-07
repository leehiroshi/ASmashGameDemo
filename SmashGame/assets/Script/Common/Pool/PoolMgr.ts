import { loader_mgr } from "../loader/loader_mgr"
import { handler, genHandler as genHandler } from "../util"
import { ui_pool } from "./ui_pool"

export class PoolMgr {
    private static _inst: PoolMgr;
    private uiPool: ui_pool;

    private constructor() {
        this.uiPool = new ui_pool();
    }

    static getInstance(): PoolMgr {
        if (!this._inst) {
            this._inst = new PoolMgr();
        }
        return this._inst;
    }
    
    spawnFromPath(path: string, cb: Function, host: any = null, ...args: any[]) {
        let handler = genHandler(cb, host, args);
        this.spawn(path, handler);
    }

    spawn(path: string, cb: handler): void {
        let ui: cc.Node = this.uiPool.get(path);
        if (ui) {
            // cc.info("pool_mgr:get_ui from cache", path);
            cb.exec(ui);
            return;
        }
        // cc.info("pool_mgr:get_ui from loader", path);
        loader_mgr.getInstance().loadPrefabObj(path, cb);
    }

    despawn(path: string, ui: cc.Node): void {
        if (!ui) {
            cc.warn("pool_mgr:put_ui, invalid node");
            return;
        }
        this.uiPool.put(path, ui);
    }

    clearAtPath(path: string) {
        this.uiPool.clear_atpath(path);
    }

    clear() {
        this.uiPool.clear();
    }

    dump() {
        this.uiPool.dump();
    }
}