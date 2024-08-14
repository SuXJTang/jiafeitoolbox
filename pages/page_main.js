"ui";
// ui.layout(
//     <vertical>
//         <vertical margin="0 10" clickable="true">
//             <img h="100dp" src="https://huishi-big-event.oss-cn-beijing.aliyuncs.com/IMG_20240727_121538.jpg" />
//         </vertical>

//         <card margin="8" cardBackgroundColor="#F5F5F5" cardCornerRadius="8" w="*" contentPadding="12">
//         {/* 选择要打开的应用 */}
//             <vertical w="*" h="auto" >
//                 <vertical>
//                     <text w="*" padding="10 10" text="选择要打开的应用" textColor="#000000" />
//                 </vertical>
//                 <horizontal margin="10" h="auto">
//                     <checkbox text="奇妙社区" id="checkbox1"  />
//                     <checkbox text="酷安" id="checkbox2" />
//                     <checkbox text="葫芦侠" id="checkbox3" />
//                 </horizontal>
//             </vertical>

//         </card>

//         <card margin="8" cardBackgroundColor="#F5F5F5" cardCornerRadius="8" w="*" contentPadding="12">
//         {/* 功能区选择 */}
//             <vertical w="*" h="auto" >
//                 <vertical>
//                     <text w="*" padding="10 10" text="功能选择" textColor="#000000" />
//                 </vertical>
//                 <horizontal margin="10" h="auto">
//                     <button id="dt" text="顶贴" />
//                     <button id="ft" text="发帖" />
//                     <button id="qd" text="签到" />
//                 </horizontal>
//             </vertical>

//         </card>

//         <vertical>
//             <button id="start" text="开始运行" w="*" h="auto" margin="10" bg="#00FFFF" />
//         </vertical>
//     </vertical>
// );

var page_main = {
    ui: ui.inflate(
        <frame>
            <vertical>
        <vertical margin="0 10" clickable="true">
            <img h="100dp" src="https://huishi-big-event.oss-cn-beijing.aliyuncs.com/IMG_20240727_121538.jpg" />
        </vertical>

        <card margin="8" cardBackgroundColor="#F5F5F5" cardCornerRadius="8" w="*" contentPadding="12">
        {/* 选择要打开的应用 */}
            <vertical w="*" h="auto" >
                <vertical>
                    <text w="*" padding="10 10" text="选择要打开的应用" textColor="#000000" />
                </vertical>
                <horizontal margin="10" h="auto">
                    <checkbox text="奇妙社区" id="checkbox1"  />
                    <checkbox text="酷安" id="checkbox2" />
                    <checkbox text="葫芦侠" id="checkbox3" />
                </horizontal>
            </vertical>

        </card>

        <card margin="8" cardBackgroundColor="#F5F5F5" cardCornerRadius="8" w="*" contentPadding="12">
        {/* 功能区选择 */}
            <vertical w="*" h="auto" >
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
            <button id="start" text="开始运行" w="*" h="auto" margin="10" bg="#00FFFF" />
        </vertical>
    </vertical> 
        </frame>
    ),
    initList: function () {
    },
    activate: function () {
        setContainer(this.ui)
        if(!this.inited) this.initList()
        this.inited = true
    }
}