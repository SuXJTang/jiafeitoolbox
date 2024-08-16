function excel(path) {
    runtime.loadJar(engines.myEngine().cwd() + "lib/jxl.jar")
    // runtime.loadJar("../lib/jxl.jar")
    importClass("java.io.File")
    importClass("jxl.Cell")
    importClass("jxl.Sheet")
    importClass("jxl.Workbook")
    importClass("jxl.CellType")

    // file = new File(engines.myEngine().cwd() + "resource/123.xls");
    file = new File(path);
    wb = Workbook.getWorkbook(file);
    sheet = wb.getSheet("Sheet1");
    cell = sheet.getCell(0, 0);
    // console.log(cell.getContents());


    var arr = [];
    var bool = false;
    for (var i = 1; i < sheet.getRows(); i++) {
        // 创建一个数据对象接收表格里面每行的数据
        var data = {
            serialNum: "",
            appName: "",
            tag: "",
            title: "",
            content: "",
            attachmentContent: "",
            uri: ""
        };
        for (var j = 0; j < 7; j++) {
            if (sheet.getCell(0, i).getContents() == "") {
                bool = true;
                break;
            }

            cell = sheet.getCell(j, i).getContents();
            switch (j) {
                case 0:
                    data.serialNum = cell
                    break;
                case 1:
                    data.appName = cell
                case 2:
                    data.tag = cell
                    break;
                case 3:
                    data.title = cell
                    break;
                case 4:
                    data.content = cell
                    break;
                case 5:
                    data.attachmentContent = cell
                    break;
                case 6:
                    data.uri = cell
                    break;
                default:
                    break;
            }
        }
           
        // log("----------------- 分割符 -----------------")
        if (bool) {
            break;
        }
         arr.push(data); 
        // log(data)
    }
    wb.close(); //关闭表格
    // log(arr);
    return arr;
}

module.exports = excel;