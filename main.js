"ui";

ui.layout(
    <drawer id="drawer">
        <frame id="body" h="*" w="*"></frame>
    </drawer>
);

function setContainer(v) {
    ui.body.removeAllViews();
    ui.body.addView(v, new android.widget.FrameLayout.LayoutParams(-1, -1));
}

var page_main = {
    ui: ui.inflate(
        <frame>
            <vertical>
                <vertical margin="0 10" clickable="true">
                    <img
                        h="100dp"
                        src="https://huishi-big-event.oss-cn-beijing.aliyuncs.com/IMG_20240727_121538.jpg"
                    />
                </vertical>

                <card
                    margin="8"
                    cardBackgroundColor="#F5F5F5"
                    cardCornerRadius="8"
                    w="*"
                    contentPadding="12"
                >
                    {/* 选择要打开的应用 */}
                    <vertical w="*" h="auto">
                        <vertical>
                            <text
                                w="*"
                                padding="10 10"
                                text="选择要打开的应用"
                                textColor="#000000"
                            />
                        </vertical>
                        <horizontal margin="10" h="auto">
                            <checkbox text="奇妙社区" id="checkbox1" />
                            <checkbox text="酷安" id="checkbox2" />
                            <checkbox text="葫芦侠" id="checkbox3" />
                        </horizontal>
                    </vertical>
                </card>

                <card
                    margin="8"
                    cardBackgroundColor="#F5F5F5"
                    cardCornerRadius="8"
                    w="*"
                    contentPadding="12"
                >
                    {/* 功能区选择 */}
                    <vertical w="*" h="auto">
                        <vertical>
                            <text w="*" padding="10 10" text="功能选择" textColor="#000000" />
                        </vertical>
                        <horizontal margin="10" h="auto">
                            <button id="dt" text="顶贴" />
                            <button id="ft" text="发帖" />
                            <button id="qd" text="签到" />
                        </horizontal>
                    </vertical>
                </card>

                <vertical>
                    <button
                        id="start"
                        text="开始运行"
                        w="*"
                        h="auto"
                        margin="10"
                        bg="#00FFFF"
                    />
                </vertical>
            </vertical>
        </frame>
    ),
    initList: function () {
        // ----------------- 数据定义 -----------------
        var apps = [];

        // ----------------- 选择应用 -----------------
        ui.checkbox1.on("check", function (checked) {
            if (checked) {
                apps.push("奇妙应用");
            } else {
                apps.pop("奇妙应用");
            }
        });
        ui.checkbox2.on("check", function (checked) {
            if (checked) {
                apps.push("酷安");
            } else {
                apps.pop("酷安");
            }
        });
        ui.checkbox3.on("check", function (checked) {
            if (checked) {
                apps.push("葫芦侠");
            } else {
                apps.pop("葫芦侠");
            }
        });

        // --------------- 功能选择和实现 -----------------
        // 顶贴
        var page_dingtie = require(engines.myEngine().cwd() + "pages/page_dingtie.js")
        ui.dt.on("click", () => {
            console.log("点击了顶帖");
            page_dingtie.activate();
        })

        // 发帖
        var page_fatie = require(engines.myEngine().cwd()+"pages/page_fatie.js")
        ui.ft.on("click", () => {
            console.log("点击了发帖");
            page_fatie.activate(apps);
        })

        // 签到
        var huluxia_sign_in = require(engines.myEngine().cwd()+"APP/huluxia/huluxia_sign_in")
        ui.qd.on("click", () => {
            console.log("点击了签到");
            if (data.includes("奇妙社区")) {
                console.log("开始 奇妙社区 签到");
                threads.start(function () {

                })
            }
            if (data.includes("酷安")) {
                console.log("开始 酷安 签到");
                threads.start(function () {

                })
            }
            if (data.includes("葫芦侠")) {
                console.log("开始 葫芦侠 签到");
                threads.start(function () {
                    huluxia_sign_in();
                })
            }
            if (data.length == 0) {
                toastLog("请选择要运行的应用")
            }
        })

        // 开始运行
        ui.start.on("click", () => {
            console.log("点击了开始运行");
            
        })
    },
    activate: function () {
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    },
};

// 激活页面
page_main.activate();

