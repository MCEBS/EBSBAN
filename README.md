<h1 align="center">EBSBAN·云端黑名单系统</h1>

> ⚔ EBSBAN·云端黑名单系统，致力于打造前端黑名单系统。

> ⚔ EBSBAN · Cloud Blacklist System, committed to the front-end blacklist system.

![language](https://img.shields.io/badge/language-Javascript-orange)
![build](https://img.shields.io/badge/build-passing-success)
[![licence](https://img.shields.io/badge/licence-Apache%202.0-blue)](https://github.com/MCEBS/EBSBAN/blob/master/LICENSE)

## 📒 Introduction

EBSBAN 是一个开放源代码、简单易调用的前端黑名单系统，采用 Javascript 开发。您可以使用它，来构建属于自己的云端黑名单系统。EBSBAN 依赖于开源社区的生态快速发展中。

[MCEBS](https://mcebs.cc/) | [EBSBAN](https://ban.mcebs.cc/) | [MCEBS in Github](https://github.com/MCEBS/) 

<hr>

EBSBAN is an open source, easy to call the front-end blacklist system, using JavaScript development. You can use it to build your own cloud blacklist system. EBSBAN relies on the open source community's rapidly evolving ecology.

[MCEBS](https://mcebs.cc/) | [EBSBAN](https://ban.mcebs.cc/) | [MCEBS in Github](https://github.com/MCEBS/) | [在线查询](https://ban.mcebs.cc/search.html)

## ❓ Characteristic

EBSBAN与其他云黑名单系统之间的区别：

- 开放源代码
- 无后端配置（仅Javascript + JSON）
- 透明和开放（数据库```blacklist.json```是公开的，并用哈希值保护以防止篡改\*）
- 使用JSON存储数据，便于维护，更具可移植性。

注：哈希值自动生成功能会在后续版本推出。

<hr>

Differences between EBSBAN and other cloud blacklist Systems:

- Open source
- No backend (Just Javascript + JSON)
- Transparent and open (The database ```blacklist.json``` is open and protected with hash values ​​to prevent tampering)
- Using JSON data storage, easy to maintain, more portable.

Note: Hash generation will be available in a later version.

## 📖 Using EBSBAN

您可以在任何地方使用EBSBAN。

You can use EBSBAN anywhere.

### Call EBSBAN to your website

- Copy the following code into the ```<body>``` area of your website:

```html
<script src="https://ban.mcebs.cc/ban/ban.js"></script>
<div>
	<input type="text" id="ebsban" placeholder="请在此处键入您要查询的QQ号或BAN ID.">
	<input type="button" onClick="search()" value="查询">
</div>
<div>
	<p id="ban"></p>
</div>
```

### Secondary development

在二次开发过程当中，以下事项是需要您注意的：

- EBSBAN请在web服务器中进行调试（调试页面链接为“您的域名或IP/debug”）
- 请**仔细阅读并严格遵守开源协议的要求**，本开源项目制作不易，请尊重原作者版权，在二次开发项目中注明原出处。

#### ban.js

在二次开发过程中，以下代码块中的内容是我们建议您修改的内容（不建议修改其它未列出的内容）

During the secondary development process, the following code block stores is the content that we recommend you to modify (the content that is not listed is not recommended)

在 第 6 行：

On line 6:

```javascript
    var url = "/ban/blacklist.json"
```

在 第 36-47 行：

On line 36-47:

```javascript
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
```

#### blacklist.json

以下代码块存储的是云黑名单JSON数据文件的基本信息（在```blacklist.json```的第4-10行）

The following code block stores the basic information of the cloud blacklist JSON data file (on lines 4-10 of ```blacklist.json```)

```json
       "data": [
      {
         "blacklist_num": "1",
         "blacklist_change": "0",
         "change_date": "2020-5-24 8:53:06"
      }
    ]
```

以下代码块存储的是云黑名单JSON数据文件的黑名单信息（在“```blacklist.json''`的第12-27行）

The following code block stores the blacklist information of the cloud blacklist JSON data file （on lines 12-27 of ```blacklist.json```)

```
    {
      "blacklist_1": [ 
      {
        "hash": "c8241ce2b21a25c6550a32b90e8cab8b882eb78e",
        "state": "success",
        "id": "0",
        "qq": "test",
        "date": "2020-02-19 21:17:30",
        "validity": "2099-12-31 21:17:30",
        "level": "3(high)",
        "note": "恶意盗用别工作室网站数据库，态度恶劣。",
        "confirm": "公投证实/云黑证实",
        "evidence": "https://ban.mcebs.cc",
        "from": "EBSBAN",
        "remark": ""
      },
```

#### Data Format

如果要将```ban.js```中的一段Javascript代码指向一段JSON内容，则需要根据以下标准进行操作：

If you want to point a piece of Javascript code in ```ban.js``` to JSON content, you need to operate according to the following standards:

例如：

For example:

这个Javascript代码```json.EBSBAN[1].blacklist_1[0].id```指向的是以下代码框中“```<-----```”对应的内容：

This Javascript code ```json.EBSBAN[1].blacklist_1[0].id``` is point to ```<-----```:

```json
{
  "EBSBAN": [ 
     {
       "data": [
      {
         "blacklist_num": "1",
         "blacklist_change": "0",
         "change_date": "2020-5-24 8:53:06"
      }
    ]
    },
    {
      "blacklist_1": [ 
      {
        "hash": "c8241ce2b21a25c6550a32b90e8cab8b882eb78e",
        "state": "success",
        "id": "0",  <----- 
        "qq": "test",
        "date": "2020-02-19 21:17:30",
        "validity": "2099-12-31 21:17:30",
        "level": "3(high)",
        "note": "恶意盗用别工作室网站数据库，态度恶劣。",
        "confirm": "公投证实/云黑证实",
        "evidence": "https://ban.mcebs.cc",
        "from": "EBSBAN",
        "remark": ""
      },
```

## 🎈 Special Thanks

### Sponsor

Nobody.

### Contributors

[fly6022](https://fly6022.fun/)

### Others

Nobody.

## 🌱 Join Us

欢迎加入MCEBS技术团队，在这里你可以获得许多快乐！

Welcome to join the MCEBS technical team, where you can get a lot of happiness!

[Join Us](https://join.mcebs.cc)

## 💖 Support EBSBAN

EBSBAN是开源的，根据Apache 2.0许可完全免费。但是，和其他任何开源项目一样，随着项目的发展，托管、开发和维护也需要大量资金支持。

您可以通过捐款支持EBSBAN。

<hr>

EBSBAN is open source and completely free under the Apache 2.0 license. However, just like any other open source project, as the project grows, the hosting, development and maintenance requires funding support.

You can support EBSBAN via donations.

### Donation channel

捐助者将通过明确的问题回应得到奖励，甚至在我们的GitHub页面和网站上显示您的名字。

<hr>

Donors will be rewarded via express issue response, or even have your name displayed on our GitHub page and website.

- [Afdian](https://afdian.net/MCEBS)

## ⌨ I18N

帮助 EBSBAN 完成开源项目国际化，这通常需要耗费大量人力，我们需要您的帮助！

Helping EBSBAN to complete the internationalization of open source projects usually requires a lot of manpower, and we need your help!

## © Author

**EBSBAN** © [MCEBS](https://mcebs.cc) & [fly6022](https://fly6022.fun/), Released under the Apache 2.0 License. 使用 Apache 2.0 License 许可发行. 

Authored and maintained by MCEBS with help from contributors. 由MCEBS在贡献者的帮助下编写和维护。

> Email: [@MCEBS](mailto:gf@mcebs.cc) · Github: [@MCEBS](https://github.com/MCEBS) · Website: [@MCEBS](https://mcebs.cc/)