"ui";
var 界面1= ui.inflate(
<vertical id='checkBoxList'>
    <button id="标签1"text="标签1"/>
</vertical>
);
var 界面2= ui.inflate(
<vertical id='checkBoxList'>
    <button id="标签2"text="标签2"/>
</vertical>
);
ui.setContentView(界面1)
界面1.标签1.click(()=>{ 
    ui.setContentView(界面2)
})
界面2.标签2.click(()=>{ 
    ui.setContentView(界面1)
})
