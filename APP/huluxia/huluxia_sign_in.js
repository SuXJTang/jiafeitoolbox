/**
 * @Last Modified Time: 
 * @Last Modified By: jiafei
 * @Description:葫芦侠板块自动签到脚本 适用于无障碍模式
 * @Version: 1.0.0
 */

// huluxia_sign_in();
module.exports = huluxia_sign_in;

function huluxia_sign_in() {
    app.startActivity({
        action: "android.intent.action.MAIN",
        packageName: "com.huluxia.gametools",
        className: "com.huluxia.gametools.ui.ToolSplashActivity",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });

    var returned = id("com.vivo.appfilter:id/vbutton_title").text("仅打开一次").className("android.widget.Button").checked(false).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        //   toastLog("未找到符合条件的控件");
    };

    // 等待首页出现
    var returned = id("com.huluxia.gametools:id/src_tab").text("首页").className("android.widget.CheckedTextView").checked(true).waitFor();
    sleep(1000);

    // 点击社区
    var returned = id("com.huluxia.gametools:id/bbs_tab").text("社区").className("android.widget.CheckedTextView").checked(false).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        //   toastLog("未找到符合条件的控件");
    };

    // 逐一点击板块签到
    var 板块名 = get_plate_Collection();
    var ibl = id('com.huluxia.gametools:id/ImageButtonLeft').findOne(500).bounds().bottom;
    var tab = id("com.huluxia.gametools:id/bbs_place_holder").className("android.view.View").checked(false).findOne(500).bounds().top;


    for (var i = 0; i < 板块名.length; i++) {
        var item_container = id("com.huluxia.gametools:id/item_container").className("android.widget.RelativeLayout").checked(false).find();
        var item_container2 = id("com.huluxia.gametools:id/item_container2").className("android.widget.RelativeLayout").checked(false).find();

        // 判断页面中最后一个板块是否可点击，bottom大于底部导航栏的top则滑动
        if (板块名[i] == item_container[item_container.length - 2].findOne(id('com.huluxia.gametools:id/title')).text()) {
            var bto = item_container[item_container.length - 2].bounds();
            // console.log(bto.bottom, tab);
            var 意见反馈 = id("com.huluxia.gametools:id/title2").text("意见反馈").className("android.widget.TextView").checked(false).findOne(500);
            if (!意见反馈) {
                swipe(bto.centerX(), bto.top, bto.centerX(), ibl, 1000);
            }
            
        }
        if (item_container.findOne(text(板块名[i]))) {
            var bk = item_container.findOne(text(板块名[i]));
            click(bk.bounds().centerX() + random(-5, 5), bk.bounds().centerY() + random(-5, 5));
            sleep(500);
            sign_in();
        }
        if (item_container2.findOne(text(板块名[i]))) {
            var bk = item_container2.findOne(text(板块名[i]));
            click(bk.bounds().centerX() + random(-5, 5), bk.bounds().centerY() + random(-5, 5));
            sleep(500);
            sign_in();
        }
        sleep(500);
    }

    // 提示用户脚本运行结束
    home();
    sleep(1000);
    toastLog("葫芦侠脚本运行结束");

// --------------------- 函数定义 ---------------------
    // 点击板块签到
    function sign_in() {
        // 签到函数
        try {
            var btn_signin = id('com.huluxia.gametools:id/btn_signin').findOne(5000).findOne(id('com.huluxia.gametools:id/tv_signin'));
        } catch (error) {
            console.error(error);
        }
        if (btn_signin.text() == "签到") {
            click(btn_signin.bounds().centerX() + random(-5, 5), btn_signin.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            // toastLog("今日已签到");
        };
        sleep(500);
        if(id('com.huluxia.gametools:id/iv_signin_rule').findOne(500)){
            back();
        }
        sleep(500);
        back();
        sleep(1000);
    }


    // 获取所有的板块名称
    function get_plate_Collection() {

        var 板块 = [];
        var ibl = id('com.huluxia.gametools:id/ImageButtonLeft').findOne(500);
        var bool = false

        while (true) {
            var bool = false
            var item_container = id("com.huluxia.gametools:id/item_container").className("android.widget.RelativeLayout").checked(false).find();
            var item_container2 = id("com.huluxia.gametools:id/item_container2").className("android.widget.RelativeLayout").checked(false).find();
            for (var i = 0; i < item_container2.length; i++) {
                var title = item_container[i].findOne(id("com.huluxia.gametools:id/title"));
                var title2 = item_container2[i].findOne(id("com.huluxia.gametools:id/title2"));

                if (title.text() == "我的关注" || title2.text() == "三楼活动") {
                    continue;
                } else {
                    if (板块 == "") {
                        板块.push(title.text());
                        板块.push(title2.text());
                    } else {
                        var jiance = false;
                        for (var j = 0; j < 板块.length; j++) {

                            if (title2.text() == "意见反馈") {
                                bool = true;
                            }
                            if (板块[j] == title.text()) {
                                jiance = true;
                                break;
                            }
                        }
                        if (jiance == false) {
                            板块.push(title.text());
                            板块.push(title2.text());
                        }

                    }
                }

            }
            if (bool) {
                break;
            }
            sleep(1000)
            swipe(title.bounds().centerX(), title.bounds().centerY(), title.bounds().centerX(), ibl.bounds().bottom, 1000)
        }

        while (true) {
            var returned = id("com.huluxia.gametools:id/title").text("我的关注").className("android.widget.TextView").checked(false).findOne(500);
            if (returned) {
                break;
            } else {
                swipe(device.width / 2, device.height / 3, device.width / 2, device.height / 3 * 2, 1000);
            }
        };

        return 板块;
    }
}