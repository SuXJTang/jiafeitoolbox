// runtime.loadJar("../lib/jxl.jar")
runtime.loadJar(engines.myEngine().cwd()+"lib/jxl.jar")

importClass("java.io.File")
importClass("jxl.Cell")
importClass("jxl.Sheet")
importClass("jxl.Workbook")
importClass("jxl.CellType")



// const da = excel(file);
// console.log(da);

function excel(file) {
    //1. 导入jxl的jar包
//2. 获取到Excel文件
    // file = new File("/storage/emulated/0/appSync/jiafeitoolbox/resource/123.xls");
    file = new File(file);
    wb = Workbook.getWorkbook(file);
    //3. 获取指定的sheet页码   通过指定的Sheet页的名字获取指定的Sheet页，也可以通过索引获取Sheet
    sheet = wb.getSheet("Sheet1");
    //4. 获取指定的单元格的数据  通过getCell方法获取指定单元格对象，参数是column,row,索引从0开始
    cell = sheet.getCell(0, 1);
    // console.log(cell.getContents());

    //4.1循环获取指定的行和列的单元格的值     外循环控制行，内循环控制列

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
    }

    wb.close(); //关闭表格
    return arr;

}

module.exports = excel;
