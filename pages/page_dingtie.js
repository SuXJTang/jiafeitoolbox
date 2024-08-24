"ui";
ui.statusBarColor("#ffffff");

var page_dingtie = {
    ui: ui.inflate(
        <frame>
            <vertical w="*" h="*" clickable="true">
                <appbar gravity="center" bg="#ffffff" h="45dp">
                    <horizontal h="*">
                        <vertical id="returned" h="*" gravity="center" marginLeft="10dp">
                            <horizontal>
                                <img w="20dp" h="20dp" src="https://jiafeitoolbox.oss-cn-beijing.aliyuncs.com/%E8%BF%94%E5%9B%9E%20(2).png"></img>
                                <text w="auto" textColor="#000000">返回</text>
                            </horizontal>
                        </vertical>
                        <vertical h="*" w="*" gravity="center">
                            <text gravity="right" marginRight="10" textColor="#000000">顶帖</text>
                        </vertical>
                    </horizontal>
                </appbar>
                <vertical>
                    <text gravity="center" textColor="red">进入了顶帖页面</text>
                </vertical>
                <vertical h="200" bg="#B0C4DE">
                    <img w="*" marginTop="0" src="https://jiafeitoolbox.oss-cn-beijing.aliyuncs.com/pexels-stywo-1054218.jpg"></img>
                </vertical>
                <card cardBackgroundColor="#E6E6FA" margin="0 1" cardCornerRadius="6">
                    <vertical>
                        <text bg="#BEBEBE" marginTop="10" textSize="15sp" textColor="#000000" gravity="center">回复内容</text>
                        <input bg="#FDF5E6" margin="10 5" textSize="15sp" id="reply_content" w="*" lines="3" hint="输入要顶的贴子链接" gravity="center"></input>
                    </vertical>
                </card>
                <vertical margin="0 0 0 10" bg="#B0C4DE">
                    <horizontal margin="20 0">
                        <text textColor="#000000">酷    安：</text>
                        <input id="kuAn" w="*" singleLine="true" hint="输入要顶的贴子内容"></input>
                    </horizontal>
                    <horizontal margin="20 -10">
                        <text textColor="#000000">奇妙社区：</text>
                        <input id="qmsq" w="*" singleLine="true" hint="输入要顶的贴子链接"></input>
                    </horizontal>
                    <card cardBackgroundColor="#54FF9F" cardCornerRadius="6" margin="3 10">
                        <vertical foreground="?selectableItemBackground">
                            <text margin="10 10 10 0" textColor="#000000">注意：执行规则</text>
                            <text margin="10 0 10 10" id="default_content" />
                        </vertical>
                    </card>
                </vertical>
                <vertical>
                    <button layout_gravity="right" w="auto" id="start" style="Widget.AppCompat.Button.Colored" text="开始运行" />
                </vertical>
            </vertical>
        </frame>
    ),
    initList: function () {
        // ------------ 模块导入 ------------
        // var kuAnDingTie = require(engines.myEngine().cwd() + "app/kuAn/kuAnDingTie.js")
        var kuAnDingTie = require("../APP/kuAn/kuAnDingTie.js")

        // 返回按钮
        ui.returned.on("click", function () {
            console.log("点击了开始运行");
            page_main.activate();
        })

        // ------------ 逻辑处理 ------------

        // ui数据初始化
        ui.run(() => {
            // 默认回复内容
            var default_content = "默认回复内容\n酷  安：[酷币][酷币][酷币]\n奇妙社区：xxxxx"
            ui.default_content.attr("text", default_content)
        })

        // 监控开始运行按钮
        var dataUri_data = []
        ui.start.on("click", () => {
            // 即将开始执行自动顶帖
            console.log("即将开始执行自动顶帖");
            // 判断有没有自定义的回复内容
            var reply_content = ui.reply_content.getText()
            if (reply_content != "") {
                reply_content = ui.reply_content.getText().toString();
            } else {
                reply_content = "[酷币][酷币][酷币]"
            }
            // 获取要顶帖的链接
            var kuAnUri = ui.kuAn.getText();
            var qmsqUri = ui.qmsq.getText();

            if (ui.kuAn.getText() != "") {
                log("要顶帖的酷安链接：", kuAnUri);
                // var reply_content = "[酷币][酷币][酷币]"
                // var kuAnUri = "https://www.coolapk.com/feed/57719885?shareKey=NzY2MzY0YjFjMTc0NjZiYjIzY2Y~&shareUid=1171344&shareFrom=com.coolapk.market_14.1.2"
                threads.start(function () {
                    log("开始顶帖");
                    kuAnDingTie(kuAnUri, reply_content)
                })
            }
            if (ui.qmsq.getText() != "") {
                toastLog("暂时未开发")
                // log("要顶帖的奇妙社区链接：", qmsqUri);
            }
        })

    },
    activate: function () {
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    }
}

module.exports = page_dingtie;
