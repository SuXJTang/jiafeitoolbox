/**
 * 创建时间：2021-08-01 17:05:04
 * 修改时间：2021-08-01 17:05:04
 * 修改内容：
 * 脚本名称：killApp.js
 * 脚本功能：杀死应用
 * 脚本作者：jiafei
 * 脚本版本：1.0.0
 * 描述：芥末空间自动发帖脚本 适用于无障碍模式
 */


// var data = {
//     "tag": "影视", // 标签
//     "title": "布蕾4K，观影革命", // 贴子标题
//     "content": "💥 布蕾4K，观影革命！💥\n👑 极致画质，影院级享受！\n🚀 超快播放，告别缓冲！\n🔥 海量资源，想看就看！\n\n立刻下载，观影从此不同！", // 贴子内容
//     "attachmentTitle": "下载链接", // 附件标题
//     "attachmentContent": "https://ts0616.lanzn.com/iwE0X2712umf", // 附件内容/链接
// }

// jmkjFaTie(data)

// --------------- 导入模块 ---------------
var killApp = require(engines.myEngine().cwd() + "/util/killApp.js");

function jmkjFaTie(data) {
    // 启动应用
    app.startActivity({
        action: "android.intent.action.MAIN",
        packageName: "com.jmbbs2023",
        className: "com.jmbbs2023.main",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });

    textStartsWith("跳过").waitFor();
    sleep(2000);
    textStartsWith("跳过").findOne().clickCenter();
    sleep(1000)
    id('com.jmbbs2023:id/xxbj7fb').findOne().clickCenter();
    sleep(1500)
    id('com.jmbbs2023:id/tx2').findOne().clickCenter();
    text("发布").waitFor();
    sleep(500)
    text('发布到').findOne().clickCenter()
    sleep(1000)
    text('实用软件').findOne().clickCenter()
    sleep(1000)
    text('选择该板块').findOne().clickCenter()
    sleep(1000)
    setText(0, data.title)
    sleep(500)
    click(device.width / 2, device.height / 2)
    sleep(500)
    setText(1, data.content + "\n" + data.attachmentTitle + "\n" + data.attachmentContent)
    sleep(500)
    id('com.jmbbs2023:id/tx9').findOne().clickCenter()
    sleep(1000)
    for (var i = 2; i > -1; i--) {
        id('com.jmbbs2023:id/tx26').findOne().clickCenter()
        text('拍摄照片').waitFor()
        sleep(1000)
        var kj = id('com.jmbbs2023:id/mTvIndex').find()
        kj[i].clickCenter()
        sleep(500)
        text('完成').findOne().clickCenter()
        id('com.jmbbs2023:id/kp8').waitFor()
        sleep(1000)
    }
    text("发布").findOne(500).clickCenter()
    sleep(1000)
    home()
    // 杀死应用
    killApp("com.jmbbs2023")
    toastLog("芥末空间发帖脚本运行结束")
}

module.exports = jmkjFaTie;
