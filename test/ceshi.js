var sum = 0;
//启动子线程计算1加到10000
var thread = threads.start(function(){
    for(var i = 0; i < 10000; i++){
        sum += i;
    }
});
//等待该线程完成
thread.join();
toast("sum = " + sum);
