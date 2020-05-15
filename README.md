<h1 align="center">EBSBAN·云端黑名单平台</h1>

> ⚔ EBSBAN·云端黑名单平台，致力打造优质MC圈。

> ⚔ EBSBAN · Cloud Blacklist Platform, dedicated to creating high-quality Minecraft circles.

![language](https://img.shields.io/badge/language-Javascript-orange)
![build](https://img.shields.io/badge/build-passing-success)
[![licence](https://img.shields.io/badge/licence-Apache%202.0-blue)](https://github.com/MCEBS/EBSBAN/blob/master/LICENSE)
[![chat_qq](https://img.shields.io/badge/chat-qq-66ccff)](https://jq.qq.com/?_wv=1027&k=lObjv1Zg)

## 📒 Introduction

EBSBAN 是一个开放源代码、简单易调用、透明公开的线上黑名单系统，采用 Javascript + Ajax 开发。您（工作室、服务器、个人）可以将违规人员的相关信息提交给我们，经证实后可添加到云黑数据库中。EBSBAN 依赖于开源社区的生态快速发展中，目前已经与 [MCBAN](https://mcban.cn/) 等多家云黑机构展开合作。

[MCEBS](https://mcebs.cc/) | [EBSBAN](https://ban.mcebs.cc/) | [MCEBS in Github](https://github.com/MCEBS/) 

<hr>

EBSBAN is an open source, simple to call, transparent and open online blacklist system, developed with Javascript. You (studio, server, individual) can submit the relevant information of the violators to us, and they can be added to the cloud blacklist database after verification. EBSBAN relies on the rapid development of the open source community and has already cooperated with [MCBAN](https://mcban.cn/) and other cloud black institutions.

[MCEBS](https://mcebs.cc/) | [EBSBAN](https://ban.mcebs.cc/) | [MCEBS in Github](https://github.com/MCEBS/) 

## ❓ Characteristic

EBSBAN与其他云黑名单平台之间的区别：

- 开放源代码
- 无后端（仅Javascript + Ajax）
- 透明和开放（数据库```blacklist.json```是公开的，并用哈希值保护以防止篡改）
- 公平和公正（所有事件只有在得到证实后才能添加到数据库中）

<hr>

Differences between EBSBAN and other cloud blacklist platforms:

- Open source
- No backend (Just Javascript + Ajax)
- Transparent and open (The database ```blacklist.json``` is open and protected with hash values ​​to prevent tampering)
- Fair and Just (All events can only be added to the database after confirmation)

## 📖 Using EBSBAN

You can use EBSBAN anywhere.

### Call EBSBAN to your webpage

- Copy the following code into the ```<body>``` area of your webpage:

```
<!-- Javascript -->

<script src="ban/ban.js"></script>

<!-- html -->

<div>
	<input type="text" id="ebsban" placeholder="请在此处键入您要查询的QQ号或BAN ID.">
	<input type="button" onClick="search()" value="查询">
</div>
<div>
	<p id="ban"></p>
</div>
```

### Add new cloud blacklist record

See "Wiki" for details.

### Secondary development

See "Wiki" for details.

## 🎈 Special Thanks

### Sponsor

Nobody.

### Contributors

[fly6022](https://fly6022.fun/)

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