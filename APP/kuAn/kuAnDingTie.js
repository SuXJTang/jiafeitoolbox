// 顶贴

// const fun = kuAnDingTie("../../test/fun");

// var data = {
    // reply_content= "[酷币][酷币][酷币]"
    // kuAnUri= "https://www.coolapk.com/feed/57719885?shareKey=NzY2MzY0YjFjMTc0NjZiYjIzY2Y~&shareUid=1171344&shareFrom=com.coolapk.market_14.1.2"
// }
// dingtie(kuAnUri,reply_content);

function kuAnDingTie(kuAnUri,reply_content) {
    while (true) {
        openTiezi()
        // 判断是否进入要顶的贴子  25秒没有判断到则没有进入贴子内
        var user_avatar = id("com.coolapk.market:id/toolbar_user_avatar_view").className("android.widget.FrameLayout").checked(false).findOne(25000);
        if (user_avatar) {
            break;
        } else {

        };

    }


    // 打开贴子
    function openTiezi() {
        // 打开要顶的贴子
        app.startActivity({
            packageName: "com.coolapk.market",
            data: kuAnUri,
            root: true
        });
        sleep(500);


        // 判断是否有弹窗要求选择应用打开
        var title = id("android:id/title").text("选择要使用的应用：").className("android.widget.TextView").checked(false).findOne(500);
        if (title) {
            // 点击酷安
            var b = false;
            while (true) {
                var text1 = id("android:id/text1").className("android.widget.TextView").checked(false).find();
                for (var i = 0; i < text1.length; i++) {
                    if (text1[i].text() == "酷安") {
                        click(text1[i].bounds().centerX() + random(-5, 5), text1[i].bounds().centerY() + random(-5, 5));
                        sleep(500);
                        b = true;
                        break;
                    };
                };
                if (b) {
                    break;
                };
                scrollDown();
            }

            // 仅此一次
            var button_once = id("android:id/button_once").text("仅此一次").className("android.widget.Button").checked(false).findOne(500);
            if (button_once) {
                click(button_once.bounds().centerX() + random(-5, 5), button_once.bounds().centerY() + random(-5, 5));
                sleep(500);
            } else {
                toastLog("未找到符合条件的控件");
            };
        }

    }

    // 判断有没有检测到其他酷安链接的弹窗提示
    var msg = id("android:id/message").findOne(1000);
    if (msg) {
        text("取消").click()
    }


    // 找到回复控件并设置回复内容
    while (true) {
        sleep(1000);
        var reply = id('com.coolapk.market:id/reply_reply_info_view').findOne(500);
        if (reply) {
            click(reply.bounds().centerX() + random(-5, 5), reply.bounds().centerY() + random(-5, 5));
            sleep(500);
            // console.log("找到回复");
            break;
        }
        scrollDown()
    }
    sleep(500);
    setText(reply_content)

    // 发布评论
    var post_button = id('com.coolapk.market:id/post_button').findOne(500);
    if (post_button) {
        click(post_button.bounds().centerX() + random(-5, 5), post_button.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(3500)
    back();
    home();
     
    // 提示
    toastLog("酷安顶贴脚本运行结束");
}

// function kuAnDingTie() {
//     console.log("dingtie123456");
    
    
// }

module.exports = kuAnDingTie;