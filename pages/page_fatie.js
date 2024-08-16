"ui";
// ----------------- 全局变量 -----------------
var app = [];


var page_fatie = {
    ui: ui.inflate(
        <vertical>
            <appbar gravity="center" bg="#B0C4DE" h="45dp">
                <horizontal h="*">
                    <vertical id="returned" h="*" gravity="center" marginLeft="10dp">
                        <horizontal>
                            <img w="20dp" h="20dp" src="https://jiafeitoolbox.oss-cn-beijing.aliyuncs.com/%E8%BF%94%E5%9B%9E%20(2).png"></img>
                            <text w="auto" textColor="#000000">返回</text>
                        </horizontal>
                    </vertical>
                    <vertical h="*" w="*" gravity="center">
                        <text gravity="right" marginRight="10" textColor="#000000">发帖</text>
                    </vertical>
                </horizontal>
            </appbar>
            <ScrollView>
                <vertical>
                    <vertical bg="#00ccff">
                        <text text="标题" textColor="#000000" h="30dp" gravity="center" />
                        <input
                            id="title"
                            textColor="#000000"
                            hint="请输入标题..."
                            bg="#DCDCDC"
                            margin="10 0 10 10"
                            textSize="14dp"
                        />
                    </vertical>

                    <vertical bg="#00ccff" marginTop="10dp">
                        <text
                            text="贴子内容"
                            textColor="#000000"
                            h="30dp"
                            gravity="center"
                        />
                        <input
                            id="content"
                            textColor="#000000"
                            lines="10"
                            hint="请输入发帖内容..."
                            bg="#DCDCDC"
                            margin="10 0 10 10"
                            textSize="12dp"
                        />
                    </vertical>

                    <vertical bg="#00ccff" marginTop="10dp">
                        <text
                            text="附件内容"
                            textColor="#000000"
                            h="30dp"
                            gravity="center"
                        />
                        <input
                            id="attachmentContent"
                            textColor="#000000"
                            lines="3"
                            hint="请输入附件内容..."
                            bg="#DCDCDC"
                            margin="10 0 10 10"
                            textSize="12dp"
                        />
                    </vertical>

                    <vertical bg="#00ccff" marginTop="10dp">
                        <text text="标签" textColor="#000000" h="30dp" gravity="center" />
                        <input
                            id="tag"
                            textColor="#000000"
                            singleLine="true"
                            hint="例如：漫画(选择了酷安请给一个标签)"
                            bg="#DCDCDC"
                            margin="10 0 10 10"
                            textSize="12dp"
                        />
                    </vertical>

                    <vertical bg="#00ccff" marginTop="10dp">
                        <text text="图片" textColor="#000000" h="30dp" gravity="center" />
                        <vertical bg="#DCDCDC" margin="10 0 10 10">
                            <horizontal>
                                <text text="图片1：" textColor="#000000" />
                                <input
                                    id="tu1"
                                    textSize="14sp"
                                    textColorHint="#FF0000"
                                    hint="必填"
                                    w="*"
                                    text="https://huishi-big-event.oss-cn-beijing.aliyuncs.com/MyComic%20%283%29.jpg"
                                    singleLine="true"
                                ></input>
                            </horizontal>
                            <horizontal>
                                <text text="图片2：" textColor="#000000" />
                                <input
                                    id="tu2"
                                    textSize="14sp"
                                    hint="图片连接..."
                                    w="*"
                                    singleLine="true"
                                ></input>
                            </horizontal>
                            <horizontal>
                                <text text="图片3：" textColor="#000000" />
                                <input
                                    id="tu3"
                                    textSize="14sp"
                                    hint="图片连接..."
                                    w="*"
                                    singleLine="true"
                                ></input>
                            </horizontal>
                        </vertical>
                    </vertical>

                    <vertical>
                        <button
                            id="startFatie"
                            text="开始发贴"
                            w="*"
                            h="auto"
                            margin="10"
                            bg="#00BFFF"
                        />
                    </vertical>
                </vertical>
            </ScrollView>
        </vertical>
    ),
    initList: function () {
        // ----------------- 模块导入 -----------------
        // var kuAnFatie = require(engines.myEngine().cwd() + "APP/kuAn/kuAnFatie");
        var kuAnFatie = require("../APP/kuAn/kuAnFatie");
        // var qmyyFaTie = require(engines.myEngine().cwd() + "APP/qmyy/qmyyFaTie");
        var qmyyFaTie = require("../APP/qmyy/qmyyFaTie");
        // var getHttpImg = require(engines.myEngine().cwd() + "util/getTuUtil.js")
        var getHttpImg = require("../util/getTuUtil.js")
        // var jmkjFaTie = require(engines.myEngine().cwd() + "APP/jmkj/jmkjFaTie.js")
        var jmkjFaTie = require("../APP/jmkj/jmkjFaTie.js")
        // var killApp = require(engines.myEngine().cwd() + "/util/killApp.js");
        var killApp = require("../util/killApp.js");

        // ----------------- 变量定义 -----------------
        var imgs = [ui.tu1.getText(), ui.tu2.getText(), ui.tu3.getText()]

        // ----------------- 数据区域 -----------------
        var data = {
            "tag": "影视", // 标签
            "title": "布蕾4K，观影革命", // 贴子标题
            "content": "💥 布蕾4K，观影革命！💥\n👑 极致画质，影院级享受！\n🚀 超快播放，告别缓冲！\n🔥 海量资源，想看就看！\n\n立刻下载，观影从此不同！", // 贴子内容
            "attachmentTitle": "下载链接", // 附件标题
            "attachmentContent": "https://ts0616.lanzn.com/iwE0X2712umf", // 附件内容/链接
        }

        // ----------------- 功能区域 -----------------
        console.log("进入了发帖页面");
        // console.log("选择的应用：", data);

        // 返回监控
        ui.returned.on("click", function () {
        // var page_fatie_main = require(engines.myEngine().cwd() + "pages/page_fatie_main.js")
        var page_fatie_main = require("../pages/page_fatie_main.js")
            console.log("点击了返回");
            page_fatie_main.activate("");
        });

        // 开始监控
        ui.startFatie.click(function () {
            // 判断标题和内容是否为空
            if (!isEmpty()) {
                // 获取图片
                threads.start(function () {
                    getHttpImg(imgs)
                })
                console.log("即将开始执行自动发帖");
                threads.start(() => {
                    // 内容标题赋值
                    data.tag = ui.tag.text()
                    data.title = ui.title.text()
                    data.content = ui.content.text()
                    data.attachmentContent = ui.attachmentContent.text()

                    // 开始发帖
                    console.log("开始发帖");
                    for (var i = 0; i < app.length; i++) {
                        switch (app[i]) {
                            case "酷安":
                                console.log("进入酷安发帖");
                                kuAnFatie(data)
                                killApp("com.coolapk.market")
                                break;
                            case "奇妙应用":
                                console.log("进入奇妙应用发帖");
                                qmyyFaTie(data);
                                killApp("com.qimiaoyou.app")
                                break;
                            case "奇异社区":
                                console.log("进入奇异社区发帖");
                                break;
                            case "芥末空间":
                                console.log("进入芥末空间发帖");
                                jmkjFaTie(data)
                                killApp("com.jmbbs2023")
                                break;
                            default:
                                toastLog("暂不支持该应用");
                                return
                        }
                    }
                })
            }
        });
    },
    activate: function (apps) {
        app = apps
        console.log(app);
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    }
}

// 判断标题和内容是否为空
function isEmpty() {
    var title = ui.title.getText();
    var content = ui.content.getText();
    var attachmentContent = ui.attachmentContent.getText();
    log(title)
    if (title == "" || content == "" || attachmentContent == "") {
        toastLog("标题或内容不能为空");
        return true;
    }
}



module.exports = page_fatie;