/**
 * Created by Administrator on 2017/3/14.
 * 模块描述: 提供基础的数学运算功能，如加法、减法等。
 * 作者: Administrator
 * 最后修改日期: 2017/3/14
 * 版本: 1.0
 */

function Fatie() {
    app.startActivity({
        action: "android.intent.action.MAIN",
        packageName: "com.coolapk.market",
        className: "com.coolapk.market.view.main.MainActivity",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });

    var returned = id("com.coolapk.market:id/bottom_navigation_item_title").text("数码").className("android.widget.TextView").checked(false).waitFor()
    sleep(500);

    var returned = id("com.coolapk.market:id/bottom_navigation_item_title").text("数码").className("android.widget.TextView").checked(false).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };

}

module.exports = Fatie;