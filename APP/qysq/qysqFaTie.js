
// var data = {
//     "qysqUri":"",
//     "reply_content":""
// }
var data = {
    "tag": "影视", // 标签
    "title": "布蕾4K，观影革命", // 贴子标题
    "content": "💥 布蕾4K，观影革命！💥\n👑 极致画质，影院级享受！\n🚀 超快播放，告别缓冲！\n🔥 海量资源，想看就看！\n\n立刻下载，观影从此不同！", // 贴子内容
    "attachmentTitle": "下载链接", // 附件标题
    "attachmentContent": "https://ts0616.lanzn.com/iwE0X2712umf", // 附件内容/链接
}
qysqFaTie(data)

function qysqFaTie(data) {

    // 启动应用
    app.startActivity({
        action: "android.intent.action.MAIN",
        packageName: "com.qiyiapp.cloud",
        className: "com.uzmap.pkg.LauncherUI",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });

    text("确认").waitFor();
    sleep(500);
    text("确认").findOne().clickCenter();
    sleep(500);
    id('launch-btn').findOne().clickCenter();
    sleep(1000);
    text("社区").findOne().clickCenter();
    sleep(500)
    text("实用软件").findOne().clickCenter();
    sleep(500)
    text("add").findOne().clickCenter();
    text('发布帖子').waitFor();
    sleep(500)
    setText(0, data.title)
    sleep(500)
    click(device.width / 2, device.height / 2)
    sleep(500)
    setText(1, data.content + "\n" + data.attachmentTitle + "\n" + data.attachmentContent)
    sleep(1500)
    var img = id("emojibtn").findOne(500);
    img.clickCenter()
    sleep(500)

    var tvCheck =id('com.qiyiapp.cloud:id/ps_tv_select').find()
    for (var i = 2; i > -1; i--) {
        click(tvCheck[i].bounds().centerX() + random(-5, 5), tvCheck[i].bounds().centerY() + random(-5, 5));
        sleep(500);
    }
    sleep(500)
    var 选择 =id('com.qiyiapp.cloud:id/ps_btn_ensure').findOne(500)
    sleep(500)
    选择.clickCenter()
    sleep(3000)

    text("选择社区").findOne(5000).clickCenter();
    sleep(1000)
    text("实用软件").findOne(500).clickCenter();
    sleep(1000)
    text("完成").findOne(500).clickCenter();

    toastLog("奇异社区发帖脚本运行结束")
}