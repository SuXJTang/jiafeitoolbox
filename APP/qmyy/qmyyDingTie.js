
// 顶贴
function dingtie() {
    // 获取设备信息
    var w = device.width;
    var h = device.height
    //用户名
    var username;

    // boolean 变量
    var stop = false;

    //打开应用
    app.startActivity({
        action: "android.intent.action.MAIN",
        packageName: "com.magicalstory.AppStore",
        className: "com.magicalstory.AppStore.main.MainActivity",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });

    /*等待屏幕上出现符合条件的控件；在满足该条件的控件出现之前，该函数会一直保持阻塞。出现后才会执行下面的代码  */
    var my = id("com.magicalstory.AppStore:id/person").desc("我的").className("android.widget.FrameLayout").checked(false).waitFor();
    // 判断是否进入主页面
    var returned = id("com.magicalstory.AppStore:id/person").desc("我的").className("android.widget.FrameLayout").checked(false).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    };
    // 给用户名赋值
    sleep(1000);
    username = id("com.magicalstory.AppStore:id/nickname").findOne().text();

    // 进行贴子回复 判断贴子是否回复成功
    while (true) {
        if (stop) {
            break;
        }
        operatePost()
        back();
        sleep(1000);
        back();
        sleep(1000);

    }




    // ----------------- 方法区 -----------------

    // 操作贴子
    function operatePost() {
        //判断我的帖子
        var myPosty = id("com.magicalstory.AppStore:id/item_posts")
            .className("android.widget.LinearLayout")
            .checked(false)
            .findOne(500);
        if (myPosty) {
            //如果存在点击我的贴子
            click(
                myPosty.bounds().centerX() + random(-5, 5),
                myPosty.bounds().centerY() + random(-5, 5)
            );
            sleep(500);
        } else {
            //不存在，左划
            var returned = className("android.widget.LinearLayout").depth(6).checked(false).findOne(500);
            if (returned) {
                var coordinate = returned.bounds()
                var coordinate_centerY = (returned.bounds().bottom - returned.bounds().top) / 2 + returned.bounds().top;
                var coordinate_centerX1 = (returned.bounds().right - returned.bounds().left) / 5 * 4 + returned.bounds().left;
                var coordinate_centerX2 = (returned.bounds().right - returned.bounds().left) / 5 + returned.bounds().left;
                swipe(coordinate_centerX1, coordinate_centerY, coordinate_centerX2, coordinate_centerY, 750)
                sleep(500);
            } else {
                toastLog("未找到符合条件的控件");
            };
            var returned = id("com.magicalstory.AppStore:id/item_posts").className("android.widget.LinearLayout").checked(false).findOne(500);
            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(500);
            } else {
                toastLog("未找到符合条件的控件");
            };
        }


        // 判断需要顶贴，需要顶贴，不需停止当前的脚本
        sleep(1000);
        var t = id("com.magicalstory.AppStore:id/time").findOne(500);
        // var txt = "55分钟前活跃 3小时前发布" // 用于测试
        var txt = t.text();
        var bool = getActiveTime(txt)
        log(bool)
        if (bool) {
            console.log("可以顶贴");
            kongjian.clickById("com.magicalstory.AppStore:id/name");
        } else {
            // 不可以顶贴
            home();
            stop = true;
        }
        sleep(500);

        // 判断是否弹出连接失败
        var link = id("com.magicalstory.AppStore:id/txt_dialog_title").findOne(500);
        if (link) {
            click(link.bounds().centerX(), link.bounds().centerY())
            back();
        }
        sleep(500)

        //判断是否在贴子里面
        if (id("com.magicalstory.AppStore:id/like").findOne(500) != null) {
            console.log("进入贴子内了");
            reply();
        } else {
            console.log("未进入贴子内");
        }
    }

    /**
     * 判断第一个贴子的活跃的时间
     * 活跃时间>45分钟则顶贴
     * 否则不顶
     */
    function getActiveTime(txt) {
        console.log(txt);

        var str = txt;
        var patt = /(\d+)\s*([\u4e00-\u9fa5]+)\s*前/g;
        var result = patt.exec(str);

        // 打印结果数组的第一个匹配
        if (result) {
            console.log(result[0]);

            if (result[2] === "分钟") {
                if (result[1] > 45) {
                    console.log("超过45分钟了");
                    return true;
                } else {
                    toastLog("未超过45分钟,不用顶贴");
                    return false;
                }
            } else {
                console.log("超过45分钟了");
                return true;
            }
        } else {
            console.log("没有找到匹配");
            return false;
        }
    }

    // 回复评论区
    function reply() {
        while (true) {
            var pingLunQu = id("com.magicalstory.AppStore:id/title_comment").text("评论区").className("android.widget.TextView").checked(false).findOne(500);
            if (pingLunQu) {
                var pingLunquNull = text("暂无评论").className("android.widget.TextView").checked(false).findOne(500);
                if (pingLunquNull) {
                    var button_replay = id("com.magicalstory.AppStore:id/button_replay").className("android.view.ViewGroup").checked(false).findOne(500);
                    if (button_replay) {
                        click(button_replay.bounds().centerX() + random(-5, 5), button_replay.bounds().centerY() + random(-5, 5));
                        sleep(500);
                        setText("哎哟不错哟，我拿走了")
                        sleep(500);
                        break;
                    }
                } else {
                    // 判断评论区位置是否不在屏幕内
                    while (true) {
                        var pingLunQu = id("com.magicalstory.AppStore:id/title_comment").text("评论区").className("android.widget.TextView").checked(false).findOne(500);
                        if (pingLunQu.bounds().top > h) {
                            scrollDown();
                        } else if (pingLunQu.bounds().bottom < 0) {
                            scrollUp();
                        } else {
                            break;
                        }
                    }

                    console.log("评论区不为空");

                    // 导航栏返回
                    var fanhui = className("android.widget.ImageButton").checked(false).findOne(500).bounds();

                    while (true) {
                        var bool = false;
                        var item = id("com.magicalstory.AppStore:id/item").find();
                        for (var i = 0; i < item.length; i++) {
                            var zkjname = item[i].children()[1];
                            if (zkjname.text() == username) {
                                console.log("找到目标用户");

                                // 判断锁定用户到导航栏返回的距离

                                if (zkjname.parent().bounds().top - fanhui.bottom <= 0) {
                                    scrollUp()
                                    console.log("锁定用户到导航栏返回的距离：" + (zkjname.parent.bounds().top - fanhui.bottom));
                                } else {
                                    console.log("锁定用户到导航栏返回的距离：" + (zkjname.parent().bounds().top - fanhui.bottom));
                                    // 这个位置可以进入回复弹窗
                                    click(zkjname.bounds().centerX(), zkjname.bounds().centerY())
                                    sleep(1000)
                                    kongjian.clickById("com.magicalstory.AppStore:id/button_emoji")
                                    sleep(1000)
                                    for (var i = 0; i < random(6, 8); i++) {
                                        var returned = id("com.magicalstory.AppStore:id/item")
                                            .className("android.widget.FrameLayout")
                                            .checked(false)
                                            .find();
                                        var zb = returned[random(0, returned.length - 1)].bounds();
                                        click(zb.centerX(), zb.centerY());
                                        sleep(500);
                                    }
                                    kongjian.clickById("com.magicalstory.AppStore:id/button_post");
                                    console.log("回复完成");
                                    sleep(3000);
                                }
                                bool = true;
                                break;
                            }
                        }
                        if (bool) {
                            break;
                        }
                        scrollDown();
                        sleep(500)
                    }
                    break;
                }
            }
            scrollDown();
        }
    }
}

