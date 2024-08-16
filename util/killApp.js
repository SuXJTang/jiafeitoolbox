/**
 * 创建时间：2021-08-01 17:05:04
 * 修改时间：2021-08-01 17:05:04
 * 修改内容：
 * 脚本名称：killApp.js
 * 脚本功能：杀死应用
 * 脚本作者：jiafei
 * 脚本版本：1.0.0
 * 描述：
 */


function killApp(appName) {
    var packageName = app.getPackageName(appName)
    console.log("结束应用: " + appName);
    var sh = new Shell(true);
    sh.exec("am force-stop " + " " + packageName);
    sleep(3000)
    sh.exit();
}


module.exports = killApp;
