"ui";

// Fatie()

function Fatie(data) {
    ui.layout(
        <vertical>
            <ScrollView>
                <vertical>
                    <vertical bg="#00ccff" marginTop="20dp">
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
    );

    // ----------------- 功能区域 -----------------
    console.log("进入了发帖页面");
    console.log("选择的应用：",data);

    var kuAnFatie = require("../APP/kuAn/kuAnFatie");
    ui.startFatie.click(function () {
        console.log("即将开始执行自动发帖");
        threads.start(()=>{
            kuAnFatie()
        })
    });
    
}

module.exports = Fatie;