
// var page_fatie = require(engines.myEngine().cwd() + "pages/page_fatie.js")
var page_fatie = require("../pages/page_fatie.js")
// var getTuUtil = require(engines.myEngine().cwd() + "util/getTuUtil.js")
var getTuUtil = require("../util/getTuUtil.js")
// var killApp = require(engines.myEngine().cwd() + "util/killApp.js")
var killApp = require("../util/killApp.js")
var app = []

var page_fatie_main = {
    ui: ui.inflate(
        <vertical>
            <appbar gravity="center" bg="#ffffff" h="45dp">
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

            <frame h="*">
                <vertical>
                    <vertical>
                        <horizontal margin="10 0">
                            <button w="auto" id="batch_post" text="批量发帖" />
                            <button w="auto" id="custom_post" text="自定义发帖" />
                        </horizontal>
                    </vertical>
                    <vertical id="v1" visibility="gone">
                        <vertical margin="10 0">
                            <button h="40dp" id="selectFile" bg="#87CEFA" w="auto" text="选择文件..." />
                            <text id="fileName" text="请选择文件" />
                        </vertical>
                    </vertical>
                </vertical>
                <vertical id="loading" visibility="gone" h="auto" w="*" layout_gravity="center">
                    <text gravity="center" text="图片下载中..." textColor="black" textSize="16sp" />
                    <progressbar gravity="center" />
                </vertical>
                <button marginRight="60dp" marginBottom="100dp" layout_gravity="bottom|right" h="auto" w="auto" id="start" style="Widget.AppCompat.Button.Colored" text="开始运行" />
            </frame>
        </vertical>
    ),
    initList: function () {
        let imgRequestCode = 1;
        let audioRequestCode = 2;
        let videoRequestCode = 3;
        let imgAndVideoRequestCode = 4;
        let imgAnyFileRequestCode = 5;
        let filepath = "";

        // 返回监控
        ui.returned.on("click", function () {
            console.log("点击了返回");
            page_main.activate();
        });

        ui.batch_post.click(function () {
            ui.v1.attr("visibility", "visible")
        })

        // 批量发帖
        ui.selectFile.click(function () {
            let fileType = "*/*";
            let requestCode = imgAnyFileRequestCode;
            var intent = new Intent();
            intent.setType(fileType);
            intent.setAction(Intent.ACTION_GET_CONTENT);
            activity.startActivityForResult(intent, requestCode);
        })

        activity.getEventEmitter().on("activity_result", (requestCode, resultCode, data) => {
            try {
                /* 可能会抛出异常的代码块 */
                var uri = data.getData();
                log("uri: %s", uri.toString());
                filepath = URIUtils_uriToFile(uri);
                // log(filepath);
                // files.getExtension(filepath) == "xlsx" ? ui.fileName.setText(filepath) : toastLog("请选择格式xlsx的文件");
                ui.fileName.setText(filepath)
                if (ui.fileName.text != "请选择格式xlsx的文件") {
                    ui.selectFile.setText("重新选择")
                    ui.selectFile.attr("bg", "#EED8AE")
                }
            } catch (error) {
                /* 处理异常的代码块 */
                // toastLog("请选择格式xlsx的文件");
                console.error(error);
            }

        })

        // 自定义发帖
        ui.custom_post.click(function () {
            page_fatie.activate(app);
        })

        // 开始运行
        ui.start.on("click", () => {
            // var excel = require("../util/excel.js");
            var excel = require(engines.myEngine().cwd() + "util/excel.js");
            log("开始运行")

            // 拿到数据
            var data = excel(filepath)
            // log(data)

            // 创建一个 Handler 来处理主线程中的UI更新
            const handler = new android.os.Handler(android.os.Looper.getMainLooper());

            threads.start(function () {// 对图片进行连接进行处理
                for (var j = 0; j < data.length; j++) {
                    // 使用 Handler 来更新UI
                    handler.post(function () {
                        ui.loading.attr("visibility", "visible");
                    });

                    // 下载图片
                    var imgs = data[j].uri.split("|")
                    data[j].attachmentTitle = "下载链接"
                    // log(imgs)
                    getTuUtil(imgs)

                    // 使用 Handler 来更新UI
                    handler.post(function () {
                        ui.loading.attr("visibility", "gone");
                    });
                    sleep(3000)

                    // 开始发帖
                    // 即将开始执行自动发帖
                    console.log("即将开始执行自动发帖");
                    console.log("开始发帖");
                    for (var i = 0; i < app.length; i++) {
                        switch (app[i]) {
                            case "酷安":
                                console.log("进入酷安发帖");
                                var kuAnFatie = require("../APP/kuAn/kuAnFatie.js");
                                kuAnFatie(data[j])
                                killApp("酷安")
                                break;
                            case "奇妙应用":
                                var qmyyFaTie = require("../APP/qmyy/qmyyFatie.js");
                                console.log("进入奇妙应用发帖");
                                qmyyFaTie(data[j]);
                                killApp("奇妙应用")
                                break;
                            case "奇异社区":
                                var jmkjFaTie = require("../APP/jmkj/jmkjFatie.js");
                                console.log("进入奇异社区发帖");
                                break;
                            case "芥末空间":
                                var jmkjFaTie = require("../APP/jmkj/jmkjFatie.js");
                                console.log("进入芥末空间发帖");
                                jmkjFaTie(data[j])
                                killApp("芥末空间")
                                break;
                            default:
                                toastLog("暂不支持该应用");
                                return
                        }
                    }
                    if (j == data.length - 1) {
                        toastLog("批量发帖结束")
                    }
                }
            })

        })
        // 获取文件路径
        function URIUtils_uriToFile(uri) {
            //Source : https://www.cnblogs.com/panhouye/archive/2017/04/23/6751710.html
            var r = null,
                cursor,
                column_index,
                selection = null,
                selectionArgs = null,
                isKitKat = android.os.Build.VERSION.SDK_INT >= 19,
                docs;
            if (uri.getScheme().equalsIgnoreCase("content")) {
                if (isKitKat && android.provider.DocumentsContract.isDocumentUri(activity, uri)) {
                    if (String(uri.getAuthority()) == "com.android.externalstorage.documents") {
                        docs = String(android.provider.DocumentsContract.getDocumentId(uri)).split(":");
                        if (docs[0] == "primary") {
                            return android.os.Environment.getExternalStorageDirectory() + "/" + docs[1];
                        }
                    } else if (String(uri.getAuthority()) == "com.android.providers.downloads.documents") {
                        uri = android.content.ContentUris.withAppendedId(
                            android.net.Uri.parse("content://downloads/public_downloads"),
                            parseInt(android.provider.DocumentsContract.getDocumentId(uri))
                        );
                    } else if (String(uri.getAuthority()) == "com.android.providers.media.documents") {
                        docs = String(android.provider.DocumentsContract.getDocumentId(uri)).split(":");
                        if (docs[0] == "image") {
                            uri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
                        } else if (docs[0] == "video") {
                            uri = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
                        } else if (docs[0] == "audio") {
                            uri = android.provider.MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
                        }
                        selection = "_id=?";
                        selectionArgs = [docs[1]];
                    }
                }
                try {
                    cursor = activity.getContentResolver().query(uri, ["_data"], selection, selectionArgs, null);
                    if (cursor && cursor.moveToFirst()) {
                        r = String(cursor.getString(cursor.getColumnIndexOrThrow("_data")));
                    }
                } catch (e) {
                    log(e);
                }
                if (cursor) cursor.close();
                return r;
            } else if (uri.getScheme().equalsIgnoreCase("file")) {
                return String(uri.getPath());
            }
            return null;

        }
    },
    activate: function (apps) {
        app = apps
        console.log(app);
        setContainer(this.ui);
        if (!this.inited) this.initList();
        this.inited = true;
    },
}

module.exports = page_fatie_main;