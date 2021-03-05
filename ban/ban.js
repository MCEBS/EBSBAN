/* EBSBAN·云端黑名单系统 版本号：v3.0.0  更新日期：2021年3月5日 
Copyright (C) 2021 MCEBS All right reserved. https://mcebs.cc/ 
Made by fly6022. 开源遵循 Apache Licence 2.0 */

window.onload = function blacklist_json () {
    var url = "/ban/blacklist.json" // 云黑名单JSON文件URL
    var request = new XMLHttpRequest();
    request.open("GET", url); // 采用GET方式获取
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            json = eval(JSON.parse(request.responseText));
            }
        if (request.status == 404) {
            console.error("Error! 请求EBSBAN数据库时出错。")
            }
        }
    }

var s;
var e;

s = "<b><font color='SpringGreen'>查询成功！</font></b>";
e = "<font color='red'><b>查询失败！</b></font><br>请检查您输入的信息是否正确或者该信息从未录入。";

function get() {

    document.getElementById("ban").innerHTML = s + "<br>" + "<b>BAN ID:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].id + "<br>" + "<b>QQ号:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].qq + "<br>" + "<b>记录日期:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].date + "<br>" + "<b>有效期至:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].validity + "<br>" + "<b>云黑名单等级:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].level + "<br>" + "<b>事件记录:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].note + note + "<br>" + "<b>证实情况:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].confirm + "<br>" + "<b>证据链接:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].evidence + "<br>" + "<b>查询结果来自:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].from + "<br>" + "<b>备注:</b>" + json.EBSBAN[classdata].blacklist_1[listdata].remark + "<br>" + "<b>数据源哈希值</b>：" + json.EBSBAN[classdata].blacklist_1[listdata].hash;

}

function search() {

    search_value = document.getElementById('ebsban').value;

    switch (search_value) {   
            case '0':
            case 'test': {
                classdata = 1; 
                listdata = 0;
                note = "<font color='red'><b>【重度违规，建议提高警惕】</b></font>";
                get();
            }  
                break;
            default:
                document.getElementById("ban").innerHTML = e; // 查询失败返回
    }
}

console.info("EBSBAN is loaded."); // 执行完毕在控制台显示