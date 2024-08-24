
// var data = {
//     "tag": "影视", // 标签
//     "title": "布蕾4K，观影革命", // 贴子标题
//     "content": "💥 布蕾4K，观影革命！💥\n👑 极致画质，影院级享受！\n🚀 超快播放，告别缓冲！\n🔥 海量资源，想看就看！\n\n立刻下载，观影从此不同！", // 贴子内容
//     "attachmentTitle": "下载链接", // 附件标题
//     // "attachmentContent": " ", // 附件内容
//     "attachmentContent": "https://ts0616.lanzn.com/iwE0X2712umf", // 附件内容/链接
//     // "attachmentUrl": "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", // 附件链接
// }


// qmsqfatie(data)
// --------------------- 发贴 ---------------------  
function qmsqfatie(data) {
    // 清理软件缓存
    var packageName = "com.magicalstory.AppStore"; // 包名
    app.openAppSetting(packageName)
    text("存储").findOne().clickCenter()
    text("清除缓存").findOne().clickCenter()
    var packageName = 'com.android.settings'
    var sh = new Shell(true);
    sh.exec("am force-stop " + " " + packageName);
    sh.exit();
    toastLog("清理完成");
    sleep(3000)

    //打开应用
    app.startActivity({
        action: "android.intent.action.MAIN",
        packageName: "com.magicalstory.AppStore",
        className: "com.magicalstory.AppStore.main.MainActivity",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });

    // 检测更新弹窗
    var thread = threads.start(function () {
        //在新线程执行的代码
        while (true) {
            // 版本更新
            if (textContains("发现新版本").exists()) {
                text("忽略此版本").findOne().clickCenter();
                echo_log('关闭更新');
            }
        }
    });



    // 通过判断搜索框确定是否到达首页
    var searchBar = id("com.magicalstory.AppStore:id/home").desc("首页").className("android.widget.FrameLayout").checked(false).waitFor();
    console.log("进入首页");
    sleep(500);

    // 点击广场
    var square = id("com.magicalstory.AppStore:id/square").desc("广场").className("android.widget.FrameLayout").checked(false).findOne(500);
    if (square) {
        click(square.bounds().centerX() + random(-5, 5), square.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);

    // 点击 实用软件
    // 关闭更新检测子线程
    thread.interrupt();
    var 实用软件 = id("com.magicalstory.AppStore:id/name").text("实用软件").className("android.widget.TextView").checked(false).findOne(500);
    if (实用软件) {
        click(实用软件.bounds().centerX() + random(-5, 5), 实用软件.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);

    // 点击 +
    var jiahao = id("com.magicalstory.AppStore:id/fab").className("android.widget.ImageButton").checked(false).findOne(500);
    if (jiahao) {
        click(jiahao.bounds().centerX() + random(-5, 5), jiahao.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);
    var 应用推荐 = id("com.magicalstory.AppStore:id/chip").text("应用推荐").className("android.widget.TextView").checked(false).findOne(500);
    if (应用推荐) {
        click(应用推荐.bounds().centerX() + random(-5, 5), 应用推荐.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);

    // 设置贴子内容
    setText(0, data.title);
    sleep(500);
    var edittext_content = id("com.magicalstory.AppStore:id/edittext_content").text("正文").className("android.widget.EditText").checked(false).findOne(500);
    if (edittext_content) {
        click(edittext_content.bounds().centerX() + random(-5, 5), edittext_content.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    setText(1, data.content);
    sleep(500);

    // 加入图片
    var button_img = id("com.magicalstory.AppStore:id/button_img").className("android.widget.ImageView").checked(false).findOne(500);
    if (button_img) {
        click(button_img.bounds().centerX() + random(-5, 5), button_img.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);
    var ps_tv_title = id("com.magicalstory.AppStore:id/ps_tv_title").text("相机胶卷").className("android.widget.TextView").checked(false).waitFor();
    sleep(500);

    var tvCheck = id("com.magicalstory.AppStore:id/tvCheck").className("android.widget.TextView").checked(false).find()
    for (var i = 2; i > -1; i--) {
        click(tvCheck[i].bounds().centerX() + random(-5, 5), tvCheck[i].bounds().centerY() + random(-5, 5));
        sleep(500);
    }

    // 添加图片完成
    sleep(500);
    var ps_complete_select = id("com.magicalstory.AppStore:id/ps_complete_select").className("android.widget.LinearLayout").checked(false).findOne(500);
    if (ps_complete_select) {
        click(ps_complete_select.bounds().centerX() + random(-5, 5), ps_complete_select.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };

    //  判断 谁可以看 来确定是否可以添加附件
    var endNav = id("com.magicalstory.AppStore:id/button_emoji").className("android.widget.ImageView").checked(false).findOne(500);
    // log(endNav.bounds().top)
    if (endNav) {
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    while (true) {
        var whoLook = id("com.magicalstory.AppStore:id/textView6").text("谁可以看").className("android.widget.TextView").checked(false).findOne(500);
        // console.log(whoLook.bounds().bottom);

        if (whoLook) {
            if (whoLook.bounds().bottom < endNav.bounds().top) {
                break;
            } else {
                scrollDown()
                sleep(500)
            }
        } else {
            scrollDown()
            sleep(500);
        };
    }

    // 获取光标到正确位置
    var edittext_content = id("com.magicalstory.AppStore:id/edittext_content").className("android.widget.EditText").checked(false).find();
    var edittext_content_length = edittext_content.length - 1;
    click(edittext_content[edittext_content_length].bounds().centerX() + random(-5, 5), edittext_content[edittext_content_length].bounds().centerY() + random(-5, 5))
    sleep(500);
    // 点击附件
    var attachment = id("com.magicalstory.AppStore:id/button_file").className("android.widget.ImageView").checked(false).findOne(500);
    if (attachment) {
        click(attachment.bounds().centerX() + random(-5, 5), attachment.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);
    while (true) {
        var whoLook = id("com.magicalstory.AppStore:id/textView6").text("谁可以看").className("android.widget.TextView").checked(false).findOne(500);
        // console.log(whoLook.bounds().bottom);

        if (whoLook) {
            if (whoLook.bounds().bottom < endNav.bounds().top) {
                break;
            } else {
                scrollDown()
                sleep(500)
            }
        } else {
            scrollDown()
            sleep(500);
        };
    }
    sleep(500);
    text("设置硬币").findOne(500).clickCenter()
    sleep(500);

    // 添加附件
    setText(0, data.attachmentTitle);
    sleep(500);
    setText(1, data.attachmentContent);
    sleep(500);
    var setCoins = className("android.view.ViewGroup").checked(false).findOne(500);
    if (setCoins) {
        click(setCoins.bounds().centerX(), setCoins.bounds().centerY());
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);
    var coin1 = id("com.magicalstory.AppStore:id/txt_dialogx_menu_text").text("硬币1枚").className("android.widget.TextView").checked(false).findOne(500);
    if (coin1) {
        click(coin1.bounds().centerX() + random(-5, 5), coin1.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    sleep(500);
    var renew = id("com.magicalstory.AppStore:id/materialButton").text("更新").className("android.widget.Button").checked(false).findOne(500);
    if (renew) {
        click(renew.bounds().centerX() + random(-5, 5), renew.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };

    // 发布
    var 发布 = id("com.magicalstory.AppStore:id/materialButton").text("发布").className("android.widget.Button").checked(false).findOne(500);
    if (发布) {
        click(发布.bounds().centerX() + random(-5, 5), 发布.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };

    // 判断贴子是否成功发布
    var release_judgment = id("com.magicalstory.AppStore:id/name").className("android.widget.TextView").checked(false).findOne(25000);
    if (release_judgment) {
        toastLog("发布成功！");
    } else {
        toastLog("发布失败！");
    }
}

module.exports = qmsqfatie;



