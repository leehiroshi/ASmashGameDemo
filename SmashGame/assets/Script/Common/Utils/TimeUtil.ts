
const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeUtil {

    // yy-MM-dd hh:mm:ss
    static getDateStr(time) {
        var date = new Date(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mm = date.getMinutes();
        var s = date.getSeconds();
        return cc.js.formatStr("%s-%s-%s %s:%s:%s", y, m, d, h, mm, s);
    }

    static getDateByFormat(time: number, format: string = "yyyy-MM-dd hh:mm:ss") {
        let date = new Date(time);
        let yD = date.getFullYear();
        let mD = date.getMonth() + 1;
        let dD = date.getDate();
        let hD = date.getHours();
        let mmD = date.getMinutes();
        let sD = date.getSeconds();


        let y = yD;
        let m = mD < 10 ? ("0" + mD) : mD;
        let d = dD < 10 ? ("0" + dD) : dD;
        let h = hD < 10 ? ("0" + hD) : hD;
        let mm = mmD < 10 ? ("0" + mmD) : mmD;
        let s = sD < 10 ? ("0" + sD) : sD;

        let formatDatas = {
            "yyyy": y,
            "MM": m,
            "dd": d,
            "hh": h,
            "mm": mm,
            "ss": s
        }
        let ret = format;
        for (let key in formatDatas) {
            ret = ret.replace(key, formatDatas[key]);
        }
        return ret;
    }
    /**
    * 取时间小时和分
    */
    static getHourAndMinites() {
        var t = new Date();
        var hours = (t.getHours() > 9) ? t.getHours() : ("0" + t.getHours());
        var minutes = (t.getMinutes() > 9) ? t.getMinutes() : ("0" + t.getMinutes());
        //var seconds = (t.getMilliseconds() > 9) ? t.getMilliseconds() : ("0" + t.getMilliseconds());
        var str = "" + hours + ":" + minutes;
        return str;
    }
    /**
    * 取时间分钟和秒
    */
    static getMinitesAndSeconds(time: number): string {
        if (time <= 60) {
            return "00:" + time;
        } else {
            return Math.floor(time / 60) + ":" + Math.floor(time % 60);
        }
        return "00:30";
    }
   
    /**
     * 获取倒计时字符串
     * @param times 秒
     */
    static getTimeCountDownString(times: number) {
        let day = "0",
            hour = "0",
            minute = "0",
            second = "0";
        if (times > 0) {
            day = "" + Math.floor(times / (60 * 60 * 24));
            hour = "" + (Math.floor(times / (60 * 60)) - (+day * 24));
            minute = "" + (Math.floor(times / (60)) - (+day * 24 * 60) - (+hour * 60));
            second = "" + (Math.floor(times) - (+day * 24 * 60 * 60) - (+hour * 60 * 60) - (+minute * 60));
        }
        if (+day <= 9) day = day;
        if (+hour <= 9) hour = "0" + hour;
        if (+minute <= 9) minute = "0" + minute;
        if (+second <= 9) second = "0" + second;
        if (day == "00" || day == "0")
            return `${hour}:${minute}:${second}`
        else
            return `${day}天${hour}:${minute}:${second}`
    }
}
