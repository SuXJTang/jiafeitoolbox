/**
 * @Last Modified Time: 
 * @Last Modified By: jiafei
 * @Description:酷安自动发帖脚本 适用于root模式
 * @Version: 1.0.0
 */

function fatie(data) {
    app.startActivity({
        packageName: "com.coolapk.market",
        className: "com.coolapk.market.view.feedv8.multiSubmit.MultiSubmitActivity",
        root: true
    });

    var edit_text = id("com.coolapk.market:id/edit_text").text("分享你此刻的想法…").className("android.widget.EditText").checked(false).findOne(30000);
    if (edit_text) {
        // 设置贴子内容
        var 发布到 = id("com.coolapk.market:id/add_relative_view").className("android.widget.LinearLayout").checked(false).findOne(500);
        if (发布到) {
            click(发布到.bounds().centerX() + random(-5, 5), 发布到.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到符合条件的控件");
        };
        sleep(500);

        var returned = className("android.widget.RelativeLayout").checked(false).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到符合条件的控件");
        };
        setText(data.tag)
        sleep(1500)

        var card_view = id("com.coolapk.market:id/card_view").className("androidx.cardview.widget.CardView").checked(false).find();
        for (var i = 0; i < card_view.length; i++) {
            var tag = card_view[i].findOne(id("com.coolapk.market:id/tag_view")).text()
            if (tag == "话题") {
                click(card_view[i].bounds().centerX() + random(-5, 5), card_view[i].bounds().centerY() + random(-5, 5));
                sleep(500);
                break;
            }
        };
        sleep(500);
    } else {
        toastLog("未进入发帖页面!!!");
        sleep(500);
    }
    
    var returned = id("com.coolapk.market:id/image_view").className("android.widget.ImageView").checked(false).find();
    if (returned) {
        click(returned[1].bounds().centerX() + random(-5, 5), returned[1].bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };

    var returned = id("com.coolapk.market:id/alertTitle").text("访问照片、视频、音频权限申请").className("android.widget.TextView").checked(false).findOne(500);
    if (returned) {
        sleep(500);
        text("同意并授权").click();
        sleep(500);
        text("允许").click();
    } else {
        // toastLog("未找到符合条件的控件");
    };

    var check_box = id("com.coolapk.market:id/check_box").className("android.widget.FrameLayout").checked(false).find();

    for (var i = 2; i > -1; i--) {
        click(check_box[i].bounds().centerX(), check_box[i].bounds().centerY())
        sleep(500);
    }

    var re = id("com.coolapk.market:id/action_confirm").findOne(500)
    click(re.bounds().centerX(), re.bounds().centerY())
    sleep(500);
    var 下一步 = className("android.widget.TextView").text("下一步").findOne(500);
    if (下一步) {
        click(下一步.bounds().centerX(), 下一步.bounds().centerY());
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件"+re);
    };
    sleep(500);
    var 继续发布 = id("android:id/button1").findOne(500);
    if (继续发布) {
        click(继续发布.bounds().centerX(), 继续发布.bounds().centerY());
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件"+继续发布);
    };
    sleep(500);
    var edit_text = id("com.coolapk.market:id/edit_text").className("android.widget.EditText").checked(false).findOne(500);
    if (edit_text) {
        click(edit_text.bounds().centerX() + random(-5, 5), edit_text.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件"+edit_text);
    };
    sleep(500);
    setText(data.content+"\n\n"+data.attachmentContent)
    sleep(1000)
    var 发布 = id("com.coolapk.market:id/submit_view").text("发布").findOne(500);
    if (发布) {
        click(发布.bounds().centerX(), 发布.bounds().centerY());
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件"+发布);
    };

}

// Fatie()
module.exports = fatie;