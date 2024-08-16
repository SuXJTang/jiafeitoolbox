// var imgs = [
//   "https://jiafeitoolbox.oss-cn-beijing.aliyuncs.com/%E5%B8%83%E8%95%BE%20(1).jpg",
//   "https://jiafeitoolbox.oss-cn-beijing.aliyuncs.com/%E5%B8%83%E8%95%BE%20(3).jpg",
//   "https://jiafeitoolbox.oss-cn-beijing.aliyuncs.com/%E5%B8%83%E8%95%BE%20(2).jpg",
//   "",
//   "",
// ];


function getHttpImg(imgs) {
  // if (!files.exists(engines.myEngine().cwd() + "images/cache/jiafeiimg/")) {
  //   files.create(engines.myEngine().cwd() + "images/cache/jiafeiimg/");
  //   console.log("文件夹【jiafeiimg】已创建");
  // } else {
  //   console.log("存在文件夹【jiafeiimg】");
  //   log(engines.myEngine().cwd())
  // }
  if (!files.exists("/sdcard/jiafeiimg/")) {
    files.create("/sdcard/jiafeiimg/");
    console.log("文件夹【jiafeiimg】已创建");
  } else {
    // console.log("存在文件夹【jiafeiimg】");
  }

  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i] != "") {
      var url = imgs[i];
      // console.log(url);
      var pic = images.load(url);
      var imgspath = "/sdcard/jiafeiimg/" + i + ".jpg";
      console.log(imgspath);
      sleep(1000);
      images.save(pic, imgspath, "jpg", 50);
      sleep(500);
      app.sendBroadcast(
        new Intent(
          Intent.ACTION_MEDIA_SCANNER_SCAN_FILE,
          android.net.Uri.fromFile(java.io.File(imgspath))
        )
      );
    }
  }

}

// getHttpImg(imgs);
module.exports = getHttpImg;