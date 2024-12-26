"use strict";
// ==UserScript==
// @name         DouyuEx_Meta
// @namespace
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTA4cHgiIGhlaWdodD0iMTA4cHgiIHZpZXdCb3g9IjAgMCAxMDggMTA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPueyvueBteeQgzwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnsr7ngbXnkIMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODMwNzY5LCAwLjgzMDc2OSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4xNjkyMzA3LDEwNi4zMzg0NjEgQzIzLjgyNzY5MjIsMTA2LjMzODQ2MSAwLDgyLjUxMDc2OTIgMCw1My4xNjkyMzA3IEMwLDUxLjAwMzA3NjkgMS43NzIzMDc3NSw0OS4yMzA3NjkyIDMuOTM4NDYxNSw0OS4yMzA3NjkyIEwzMy40NzY5MjMsNDkuMjMwNzY5MiBDMzUuNjQzMDc2OSw0OS4yMzA3NjkyIDM3LjQxNTM4NDUsNTEuMDAzMDc3IDM3LjQxNTM4NDYsNTMuMTY5MjMwNyBDMzcuNDE1Mzg0Niw2MS44MzM4NDYxIDQ0LjUwNDYxNTQsNjguOTIzMDc2OSA1My4xNjkyMzA3LDY4LjkyMzA3NjkgQzYxLjgzMzg0NjEsNjguOTIzMDc2OSA2OC45MjMwNzY5LDYxLjgzMzg0NjEgNjguOTIzMDc2OSw1My4xNjkyMzA3IEM2OC45MjMwNzY5LDUxLjAwMzA3NjkgNzAuNjk1Mzg0Niw0OS4yMzA3NjkyIDcyLjg2MTUzODUsNDkuMjMwNzY5MiBMMTAyLjQsNDkuMjMwNzY5MiBDMTA0LjU2NjE1NCw0OS4yMzA3NjkyIDEwNi4zMzg0NjEsNTEuMDAzMDc3IDEwNi4zMzg0NjEsNTMuMTY5MjMwNyBDMTA2LjMzODQ2MSw4Mi41MTA3NjkyIDgyLjUxMDc2OTIsMTA2LjMzODQ2MSA1My4xNjkyMzA3LDEwNi4zMzg0NjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzMzMzYzQSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOC4wNzM4NDYxMiw1Ny4xMDc2OTIyIEMxMC4wNDMwNzY5LDgwLjI0NjE1MzcgMjkuNTM4NDYxNSw5OC40NjE1Mzg1IDUzLjE2OTIzMDcsOTguNDYxNTM4NSBDNzYuOCw5OC40NjE1Mzg1IDk2LjI5NTM4NDYsODAuMjQ2MTUzOSA5OC4yNjQ2MTU0LDU3LjEwNzY5MjIgTDc2LjUwNDYxNTQsNTcuMTA3NjkyMiBDNzQuNjMzODQ2MSw2OC4yMzM4NDYxIDY0Ljg4NjE1MzksNzYuOCA1My4xNjkyMzA3LDc2LjggQzQxLjQ1MjMwNzYsNzYuOCAzMS43MDQ2MTU0LDY4LjIzMzg0NjEgMjkuODMzODQ2MSw1Ny4xMDc2OTIyIEw4LjA3Mzg0NjEyLDU3LjEwNzY5MjIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTMuMTY5MjMwOCwzLjkzODQ2MTUgQzI1Ljk5Mzg0NjEsMy45Mzg0NjE1IDMuOTM4NDYxNSwyNS45OTM4NDYxIDMuOTM4NDYxNSw1My4xNjkyMzA3IEwzMy40NzY5MjMsNTMuMTY5MjMwNyBDMzMuNDc2OTIzLDQyLjMzODQ2MTUgNDIuMzM4NDYxNSwzMy40NzY5MjMgNTMuMTY5MjMwOCwzMy40NzY5MjMgQzY0LDMzLjQ3NjkyMyA3Mi44NjE1Mzg1LDQyLjMzODQ2MTUgNzIuODYxNTM4NSw1My4xNjkyMzA3IEwxMDIuNCw1My4xNjkyMzA3IEMxMDIuNCwyNS45OTM4NDYxIDgwLjM0NDYxNTQsMy45Mzg0NjE1IDUzLjE2OTIzMDgsMy45Mzg0NjE1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNENjA5MDkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEwMi40LDU3LjEwNzY5MjIgTDcyLjg2MTUzODUsNTcuMTA3NjkyMiBDNzAuNjk1Mzg0Niw1Ny4xMDc2OTIyIDY4LjkyMzA3Nyw1NS4zMzUzODQ1IDY4LjkyMzA3NjksNTMuMTY5MjMwNyBDNjguOTIzMDc2OSw0NC41MDQ2MTU0IDYxLjgzMzg0NjEsMzcuNDE1Mzg0NiA1My4xNjkyMzA3LDM3LjQxNTM4NDYgQzQ0LjUwNDYxNTQsMzcuNDE1Mzg0NiAzNy40MTUzODQ2LDQ0LjUwNDYxNTQgMzcuNDE1Mzg0Niw1My4xNjkyMzA3IEMzNy40MTUzODQ2LDU1LjMzNTM4NDYgMzUuNjQzMDc2OSw1Ny4xMDc2OTIyIDMzLjQ3NjkyMyw1Ny4xMDc2OTIyIEwzLjkzODQ2MTUsNTcuMTA3NjkyMiBDMS43NzIzMDc2Miw1Ny4xMDc2OTIyIDAsNTUuMzM1Mzg0NSAwLDUzLjE2OTIzMDcgQzAsMjMuODI3NjkyMiAyMy44Mjc2OTIzLDAgNTMuMTY5MjMwNywwIEM4Mi41MTA3NjkyLDAgMTA2LjMzODQ2MSwyMy44Mjc2OTIyIDEwNi4zMzg0NjEsNTMuMTY5MjMwNyBDMTA2LjMzODQ2MSw1NS4zMzUzODQ2IDEwNC41NjYxNTQsNTcuMTA3NjkyMiAxMDIuNCw1Ny4xMDc2OTIyIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMzMzM2M0EiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTc2LjUwNDYxNTQsNDkuMjMwNzY5MyBMOTguMzYzMDc2OSw0OS4yMzA3NjkzIEM5Ni4yOTUzODQ2LDI2LjA5MjMwNzYgNzYuOCw3Ljg3NjkyMyA1My4xNjkyMzA3LDcuODc2OTIzIEMyOS41Mzg0NjE1LDcuODc2OTIzIDEwLjA0MzA3NjksMjYuMDkyMzA3NiA4LjA3Mzg0NjEyLDQ5LjIzMDc2OTMgTDI5LjkzMjMwNzYsNDkuMjMwNzY5MyBDMzEuNzA0NjE1NCwzOC4xMDQ2MTU0IDQxLjQ1MjMwNzYsMjkuNTM4NDYxNSA1My4xNjkyMzA3LDI5LjUzODQ2MTUgQzY0Ljg4NjE1MzksMjkuNTM4NDYxNSA3NC42MzM4NDYxLDM4LjEwNDYxNTQgNzYuNTA0NjE1NCw0OS4yMzA3NjkzIEw3Ni41MDQ2MTU0LDQ5LjIzMDc2OTMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0Q2MDkwOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTMuMTY5MjMwNyw3Ni44IEM0MC4xNzIzMDc2LDc2LjggMjkuNTM4NDYxNSw2Ni4xNjYxNTM5IDI5LjUzODQ2MTUsNTMuMTY5MjMwNyBDMjkuNTM4NDYxNSw0MC4xNzIzMDc2IDQwLjE3MjMwNzYsMjkuNTM4NDYxNSA1My4xNjkyMzA3LDI5LjUzODQ2MTUgQzY2LjE2NjE1MzksMjkuNTM4NDYxNSA3Ni44LDQwLjE3MjMwNzYgNzYuOCw1My4xNjkyMzA3IEM3Ni44LDY2LjE2NjE1MzkgNjYuMTY2MTUzOSw3Ni44IDUzLjE2OTIzMDcsNzYuOCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzNjNBIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4xNjkyMzA3LDM3LjQxNTM4NDYgQzQ0LjUwNDYxNTQsMzcuNDE1Mzg0NiAzNy40MTUzODQ2LDQ0LjUwNDYxNTQgMzcuNDE1Mzg0Niw1My4xNjkyMzA3IEMzNy40MTUzODQ2LDYxLjgzMzg0NjEgNDQuNTA0NjE1NCw2OC45MjMwNzY5IDUzLjE2OTIzMDcsNjguOTIzMDc2OSBDNjEuODMzODQ2MSw2OC45MjMwNzY5IDY4LjkyMzA3NjksNjEuODMzODQ2MSA2OC45MjMwNzY5LDUzLjE2OTIzMDcgQzY4LjkyMzA3NjksNDQuNTA0NjE1NCA2MS44MzM4NDYxLDM3LjQxNTM4NDYgNTMuMTY5MjMwNywzNy40MTUzODQ2IEw1My4xNjkyMzA3LDM3LjQxNTM4NDYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNDMuMzIzMDc2OSw1My4xNjkyMzA3IEM0My4zMjMwNzY5LDU4LjYwNzExMTQgNDcuNzMxMzUwMSw2My4wMTUzODQ2IDUzLjE2OTIzMDcsNjMuMDE1Mzg0NiBDNTguNjA3MTExNCw2My4wMTUzODQ2IDYzLjAxNTM4NDYsNTguNjA3MTExNCA2My4wMTUzODQ2LDUzLjE2OTIzMDcgQzYzLjAxNTM4NDYsNDcuNzMxMzUwMSA1OC42MDcxMTE0LDQzLjMyMzA3NjkgNTMuMTY5MjMwNyw0My4zMjMwNzY5IEM0Ny43MzEzNTAxLDQzLjMyMzA3NjkgNDMuMzIzMDc2OSw0Ny43MzEzNTAxIDQzLjMyMzA3NjksNTMuMTY5MjMwNyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzNjNBIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
// @version      2024.12.25.01
// @description  弹幕自动变色防检测循环发送 一键续牌 查看真实人数/查看主播数据 已播时长 一键签到(直播间/车队/鱼吧/客户端) 一键领取鱼粮(宝箱/气泡/任务) 一键寻宝 送出指定数量的礼物 一键清空背包 屏蔽广告 调节弹幕大小 自动更新 同屏画中画/多直播间小窗观看/可在斗鱼看多个平台直播(虎牙/b站) 获取真实直播流地址 自动抢礼物红包 背包信息扩展 简洁模式 夜间模式 开播提醒 幻神模式 关键词回复 关键词禁言 自动谢礼物 自动抢宝箱 弹幕右键信息扩展 防止下播自动跳转 影院模式 直播时间流控制 弹幕投票 直播滤镜 直播音频流 账号多开/切换 显示粉丝牌获取日期 月消费数据显示 弹幕时速 相机截图录制gif 全景播放器 斗鱼视频下载/弹幕ass下载 直播画面局部缩放 全站抽奖信息 直播音效增强 阻止P2P上传 显示贡献榜贡献值 恢复弹幕显示 斗鱼视频弹幕高能进度条 检测弹幕是否发送成功 查看主播配置信息 自动网页全屏 自动最高画质 弹幕无限收藏 收藏弹幕搜索 支持弹幕带图片 屏蔽弹幕背景 弹幕+1 房间VIP到期提醒 自动钓鱼
// @author       小淳
// @match			*://*.douyu.com/0*
// @match			*://*.douyu.com/1*
// @match			*://*.douyu.com/2*
// @match			*://*.douyu.com/3*
// @match			*://*.douyu.com/4*
// @match			*://*.douyu.com/5*
// @match			*://*.douyu.com/6*
// @match			*://*.douyu.com/7*
// @match			*://*.douyu.com/8*
// @match			*://*.douyu.com/9*
// @match     *://*.douyu.com/g_*
// @match     *://*.douyu.com/directory/myFollow
// @match			*://*.douyu.com/topic/*
// @match        *://www.douyu.com/member/cp/getFansBadgeList
// @match        *://passport.douyu.com/*
// @match        *://msg.douyu.com/*
// @match        *://yuba.douyu.com/*
// @match        *://v.douyu.com/*
// @match        *://cz.douyu.com/*
// @require      https://lib.baomitu.com/flv.js/1.6.2/flv.min.js
// @require      https://fastly.jsdelivr.net/npm/svgaplayerweb@2.3.1/build/svga.min.js
// @require      https://lib.baomitu.com/gif.js/0.2.0/gif.js
// @require      https://lib.baomitu.com/three.js/80/three.min.js
// @require      https://lib.baomitu.com/xlsx/0.16.4/xlsx.full.min.js
// @require      https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/dompurify/2.3.6/purify.min.js
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_cookie
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @connect      douyucdn.cn
// @connect      douyu.com
// @connect      122.51.5.63
// @connect      qq.com
// @connect      rrocr.com
// @connect      douyuex.com
// @connect      bojianger.com
// @connect      greasyfork.org
// @connect      bilibili.com
// @connect      huya.com
// @connect      jsdelivr.net
// @connect      shadiao.app
// @connect      shadiao.pro
// @connect      fz996.com
// @connect      toubang.tv
// @connect      doseeing.com
// @antifeature  tracking
// ==/UserScript==
"use strict";function init(){initPkg_ShowDanmakuOriginAction(),initScriptHook(),initPkg_Night_Set_Fast(),initResponseHook(),initPkg_ShowDanmaku(),initKillP2P(),initFullScreen(),initHighestVideoQuality(),removeAD(),initPkg_Statistics(),initPkg_Console(),initPkg_Menu(),initPkg_FollowList()}function initPkg(){Update_checkVersion(),initPkg_Night(),initPkg_ExIcon(),initPkg_ExPanel(),initPkg_RealAudience(),initPkg_CopyRealLive(),initPkg_AudioLine(),initPkg_RemoveAD(),initPkg_Shield(),initPkg_BagInfo(),initPkg_Update(),initPkg_SyncJoy(),initPkg_Monitor(),initPkg_Lottery(),initPkg_PopupPlayer(),initPkg_LiveTool(),initPkg_VideoTools(),initPkg_ExpandTool(),initPkg_Refresh(),initPkg_BarrageLoop(),initPkg_FansContinue(),initPkg_Sign(),initPkg_BarragePanel(),initPkg_AccountList(),initPkg_ChatTools(),initPkg_MonthCost(),initPkg_RoomVip(),initPkg_WeeklyPanel(),initPkg_DanmakuCollect()}function initPkg_Timer(){initPkg_DisableCloseJump_Timer(),initPkg_LevelTask_Timer()}function initTimer(){initPkg_Timer(),exTimer=setInterval(initPkg_Timer,35e3)}function initStyles(){var e=document.createElement("style");e.appendChild(document.createTextNode(`#ex-accountList-wrap {
    left: -152px;
    top: -16px;
    /* max-height: 330px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none; */
    -webkit-transition: all .2s cubic-bezier(.22,.58,.12,.98);
    -o-transition: all cubic-bezier(.22,.58,.12,.98) .2s;
    -moz-transition: all cubic-bezier(.22,.58,.12,.98) .2s;
    transition: all .2s cubic-bezier(.22,.58,.12,.98);
    -webkit-transform-origin: 80% 0;
    -moz-transform-origin: 80% 0;
    -ms-transform-origin: 80% 0;
    -o-transform-origin: 80% 0;
    transform-origin: 80% 0;
    -webkit-animation: scale-in-ease .5s cubic-bezier(.22,.58,.12,.98);
    -moz-animation: scale-in-ease cubic-bezier(.22,.58,.12,.98) .5s;
    -o-animation: scale-in-ease cubic-bezier(.22,.58,.12,.98) .5s;
    animation: scale-in-ease .5s cubic-bezier(.22,.58,.12,.98);
}

/* #ex-accountList-wrap::-webkit-scrollbar {
    display: none;
} */

.ex-accountList-item {
    padding: 10px;
    display: flex;
    border-radius: 10px;
    align-items: center;
}
.ex-accountList-item:hover {
    background-color: rgb(244,244,244);
}

#ex-accountList-iframe {
    display: none;
}
#ex-accountList-iframe2 {
    display: none;
}

#ex-accountList-item-add {
    padding: 10px;
    text-align: center;
    margin-bottom:0px;
    border-radius: 10px;
}

#ex-accountList-item-add:hover {
    background-color: rgb(244,244,244);
}

.ex-accountList-item__imgWrap {
    flex: 0 0 25%;
}

.ex-accountList-item__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.ex-accountList-item__name {
    line-height: 50px;
    flex: 0 0 55%;
}

.ex-accountList-item__btn {
    height: 30px;
    width: 50px;
    border-radius: 10px;
    align-items: center;
    flex: auto;
    text-align: center;
    line-height: 28px;
    color: white;
    background-color: rgb(245,108,108);
}

.ex-accountList-item__btn:hover {
    background-color: rgb(247,137,137);
}

#ex-accountList-icon:hover > #ex-accountList-wrap {
    display: block;
}#ex-audio-line {
    cursor: pointer;
}.bag-info {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    width: 20px;
    font-weight: 800;
    height: 20px;
    text-align: center;
    z-index: 10;
    bottom: 0;
}

.bag-button {
    color: rgb(255, 255, 255);
    text-align: center;
    height: 15px;
    line-height: 15px;
    cursor: pointer;
    margin-left: 5px;
    background: rgb(70, 171, 255);
    border-radius: 9px;
    padding: 0px 10px;
    right: 20px;
}.bloop {
	background-color: rgba(255,255,255,0.9);
	width: 100%;
	height: 200px;
	position: relative;
	bottom: 200px;
	display: none;
	z-index: 1015;
}

.bloop__switch {
	position: absolute;
	right: 0;
	bottom: 0;
}

.bloop__mode {
	display: inline-block;
}

#bloop__select {
	width: 150px;
}.barragePanel__funcPanel {
    position: absolute;
    width: 232px;
    height: 270px;
    display: block;
    background: white;
    overflow-y: scroll;
}

.barragePanel__funcPanel::-webkit-scrollbar {display:none}
.barragePanel__muteTime {
    position: absolute;
    left: 25px;
    top: 123px;
    z-index: 5;
}

.danmuContent-25f266 {
    pointer-events: auto !important;
}#copy-real-live {
    cursor: pointer;
}.ChatBarrageCollect .TagItem {
  height: auto !important;
}

.ChatBarrageCollect .TagItem-txt {
  overflow: auto !important;
  white-space: normal !important;
}.ex-icon {
	display: inline-block;
	vertical-align: middle;
	margin-right: 8px;

	-moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
}

.ex-icon a {
    display: flex;
    justify-items: center;
    align-items: center;
}

.ex-icon svg:hover {
    transform: scale(1.1);
}.ex-panel {
	position: absolute;
	bottom: 32px;
	right: 0px;
	background-color: rgba(255,255,255,0.9);
	opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out; /* 给工具栏出现加一下过渡效果 */
	border: 2px rgb(234,173,26) solid;
	z-index: 1015;
	user-select: none;
}
.ex-panel__wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}
.ex-panel__icon {
	margin: 0 10px;
	display: block;
	position: relative;
	padding: 5px;
	transition: 0.5s;
}
.ex-panel__icon:hover {
	transform: scale(1.15);
}
.ex-panel__tip {
	display:none;
	background:#f00;
	border-radius:50%;
	width:8px;
	height:8px;
	top:0px;
	right:0px;
	position:absolute;
}.extool {
	background-color: rgba(255,255,255,0.9);
	width: 100%;
	height: 200px;
	position: relative;
	bottom: 200px;
	display: none;
	z-index: 1015;
}

.extool__switch {
	position: absolute;
	right: 0;
	bottom: 0;
}
.extool__bsize,.extool__sendgift {
	margin-bottom: 5px;
}
.extool__redpacket_room,.extool__gold,.extool__autofish {
	display: inline-block;
}
.ex_giftAnimation {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 50;
	pointer-events: none;
}#refreshFollowList {
    color: grey;position: absolute;right: 5px;top:0px;cursor: default;
}.text-879f3e {
  height: auto !important;
  max-height: 48px !important;
}

.ex-image-danmaku {
  height: 48px;
  border-radius: 6px;
  margin: 0 4px;
}

.danmuContent-25f266 .ex-image-danmaku {
  max-height: 32px;
}.barrageSpeed {
    position: absolute;
    right: 10px;
    top: -20px;
    color: rgba(0,0,0,0.5);
    cursor: default;
    z-index: 0;
}.enter__panel {
    width: 100%;
    display: none;
    margin-top: 4px;
}
#enter__title {
    cursor: pointer;
    user-select: none;
    color: royalblue;
}
#enter__select {
    width: 190px;
}

.enter__option {
    margin-top: 5px;
}

#enter__enterId {
    width: 40px;
}

#enter__reply {
    width: 150px;
}

#enter__word {
    width: 140px;
}

#enter__level {
    width: 25px;
    text-align: center;
}

#enter__export {
    cursor: pointer;
    color: royalblue;
    margin-left: 10px;
}

#enter__import {
    cursor: pointer;
    color: royalblue;
    margin-left: 5px;
}.gift__panel {
    width: 100%;
    display: none;
    margin-top: 4px;
}
#gift__title {
    cursor: pointer;
    user-select: none;
    color: royalblue;
}
#gift__select {
    width: 113px;
}

.gift__option {
    margin-top: 5px;
}

#gift__giftId {
    width: 40px;
}

#gift__reply {
    width: 150px;
}

#gift__export {
    cursor: pointer;
    color: royalblue;
    margin-left: 10px;
}

#gift__import {
    cursor: pointer;
    color: royalblue;
    margin-left: 5px;
}.livetool {
	background-color: rgba(255,255,255,0.9);
	width: 100%;
	height: 290px;
	position: relative;
	bottom: 290px;
	display: none;
	z-index: 1015;
}

.livetool__cell {
	position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
	background-color: #fff;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
}

.livetool__cell_title {
	flex: 1;
    -webkit-box-flex: 1;
}

.livetool__cell_option {
	text-align: right;
}

.livetool__cell_switch {
	float: right;
}.mute__panel {
    width: 100%;
    display: none;
    margin-top: 4px;
}
#mute__title {
    cursor: pointer;
    user-select: none;
    color: royalblue;
}
#mute__idlist {
    cursor: pointer;
    color: royalblue;
    margin-left: 10px;
}
#mute__export, #mute__import {
    cursor: pointer;
    color: royalblue;
    margin-left: 5px;
}
#mute__select {
    width: 110px;
}

.mute__option {
    margin-top: 5px;
}

#mute__word {
    width: 70px;
}

#mute__count {
    width: 30px;
}

#mute__time {
    width: 65px;
}.exRankPoint {
    position: absolute;
    right: 16px;
}

.exRankPoint--top {
    position: absolute;
    bottom: -12px;
    right: 0;
    left: 0;
}.reply__panel {
    width: 100%;
    display: none;
    margin-top: 4px;
}
#reply__title {
    cursor: pointer;
    user-select: none;
    color: royalblue;
}
#reply__select {
    /* width: 190px; */
    width: 100px;
}

#reply__time {
    width: 35px;
}

.reply__option {
    margin-top: 5px;
}

#reply__word {
    width: 70px;
}

#reply__reply {
    width: 147px;
}

#reply__export {
    cursor: pointer;
    color: royalblue;
    margin-left: 10px;
}

#reply__import {
    cursor: pointer;
    color: royalblue;
    margin-left: 5px;
}.livetool__Treasure {
    width: 100%;
    position: relative;
    z-index: 999;
}.vote__panel {
    width: 100%;
    display: none;
    margin-top: 4px;
}
#vote__title {
    cursor: pointer;
    user-select: none;
    color: royalblue;
}
#vote__select {
    width: 100px;
}

.vote__option {
    margin-top: 5px;
}

#vote__theme {
    width: 70px;
}

#vote__options {
    width: 133px;
}

#vote__time {
    width: 35px;
}

#vote__show-result {
    cursor: pointer;
    color: royalblue;
    margin-left: 10px;
}

.vote__result {
    position: absolute;
    top: 0px;
    width: 300px;
    background: rgba(255,255,255,0.85);
    left: 0px;
    z-index: 999;
    padding: 5px;
    border-radius: 10px;
    user-select: none;
    display: none;
}

#vote__result-theme {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
#vote__result-close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 14px;
    cursor: pointer;
    color: gray;
}

.vote__option-wrap {
    margin-bottom: 10px;
}

.vote__option-choice {
    display: inline-block;
    font-size: 14px;
}

.vote__option-num {
    float: right;
    font-size: 14px;
}

.vote__progress {
    width: 100%;
    background-color: #ddd;
    border-radius: 10px;
}

.vote__progress-bar {
    width: 0%;
    height: 14px;
    background-color: #4CAF50;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}

.exlottery {
	background-color: rgba(255,255,255,1);
	width: 100%;
	height: 250px;
	position: relative;
	bottom: 250px;
	display: none;
	z-index: 1015;
    overflow: auto;
    padding: 0 10px;
    box-sizing: border-box;
}

.lottery__nodata {
    z-index: 998;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    color: #606266;
}

.lottery__wrap {
    display: flex;
    flex-direction: column;
    z-index: 999;
}

.lottery__a:hover .lottery__item {
    background-color: rgb(244,244,244);
}

.lottery__item {
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #d0d0d0;
    color: #606266;
}

.lottery__img img {
    width: 150px;
    border-radius: 5px;
}

.lottery__anchor {
    position: absolute;
    background-color: rgba(255,255,255,0.9);
    border-radius: 5px 0px 5px 0px;
}

.lottery__info {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin-left: 10px;
    overflow: hidden;
}

.lottery__prize {
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: 14px;
}

.lottery__expireTime {
    position: absolute;
    margin-top: -18px;
    background-color: rgba(255,255,255,0.9);
    border-radius: 0px 5px 0px 5px;
}

 /*滚动条样式*/
.exlottery::-webkit-scrollbar {
    width: 4px;    
}
.exlottery::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.exlottery::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}

.lottery__func {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    user-select: none;
    border-bottom: 1px solid #d0d0d0;
}

.lottery__notice,#lottery-refresh {
    cursor: pointer;
    color: #606266;
}.miniprogram__panel {
    position: absolute;
    right: 43px;
    bottom: 100px;
    animation: move-in 0.75s;
    z-index: 101;
    text-align: center;
    display: none;
}
.miniprogram__wrap {
    overflow: hidden;
    background-color: white;
    border-radius: 5%;
    width: 200px;
    box-shadow: 0px 2px 20px 0px #888888;
    font-size: 14px;
}

.miniprogram__triangle {
    width: 0px;
    height: 0px;
    border-color: white transparent transparent transparent;
    border-style: solid;
    border-width: 10px;
    position: absolute;
    left: 100px;
}.month-cost {
    margin-right: 5px;
    cursor: default;
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    display: inline-block;
    vertical-align: middle;
}

.monthcost__icon {
    position: relative;
    top: 3px;
    cursor: pointer;
    margin-left: 3px;
}#ex-point {
    cursor: pointer;
    float: left;
    line-height: 30px;

    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
}
#point__value {
    color: #333;
}#ex-exchange {
    position: absolute;
    left: 0;
    bottom: 37px;
    z-index: 100;
}
.exchange__panel {
    width: 400px;
    height: 500px;
    position: relative;
}

.exchange__wrap {
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 3%;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 0px 0px 20px 0px #888888;
}
.exchange__wrap::-webkit-scrollbar {
    display:none
}

.exchange__close {
    position: absolute;
    color: rgb(127, 127, 137);
    right: 10px;
    top: 5px;
    font-size: 15px;
    cursor: pointer;
    z-index: 101;
}

.item__wrap {
    width: 100%;
    height: 130px;
    border-bottom: 1px solid rgba(121,127,137,0.4);
    position: relative;
}
.item__pic {
    left: 10px;
    top: 10px;
    position: absolute;
    height: 110px;
    width: 110px;
}

.item__name {
    position: absolute;
    top: 7px;
    left: 130px;
    color: #353536;;
    font-size: 15px;
    margin-right: 10px;
}
.item__description {
    position: absolute;
    top: 32px;
    left: 130px;
    font-size: 12px;
    margin-right: 10px;
    color: #969799;
}
.item__num {
    position: absolute;
    bottom: 27px;
    left: 130px;
    font-size: 12px;
    color: #969799;
}

.item__price {
    position: absolute;
    bottom: 7px;
    left: 130px;
    font-size: 14px;
    color: rgb(255,93,35);
    font-weight: 600;
}

.item__exchange {
    position: absolute;
    bottom: 8px;
    right: 10px;
    font-size: 14px;
    color: white;
    text-align: center;
    width: 80px;
    height: 25px;
    
    background-color: rgb(255,93,35);
    border-radius: 999px;
    cursor: pointer;
}#ex-pointlist {
    position: absolute;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 3%;
    overflow: auto;
    z-index: 100;
    bottom: 37px;
}
#ex-pointlist::-webkit-scrollbar {
    display:none
}
.pointlist__wrap {
    width: 100%;
    height: 100%;
    margin: 15px 0;
    position: absolute;
}
.pointlist__close {
    position: absolute;
    color: rgb(127, 127, 137);
    right: 7px;
    font-size: 15px;
    cursor: pointer;
}
.pointlist__wrap table {
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
}

.pointlist__wrap td,
.pointlist__wrap th {
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
    width: 85px;
}

.pointlist__wrap thead th {
    background-color: #CCE8EB;
    width: 100px;
}

.pointlist__wrap tr:nth-child(odd) {
    background: #fff;
}

.pointlist__wrap tr:nth-child(even) {
    background: #F5FAFA;
}.point__panel {
    position: absolute;
    left: 0px;
    bottom: 37px;
    display: none;
    animation: move-in 0.75s;
    z-index: 101;
}
@keyframes move-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.95;
    }
}

.panel__wrap {
    overflow: hidden;
    background-color: white;
    border-radius: 5%;
    width: 120px;
    box-shadow: 0px 2px 20px 0px #888888;
    font-size: 14px;
}

.panel__cell {
    width: 100%;
    height: 37px;
    line-height: 37px;
    border-bottom: 1px solid rgba(121,127,137,0.4);
    text-align: center;
    cursor: pointer;
}

.panel__cell:hover {
    background-color: rgb(217, 217, 217);
    transition: 0.75s;
}

.panel__triangle {
    width: 0px;
    height: 0px;
    border-color: white transparent transparent transparent;
    border-style: solid;
    border-width: 10px;
    position: absolute;
    left: 35px;
}#ex-record {
    width: 300px;
    height: 400px;
    position: absolute;
    bottom: 67px;
    z-index: 100;
}
.record__close {
    position: absolute;
    color: rgb(127, 127, 137);
    right: -20px;
    font-size: 15px;
    cursor: pointer;
}
.records__wrap {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 3%;
    box-shadow: 0px 0px 20px 0px #888888;
    padding: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.records__wrap::-webkit-scrollbar {
    display:none
}

.record__wrap {
    height: 50px;
    width: 100%;
    border: 1px solid rgba(121,127,137,0.4);
    margin-bottom: 10px;
    display: -webkit-box;
    display: -moz-box; 
    display: -ms-flexbox;
    display: -webkit-flex; 
    display: flex; 
    transition: 0.75s;
    cursor: pointer;
}

.record__wrap:hover {
    background-color: #e9f5ff;
}

.record__left {
    flex: 1;
    position: relative;
}
.record__name {
    position: absolute;
    flex: 1;
    color: #353536;;
    font-size: 15px;
    top: 2px;
    margin-left: 5px;
}
.record__updatetime {
    position: absolute;
    margin-left: 5px;
    font-size: 12px;
    bottom: 2px;
    color: #969799;
}
.record__price {
    line-height: 50px;
    color: rgb(255,93,35);
    margin-right: 10px;
}

.record__pagenav {
    display: -webkit-box;
    display: -moz-box; 
    display: -ms-flexbox;
    display: -webkit-flex; 
    display: flex; 
    width: 310px;
    position: absolute;
    bottom: -20px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
}

.record__prev {
    flex: 1;
    text-align: center;
    border: 1px solid rgba(121,127,137,0.8);
    transition: 0.75s;
    color: white;
    background-color: rgb(57,169,237);
}

.record__prev:hover {
    background-color: #7167ff;
}
.record__next {
    flex: 1;
    text-align: center;
    border: 1px solid rgba(121,127,137,0.8);
    transition: 0.75s;
    background-color: rgb(57,169,237);
    color: white;
}
.record__next:hover {
    background-color: #7167ff;
}.exVideoDiv {
    width: 500px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
    z-index: 1015;
}

.exVideoPlayer {
    width: 100%;
    height: 100%;
    cursor: move;
}

.exVideoScale {
    width: 10px;
    height: 10px;
    overflow: hidden;
    cursor: se-resize;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: rgb(231, 57, 57);
}

.exVideoInfo {
    width: 100%;
    height: 30px;
    background-color: gray;
    position: absolute;
    top: -30px;
    line-height: 30px;
}

.exVideoClose {
    width: 30px;
    float: right;
    color: white;
}

.exVideoQn, .exVideoCDN {
    margin-left: 5px;
}

.exVideoRID {
    margin: 0px 5px;
    font-weight: 800;
    font-size: medium;
}

#popup-player__prompt {
    display: none;
}

.postbird-box-header {
    width: auto !important;
}.real-audience {
    cursor: pointer;
    display: flex;
    padding: 0 7px;
    line-height: 33px;
}/* #refresh-video {
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
    background-size: contain;
} */

#refresh-video2 {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

#refresh-video2-svg {
    fill: rgba(0,0,0,.6)
}

.refresh-barrage {
    display: inline-block;
    vertical-align: top;
    margin: 0 2px;
    padding: 0 8px;
    height: 22px;
    line-height: 21px;
    background-color: #fff;
    border: 1px solid #e5e4e4;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
}
#refresh-barrage__svg {
    vertical-align: middle;
}

.top-0-important {
    top: 0 !important;
}.room-vip {
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  -khtml-user-select:none;/*早期浏览器*/
  user-select:none;
  vertical-align: middle;
  float: left;
}#ex-camera {
    background: rgba(0,0,0,0.7);
    position: absolute;
    right: 20px;
    bottom: 190px;
    z-index: 10;
    width: 60px;
    height: 60px;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;
    border: 2px solid #2d2c2c;
    box-sizing: border-box;
}

#ex-camera:hover > svg > path {
    fill: rgb(252, 199, 84);
}

#ex-camera:active > svg > path {
    fill: rgb(253, 60, 60);
}
#ex-cinema:hover > .cinema__wrap {
    display: block;
}

.cinema__wrap {
    display: none;
    margin: 0;
    padding: 0;
    border: 1px solid #e5e5e5;
    background: #fff;
    position: absolute;
    left: 201px;
    min-width: 100px;
    top: 130px;
}


.cinema__panel {
    position: absolute;
    border: 1px solid #000;
    border-radius: 4px;
    transform: translateY(calc(-4px - 100%)) translateX(-50%);
    left: 33%;
    background-color: #000;
    opacity: .75;
    width: 70px;
}

.cinema__panel li {
    padding: 0 2px;
    white-space: nowrap;
    color: #fff;
    text-align: center;
    cursor: pointer;
}

.cinema__panel li:hover {
    background-color: rgb(85, 85, 85);
}  #ex-joysound {
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
    background-size: contain;
    pointer-events: all;
}
#ex-joysound img {
    width: 24px;
    height: 24px;
}#exVideoDivFake {
  display: none;
}


#ex-metadata:hover > .metadata__wrap {
  display: block;
}

.metadata__wrap {
  display: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e5e5e5;
  background: #fff;
  position: absolute;
  left: 201px;
  min-width: 100px;
  top: 0px;
  white-space: nowrap;
}


.metadata__panel {
  position: absolute;
  border: 1px solid #000;
  border-radius: 4px;
  transform: translateY(calc(-4px - 100%)) translateX(-50%);
  left: 33%;
  background-color: #000;
  opacity: .75;
  width: 70px;
}

.metadata__panel li {
  padding: 0 2px;
  white-space: nowrap;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.metadata__panel li:hover {
  background-color: rgb(85, 85, 85);
}  #ex-filter {
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
    background-size: contain;
    pointer-events: all;
}
.filter__wrap {
    display: none;
    position: relative;
    height: 100%;
    margin-right: -15px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    float: left;
    right: -12px;
    bottom: 10px;
}

.filter__panel {
    position: absolute;
    border: 1px solid #000;
    border-radius: 4px;
    transform: translateY(calc(-4px - 100%)) translateX(-50%);
    left: 33%;
    background-color: #000;
    opacity: .75;
    width: 300px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

.filter__panel li {
    padding: 0 2px;
    white-space: nowrap;
    color: #fff;
    text-align: center;
    cursor: pointer;
}

.filter__panel li:hover {
    background-color: rgb(85, 85, 85);
}


.filter__scroll {
    width: 255px;
    height: 5px;
    background: #ccc;
    position: relative;
    display: inline-block;
}

.filter__scroll-bar {
    width: 15px;
    height: 15px;
    background: #369;
    position: absolute;
    top: -5px;
    left: 100px;
    cursor: pointer;
    border-radius: 100%;
}

.filter__scroll-mask {
    position: absolute;
    left: 0;
    top: 0;
    background: #369;
    width: 100px;
    height: 5px;
}

.filter__title {
    color: white;
    display: inline-block;
    cursor: initial;
    margin-right: 2px;
}

#filter__select {
    width: 260px;
    float: right;
}

.filter__filter {
    margin-top: 5px;
}
#ex-videospeed:hover > .videospeed__wrap {
    display: block;
}

.videospeed__wrap {
    display: none;
    margin: 0;
    padding: 0;
    border: 1px solid #e5e5e5;
    background: #fff;
    position: absolute;
    left: 201px;
    min-width: 100px;
    top: 120px;
}


.videospeed__panel {
    position: absolute;
    border: 1px solid #000;
    border-radius: 4px;
    transform: translateY(calc(-4px - 100%)) translateX(-50%);
    left: 33%;
    background-color: #000;
    opacity: .75;
    width: 70px;
}

.videospeed__panel li {
    padding: 0 2px;
    white-space: nowrap;
    color: #fff;
    text-align: center;
    cursor: pointer;
}

.videospeed__panel li:hover {
    background-color: rgb(85, 85, 85);
}  #ex-videosync {
    float: left;
    width: 24px;
    height: 24px;
    margin-left: 20px;
    cursor: pointer;
    background-size: contain;
}.menu-da2a9e {
  z-index: 999 !important;
}.weeklypanel__panel-wrap {
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.weeklypanel__panel {
    height: 600px;
    width: 500px;
    background-color: white;
    border-radius: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.weeklypanel__content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
}

.weeklypanel__text {
    font-size: 18px;
}

.weeklypanel__text a {
    font-weight: bold;
    font-size: 24px;
}

.weeklypanel__close {
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    right: 15px;
    cursor: pointer;
}.noticejs-top{top:0;width:100%!important}.noticejs-top .item{border-radius:0!important;margin:0!important}.noticejs-topRight{top:10px;right:10px}.noticejs-topLeft{top:10px;left:10px}.noticejs-topCenter{top:10px;left:50%;transform:translate(-50%)}.noticejs-middleLeft,.noticejs-middleRight{right:10px;top:50%;transform:translateY(-50%)}.noticejs-middleLeft{left:10px}.noticejs-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.noticejs-bottom{bottom:0;width:100%!important}.noticejs-bottom .item{border-radius:0!important;margin:0!important}.noticejs-bottomRight{bottom:10px;right:10px}.noticejs-bottomLeft{bottom:10px;left:10px}.noticejs-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.noticejs{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.noticejs .item{margin:0 0 10px;border-radius:3px;overflow:hidden}.noticejs .item .close{float:right;font-size:18px;font-weight:700;line-height:1;color:#fff;text-shadow:0 1px 0 #fff;opacity:1;margin-right:7px}.noticejs .item .close:hover{opacity:.5;color:#000}.noticejs .item a{color:#fff;border-bottom:1px dashed #fff}.noticejs .item a,.noticejs .item a:hover{text-decoration:none}.noticejs .success{background-color:#64ce83}.noticejs .success .noticejs-heading{background-color:#3da95c;color:#fff;padding:10px}.noticejs .success .noticejs-body{color:#fff;padding:10px}.noticejs .success .noticejs-body:hover{visibility:visible!important}.noticejs .success .noticejs-content{visibility:visible}.noticejs .info{background-color:#3ea2ff}.noticejs .info .noticejs-heading{background-color:#067cea;color:#fff;padding:10px}.noticejs .info .noticejs-body{color:#fff;padding:10px}.noticejs .info .noticejs-body:hover{visibility:visible!important}.noticejs .info .noticejs-content{visibility:visible}.noticejs .warning{background-color:#ff7f48}.noticejs .warning .noticejs-heading{background-color:#f44e06;color:#fff;padding:10px}.noticejs .warning .noticejs-body{color:#fff;padding:10px}.noticejs .warning .noticejs-body:hover{visibility:visible!important}.noticejs .warning .noticejs-content{visibility:visible}.noticejs .error{background-color:#e74c3c}.noticejs .error .noticejs-heading{background-color:#ba2c1d;color:#fff;padding:10px}.noticejs .error .noticejs-body{color:#fff;padding:10px}.noticejs .error .noticejs-body:hover{visibility:visible!important}.noticejs .error .noticejs-content{visibility:visible}.noticejs .progressbar{width:100%}.noticejs .progressbar .bar{width:1%;height:30px;background-color:#4caf50}.noticejs .success .noticejs-progressbar{width:100%;background-color:#64ce83;margin-top:-1px}.noticejs .success .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#3da95c}.noticejs .info .noticejs-progressbar{width:100%;background-color:#3ea2ff;margin-top:-1px}.noticejs .info .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#067cea}.noticejs .warning .noticejs-progressbar{width:100%;background-color:#ff7f48;margin-top:-1px}.noticejs .warning .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#f44e06}.noticejs .error .noticejs-progressbar{width:100%;background-color:#e74c3c;margin-top:-1px}.noticejs .error .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#ba2c1d}@keyframes noticejs-fadeOut{0%{opacity:1}to{opacity:0}}.noticejs-fadeOut{animation-name:noticejs-fadeOut}@keyframes noticejs-modal-in{to{opacity:.3}}@keyframes noticejs-modal-out{to{opacity:0}}.noticejs-rtl .noticejs-heading{direction:rtl}.noticejs-rtl .close{float:left!important;margin-left:7px;margin-right:0!important}.noticejs-rtl .noticejs-content{direction:rtl}.noticejs{position:fixed;z-index:10050}.noticejs ::-webkit-scrollbar{width:8px}.noticejs ::-webkit-scrollbar-button{width:8px;height:5px}.noticejs ::-webkit-scrollbar-track{border-radius:10px}.noticejs ::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.5);border-radius:10px}.noticejs ::-webkit-scrollbar-thumb:hover{background:#fff}.noticejs-modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:10000;opacity:.3;left:0;top:0}.noticejs-modal-open{opacity:0;animation:noticejs-modal-in .3s ease-out}.noticejs-modal-close{animation:noticejs-modal-out .3s ease-out;animation-fill-mode:forwards}/**
 * PostbirdAlertBox.js
 * -    原生javascript弹框插件
 * Author:  Postbird - http://www.ptbird.cn
 * License: MIT
 * Date:    2017-09-23
 */
.postbird-box-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.postbird-box-container.active {
    display: block
}

.postbird-box-content {
    min-width: 400px;
    max-width: 600px;
    min-height: 150px;
    background-color: #fff;
    border: solid 1px #dfdfdf;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -100px
}

.postbird-box-header {
    width: 100%;
    padding: 10px 15px;
    position: relative;
    font-size: 1.1em;
    letter-spacing: 2px
}

.postbird-box-close-btn {
    cursor: pointer;
    font-weight: 700;
    color: #000;
    float: right;
    opacity: .5;
    font-size: 1.3em;
    margin-top: -3px;
    display: none
}

.postbird-box-close-btn:hover {
    opacity: 1
}

.postbird-box-text {
    box-sizing: border-box;
    width: 100%;
    padding: 0 10%;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    letter-spacing: 1px
}

.postbird-box-footer {
    width: 100%;
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    border-top: solid 1px #dfdfdf;
    align-items: flex-end
}

.postbird-box-footer .btn-footer {
    line-height: 44px;
    border: 0;
    cursor: pointer;
    background-color: #fff;
    color: #0e90d2;
    font-size: 1.1em;
    letter-spacing: 2px;
    transition: background-color .5s;
    -webkit-transition: background-color .5s;
    -o-transition: background-color .5s;
    -moz-transition: background-color .5s;
    outline: 0
}

.postbird-box-footer .btn-footer:hover {
    background-color: #e5e5e5
}

.postbird-box-footer .btn-block-footer {
    width: 100%
}

.postbird-box-footer .btn-left-footer,
.postbird-box-footer .btn-right-footer {
    position: relative;
    width: 100%
}

.postbird-box-footer .btn-left-footer::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background-color: #e5e5e5;
    height: 100%;
    width: 1px
}

.postbird-box-footer .btn-footer-cancel {
    color: #333
}

.postbird-prompt-input {
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    outline: 0
}.onoffswitch {
    position: relative; width: 45px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}
.onoffswitch-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    height: 20px; padding: 0; line-height: 20px;
    border: 2px solid #E3E3E3; border-radius: 20px;
    background-color: #FFFFFF;
    transition: background-color 0.3s ease-in;
}
.onoffswitch-label:before {
    content: "";
    display: block; width: 20px; margin: 0px;
    background: #FFFFFF;
    position: absolute; top: 0; bottom: 0;
    right: 23px;
    border: 2px solid #E3E3E3; border-radius: 20px;
    transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #3AAD38;
}
.onoffswitch-checkbox:checked + .onoffswitch-label, .onoffswitch-checkbox:checked + .onoffswitch-label:before {
   border-color: #3AAD38;
}
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0px; 
}.layui-timeline {
    padding-left: 5px;
}

.layui-timeline-item {
    position: relative;
    padding-bottom: 20px;
}

li {
    list-style: none;
}

.layui-timeline-item:first-child::before {
    display: block;
}

.layui-timeline-item:last-child::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 0;
    z-index: 0;
    width: 0;
    height: 100%;
}
.layui-timeline-item::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 0;
    z-index: 0;
    width: 1px;
    height: 100%;
}

.layui-timeline-item::before,
hr {
    background-color: #e6e6e6;
}

.layui-timeline-axis {
    position: absolute;
    left: -5px;
    top: 0;
    z-index: 10;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #fff;
    color: #5FB878;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
}

.layui-icon {
    font-family: layui-icon !important;
    font-size: 16px;
    font-style: normal;
}

.layui-timeline-content {
    padding-left: 25px;
}

.layui-text {
    line-height: 22px;
    font-size: 14px;
    color: rgb(85,85,85);
}

.layui-timeline-title {
    position: relative;
}`)),document.head.appendChild(e)}var exTimer=0,url=document.getElementsByTagName("html")[0].innerHTML,urlLen="$ROOM.room_id =".length,ridPos=url.indexOf("$ROOM.room_id ="),rid=(rid=url.substring(ridPos+urlLen,url.indexOf(";",ridPos+urlLen))).trim(),url=null,urlLen=null,ridPos=null,my_uid=getCookieValue("acf_uid"),myName="",dyToken=getToken(),exPanelTimer=null;function showExPanel(){var e=document.getElementsByClassName("ex-panel")[0];"visible"!==e.style.visibility?(e.style.visibility="visible",e.style.opacity="1"):(e.style.visibility="hidden",e.style.opacity="0"),clearTimeout(exPanelTimer)}function sleep(t){return new Promise(e=>setTimeout(e,t))}function formatSeconds(e){let t=parseInt(e),o=0,n=0,i=(60<t&&(o=parseInt(t/60),t=parseInt(t%60),60<o)&&(n=parseInt(o/60),o=parseInt(o%60)),parseInt(t)+"秒");return 0<o&&(i=parseInt(o)+"分"+i),i=0<n?parseInt(n)+"小时"+i:i}function formatSeconds2(e){var e=parseInt(e),t=0,o=0,e=(60<e&&(t=parseInt(e/60),e=parseInt(e%60),60<t)&&(o=parseInt(t/60),t=parseInt(t%60)),""+(parseInt(e)<10?"0"+parseInt(e):parseInt(e))),e=(parseInt(t)<10?"0"+parseInt(t):parseInt(t))+":"+e;return(parseInt(o)<10?"0"+parseInt(o):parseInt(o))+":"+e}async function verifyFans(e,t){return!0}function getStrMiddle(e,t,o){e=e.match(new RegExp(t+"(.*?)"+o));return!!e&&e[1]}function getToken(){return getCookieValue("acf_uid")+"_"+getCookieValue("acf_biz")+"_"+getCookieValue("acf_stk")+"_"+getCookieValue("acf_ct")+"_"+getCookieValue("acf_ltkid")}function getDyDid(){return getCookieValue("dy_did")}function setCookie(e,t){var o=new Date;o.setTime(o.getTime()+108e5),document.cookie=e+"="+escape(t)+"; path=/; expires="+o.toGMTString()}function getCookieValue(e){var e=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(e=document.cookie.match(e))?unescape(e[2]):null}function getCCN(){let e=getCookieValue("acf_ccn");return null==e&&(setCookie("acf_ccn","1"),e="1"),e}function getCTN(){let e=getCookieValue("acf_ctn");return null==e&&(setCookie("acf_ctn","1"),e="1"),e}function getCSRF(){let e=getCookieValue("cvl_csrf_token");return null==e&&(setCookie("cvl_csrf_token","1"),e="1"),e}function getUID(){return getCookieValue("acf_uid")}function showMessage(e,t="success",o){e={text:e,type:t,position:"bottomLeft",...o};new NoticeJs(e).show()}function openPage(e,t=!0){GM_openInTab(e,{active:t})}function closePage(){-1!=navigator.userAgent.indexOf("Firefox")||-1!=navigator.userAgent.indexOf("Chrome")?window.location.href="about:blank":(window.opener=null,window.open("","_self")),window.close()}function getQueryString(e){var e=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i");return!(window.location.hash.indexOf("?")<0)&&null!=(e=window.location.hash.split("?")[1].match(e))?decodeURIComponent(e[2]):null}function dateFormat(e,t){var o,n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e}function getRandom(e,t){return Math.floor(Math.random()*(t-e)+e)}function isRid(e){return!!/^[0-9]+$/.test(e)}function getAvailableSheet(t){let o=-1;for(let e=t;e<document.styleSheets.length-t;e++){if(null==document.styleSheets[e].href){o=e;break}o=-1}return o}function showMessageWindow(t,o,n){window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission(function(e){new Notification(t,{body:o}).onclick=function(){n()}})}function getUserName(){return new Promise(t=>{fetch("https://www.douyu.com/member/cp",{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.text()).then(e=>{e=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByClassName("uname_con")[0].title;t(e)}).catch(e=>{console.error("请求失败",e)})})}function getTextareaPosition(e){let t=0;var o;return document.selection?((o=document.selection.createRange()).moveStart("character",-e.value.length),t=o.text.length):!e.selectionStart&&"0"!=e.selectionStart||(t=e.selectionStart),t}function showExRightPanel(t){var o=[{name:"弹幕发送小助手",className:"bloop"},{name:"扩展功能",className:"extool"},{name:"直播间工具",className:"livetool"},{name:"全站抽奖信息",className:"exlottery"}];for(let e=0;e<o.length;e++){var n=o[e],i=document.getElementsByClassName(n.className)[0];i&&(t===n.name?i.style.display="block"!==i.style.display?"block":"none":i.style.display="none")}}function getTimeDiff(e,t){var o,n;return e<t?-1:(o="",n=(t=(e=Math.abs(e-t))%864e5)%36e5,(o=(o=(o+=0<(e=Math.floor(e/864e5))?e+"天":"")+(0<(e=Math.floor(t/36e5))?e+"时":""))+(0<(t=Math.floor(n/6e4))?t+"分":""))+(0<(e=Math.round(n%6e4/1e3))?e+"秒":""))}function debounce(o,n){let i;return function(){var e=arguments,t=(i&&clearTimeout(i),!i);i=setTimeout(()=>{i=null},n),t&&o.apply(this,e)}}function exportJsonToExcel(e,t,o="download.xlsx"){var n=[],e=(n.push(e,...t),XLSX.utils.aoa_to_sheet(n));openDownloadDialog(sheet2blob(e),o)}function openDownloadDialog(e,t){"object"==typeof e&&e instanceof Blob&&(e=URL.createObjectURL(e));var o,n=document.createElement("a");n.href=e,n.download=t||"",window.MouseEvent?o=new MouseEvent("click"):(o=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)}function sheet2blob(e,t){var o={SheetNames:[t=t||"sheet1"],Sheets:{}},t=(o.Sheets[t]=e,XLSX.write(o,{bookType:"xlsx",bookSST:!1,type:"binary"}));return new Blob([function(e){for(var t=new ArrayBuffer(e.length),o=new Uint8Array(t),n=0;n!=e.length;++n)o[n]=255&e.charCodeAt(n);return t}(t)],{type:"application/octet-stream"})}function downloadFile(e,t){var o=unsafeWindow.URL||unsafeWindow.webkitURL||unsafeWindow,t=new Blob([t]),n=document.createElementNS("http://www.w3.org/1999/xhtml","a"),o=(n.href=o.createObjectURL(t),n.download=e,document.createEvent("MouseEvents"));o.initMouseEvent("click",!0,!1,unsafeWindow,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)}function timeText2Ms(e){let t=0;e=e.split(":");return 1===e.length?t=Number(e[0]):2===e.length?t=60*Number(e[0])+Number(e[1]):3===e.length&&(t=3600*Number(e[0])+60*Number(e[1])+Number(e[2])),1e3*t}function resizeWindow(){var e=new Event("resize");window.dispatchEvent(e)}function isValidImageFile(e){e=e.substring(e.lastIndexOf(".")).toLowerCase();return[".jpg",".jpeg",".png",".gif",".webp",".svg",".bmp",".ico",".tiff",".tif"].includes(e)}var mscststs=new class{sleep(t){return new Promise(e=>{setTimeout(()=>{e()},t)})}async _Step(e,t,o,n){for(;n--;){if(null===document.querySelector(e));else if(!o||0!=document.querySelector(e).innerText.length)break;await this.sleep(100)}t(e)}wait(e,o=!1,n=1/0){return new Promise(t=>{this._Step(e,function(e){t(document.querySelector(e))},o,n)})}};let svg_accountList='<svg t="1613993967937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2122" width="16" height="16"><path d="M217.472 311.808l384.64 384.64-90.432 90.56-384.64-384.64z" fill="#8A8A8A" p-id="2123"></path><path d="M896.32 401.984l-384.64 384.64-90.56-90.496 384.64-384.64z" fill="#8A8A8A" p-id="2124"></path></svg>',cleanOverTimes=0;function initPkg_AccountList(){initPkg_AccountList_Dom(),initPkg_AccountList_Func()}function initPkg_AccountList_Dom(){AccountList_insertIcon()}function AccountList_insertIcon(){var e=document.createElement("div");e.style="position: absolute;right: -14px;top: 32px;cursor: pointer;",e.id="ex-accountList-icon";e.innerHTML=svg_accountList+`
        <div id="ex-accountList-wrap" class="public-DropMenu-drop">
            <div class="public-DropMenu-drop-main">
                <div id="ex-accountList-iframe"></div>
                <div id="ex-accountList-iframe2"></div>
                <div id="ex-accountList-content" style="width: 300px;font-size: 14px;padding: 10px;">
                </div>
            </div>
            <i></i>
        </div>
    `,document.getElementsByClassName("Header-right")[0].appendChild(e),addAccount()}function initPkg_AccountList_Func(){setPassportCmd("null",my_uid),unsafeWindow.addEventListener("message",e=>{switch(e.data){case"cleanOver":setTimeout(()=>{window.location.reload()},50);break;case"msgCleanOver":case"yubaCleanOver":case"videoCleanOver":case"czCleanOver":case"switchOver":5<=++cleanOverTimes&&(cleanOverTimes=0,setTimeout(()=>{window.location.reload()},50));break;case"deleteOver":renderAccountList(),showMessage("【账号管理】删除完毕","success")}})}function renderAccountList(e){document.getElementById("ex-accountList-content").innerHTML=getAccountListHtml(e);var o=document.getElementsByClassName("ex-accountList-item");for(let e=0;e<o.length;e++){var n=o[e];let t=n.getAttribute("uid");n.addEventListener("click",()=>{showMessage("【账号管理】正在切换账号，请耐心等待...","info"),switchAccount(t,()=>{}),setPassportCmd("switch",t),setYubaAndMsgAndVideoClean()}),n.getElementsByClassName("ex-accountList-item__btn")[0].addEventListener("click",e=>{e.stopPropagation(),showMessage("【账号管理】正在删除...","info"),deleteAccount(t,()=>{}),setPassportCmd("delete",t)})}document.getElementById("ex-accountList-item-add").addEventListener("click",()=>{cleanCookie(()=>{}),setPassportCmd("clean","null")})}function getAccountListHtml(e){var t,o=null==e?JSON.parse(GM_getValue("Ex_accountList")||"{}"):e;let n="";for(const i in o)"null"!=i&&(t=o[i],n+=`
        <div class="ex-accountList-item" uid="${t.uid}">
            <div class="ex-accountList-item__imgWrap">
                <img src=${decodeURIComponent(t.avatar)+"middle.jpg"} alt="" class="ex-accountList-item__img">
            </div>
            <div class="ex-accountList-item__name">${decodeURIComponent(t.nickname)}</div>
            <div class="ex-accountList-item__btn">删除</div>
        </div>`);return n+=`
    <div id="ex-accountList-item-add">
        <svg t="1613995373702" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2832" width="32" height="32"><path d="M577.088 0H448.96v448.512H0v128h448.96V1024h128.128V576.512H1024v-128H577.088z" p-id="2833" fill="#8A8A8A"></path></svg>
    </div>
    `}function switchAccount(e,o){JSON.parse(GM_getValue("Ex_accountList"));let n=[],i=0;GM_cookie("list",{path:"/"},function(t){for(let e=0;e<t.length;e++)GM_cookie("delete",{name:t[e].name},function(e){if(++i>=t.length){let t=0;for(let e=0;e<n.length;e++)GM_cookie("set",{name:n[e].name,value:n[e].value,domain:n[e].domain,path:n[e].path,secure:n[e].secure,httpOnly:n[e].httpOnly,sameSite:n[e].sameSite,expirationDate:n[e].expirationDate,hostOnly:n[e].hostOnly},function(e){++t>=n.length&&o()})}})})}function switchAccountPassport(e,o){let n=JSON.parse(GM_getValue("Ex_accountListPassport"))[e],i=0;GM_cookie("list",{path:"/"},function(t){for(let e=0;e<t.length;e++)GM_cookie("delete",{name:t[e].name},function(e){if(++i>=t.length){let t=0;for(let e=0;e<n.length;e++)GM_cookie("set",{name:n[e].name,value:n[e].value,domain:n[e].domain,path:n[e].path,secure:n[e].secure,httpOnly:n[e].httpOnly,sameSite:n[e].sameSite,expirationDate:n[e].expirationDate,hostOnly:n[e].hostOnly},function(e){++t>=n.length&&o()})}})})}function addAccount(){let e=JSON.parse(GM_getValue("Ex_accountList")||"{}"),a={},r="";GM_cookie("list",{path:"/"},function(t){var o=[];if(null==t)document.getElementById("ex-accountList-content").innerHTML="请升级Tampermonkey版本<br/><a href='https://www.crx4chrome.com/crx/1429/'>点我升级，选择Crx4Chrome</a>";else{for(let e=0;e<t.length;e++){var n=t[e].name,i=t[e].value;"acf_nickname"==n&&(a.nickname=i),"acf_uid"==n&&(a.uid=i,r=i),"acf_avatar"==n&&(a.avatar=i),o.push(t[e])}""==r&&(a.uid="null",r="null"),a.data=o,a.update_time=String((new Date).getTime()),e[r]=a,GM_setValue("Ex_accountList",JSON.stringify(e)),renderAccountList(e)}})}function addAccountPassport(e){let o=JSON.parse(GM_getValue("Ex_accountListPassport")||"{}"),n=[],i=[];GM_cookie("list",{path:"/"},function(t){if(null!=t){for(let e=0;e<t.length;e++)("LTP0"==t[e].name?n:i).push(t[e]);""==e&&(e="null"),o.global=null,o.global=i,o[e]=n,o.update_time=String((new Date).getTime()),GM_setValue("Ex_accountListPassport",JSON.stringify(o))}})}function cleanCookie(o){let n=0;GM_cookie("list",{path:"/"},t=>{if(t)for(let e=0;e<t.length;e++)GM_cookie("delete",{name:t[e].name},function(e){++n>=t.length&&o()});else o()})}function setPassportCmd(e,t){document.getElementById("ex-accountList-iframe").innerHTML=`
    <iframe id="login-passport-frame" width="100%" height="100%" scrolling="no" frameborder="0" src="https://passport.douyu.com/index/error/show404?&exid=chun&cmd=${e}&uid=${t}&domain=${encodeURIComponent(window.location.href)}&"></iframe>
    `}function setYubaAndMsgAndVideoClean(){document.getElementById("ex-accountList-iframe2").innerHTML=`
    <iframe id="ex-yuba-iframe" width="100%" height="100%" scrolling="no" frameborder="0" src="https://yuba.douyu.com/iframe/tab/6416853?exClean&domain=${encodeURIComponent(window.location.href)}&"></iframe>
    <iframe id="ex-msg-iframe" width="100%" height="100%" scrolling="no" frameborder="0" src="https://msg.douyu.com/web/index.html?exClean&domain=${encodeURIComponent(window.location.href)}&"></iframe>
    <iframe id="ex-video-iframe" width="100%" height="100%" scrolling="no" frameborder="0" src="https://v.douyu.com/show/0?exClean&domain=${encodeURIComponent(window.location.href)}&"></iframe>
    <iframe id="ex-cz-iframe" width="100%" height="100%" scrolling="no" frameborder="0" src="https://cz.douyu.com/item/gold?exClean&domain=${encodeURIComponent(window.location.href)}&"></iframe>
    `}function deleteAccount(e,t){var o=JSON.parse(GM_getValue("Ex_accountList")||"{}");delete o[e],GM_setValue("Ex_accountList",JSON.stringify(o)),t()}function deleteAccountPassport(e,t){var o=JSON.parse(GM_getValue("Ex_accountListPassport")||"{}");delete o[e],GM_setValue("Ex_accountListPassport",JSON.stringify(o)),t()}function initPkg_AdVideo(){initPkg_Sign_Ad_FishPond()}function initPkg_AdVideo_Xiaoxiaole(){}async function startGetXiaoxiaoleFishBall(){var e=await getXiaoxiaoleStatus();if("0"==e.error){var t=Number(e.data["20201021xiaoxiaole_T1"].curCompleteNum),o=Number(e.data["20201021xiaoxiaole_T1"].taskLimitNum)-t;0<o&&showMessage(`【消消乐】开始领取鱼丸，剩余${o}次`,"info");for(let e=0;e<o;e++)await getFishBall_Xiaoxiaole()}}async function getFishBall_Xiaoxiaole(){let e=new DyWacthAd("1134396",dyToken,rid);1==await e.start()&&await sleep(15e3).then(async()=>{1==await e.finish()&&showMessage("【消消乐】成功领取40鱼丸","success")})}function getXiaoxiaoleStatus(){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/actTask/userStatus",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"tasks=20201021xiaoxiaole_T1&token="+dyToken}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function initPkg_Sign_Ad_FishPond(){getFishBall_Ad_FishPond()}function getFishBall_Ad_FishPond(){GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/fishpoolTask/m/apinc/taskList?client_sys=android",data:"rid="+rid+"&token="+dyToken,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:async function(e){var t=e.response.data.panel;let o=null;for(let e=0;e<t.length;e++)if(37==t[e].id){o=t[e].taskList;break}if(o)for(let t=0;t<o.length;t++)if("5578"==o[t].task.id){if("3"!=o[t].task.status)for(let e=0;e<o[t].task.max-o[t].task.cur;e++){let t="1114268",o=dyToken,n=getUID();var r=await getFishBall_Ad_FishPond_info(t,o,n);if(0==r)return void initPkg_Sign_Ad_Yuba();let i=r.mid,a=r.infoBack,e=await getFishBall_Ad_FishPond_start(t,o,n,i,a);1==(e=0==e&&0==(e=await getFishBall_Ad_FishPond_start(t,o,n,i,a))?await getFishBall_Ad_FishPond_start(t,o,n,i,a):e)&&(showMessage("【鱼塘鱼丸】开始领取鱼塘鱼丸，需等待15秒","info"),await sleep(15555).then(async()=>{let e=await getFishBall_Ad_FishPond_finish(t,o,n,i,a);1==(e=0==e&&0==(e=await getFishBall_Ad_FishPond_finish(t,o,n,i,a))?await getFishBall_Ad_FishPond_finish(t,o,n,i,a):e)&&showMessage("【鱼塘鱼丸】任务完成","success")}))}initPkg_Sign_Ad_Yuba()}}})}function getFishBall_Ad_FishPond_info(e,t,o){return new Promise(o=>{GM_xmlhttpRequest({method:"POST",url:"https://rtbapi.douyucdn.cn/japi/sign/app/getinfo?token="+t+"&mdid=phone&client_sys=android",data:"posid="+e+"&roomid="+rid+'&cate1=1&cate2=1&chanid=30&device={"nt":"1"}',responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var t,e=e.response;"0"==e.error&&(0==e.data.length?o(!1):(t=e.data[0].mid,e=encodeURIComponent(JSON.stringify(e.data)),o({mid:t,infoBack:e})))}})})}function getFishBall_Ad_FishPond_start(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/start?client_sys=android",data:"token="+o+"&uid="+n+"&roomId="+rid+"&posCode="+e+"&clientType=1&creativeId="+i+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){"0"==e.response.error&&t(!0)}})})}function getFishBall_Ad_FishPond_finish(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/finish?client_sys=android",data:"uid="+n+"&clientType=1&posCode="+e+"&creativeId="+i+"&roomId="+rid+"&token="+o+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){"0"==e.response.error&&t(!0)}})})}function getFishBall_Ad_FishPond_Bubble(e){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/tasksys/ytxb/getPrize?client_sys=android",data:"token="+e+"&id=182",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;"0"==e.error?showMessage("【鱼塘鱼丸】"+e.data.msg,"success"):showMessage("【鱼塘鱼丸】"+e.msg,"error"),t(e.error)}})})}function initPkg_Sign_Ad_Guess(){getFishBall_Ad_Guess()}async function getFishBall_Ad_Guess(){var t=await getFishBall_Ad_Guess_chance();if(0<t)for(let e=0;e<t;e++){let e=new DyWacthAd("1114337",dyToken,rid);1==await e.start()&&(showMessage("【预言鱼丸】开始领取预言鱼丸，需等待15秒","info"),await sleep(15555).then(async()=>{1==await e.finish()&&showMessage("【预言鱼丸】成功领取40鱼丸","success"),await sleep(1e3)}))}initPkg_AdVideo_Xiaoxiaole()}function getFishBall_Ad_Guess_chance(){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/chance?client_sys=android",data:"token="+dyToken+"&uid="+getUID()+"&posCode=1114337&clientType=1",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:async function(e){var e=e.response;"0"==e.error?(e=e.data.chanceNum,t(e)):t(0)}})})}function initPkg_Sign_Ad_Search(){getFishBall_Ad_Search()}function getFishBall_Ad_Search(){GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/chance?client_sys=android",data:"token="+dyToken+"&uid="+getUID()+"&posCode=1124343&clientType=1",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:async function(e){e=e.response;if("0"==e.error){var t=e.data.chanceNum;if(!(0<t))return void initPkg_Sign_Ad_Guess();for(let e=0;e<t;e++){let e="1124343",t=dyToken,o=getUID();var a=await getFishBall_Ad_Search_info(e,t,o);if(0==a)return void initPkg_Sign_Ad_Guess();let n=a.mid,i=a.infoBack;1==await getFishBall_Ad_Search_start(e,t,o,n,i)&&(showMessage("【搜索鱼丸】开始领取搜索鱼丸，需等待15秒","info"),await sleep(15555).then(async()=>{1==await getFishBall_Ad_Search_finish(e,t,o,n,i)&&(showMessage("【搜索鱼丸】成功领取40鱼丸","success"),await sleep(1e3))}))}}initPkg_Sign_Ad_Guess()}})}function getFishBall_Ad_Search_info(e,t,o){return new Promise(o=>{GM_xmlhttpRequest({method:"POST",url:"https://rtbapi.douyucdn.cn/japi/sign/app/getinfo?token="+t+"&mdid=phone&client_sys=android",data:"posid="+e+"&roomid="+rid+'&cate1=1&cate2=1&chanid=30&device={"nt":"1"}',responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var t,e=e.response;"0"==e.error&&(0==e.data.length?o(!1):(t=e.data[0].mid,e=encodeURIComponent(JSON.stringify(e.data)),o({mid:t,infoBack:e})))}})})}function getFishBall_Ad_Search_start(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/start?client_sys=android",data:"token="+o+"&uid="+n+"&roomId="+rid+"&posCode="+e+"&clientType=1&creativeId="+i+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){"0"==e.response.error&&t(!0)}})})}function getFishBall_Ad_Search_finish(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/finish?client_sys=android",data:"uid="+n+"&clientType=1&posCode="+e+"&creativeId="+i+"&roomId="+rid+"&token="+o+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;"0"==e.error&&"1"==e.data&&t(!0)}})})}function initPkg_Sign_Ad_Yuba(){getFishBall_Ad_Yuba()}function getFishBall_Ad_Yuba(){GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/chance?client_sys=android",data:"token="+dyToken+"&uid="+getUID()+"&posCode=1042329&clientType=1",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:async function(e){e=e.response;if("0"==e.error){var t=e.data.chanceNum;if(!(0<t))return void initPkg_Sign_Ad_Search();for(let e=0;e<t;e++){let e="1042329",t=dyToken,o=getUID();var a=await getFishBall_Ad_Yuba_info(e,t,o);if(0==a)return void initPkg_Sign_Ad_Search();let n=a.mid,i=a.infoBack;1==await getFishBall_Ad_Yuba_start(e,t,o,n,i)&&(showMessage("【鱼吧鱼丸】开始领取鱼吧鱼丸，需等待15秒","info"),await sleep(15555).then(async()=>{1==await getFishBall_Ad_Yuba_finish(e,t,o,n,i)&&(showMessage("【鱼吧鱼丸】成功领取40鱼丸","success"),await sleep(1e3))}))}}initPkg_Sign_Ad_Search()}})}function getFishBall_Ad_Yuba_info(e,t,o){return new Promise(o=>{GM_xmlhttpRequest({method:"POST",url:"https://rtbapi.douyucdn.cn/japi/sign/app/getinfo?token="+t+"&mdid=phone&client_sys=android",data:"posid="+e+"&roomid="+rid+'&cate1=1&cate2=1&chanid=30&device={"nt":"1"}',responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var t,e=e.response;"0"==e.error&&(0==e.data.length?o(!1):(t=e.data[0].mid,e=encodeURIComponent(JSON.stringify(e.data)),o({mid:t,infoBack:e})))}})})}function getFishBall_Ad_Yuba_start(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/start?client_sys=android",data:"token="+o+"&uid="+n+"&roomId="+rid+"&posCode="+e+"&clientType=1&creativeId="+i+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){"0"==e.response.error&&t(!0)}})})}function getFishBall_Ad_Yuba_finish(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/finish?client_sys=android",data:"uid="+n+"&clientType=1&posCode="+e+"&creativeId="+i+"&roomId="+rid+"&token="+o+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;"0"==e.error&&"1"==e.data&&t(!0)}})})}function initPkg_AudioLine(){initPkg_AudioLine_Dom(),initPkg_AudioLine_Func()}function initPkg_AudioLine_Dom(){AudioLine_insertIcon()}function AudioLine_insertIcon(){var e=document.createElement("div"),t=(e.className="Title-blockInline",e.id="ex-audio-line",e.innerHTML='<div class="TitleShare"><div class="TitleShare-shareBox "><div class="Title-row-span  is-right"><span class="Title-row-icon "><svg t="1613808136306" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2829" width="16" height="16"><path d="M496 64A48 48 0 0 1 544 112v800a48 48 0 0 1-96 0v-800A48 48 0 0 1 496 64z m-224 128A48 48 0 0 1 320 240v544a48 48 0 0 1-96 0v-544A48 48 0 0 1 272 192z m448 0A48 48 0 0 1 768 240v544a48 48 0 0 1-96 0v-544A48 48 0 0 1 720 192z m-672 128A48 48 0 0 1 96 368v288a48 48 0 0 1-96 0v-288A48 48 0 0 1 48 320z m896 0a48 48 0 0 1 48 48v288a48 48 0 0 1-96 0v-288a48 48 0 0 1 48-48z" p-id="2830"></path></svg></span><span class="Title-row-text ">切换音频线路</span></div></div></div>',document.getElementsByClassName("Title-col")[4]);1<t.childNodes.length&&t.insertBefore(e,t.childNodes[1])}function initPkg_AudioLine_Func(){document.getElementById("ex-audio-line").addEventListener("click",function(){document.getElementsByClassName("pause-c594e8")[0].click(),getRealLive_Douyu(rid,!0,!1,"1015",e=>{createNewAudio_Douyu(videoPlayerArr.length,rid)})})}let timeout;function initPkg_BagInfo(){initPkg_BagInfo_Func()}function initPkg_BagInfo_Func(){document.getElementsByClassName("BackpackButton")[0]&&document.getElementsByClassName("BackpackButton")[0].addEventListener("click",function(){clearTimeout(timeout),timeout=setTimeout(()=>{0<document.getElementsByClassName("Backpack JS_Backpack").length&&getBagGifts(rid,n=>{var i=n.data.list.length;if(0<i){let t=0,o=0;for(let e=0;e<i;e++){var a=document.getElementsByClassName("Backpack-prop")[e],r=n.data.list[e].isValuable,s=n.data.list[e].expiry,l=n.data.list[e].price,d=n.data.list[e].intimate,c=n.data.list[e].count,r=("1"==r&&(t+=Number(l)*Number(c)),o+=Number(d)*Number(c),document.createElement("div"));r.className="bag-info",r.innerHTML=s-1,a.insertBefore(r,a.childNodes[0])}var e=document.getElementsByClassName("BackpackHeader-extInfo")[0].innerHTML;document.getElementsByClassName("BackpackHeader-extInfo")[0].innerHTML='<span style="float: left">总价值：'+String(Number(t/100).toFixed(2))+" 总亲密度："+String(o)+'<span class="bag-button" id="Backpack__clearbag">清空背包</span></span>'+e,document.getElementById("Backpack__clearbag").addEventListener("click",()=>{1==confirm("确认清空？")&&(showMessage("【清空背包】执行中...","info"),getBagGifts(rid,e=>{clearBagGifts(e,rid)}))})}})},500)})}async function clearBagGifts(n,i){var t=n.data.list.length;if(0<t){for(let e=0;e<t;e++){let t=n.data.list[e].id,o=n.data.list[e].count;if(0<Object.keys(n.data.list[e].batchInfo).length)await sleep(100).then(()=>{sendGift_bag(t,o,i)});else for(let e=0;e<o;e++)await sleep(100).then(()=>{sendGift_bag(t,1,i)})}showMessage("【清空背包】执行完毕！","success")}else showMessage("背包礼物为空","error")}let barrageColorArr=[],barrageArr=[],barrageColorLength=0,barrageLength=0,bloopTimer,barrageOffset=0,barrageColorOffset=0,isChangeColor=!0,isMatch=!1,bloopStopTimer,barrageOptions=[];function initPkg_BarrageLoop(){initPkg_BarrageLoop_Dom(),initPkg_BarrageLoop_Func(),initPkg_BarrageLoop_Set()}function BarrageLoop_insertModal(){var e="",t=document.createElement("div"),e=(t.className="bloop",(e+='<div style="display:inline-block"><label>弹幕：</label></div>')+`
	<span style="float:right;margin-right:15px;">
		<select id="bloop__select"></select>
		<input style="width:40px;margin-left:10px;" type="button" id="bloop__save" value="保存"/>
		<input style="width:40px;margin-left:10px;" type="button" id="bloop__delete" value="删除"/>
	</span>
	`+'<textarea placeholder="一行一个，开启舔狗模式后此处不需要输入" id="bloop__textarea" rows="5" cols="50"></textarea>'+'<div><label>速度(ms)：</label><input id="bloop__text_speed1" type="text" style="width:50px;text-align:center;" value="2000" />~<input id="bloop__text_speed2" type="text" style="width:50px;text-align:center;" value="3000" /></div>'+'<div><label>限时(min)：</label><input id="bloop__text_stoptime" type="text" style="width:50px;text-align:center;" value="1" /></div>'+'<div><label><input id="bloop__checkbox_changeColor" type="checkbox" name="checkbox_changeColor" checked>自动变色</label><label><input id="bloop__checkbox_tiangou" type="checkbox">舔狗模式</label></div>'+'<div class="bloop__switch"><label><input id="bloop__checkbox_startSend" type="checkbox">开始发送</label></div>',t.innerHTML='<div style="display:inline-block"><label>弹幕：</label></div>\n\t<span style="float:right;margin-right:15px;">\n\t\t<select id="bloop__select"></select>\n\t\t<input style="width:40px;margin-left:10px;" type="button" id="bloop__save" value="保存"/>\n\t\t<input style="width:40px;margin-left:10px;" type="button" id="bloop__delete" value="删除"/>\n\t</span>\n\t<textarea placeholder="一行一个，开启舔狗模式后此处不需要输入" id="bloop__textarea" rows="5" cols="50"></textarea><div><label>速度(ms)：</label><input id="bloop__text_speed1" type="text" style="width:50px;text-align:center;" value="2000" />~<input id="bloop__text_speed2" type="text" style="width:50px;text-align:center;" value="3000" /></div><div><label>限时(min)：</label><input id="bloop__text_stoptime" type="text" style="width:50px;text-align:center;" value="1" /></div><div><label><input id="bloop__checkbox_changeColor" type="checkbox" name="checkbox_changeColor" checked>自动变色</label><label><input id="bloop__checkbox_tiangou" type="checkbox">舔狗模式</label></div><div class="bloop__switch"><label><input id="bloop__checkbox_startSend" type="checkbox">开始发送</label></div>',document.getElementsByClassName("layout-Player-chat")[0]);e.insertBefore(t,e.childNodes[0])}function BarrageLoop_insertIcon(){var e=document.createElement("div"),t=(e.className="bloop-icon",e.innerHTML='<a class="ex-panel__icon" title="弹幕发送小助手"><svg t="1578572568198" style="display: block;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="55445" width="32" height="32"><path d="M511.99883605 1020.07740302c-68.78771655 0-135.53209458-13.47788003-198.38074083-40.06106453-60.69004402-25.67037725-115.18953131-62.41203655-161.98371328-109.20738247-46.79418197-46.79301803-83.53700523-101.29366926-109.20621853-161.98371328C15.84497778 645.97776043 2.36709774 579.23105337 2.36709774 510.4445019s13.47904398-135.53209458 40.06106453-198.38074083c25.6692133-60.69004402 62.41203655-115.18953131 109.20621853-161.98371328 46.79534706-46.79418197 101.29366926-83.53700523 161.98371328-109.20621853 62.84864739-26.5831845 129.59418937-40.06106453 198.38074083-40.06106453 68.78771655 0 135.53209458 13.47904398 198.38190592 40.06106453 60.69004402 25.6692133 115.18953131 62.41203655 161.98487723 109.20621853 46.79301803 46.79418197 83.53584128 101.29366926 109.20621853 161.98371328 26.5831845 62.84864739 40.06106453 129.59418937 40.06106453 198.38074083s-13.47788003 135.53325853-40.06106453 198.38074084c-25.67037725 60.69004402-62.41203655 115.19069525-109.20621853 161.98371328-46.79534706 46.79418197-101.29483435 83.53817031-161.98487723 109.20738247C647.53092949 1006.59952413 580.78655147 1020.07740302 511.99883605 1020.07740302zM511.99883605 57.86089358c-249.55500203 0-452.58244437 203.02744235-452.58244437 452.58244437s203.02744235 452.58244437 452.58244437 452.58244438c249.55616597 0 452.58360832-203.02744235 452.58360832-452.58244438C964.58244437 260.88949987 761.55500203 57.86089358 511.99883605 57.86089358z" p-id="55446" fill="#1296db" data-spm-anchor-id="a313x.7781069.0.i24"></path><path d="M322.42598685 461.65355293l-8.51099648 74.46598314 97.86947811 0c-2.85950862 76.59314973-4.9866752 127.6556379-6.38266595 153.18746454-1.42975431 51.06132423-27.65899321 75.16339541-78.72148139 72.33881542-18.45058333 1.39598962-35.47024839 2.12716658-51.06248818 2.12716658-2.85950862-17.02082901-6.38266595-34.77283613-10.63816419-53.19081984 18.41681863 0 35.43764878 0 51.06248817 0 25.53066155 2.82574393 38.99456967-7.77981952 40.42432399-31.9133275 1.39598962-9.9069861 2.12833166-25.53182663 2.12833166-46.80698994 1.39598962-21.27632725 2.12716658-36.86740309 2.12716658-46.80698994l-99.9966447 0 14.89366244-172.33546126 89.3584805 0 0-78.72148138-102.12497636 0 0-48.9353216 151.05913287 0 0 176.5909595L322.42598685 461.65355293zM450.08162475 580.79819435l0-242.54594504 74.46598314 0c-17.0219941-24.10090723-31.91449145-43.25006791-44.67982222-57.44515413l46.80698994-21.27632725c4.25433429 4.25549824 10.63699911 12.06675342 19.14799673 23.40349497 15.5910747 18.45058333 24.79948459 30.51733789 27.65899321 36.16882574l-42.5514917 19.14799673 80.84864796 0c25.53066155-38.29715741 41.8203136-64.5263963 48.93415652-78.72031744l53.19081984 14.89366244c-5.68525255 8.50983253-15.62483939 22.70491762-29.78732487 42.55149169-7.11384291 9.93958685-12.06675342 17.02082901-14.89249849 21.27516331l70.20931982 0 0 242.54594503L620.28991829 580.7970304l0 51.06248818 144.67646806 0 0 48.93415651L620.28991829 680.79367509l0 87.23131392-51.06132423 0 0-87.23131392L428.80646144 680.79367509l0-48.93415651 140.42213376 0 0-51.06248818L450.08162475 580.7970304zM501.14411293 385.0604032l0 53.18965475 68.08331718 0 0-53.18965475L501.14411293 385.0604032zM501.14411293 480.80154965l0 55.31682248 68.08331718 0L569.22743011 480.80154965 501.14411293 480.80154965zM688.37323549 385.0604032l-68.0833172 0 0 53.18965475 68.0833172 0L688.37323549 385.0604032zM620.28991829 480.80154965l0 55.31682248 68.0833172 0L688.37323549 480.80154965 620.28991829 480.80154965z" p-id="55447" fill="#1296db"></path></svg><i id="bloop__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function getBarrageColorArr(){barrageColorArr.length=0,barrageColorLength=0;let t=document.getElementsByClassName("FansBarrageSwitcher");var e;let o=!1;0<document.getElementsByClassName("NobleBarrageSwitcher is-active").length&&(o=!0),0==t.length?(isMatch=!0,null!=(e=document.getElementsByClassName("MatchSystemFansBarrageSwitcher")[0])?(e.click(),t=document.getElementsByClassName("MatchSystemFansBarrageColor-item")):isMatch=!1):(t[0].click(),t=document.getElementsByClassName("FansBarrageColor-item"),isMatch=!1);for(let e=0;e<t.length;e++)-1==t[e].className.indexOf("is-lock")&&(barrageColorArr.push(e),barrageColorLength++);barrageColorLength-=1,1==o&&document.getElementsByClassName("NobleBarrageSwitcher")[0].click()}function getBarrageArr(){barrageArr.length=0,barrageLength=0;var e=document.getElementById("bloop__textarea").value;barrageArr=e.split("\n"),barrageLength=barrageArr.length-1}function selectBarrageColor(e){let t;null!=(t=(0==isMatch?(document.getElementsByClassName("FansBarrageSwitcher")[0].click(),document.getElementsByClassName("FansBarrageColor-item")):(document.getElementsByClassName("MatchSystemFansBarrageSwitcher")[0].click(),document.getElementsByClassName("MatchSystemFansBarrageColor-item")))[e])&&t.click()}function sendBarrage(e){document.getElementsByClassName("ChatSend-txt")[0].value=e,document.getElementsByClassName("ChatSend-button")[0].click()}function getSpeed(){var e=document.getElementById("bloop__text_speed1").value,t=document.getElementById("bloop__text_speed2").value;return getRandom(Number(e),Number(t))}function saveData_BarrageLoop(){let e=document.getElementById("bloop__text_speed1").value,t=document.getElementById("bloop__text_speed2").value,o=document.getElementById("bloop__text_stoptime").value;var n=document.getElementById("bloop__checkbox_tiangou").checked,n=("undefined"==e&&(e=2e3),"undefined"==t&&(t=3e3),"undefined"==o&&(o=5),{text:barrageOptions,speed1:e,speed2:t,stopTime:o,isChangeColor:isChangeColor,isTiangouMode:n});localStorage.setItem("ExSave_BarrageLoopOptions",JSON.stringify(n).replace(/\\n/g,"\\r"))}function getStopTime(){var e=document.getElementById("bloop__text_stoptime").value;return 60*Number(e)*1e3}async function doLoopBarrage(){var e;1==isChangeColor&&(selectBarrageColor(barrageColorOffset),++barrageColorOffset>barrageColorLength)&&(barrageColorOffset=0),1==document.getElementById("bloop__checkbox_tiangou").checked?(e=await getBarrageTxt_Tiangou(),sendBarrage(e=String(e).replace(/他/g,"她"))):(sendBarrage(barrageArr[barrageOffset]),++barrageOffset>barrageLength&&(barrageOffset=0)),bloopTimer=setTimeout(doLoopBarrage,getSpeed())}function initPkg_BarrageLoop_Func(){document.getElementsByClassName("bloop-icon")[0].addEventListener("click",function(){showExRightPanel("弹幕发送小助手")}),document.getElementById("bloop__checkbox_changeColor").addEventListener("click",function(){isChangeColor=document.getElementById("bloop__checkbox_changeColor").checked}),document.getElementById("bloop__checkbox_startSend").addEventListener("click",function(){1==document.getElementById("bloop__checkbox_startSend").checked?(barrageOffset=0,barrageColorOffset=0,getBarrageArr(),getBarrageColorArr(),saveData_BarrageLoop(),bloopTimer=setTimeout(doLoopBarrage,getSpeed()),bloopStopTimer=setTimeout(()=>{document.getElementById("bloop__checkbox_startSend").checked=!1,clearTimeout(bloopTimer)},getStopTime())):(clearTimeout(bloopTimer),clearTimeout(bloopStopTimer))}),document.getElementById("bloop__checkbox_tiangou").addEventListener("click",function(){var e=document.getElementById("bloop__checkbox_tiangou").checked;document.getElementById("bloop__textarea").disabled=1==e,saveData_BarrageLoop()}),document.getElementById("bloop__select").onclick=function(){var e,t;0!=this.options.length&&(e=document.getElementById("bloop__textarea"),t=this.options[this.selectedIndex].text,e.value=t,e.value=e.value.replace(/\\r/g,"\r"))},document.getElementById("bloop__save").addEventListener("click",()=>{var e=document.getElementById("bloop__select"),t=document.getElementById("bloop__textarea").value;""!=t&&(barrageOptions.push(t),e.options.add(new Option(t.replace(/\n/g,"\\r"),!0)),saveData_BarrageLoop())}),document.getElementById("bloop__delete").addEventListener("click",()=>{var e=document.getElementById("bloop__select"),o=e.options[e.selectedIndex];if(o){let t=o.text;barrageOptions=barrageOptions.filter(e=>e===t),e.options.remove(e.selectedIndex),saveData_BarrageLoop()}})}function initPkg_BarrageLoop_Dom(){BarrageLoop_insertModal(),BarrageLoop_insertIcon()}function initPkg_BarrageLoop_Set(){var e=localStorage.getItem("ExSave_BarrageLoopOptions");if(null!=e){e=JSON.parse(e);"speed1"in e==0&&(e.speed1=2e3),"speed2"in e==0&&(e.speed2=3e3),"stopTime"in e==0&&(e.stopTime=5),"isTiangouMode"in e==0&&(e.isTiangouMode=!1);let t=document.getElementById("bloop__select");e.text.forEach(e=>{t.options.add(new Option(e.replace(/\r/g,"\\r"),""))}),barrageOptions=e.text,document.getElementById("bloop__checkbox_changeColor").checked=e.isChangeColor,isChangeColor=Boolean(e.isChangeColor),document.getElementById("bloop__text_speed1").value=e.speed1,document.getElementById("bloop__text_speed2").value=e.speed2,document.getElementById("bloop__text_stoptime").value=e.stopTime,1==e.isTiangouMode&&(document.getElementById("bloop__checkbox_tiangou").checked=e.isTiangouMode,document.getElementById("bloop__textarea").disabled=!0)}}function getBarrageTxt_Tiangou(){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"https://api.shadiao.app/chp",responseType:"json",onload:function(e){e=e.response;t(e.data.text)}})})}function initPkg_BarragePanel(){let e=setInterval(()=>{0<document.getElementsByClassName("danmuTips-1ee820").length&&(clearInterval(e),document.getElementsByClassName("danmuTips-1ee820")[0].parentElement.id="Ex_BarragePanel",setBarragePanelCallBack())},1500);initPkg_BarragePanel_Tip()}function setBarragePanelCallBack(){new DomHook("#Ex_BarragePanel",!0,t=>{let o=!1;if(0<t.length){for(let e=0;e<t.length;e++)if("attributes"==t[e].type){o=!0;break}var e,n,i;0==o?0<(i=t[0].addedNodes).length&&"getElementsByClassName"in(i=i[0])!=0&&(e="",0<(n=i.getElementsByClassName("danmuAuthor-3d7b4a")).length)&&(e=n[0].innerText,setUserFansMedal(n[0],e),setMuteButton(i),setSearchBarrageButton(i),setMuteTimeButton(i),setReplyBarrageButton(i),setBarrgePanelFunc(i,e)):(0<(n=document.getElementsByClassName("barragePanel__funcPanel")).length&&n[0].remove(),null!=(i=document.getElementsByClassName("danmudiv-32f498")[0])&&(e="",0<(n=i.getElementsByClassName("danmuAuthor-3d7b4a")).length&&(e=n[0].innerText,setUserFansMedal(n[0],e),setMuteButton(i),setSearchBarrageButton(i),setMuteTimeButton(i),setReplyBarrageButton(i),setBarrgePanelFunc(i,e)),n=document.getElementsByClassName("danmuContent-25f266")[0])&&n.innerHTML.includes("[DouyuEx图片")&&(i=n.innerHTML.replace(/\[DouyuEx图片(.*?)\]/g,(e,t)=>getImageDanmakuHtml(t)),n.innerHTML=i))}});new DomHook("#Ex_BarragePanel",!1,e=>{var t,o=document.getElementsByClassName("danmuContent-25f266")[0];o&&o.innerHTML.includes("[DouyuEx图片")&&(t=o.innerHTML.replace(/\[DouyuEx图片(.*?)\]/g,(e,t)=>getImageDanmakuHtml(t)),o.innerHTML=t)})}function getUserFansMedal(t){let o=!1;var n=document.getElementsByClassName("Barrage-listItem");for(let e=n.length-1;0<=e;e--){var i=n[e].lastElementChild;if(null!=i&&-1!=i.innerHTML.indexOf(t)){i=i.getElementsByClassName("FansMedal");if(0<i.length){o=i[0].cloneNode(!0);break}}}return o}function getUserLevelText(t){let o="";var n=document.getElementsByClassName("Barrage-listItem");for(let e=n.length-1;0<=e;e--){var i=n[e].lastElementChild;if(null!=i&&-1!=i.innerHTML.indexOf(t)){0<i.getElementsByClassName("Barrage-icon--roomAdmin").length&&(o+="【房管】");var a=i.getElementsByClassName("Barrage-nobleImg"),a=(0<a.length&&(o+=`【${a[0].title}】`),i.getElementsByClassName("UserLevel"));0<a.length&&(o+=a[0].title);break}}return o}function setUserFansMedal(e,t){null==document.getElementById("barragePanel__id")&&(e.removeChild(e.childNodes[0]),n=getUserLevelText(t),(o=document.createElement("span")).innerHTML=t,o.title=n,o.id="barragePanel__id",e.insertBefore(o,e.childNodes[0]));var o,n=getUserFansMedal(t);0!=n&&((a=document.createElement("div")).style="display:inline-block",a.appendChild(n),e.insertBefore(a,e.childNodes[0]))}function setMuteButton(e){var t;null==document.getElementById("barragePanel__mute")&&((t=document.createElement("div")).className="ReportButton-41fa9e",t.id="barragePanel__mute",t.innerText="禁言",t.style="margin-top:120px;z-index:5",e.insertBefore(t,e.childNodes[0]))}function setSearchBarrageButton(e){var t;null==document.getElementById("barragePanel__search")&&((t=document.createElement("div")).className="HideButton-d22988",t.innerText="查弹幕",t.id="barragePanel__search",t.style="margin-top:120px;z-index:5",e.insertBefore(t,e.childNodes[0]))}function setReplyBarrageButton(e){var t;null==document.getElementById("barragePanel__reply")&&((t=document.createElement("div")).className="HideButton-d22988",t.innerText="回复",t.id="barragePanel__reply",t.style="margin-top:90px;z-index:5",e.insertBefore(t,e.childNodes[0]))}function setMuteTimeButton(e){var t;0<document.getElementsByClassName("barragePanel__muteTime").length||((t=document.createElement("div")).className="barragePanel__muteTime",t.innerHTML=`
    <select id="barragePanel__muteSelect" style='width:55px'>
        <option value="1">1分钟</option>
        <option value="10">10分钟</option>
        <option value="30">30分钟</option>
        <option value="60">1小时</option>
        <option value="480">8小时</option>
        <option value="1440">1天</option>
        <option value="4320">3天</option>
        <option value="10080">7天</option>
        <option value="43200">30天</option>
        <option value="259200">180天</option>
        <option value="518400">360天</option>
    </select>
    `,e.insertBefore(t,e.childNodes[0]))}function setBarrgePanelFunc(t,o){document.getElementById("barragePanel__reply").onclick=()=>{var e=t.getElementsByClassName("danmuContent-25f266")[0].innerText;""!=e&&(document.getElementsByClassName("ChatSend-txt")[0].value=`@${o}：`+e)},document.getElementById("barragePanel__mute").onclick=async()=>{var e=document.getElementById("barragePanel__muteSelect").value||"1",t=await addMuteUser(rid,o,e);"添加成功"==t.msg?showMessage(`【禁言】${o}已被禁言${e}分钟`,"success"):showMessage(t.msg,"error")},document.getElementById("barragePanel__search").onclick=async()=>{var e=await getUserUid(o);""!==e&&openPage(`https://www.doseeing.com/data/fan/${e}?type=chat&dt=0`,!0)}}function insertBarragePanel_SearchBarrage_Dom(e){var t=parseInt(e.style.marginLeft);let o="-237px";o=237<t?"-237px":"237px";t=document.createElement("div");t.className="barragePanel__funcPanel",t.style="margin-left:"+o,t.innerHTML=`
    <ul class="layui-timeline" id="barragePanel__searchPanel">
        
    </ul>
    `,e.insertBefore(t,e.childNodes[0])}function getUserRecentBarrage(e){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"http://dyapi.fz996.com/api/Wx/GetDataBarrage?keyword="+e,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;t(e)}})})}function getUserUid(n){return new Promise(o=>{GM_xmlhttpRequest({method:"GET",url:"https://www.doseeing.com/api/suggest_all?type=room&nickname="+encodeURIComponent(n),responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;let t=!0;e.suggest||(t=!1),e.suggest.fan||(t=!1),0===e.suggest.fan.length&&(t=!1),(t=e.suggest.fan[0].nickname!==n?!1:t)?o(e.suggest.fan[0].user_id):o("")}})})}function initPkg_BarragePanel_Tip(){setBarragePanelTipCallBack()}function setBarragePanelTipCallBack(){new DomHook("#comment-dzjy-container",!1,e=>{e.length<=0||e[0].addedNodes.length<=0||(renderBarragePanelTip(e[0].addedNodes[0]),setBarragePanelTipFunc())})}function renderBarragePanelTip(e){let t=document.createElement("div");t.style.display="inline-block",document.getElementsByClassName("btnscontainer-4e2ed0")[0].insertBefore(t,e.childNodes[0]),(t=document.createElement("p")).className="sugun-e3fbf6",t.innerText="|",e.appendChild(t),(t=document.createElement("div")).className="labelfisrt-407af4",t.id="barrage-panel-tip__+1",t.innerText="+1",e.appendChild(t)}function setBarragePanelTipFunc(){document.getElementById("barrage-panel-tip__+1").onclick=()=>{var e=document.getElementById("comment-higher-container");0<e.getElementsByClassName("ex-image-danmaku").length?sendBarrage(e.getElementsByClassName("text-879f3e")[0].innerHTML.replace(/<a[^>]*><img\s+(?:.*?\s+)?src="(.*?)"[^>]*?\/?><\/a>/g,(e,t)=>getImageDanmakuFromImgSrc(t))):sendBarrage(e.innerText)}}function initPkg_CategoryPage(){initPkg_Night_Dom(),categorypage_dark(),initPkg_Night_Set(),categorypage_autoDark()}function categorypage_autoDark_fast(){var e=matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("ExSave_Mode");null!=t&&"mode"in(t=JSON.parse(t))!=0&&(1!=t.mode||e.matches?0==t.mode&&e.matches&&(currentMode=1,saveData_Mode()):(currentMode=0,saveData_Mode()))}function categorypage_autoDark(){var e=matchMedia("(prefers-color-scheme: dark)");const t=e=>{1===currentMode!=e&&document.getElementById("ex-night").click()};t(e.matches),e.addEventListener("change",e=>{t(e.matches)})}function categorypage_dark(){document.getElementById("ex-night").addEventListener("click",function(){var e=document.getElementById("ex-night");(0==currentMode?(currentMode=1,e.innerHTML=svg_night,e.title="切换日间模式",categorypage_setDark):(currentMode=0,e.innerHTML=svg_day,e.title="切换夜间模式",categorypage_cancleDark))(),saveData_Mode()})}function categorypage_dark_fast(){var e;null!=(ret=localStorage.getItem("ExSave_Mode"))&&("mode"in(e=JSON.parse(ret))==0&&(e.mode=0),1==e.mode)&&categorypage_setDark()}function categorypage_setDark(){StyleHook_set("Ex_Style_CategoryPageNightMode",`
    /* https://www.douyu.com/directory/myFollow */
    .layout-Container,
    .DyLiveCover,
    .DyLiveRecord,
    .DyLiveCover-pic,
    .DyLiveRecord-pic,
    .layout-Cover-card
     {
        background-color: rgb(35, 36, 39) !important;
    }
    
    .PlayerToolbar-wealthNum,
    .Header-wrap .Header-menu-link>a,
    .public-DropMenu-link,
    .Header-icon, 
    .DyLiveRecord-userName,
    .DyLiveCover-userName,
    .layout-Module-title {
        color: rgb(191, 191, 191) !important;
    }
    
    .Header-wrap,
    .Header-wrap,
    .DyLiveRecord-content,
    .DyLiveCover-content, 
    .layout-Module-head {
        background: rgb(45, 46, 54) !important;
        border-bottom: 1px solid rgb(45, 46, 54) !important;
    }
    
    /* other */
    .layout-Customization,
    .layout-Module-label,
    .layout-Module-label--hasList,
    .layout-Module-filter-more,
    .dy-Pagination-item,
    .ListFooter-btn-wrap,
    .dy-Pagination-prev,
    .dy-Pagination-next,
    .DyListCover-wrap,
    .DyListCover-wrap.is-hover {
        background: rgb(45, 46, 54) !important;
    }
    
    .gameName,
    .userName,
    .title,
    .DyListCover-intro,
    .ListFooter>ul>li>a {
        color: rgb(191, 191, 191) !important;
    }
    `)}function categorypage_cancleDark(){StyleHook_remove("Ex_Style_CategoryPageNightMode")}let barrageMemoryArr=[],barrageMemoryIndex=0,prevTextareaPosition=0;function initPkg_ChatMemory(){initPkg_ChatMemory_Func()}function initPkg_ChatMemory_Func(){document.getElementsByClassName("ChatSend-txt")[0].addEventListener("keydown",e=>{var t=e.target;38==e.keyCode?0==getTextareaPosition(t)&&(barrageMemoryIndex=0<barrageMemoryIndex?barrageMemoryIndex-1:barrageMemoryIndex,chatMemory_setBarrage()):40==e.keyCode?getTextareaPosition(t)==t.value.length&&(barrageMemoryIndex=barrageMemoryIndex<barrageMemoryArr.length-1?barrageMemoryIndex+1:barrageMemoryIndex,chatMemory_setBarrage()):13==e.keyCode&&chatMemory_pushBarrage(getBarrageValue())}),document.getElementsByClassName("ChatSend-button")[0].addEventListener("click",()=>{chatMemory_pushBarrage(getBarrageValue())})}function chatMemory_pushBarrage(e){barrageMemoryIndex=barrageMemoryArr.push(e)}function chatMemory_setBarrage(){null!=barrageMemoryArr[barrageMemoryIndex]&&setBarrageValue(barrageMemoryArr[barrageMemoryIndex]||"")}function getBarrageValue(){var e=document.getElementsByClassName("ChatSend-txt")[0];return null!=e?e.value:""}function setBarrageValue(e){var t=document.getElementsByClassName("ChatSend-txt")[0];null!=t&&(t.value=e)}function initPkg_ChatTools(){initPkg_ChatMemory()}function initPkg_Console(){console_watermark_douyEx()}function console_watermark_douyEx(){console.log(`%c
   ______                    _____)
  (, /    )                /
    /    / ___             )__   __/
  _/___ /_(_)(_(_(_/_(_(_/        /(__
(_/___ /        .-/     (_____)  /
               (_/

%cver `+curVersion,"color:rgb(255,121,35);font-size:20px;font-weight:bold;","color:red;font-size:16px;")}function initPkg_CopyRealLive(){initPkg_CopyRealLive_Dom(),initPkg_CopyRealLive_Func()}function initPkg_CopyRealLive_Dom(){CopyRealLive_insertIcon()}function CopyRealLive_insertIcon(){var e=document.createElement("div"),t=(e.className="Title-blockInline",e.id="copy-real-live",e.innerHTML='<div class="TitleShare"><div class="TitleShare-shareBox "><div class="Title-row-span  is-right"><span class="Title-row-icon "><svg t="1585641756842" class="icon" viewBox="0 0 1237 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5646" width="16" height="16"><path d="M648.448 946.347l0.256-1.622-0.256 1.622z m84.31 13.354c-0.769 4.608-0.769 4.608-4.182 13.483-8.533 16.768-8.533 16.768-49.835 22.784-24.149-14.293-24.149-14.293-27.605-22.613-2.475-5.718-2.475-5.718-3.541-9.387L476.416 335.36l-103.083 499.2c-1.109 5.12-1.109 5.12-4.821 13.27-6.827 12.117-6.827 12.117-35.285 22.527-30.294-7.253-30.294-7.253-38.742-19.37-4.522-8.15-4.522-8.15-6.058-13.227l-74.582-262.357H0v-85.334h278.272l45.781 161.11 104.022-503.424c1.024-4.694 1.024-4.694 4.394-12.502 6.102-11.989 6.102-11.989 35.968-23.338 31.83 8.533 31.83 8.533 39.254 20.736 4.053 7.808 4.053 7.808 5.376 12.544l165.888 609.237 113.92-716.885c0.896-5.248 0.896-5.248 4.864-14.592 9.088-15.574 9.088-15.574 44.928-22.4C868.48 12.587 868.48 12.587 873.6 22.443c3.285 6.912 3.285 6.912 4.523 11.52l112 446.549h221.738v85.333H923.563l-78.507-312.917-112.299 706.773z" p-id="5647"></path></svg></span><span class="Title-row-text ">复制直播流</span></div></div></div>',document.getElementsByClassName("Title-col")[4]);1<t.childNodes.length&&t.insertBefore(e,t.childNodes[1])}function CopyRealLive_getQn(e){return String(e).includes("蓝光8M")?8:String(e).includes("蓝光4M")?4:String(e).includes("超清")?3:String(e).includes("高清")?2:0}function CopyRealLive_copyUrl(e){getRealLive_Douyu(rid,!0,!1,e,e=>{"None"==e?showMessage("房间未开播或其他错误","error"):(e=String(e),GM_setClipboard(e),showMessage("复制成功","success"))})}function initPkg_CopyRealLive_Func(){document.getElementById("copy-real-live").addEventListener("click",function(){0<document.querySelectorAll(".tipItem-898596 > ul > li").length?document.querySelectorAll(".tipItem-898596 > ul > li").forEach(e=>{e.className.includes("selected")&&CopyRealLive_copyUrl(CopyRealLive_getQn(e.innerText))}):CopyRealLive_copyUrl(0)}),document.getElementsByClassName("Title-header")[0].addEventListener("click",function(){0<document.querySelectorAll(".tipItem-898596 > ul > li").length?document.querySelectorAll(".tipItem-898596 > ul > li").forEach(e=>{e.className.includes("selected")&&CopyRealLive_copyUrl(CopyRealLive_getQn(e.innerText))}):CopyRealLive_copyUrl(0)});var e=document.getElementsByClassName("RecommendViewTit-04ebd8");let t="";0<e.length&&(t=e[0].innerText+"\n"),document.getElementsByClassName("Title-header")[0].style.cursor="pointer",document.getElementsByClassName("Title-header")[0].title=t+"点击复制直播流"}const lastTime="Ex_DailyAuto_LastTime",restRid="52";function initPkg_DailyAuto(){setTimeout(()=>{daily_main()},3e3)}function daily_main(){stateControl()&&(showMessage("【续牌】开始赠送荧光棒","info"),fansContinue_auto().then(()=>{localStorage.setItem(lastTime,new Date)}).catch(async e=>{0==e?showMessage("【续牌】赠送失败,背包为空","error"):-1==e&&showMessage("【续牌】赠送失败,没有荧光棒","error"),await(null!==await mscststs.wait(".BackpackButton",!0,timeout=50))?localStorage.setItem(lastTime,new Date):showMessage("【续牌】赠送失败,请进入直播间","warning",{timeout:100})}))}function stateControl(){var e,t=localStorage.getItem(lastTime);return!t||(t=new Date(t),e=new Date,e=e,(t=t).getFullYear()!==e.getFullYear())||t.getMonth()!==e.getMonth()||t.getDate()!==e.getDate()}function fansContinue_auto(){return new Promise((a,e)=>{let r=0;let s=0;getBagGifts("12306",t=>{var o=t.data.list.length;if(0<o){for(let e=0;e<o;e++){if(268==t.data.list[e].id){r=268,s=t.data.list[e].count;break}2358==t.data.list[e].id&&(r=2358,s=t.data.list[e].count)}0==r?(showMessage("没有足够的道具","error"),e(-1)):fetch("https://www.douyu.com/member/cp/getFansBadgeList",{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.text()).then(async e=>{var t=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByClassName("fans-badge-list")[0].lastElementChild,o=t.children.length,n=(s=s-o<=0?0:s-o,[]);for(let e=0;e<o;e++){let o=t.children[e].getAttribute("data-fans-room");var i=new Promise((t,e)=>{sleep(100).then(()=>{sendGift_bag(r,Number(1),o).then(e=>{"success"==e.msg?(showMessage("【续牌】"+o+"赠送荧光棒成功","success"),t()):(showMessage("【续牌】"+o+"赠送失败 "+e.msg,"error"),console.log(o,e))}).catch(e=>{showMessage("【续牌】"+o+"赠送失败","error"),console.log(o,e)})})});n.push(i)}Promise.all(n).then(()=>{console.log("test-promise all"),sendGift_bag(r,Number(s),restRid).then(e=>{"success"==e.msg?(showMessage("【剩余全送】"+restRid+"赠送荧光棒成功","warning",{timeout:100}),a()):showMessage("【剩余全送】"+restRid+"赠送失败 "+e.msg,"error")}).catch(e=>{showMessage("【剩余全送】"+restRid+"赠送失败","error")})})}).catch(e=>{console.log("请求失败!",e)})}else e(0)})})}function initPkg_DanmakuCollect(){initPkg_DanmakuCollect_Dom();const t=document.getElementsByClassName("ChatSend-txt")[0],o=document.getElementsByClassName("ChatBarrageCollect")[0];t.addEventListener("keyup",()=>{var e=t.value.length;o.style.display=25<e?"none":""}),document.getElementsByClassName("ChatSend-button")[0].addEventListener("click",()=>{o.style.display=""}),responseHook((e,t)=>{if(e.includes("bulletscreen/query"))return(e=JSON.parse(t)).data.list.unshift(...getLocalDanmakuCollect().map(e=>({content:e.content,type:2,id:e.id}))),JSON.stringify(e)}),responseHook((e,t,o)=>{if(e.includes("bulletscreen/add"))return 0==(e=JSON.parse(t)).error?t:(t=JSON.parse(o)["content"],addLocalDanmakuCollect(t),e.msg="收藏成功，云收藏已达上限，将收藏至本地（由DouyuEx插件实现无限收藏）",JSON.stringify(e))}),responseHook((e,t,o)=>{e.includes("bulletscreen/del")&&(e=JSON.parse(o)["id"],delLocalDanmakuCollect(e))})}function initPkg_DanmakuCollect_Dom(){let e=setInterval(()=>{void 0!==document.getElementsByClassName("ChatBarrageCollect")[0]&&(clearInterval(e),new DomHook(".ChatBarrageCollect",!1,e=>{var t,o=document.getElementsByClassName("ChatBarrageCollectPop-title");o?0!==o.length&&((t=document.createElement("input")).id="ex-danmaku-collect-search",t.placeholder="搜索弹幕",t.style.marginLeft="6px",o[0].appendChild(t),t.addEventListener("input",searchCollectDanmaku)):document.getElementById("ex-danmaku-collect-search").removeEventListener("input",searchCollectDanmaku)}))},1e3)}function searchCollectDanmaku(e){var t=e.target.value,o=document.getElementsByClassName("ChatBarrageCollectPop-barrageContent")[0].parentElement.getElementsByClassName("TagItem");for(let e=0;e<o.length;e++){var n=o[e];n.innerText.includes(t)?n.style.display="":n.style.display="none"}}function getLocalDanmakuCollect(){let t=localStorage.getItem("ExSave_DanmakuCollect");try{t=JSON.parse(t)||[]}catch(e){t=[]}return t}function addLocalDanmakuCollect(e){var t=getLocalDanmakuCollect();t.unshift({content:e,id:(new Date).getTime()}),localStorage.setItem("ExSave_DanmakuCollect",JSON.stringify(t))}function delLocalDanmakuCollect(t){var e=getLocalDanmakuCollect();localStorage.setItem("ExSave_DanmakuCollect",JSON.stringify(e.filter(e=>e.id!==t)))}function initPkg_DisableCloseJump_Timer(){setInterval(()=>{var e=document.getElementsByClassName("dy-ModalRadius-close-x");0<e.length&&e[0].click()},1e3)}let dyVideoBarrage_domhook_videoChange=null,dyVideoBarrage_hasRendered=!1;const dyVideoBarrage_domName="ex-barrageLine",dyVideoBarrage_switchDomName="ex-barrageLine-switch";function initPkg_DyVideoBarrageLine(){let n=setInterval(()=>{var e=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("demand-video-controller-progress").shadowRoot.querySelector(".ProgressBar-Safearea"),t=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot,o=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot;e&&t&&o&&(clearInterval(n),initPkg_DyVideoBarrageLine_Dom(),renderVideoBarrageLine(),e=o.querySelector("share-hover"),(dyVideoBarrage_domhook_videoChange=new MutationObserver(function(e){renderVideoBarrageLine()})).observe(e,{attributes:!0,childList:!0,subtree:!1}))},1e3)}function initPkg_DyVideoBarrageLine_Dom(){var e=document.createElement("style");e.innerHTML=`.no-hasLR #ex-barrageLine {
        display: none !important;
    }`,document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("demand-video-controller-progress").shadowRoot.append(e)}async function renderVideoBarrageLine(){if(!dyVideoBarrage_hasRendered){dyVideoBarrage_hasRendered=!0,setTimeout(()=>{dyVideoBarrage_hasRendered=!1},1e3),showMessage("弹幕高能进度条加载中，请耐心等待","info");var o=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("demand-video-controller-progress").shadowRoot,n=o.querySelector(".ProgressBar"),o=o.querySelector("#"+dyVideoBarrage_domName),i=(o&&o.remove(),document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("share-hover").getAttribute("hashid")),o=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("#time-label").innerText.split("/");if(!(o.length<=0)){var a=timeText2Ms(o[1])/99,r=new Array(100).fill(0,0,100);let e=0;do{var s=await getVideoBarrageByTime(i,e);if(e=s.data.pre,s.data.list)for(let e=0;e<s.data.list.length;e++){var l=s.data.list[e];r[Math.floor(l.tl/a)]++}}while(0<=e);var d=1e3/r.length,c=Math.max(...r)/100,u=[];for(let e=0;e<r.length;e++){var m=r[e],p=e*d;u.push([p,m/c])}let t="";for(let e=0;e<u.length-1;e++){var[g,h]=u[e],[_,f]=u[e+1];t=t+"C "+(g+` ${80-(h+f)/2}, ${_} ${80-(h+f)/2}, ${_} ${80-f} `)}var o="M 0 100 L 0 80 "+(t+="L 1000 100 Z"),y=`
    <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1000 100" >
        <path fill="rgba(255,255,255,0.3)" d="${o}" />
    </svg>`,o=(-1!==o.indexOf("NaN")&&(console.log(o),showMessage("弹幕高能进度条加载失败","error")),document.createElement("div"));o.id=dyVideoBarrage_domName,o.style="position:absolute;width:100%;height:30px;bottom:0px;pointer-events:none;cursor: default;",o.innerHTML=y,n.insertBefore(o,n.childNodes[0])}}}function initPkg_DyVideoDownload(){let t=setInterval(()=>{var e=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot;e&&(clearInterval(t),e=e.querySelector(".ToolBar-positiveUl"),initPkg_DyVideoDownload_Style(),initPkg_DyVideoDownload_Dom(e),initPkg_DyVideoDownload_Func())},1e3)}function initPkg_DyVideoDownload_Style(){var e=document.createElement("style");e.innerHTML=`
    #btn-download:hover .download__panel {
        display: block;
    }
    .download__panel {
        width:150px;
        position:absolute;
        text-align: center;
        cursor: default;
        margin-top: 29px;
        margin-left: -38px;
        box-shadow: 0px 3px 10px 0px;
        display: none;
        background: white;
    }
    .download__item {
        height: 30px;
        line-height: 30px;
        width: 100%;
        cursor: pointer;
    }
    .download__item:hover {
        color: rgb(255,119,0)
    }
    `,document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.appendChild(e)}function initPkg_DyVideoDownload_Dom(e){var t=document.createElement("li");t.title="下载视频",t.innerHTML=`
    <div class="download__panel">
        <div class="download__item" id="download__default" title="文件超过2GB时可能会下载失败">
            <span class="ToolBar-iconText">浏览器下载</span>
        </div>
        <div class="download__item" id="download__copy" title="可将链接填至第三方下载器中下载">
            <span class="ToolBar-iconText">复制m3u8链接</span>
        </div>
        <div class="download__item" id="download__barrage" title="下载弹幕(.xlsx)">
            <span class="ToolBar-iconText">下载弹幕(.xlsx)</span>
        </div>
        <div class="download__item" id="download__barrageass" title="下载弹幕(.ass)">
            <span class="ToolBar-iconText">下载弹幕(.ass)</span>
        </div>
    </div>
    <span class="ToolBar-icon ">
        <svg t="1634113402576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7734" width="28" height="28"><path d="M761.98 413.12c0.25-4.4 0.39-8.82 0.39-13.28 0-127.18-102.84-230.28-229.71-230.28s-229.71 103.1-229.71 230.28c0 0.67 0.02 1.33 0.03 2a213.156 213.156 0 0 0-38.91-3.58c-117.2 0-212.21 95.25-212.21 212.74 0 117.49 95.01 212.74 212.21 212.74 2.94 0 5.86-0.08 8.77-0.2 2.54 0.13 5.09 0.2 7.66 0.2h467.35c2.82 0 5.61-0.09 8.39-0.24 108.96-5.16 195.72-95.13 195.72-205.36 0.01-108.3-83.73-197.04-189.98-205.02zM616.33 584.24l-90.86 93.93c-0.78 1.11-1.66 2.17-2.63 3.17-3.95 4.09-8.9 6.62-14.09 7.61-8.34 1.77-17.38-0.51-23.97-6.89a25.975 25.975 0 0 1-3.16-3.68l-93.5-90.45c-10.53-10.19-10.81-26.99-0.62-37.52 10.19-10.53 26.99-10.81 37.52-0.62l45.09 43.62c0-0.06-0.01-0.12-0.01-0.18l-2.43-146.62c-0.3-17.83 13.92-32.52 31.75-32.82 17.83-0.3 32.52 13.92 32.82 31.75l2.43 146.63v0.17l43.52-44.99c10.19-10.53 26.99-10.81 37.52-0.62 10.53 10.17 10.81 26.97 0.62 37.51z" p-id="7735" fill="#515151"></path></svg>
    </span>
    <span class="ToolBar-iconText" id="download-text">下载</span>
    `,t.id="btn-download",e.appendChild(t)}function initPkg_DyVideoDownload_Func(){let a=unsafeWindow.$DATA,r=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("#download-text");document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector(".download__panel");document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("#btn-download").addEventListener("click",()=>{"下载完成"===r.innerText&&showMessage("请刷新页面后再下载","warning")}),document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("#download__default").addEventListener("click",async()=>{var o=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("share-hover").getAttribute("hashid"),n=a.ROOM.vid;if(o!==n)showMessage("视频内容已改变，请刷新网页后重试","error");else{showMessage("开始下载视频...当视频超过2GB时可能会下载失败","info");o=new M3U8;let e=new DyVideoSign(a.ROOM.point_id);var i=e.getSign(),n=(e=null,await getVideoStreamUrl(n,i));let t="";""!==(t="super"in n.data.thumb_video?n.data.thumb_video.super.url:"high"in n.data.thumb_video?n.data.thumb_video.high.url:"normal"in n.data.thumb_video?n.data.thumb_video.normal.url:0<(i=Object.keys(n.data.thumb_video)).length?n.data.thumb_video[i[0]].url:"")?o.start(t,{filename:a.ROOM.name+".mp4"}).on("progress",e=>{r.innerText=Number(e.percentage).toFixed(2)+"%"}).on("finished",e=>{r.innerText="下载完成",showMessage("视频下载完成","success")}).on("error",e=>{r.innerText="下载失败",showMessage(e,"success")}).on("aborted",()=>{r.innerText="下载中止"}):showMessage("获取m3u8链接失败","error")}}),document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("#download__copy").addEventListener("click",async()=>{var o=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("share-hover").getAttribute("hashid"),n=a.ROOM.vid;if(o!==n)showMessage("视频内容已改变，请刷新网页后重试","error");else{showMessage("正在获取m3u8链接...","info");let e=new DyVideoSign(a.ROOM.point_id);var o=e.getSign(),n=(e=null,await getVideoStreamUrl(n,o));let t="";""!==(t="super"in n.data.thumb_video?n.data.thumb_video.super.url:"high"in n.data.thumb_video?n.data.thumb_video.high.url:"normal"in n.data.thumb_video?n.data.thumb_video.normal.url:0<(o=Object.keys(n.data.thumb_video)).length?n.data.thumb_video[o[0]].url:"")?(GM_setClipboard(t),showMessage("复制成功，可将链接复制到第三方下载器中下载","success")):showMessage("获取m3u8链接失败","error")}}),document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("#download__barrage").addEventListener("click",async()=>{var e=document.getElementsByTagName("demand-video-title")[0].shadowRoot.querySelector(".Title-Main").innerText,t=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("share-hover").getAttribute("hashid");showMessage("正在获取弹幕数据，请勿切换页面...","info");let o=0;var n=[];do{var i=await getVideoBarrageByTime(t,o);o=i.data.pre;for(let e=0;e<i.data.list.length;e++){var a=i.data.list[e];n.push([a.vid,t,a.uid,a.nn,a.ctt,formatSeconds2(a.tl/1e3),dateFormat("yyyy-MM-dd hh:mm:ss",new Date(1e3*a.sts))])}}while(0<=o);exportJsonToExcel(["vid","hashid","uid","昵称","弹幕","时间","发送时间"],n,`【${e}】弹幕数据.xlsx`)}),document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("#download__barrageass").addEventListener("click",async()=>{var e=document.getElementsByTagName("demand-video-title")[0].shadowRoot.querySelector(".Title-Main").innerText,t=document.getElementsByTagName("demand-video-toolbar")[0].shadowRoot.querySelector("share-hover").getAttribute("hashid");showMessage("正在获取弹幕数据，请勿切换页面...","info");let o=0;var n=new ASS({title:e}),i=[];do{var a=await getVideoBarrageByTime(t,o);o=a.data.pre;for(let e=0;e<a.data.list.length;e++){var r=a.data.list[e];i.push({time:Number(r.tl),txt:r.ctt,color:r.col})}}while(0<=o);downloadFile(e+".ass",n.generate(i))})}function getVideoStreamUrl(e,o){return new Promise(t=>{fetch("https://v.douyu.com/api/stream/getStreamUrl",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:o+"&vid="+e}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function getVideoBarrageByTime(e,o=0){if(!(o<0))return new Promise(t=>{fetch(`https://v.douyu.com/wgapi/vod/center/getBarrageListByPage?vid=${e}&offset=`+o,{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function initPkg_ExIcon(){initPkg_ExIcon_insertDom(),initPkg_ExIcon_Func()}function initPkg_ExIcon_insertDom(){var e=document.createElement("div"),t=(e.className="ex-icon",e.innerHTML=`<a title="DouyuEx ver.${curVersion}"><svg class="icon" width="24" height="24" viewBox="0 0 108 108" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="精灵球" transform="translate(0.830769, 0.830769)" fill-rule="nonzero">
            <path d="M53.1692307,106.338461 C23.8276922,106.338461 0,82.5107692 0,53.1692307 C0,51.0030769 1.77230775,49.2307692 3.9384615,49.2307692 L33.476923,49.2307692 C35.6430769,49.2307692 37.4153845,51.003077 37.4153846,53.1692307 C37.4153846,61.8338461 44.5046154,68.9230769 53.1692307,68.9230769 C61.8338461,68.9230769 68.9230769,61.8338461 68.9230769,53.1692307 C68.9230769,51.0030769 70.6953846,49.2307692 72.8615385,49.2307692 L102.4,49.2307692 C104.566154,49.2307692 106.338461,51.003077 106.338461,53.1692307 C106.338461,82.5107692 82.5107692,106.338461 53.1692307,106.338461 Z" id="路径" fill="#33363A"></path>
            <path d="M8.07384612,57.1076922 C10.0430769,80.2461537 29.5384615,98.4615385 53.1692307,98.4615385 C76.8,98.4615385 96.2953846,80.2461539 98.2646154,57.1076922 L76.5046154,57.1076922 C74.6338461,68.2338461 64.8861539,76.8 53.1692307,76.8 C41.4523076,76.8 31.7046154,68.2338461 29.8338461,57.1076922 L8.07384612,57.1076922 Z" id="路径" fill="#FFFFFF"></path>
            <path d="M53.1692308,3.9384615 C25.9938461,3.9384615 3.9384615,25.9938461 3.9384615,53.1692307 L33.476923,53.1692307 C33.476923,42.3384615 42.3384615,33.476923 53.1692308,33.476923 C64,33.476923 72.8615385,42.3384615 72.8615385,53.1692307 L102.4,53.1692307 C102.4,25.9938461 80.3446154,3.9384615 53.1692308,3.9384615 Z" id="路径" fill="#D60909"></path>
            <path d="M102.4,57.1076922 L72.8615385,57.1076922 C70.6953846,57.1076922 68.923077,55.3353845 68.9230769,53.1692307 C68.9230769,44.5046154 61.8338461,37.4153846 53.1692307,37.4153846 C44.5046154,37.4153846 37.4153846,44.5046154 37.4153846,53.1692307 C37.4153846,55.3353846 35.6430769,57.1076922 33.476923,57.1076922 L3.9384615,57.1076922 C1.77230762,57.1076922 0,55.3353845 0,53.1692307 C0,23.8276922 23.8276923,0 53.1692307,0 C82.5107692,0 106.338461,23.8276922 106.338461,53.1692307 C106.338461,55.3353846 104.566154,57.1076922 102.4,57.1076922 Z" id="路径" fill="#33363A"></path>
            <path d="M76.5046154,49.2307693 L98.3630769,49.2307693 C96.2953846,26.0923076 76.8,7.876923 53.1692307,7.876923 C29.5384615,7.876923 10.0430769,26.0923076 8.07384612,49.2307693 L29.9323076,49.2307693 C31.7046154,38.1046154 41.4523076,29.5384615 53.1692307,29.5384615 C64.8861539,29.5384615 74.6338461,38.1046154 76.5046154,49.2307693 L76.5046154,49.2307693 Z" id="路径" fill="#D60909"></path>
            <path d="M53.1692307,76.8 C40.1723076,76.8 29.5384615,66.1661539 29.5384615,53.1692307 C29.5384615,40.1723076 40.1723076,29.5384615 53.1692307,29.5384615 C66.1661539,29.5384615 76.8,40.1723076 76.8,53.1692307 C76.8,66.1661539 66.1661539,76.8 53.1692307,76.8 Z" id="路径" fill="#33363A"></path>
            <path d="M53.1692307,37.4153846 C44.5046154,37.4153846 37.4153846,44.5046154 37.4153846,53.1692307 C37.4153846,61.8338461 44.5046154,68.9230769 53.1692307,68.9230769 C61.8338461,68.9230769 68.9230769,61.8338461 68.9230769,53.1692307 C68.9230769,44.5046154 61.8338461,37.4153846 53.1692307,37.4153846 L53.1692307,37.4153846 Z" id="路径" fill="#FFFFFF"></path>
            <path d="M43.3230769,53.1692307 C43.3230769,58.6071114 47.7313501,63.0153846 53.1692307,63.0153846 C58.6071114,63.0153846 63.0153846,58.6071114 63.0153846,53.1692307 C63.0153846,47.7313501 58.6071114,43.3230769 53.1692307,43.3230769 C47.7313501,43.3230769 43.3230769,47.7313501 43.3230769,53.1692307 Z" id="路径" fill="#33363A"></path>
        </g>
    </g>
</svg><i id="ex-icon__tip" class="ex-panel__tip"></i></a>`,document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_ExIcon_Func(){document.getElementsByClassName("ex-icon")[0].addEventListener("click",showExPanel)}function ExIcon_showTip(e){var t=document.getElementById("ex-icon__tip");t.style.display=1==e?"block":"none"}function initPkg_ExPanel(){initPkg_ExPanel_insertDom();var e=document.querySelector(".ex-panel");e.addEventListener("mouseenter",()=>{clearTimeout(exPanelTimer)}),e.addEventListener("mouseleave",()=>{clearTimeout(exPanelTimer),exPanelTimer=setTimeout(autoCloseExPanelHandle,800)})}function initPkg_ExPanel_insertDom(){var e=document.createElement("div"),t=(e.className="ex-panel",e.innerHTML='<div class="ex-panel__wrap"></div>',document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function autoCloseExPanelHandle(){var e=document.querySelector(".ex-panel");e.style.visibility="hidden",e.style.opacity="0",exPanelTimer=null}function initPkg_ExpandTool(){initPkg_ExpandTool_Dom(),initPkg_ExpandTool_Func(),initPkg_ExpandTool_Module()}function initPkg_ExpandTool_Module(){initPkg_ExpandTool_Treasure(),initPkg_ExpandTool_Gold(),initPkg_ExpandTool_RedPacket_Room(),initPkg_ExpandTool_AutoFish(),initPkg_ExpandTool_ClearBag(),initPkg_ExpandTool_SendGift(),initPkg_ExpandTool_TabSwitch(),initPkg_ExpandTool_P2P(),initPkg_ExpandTool_FullScreen()}function initPkg_ExpandTool_Dom(){ExpandTool_insertModal(),ExpandTool_insertIcon()}function ExpandTool_insertModal(){var e=document.createElement("div"),t=(e.className="extool",document.getElementsByClassName("layout-Player-chat")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_insertIcon(){var e=document.createElement("div"),t=(e.className="extool-icon",e.innerHTML='<a class="ex-panel__icon" title="扩展功能"><svg t="1590294700144" style="display:block;" class="icon" viewBox="0 0 1077 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11915" width="30" height="30"><path d="M152.770257 11.469971l213.048618 206.378138-37.094375 36.931681 159.440737 158.545917-76.95456 73.782015-159.440737-158.545917-38.47728 36.931681L0.244042 159.115348 152.770257 11.469971z" p-id="11916" fill="#d81e06"></path><path d="M1077.851922 217.848109h-105.751509L929.393073 260.311408l-31.644106 31.400063-33.02701 32.538926L776.866857 300.985065l-23.428026-87.204321 33.027009-32.538926 33.02701-32.538926L862.281538 105.751509V0.569431h-8.134732a244.041945 244.041945 0 0 0-178.964092 68.331745 234.768351 234.768351 0 0 0-68.738481 147.645376 250.712425 250.712425 0 0 0 10.981887 95.664443v2.765808a34.165872 34.165872 0 0 1-9.598983 36.931681c-17.896409 16.269463-525.096918 497.520178-525.096918 497.520178-42.625993 35.548777-38.47728 102.497617 0 142.113759 39.860184 38.233238 105.751509 40.673657 142.927233 0 0 0 478.322212-504.353352 498.984429-524.852875A33.677788 33.677788 0 0 1 754.821735 455.544963c5.531617 1.382904 10.981888 4.067366 16.269463 5.450271a242.170956 242.170956 0 0 0 87.936447 9.598983 237.290118 237.290118 0 0 0 148.45885-68.331745 231.677153 231.677153 0 0 0 68.738481-177.662536 14.805211 14.805211 0 0 0 1.626946-6.751827zM178.964093 943.628853a33.352399 33.352399 0 0 1-48.076263 0 32.538926 32.538926 0 0 1 0-47.832221 33.352399 33.352399 0 0 1 48.076263 0 35.467429 35.467429 0 0 1 0 47.832221z" p-id="11917" fill="#d81e06"></path><path d="M981.618049 785.082936L747.988561 567.804258S617.344773 601.97013 526.642517 753.682873c5.531617 1.382904 241.926915 239.161106 241.926914 239.161105a109.98157 109.98157 0 0 0 152.607563 0l60.441055-58.732761a102.823006 102.823006 0 0 0 0-149.028281zM854.146806 951.763584a29.366381 29.366381 0 0 1-38.477279 0l-195.233556-189.94598-1.382905-1.382904a25.543057 25.543057 0 0 1 1.382905-35.548777 29.366381 29.366381 0 0 1 38.47728 0l196.535113 189.94598A28.796949 28.796949 0 0 1 854.146806 951.763584z m86.634891-83.380997a29.366381 29.366381 0 0 1-38.47728 0L705.362568 678.436606l-1.382905-1.382904a25.543057 25.543057 0 0 1 1.382905-35.548777 29.366381 29.366381 0 0 1 38.477279 0l196.535113 189.945981a24.404194 24.404194 0 0 1 0 37.013028z" p-id="11918" fill="#d81e06"></path></svg><i id="extool__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_ExpandTool_Func(){document.getElementsByClassName("extool-icon")[0].addEventListener("click",function(){showExRightPanel("扩展功能")})}let autoFishInfo=[],baitId=null,nextFishEndTime=0,isFishing=!1,timerAutoFish=0;function initPkg_ExpandTool_AutoFish(){ExpandTool_AutoFish_insertDom(),ExpandTool_AutoFish_insertFunc(),ExpandTool_AutoFish_Set()}function ExpandTool_AutoFish_insertDom(){var e=document.createElement("div"),t=(e.className="extool__autofish",e.innerHTML='<label><input style="margin-top:5px;" id="extool__autofish_start" type="checkbox">自动钓鱼</label>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_AutoFish_insertFunc(){document.getElementById("extool__autofish_start").addEventListener("click",async()=>{if(saveData_AutoFish(),!document.getElementById("extool__autofish_start").checked)return clearInterval(timerAutoFish);showMessage("【自动钓鱼】开始自动钓鱼","info"),autoFishInfo=await AutoFish_getFishInfo();var e=await AutoFish_getHomepageData();return e.data?(baitData=e.data.baits.find(e=>e.inUse))?(baitId=baitData.id,saveData_AutoFish(),0==e.data.fishing.stat&&(isFishing=!1,nextFishEndTime=0),1==e.data.fishing.stat&&(isFishing=!0,nextFishEndTime=e.data.fishing.fishEtMs),2==e.data.fishing.stat&&(await endFish(),await sleep(1e3)),void(timerAutoFish=setInterval(async()=>{var e;isFishing?(new Date).getTime()<=nextFishEndTime||await endFish():0!==(e=await AutoFish_startFish()).error?(showMessage(e.msg,"error"),console.log(e,"钓鱼失败"),1001007==e.error&&await endFish(),1005003==e.error&&clearInterval(timerAutoFish)):(isFishing=!0,nextFishEndTime=e.data.fishing.fishEtMs)},1500))):(document.getElementById("extool__autofish_start").checked=!1,showMessage("【自动钓鱼】请设置鱼饵","error")):(document.getElementById("extool__autofish_start").checked=!1,showMessage("【自动钓鱼】未能获取活动信息","error"))})}async function endFish(){const o=await AutoFish_endFish();if(0!==o.error)console.log(o,"收杆失败"),0==(await AutoFish_getHomepageData()).data.fishing.stat&&(isFishing=!1,nextFishEndTime=0);else{let t="【自动钓鱼】";var n=autoFishInfo.find(e=>e.fishId==o.data.fish.id);if(n&&(t+=`获得${n.name}${o.data.fish.wei}斤`),o.data.awards&&0<o.data.awards.length)for(let e=0;e<o.data.awards.length;e++){var i=o.data.awards[e];t+=`${n?"，":""}获得${i.awardName}x`+i.awardNum}"【自动钓鱼】"!==t&&showMessage(t,"success"),isFishing=!1}}function saveData_AutoFish(){var e=document.getElementById("extool__autofish_start").checked;localStorage.setItem("ExSave_AutoFish",JSON.stringify({isAutoFish:e}))}function ExpandTool_AutoFish_Set(){var e=localStorage.getItem("ExSave_AutoFish");null!=e&&JSON.parse(e).isAutoFish&&document.getElementById("extool__autofish_start").click()}function AutoFish_getFishInfo(){return new Promise(t=>{fetch(`https://www.douyu.com/japi/revenuenc/web/actfans/achieve/accList?rid=${rid}&type=1&period=1`,{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.json()).then(e=>{e.data?t(e.data.accList):t([])}).catch(e=>{console.log("请求失败!",e)})})}function AutoFish_getHomepageData(){return new Promise(t=>{fetch(`https://www.douyu.com/japi/revenuenc/web/actfans/fishing/homePage?rid=${rid}&opt=1`,{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function AutoFish_startFish(){return new Promise(t=>{fetch("https://www.douyu.com/japi/revenuenc/web/actfans/fishing/fishing",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&rid=${rid}&baitId=`+baitId}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function AutoFish_endFish(){return new Promise(t=>{fetch("https://www.douyu.com/japi/revenuenc/web/actfans/fishing/reelIn",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&rid=`+rid}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function initPkg_ExpandTool_BarrageSize(){ExpandTool_BarrageSize_insertDom(),ExpandTool_BarrageSize_insertFunc(),initPkg_ExpandTool_BarrageSize_Set(),setBarrageSize(getBarrageSize())}function ExpandTool_BarrageSize_insertDom(){var e=document.createElement("div"),t=(e.className="extool__bsize",e.innerHTML='<label>弹幕大小(默认24px)：</label><input id="extool__bsize_value" type="text" style="width:50px;text-align:center;" value="24" /><input style="width:40px;margin-left:10px;" type="button" id="extool__bsize_btn" value="确认" />',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function setBarrageSize(e){cancelBarrageSize(),StyleHook_set("Ex_Style_DanmuSize",".danmuItem-31f924{font-size:"+e+"px !important;}")}function cancelBarrageSize(){StyleHook_remove("Ex_Style_DanmuSize")}function getBarrageSize(){return document.getElementById("extool__bsize_value").value}function ExpandTool_BarrageSize_insertFunc(){document.getElementById("extool__bsize_btn").addEventListener("click",function(){setBarrageSize(getBarrageSize()),saveData_BarrageSize()})}function saveData_BarrageSize(){var e={size:getBarrageSize()};localStorage.setItem("ExSave_BarrageSize",JSON.stringify(e))}function initPkg_ExpandTool_BarrageSize_Set(){var e=localStorage.getItem("ExSave_BarrageSize");null!=e&&(e=JSON.parse(e),document.getElementById("extool__bsize_value").value=e.size)}function initPkg_ExpandTool_ClearBag(){ExpandTool_ClearBag_insertDom(),ExpandTool_ClearBag_insertFunc()}function ExpandTool_ClearBag_insertDom(){var e="",e=(e+'<label>背包送礼：[速度并不快,间隔>0.1s]</label><a id="extool__clearbag_showid" style="margin-left:10px;color:blue;" href="javascript:void(0);">礼物id示例</a><br />'+'<label>礼物ID：</label><input id="extool__clearbag_id" type="text" style="width:50px;text-align:center;margin-right:10px;" value="268" />'+'<label>数量：</label><input id="extool__clearbag_cnt" type="text" style="width:30px;text-align:center;" value="1" />'+'<input style="width:40px;margin-left:10px;" type="button" id="extool__clearbag_sendbtn" value="送出" />',document.createElement("div")),t=(e.className="extool__clearbag",e.innerHTML='<label>背包送礼：[速度并不快,间隔>0.1s]</label><a id="extool__clearbag_showid" style="margin-left:10px;color:blue;" href="javascript:void(0);">礼物id示例</a><br /><label>礼物ID：</label><input id="extool__clearbag_id" type="text" style="width:50px;text-align:center;margin-right:10px;" value="268" /><label>数量：</label><input id="extool__clearbag_cnt" type="text" style="width:30px;text-align:center;" value="1" /><input style="width:40px;margin-left:10px;" type="button" id="extool__clearbag_sendbtn" value="送出" />',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_ClearBag_insertFunc(){document.getElementById("extool__clearbag_sendbtn").addEventListener("click",async function(){if(1==confirm("确认送出？")){let t=document.getElementById("extool__clearbag_id").value;var o=Number(document.getElementById("extool__clearbag_cnt").value);showMessage("【背包送礼】执行中...","info");for(let e=0;e<o;e++)await sleep(100).then(()=>{sendGift_bag(t,1,rid).then(e=>{"success"!=e.msg&&(showMessage("【背包送礼】"+rid+"赠送失败 "+e.msg,"error"),console.log(rid,e))}).catch(e=>{showMessage("【背包送礼】"+rid+"赠送失败","error"),console.log(rid,e)})});showMessage("【背包送礼】执行完毕！","success")}}),document.getElementById("extool__clearbag_showid").addEventListener("click",function(){getBagGifts(rid,t=>{var o=t.data.list.length;if(0<o){for(let e=0;e<o;e++){var n=t.data.list[e].id,i=t.data.list[e].name;console.log("【"+i+"】 id:"+n)}showMessage("请按F12到控制台(console)查看背包礼物id","success")}else showMessage("背包礼物为空","error")})})}function getBagGifts(e,t){fetch("https://www.douyu.com/japi/prop/backpack/web/v1?rid="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})}function initPkg_ExpandTool_FullScreen(){ExpandTool_FullScreen_insertDom(),ExpandTool_FullScreen_insertFunc(),ExpandTool_HighestVideoQuality_insertFunc(),initPkg_ExpandTool_FullScreen_Set(),initPkg_ExpandTool_HighestVideoQuality_Set()}function ExpandTool_FullScreen_insertDom(){var e=document.createElement("span"),t=(e.innerHTML='<label title="自动网页全屏"><input style="margin-top:5px;" id="extool__fullscreen" type="checkbox">自动网页全屏</label><label title="自动最高画质"><input id="extool__highestvideoquality" type="checkbox">自动最高画质</label>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function getFullScreen(){return document.getElementById("extool__fullscreen").checked}function ExpandTool_FullScreen_insertFunc(){document.getElementById("extool__fullscreen").addEventListener("click",function(){saveData_FullScreen(),getFullScreen()&&showMessage("刷新页面生效","success")})}function saveData_FullScreen(){var e={isFullScreen:getFullScreen()};localStorage.setItem("ExSave_FullScreen",JSON.stringify(e))}function initPkg_ExpandTool_FullScreen_Set(){var e=localStorage.getItem("ExSave_FullScreen");null!=e&&(e=JSON.parse(e)).isFullScreen&&(document.getElementById("extool__fullscreen").checked=e.isFullScreen)}function initFullScreen(){var e=localStorage.getItem("ExSave_FullScreen");null!=e&&JSON.parse(e).isFullScreen&&fullScreen()}function fullScreen(){let e=0,t=setInterval(()=>{100<++e&&clearInterval(t),0<document.getElementsByClassName("wfs-2a8e83").length&&(clearInterval(t),document.querySelector("div.wfs-2a8e83").click())},1e3)}function getHighestVideoQuality(){return document.getElementById("extool__highestvideoquality").checked}function ExpandTool_HighestVideoQuality_insertFunc(){document.getElementById("extool__highestvideoquality").addEventListener("click",function(){saveData_HighestVideoQuality(),getHighestVideoQuality()&&showMessage("刷新页面生效","success")})}function saveData_HighestVideoQuality(){var e={isHighestVideoQuality:getHighestVideoQuality()};localStorage.setItem("ExSave_HighestVideoQuality",JSON.stringify(e))}function initPkg_ExpandTool_HighestVideoQuality_Set(){var e=localStorage.getItem("ExSave_HighestVideoQuality");null!=e&&(e=JSON.parse(e)).isHighestVideoQuality&&(document.getElementById("extool__highestvideoquality").checked=e.isHighestVideoQuality)}function initHighestVideoQuality(){var e=localStorage.getItem("ExSave_HighestVideoQuality");null!=e&&JSON.parse(e).isHighestVideoQuality&&highestVideoQuality()}function highestVideoQuality(){let e=0,t=setInterval(()=>{100<++e&&clearInterval(t),0<document.getElementsByClassName("tipItem-898596").length&&(clearInterval(t),document.querySelectorAll(".tipItem-898596 > ul > li")[0].click())},1e3)}let user_name,animationNum=0,goldBarrageHook,goldBarrageListHook,goldGiftHook;function initPkg_ExpandTool_Gold(){ExpandTool_Gold_insertDom(),ExpandTool_Gold_insertGiftDom(),ExpandTool_Gold_insertFunc(),ExpandTool_Gold_Set()}function ExpandTool_Gold_insertDom(){var e=document.createElement("div"),t=(e.className="extool__gold",e.innerHTML='<label><input style="margin-top:5px;" id="extool__gold_start" type="checkbox">幻神模式</label><label><input style="margin-top:5px;" id="extool__goldGift_start" type="checkbox">荧光棒变超火</label>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_Gold_insertGiftDom(){var e=document.createElement("div"),t=(e.className="ex_giftAnimation",document.getElementsByClassName("Barrage-main")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_Gold_insertFunc(){document.getElementById("extool__gold_start").addEventListener("click",async function(){1==document.getElementById("extool__gold_start").checked?(goldBarrageHook=new DomHook(".danmu-e7f029",!0,goldBarrage),goldBarrageListHook=new DomHook(".Barrage-list",!0,goldBarrageList),goldFansMedal()):(goldBarrageHook.closeHook(),goldBarrageListHook.closeHook()),saveData_Gold()}),document.getElementById("extool__goldGift_start").addEventListener("click",async function(){user_name=await getUserName(),1==document.getElementById("extool__goldGift_start").checked?goldGiftHook=new DomHook(".BarrageBanner",!0,fansToSuperRocket):goldGiftHook.closeHook(),saveData_GoldGift()})}function saveData_Gold(){var e=document.getElementById("extool__gold_start").checked;localStorage.setItem("ExSave_Gold",JSON.stringify({isGold:e}))}function saveData_GoldGift(){var e=document.getElementById("extool__goldGift_start").checked;localStorage.setItem("ExSave_GoldGift",JSON.stringify({isGoldGift:e}))}function ExpandTool_Gold_Set(){var e=localStorage.getItem("ExSave_Gold");null!=e&&1==JSON.parse(e).isGold&&document.getElementById("extool__gold_start").click(),null!=(e=localStorage.getItem("ExSave_GoldGift"))&&1==JSON.parse(e).isGoldGift&&document.getElementById("extool__goldGift_start").click()}function goldBarrageList(e){if(0!=e.length&&0!=e[0].addedNodes.length){let i=e[0].addedNodes[0],a=i.lastElementChild;if(null!=a&&-1!=a.innerHTML.indexOf("is-self")){let n=setTimeout(()=>{i.className="Barrage-listItem js-noblefloating-barrage",a.className="js-noblefloating-barragecont Barrage-notice--noble",a.setAttribute("style","background-color: #fff3df");a.getElementsByClassName("Barrage-nickName")[0].setAttribute("class","Barrage-nickName is-self js-nick");var e,t=a.querySelector(".UserLevel"),t=(null!=t&&(t.className="UserLevel UserLevel--150",t.setAttribute("title","用户等级：150")),a.querySelector(".RoomLevel")),t=(null!=t&&(t.className="RoomLevel RoomLevel--18",t.setAttribute("title","房间等级：18")),i.querySelector(".FansMedal")),t=(null!=t&&(t.style="display:none;"),document.getElementsByClassName("FansMedal-name")[0]),o=(document.getElementsByClassName("DiamondsFansRankList-item DiamondsFansRankList-item--top")[0],t?(o=document.createElement("div"),e=document.createElement("span"),o.className="FansMedal level-50 js-fans-dysclick Barrage-icon",e.className="FansMedal-name js-fans-dysclick",e.innerHTML=t.innerText,o.appendChild(e),a.insertBefore(o,a.querySelector(".UserLevel"))):((t=document.createElement("div")).className="FansMedal level-50 js-fans-dysclick Barrage-icon",t.setAttribute("data-rid","5189167"),(e=document.createElement("span")).className="FansMedal-name js-fans-dysclick",e.setAttribute("data-rid","5189167"),e.innerHTML="歆崽",t.appendChild(e),a.insertBefore(t,a.querySelector(".UserLevel"))),i.querySelector(".Barrage-nobleImg"));null!=o?(o.src="//res.douyucdn.cn/resource/2019/08/15/common/4e85776071ffbae2867bb9d116e9a43c.gif",o.title="幻神"):(e=document.createElement("span"),t=document.createElement("img"),e.className="Barrage-icon Barrage-noble",t.className="Barrage-nobleImg",t.setAttribute("src","//res.douyucdn.cn/resource/2019/08/15/common/4e85776071ffbae2867bb9d116e9a43c.gif"),t.setAttribute("title","幻神"),e.appendChild(t),a.insertBefore(e,a.firstElementChild)),clearTimeout(n)},100)}}}function goldFansMedal(){document.getElementsByClassName("FansMedalEnter-enterContent")[0].setAttribute("data-medal-level","50")}function goldBarrage(t){if(0!=t.length&&0!=t[0].addedNodes.length){t=t[0].addedNodes[0];if(-1==t.className.indexOf("noble-f439ef")&&-1!=t.innerHTML.indexOf("border: 2px solid rgb(2, 255, 255)")){t.style.zIndex="30",t.className="danmuItem-f8e204 noble-f439ef";var o=document.createElement("img"),o=(o.className="super-noble-icon-54c62c",o.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/h1_dcd226.png"),o.setAttribute("style","margin-left: -57px; margin-top: -4px;"),t.insertBefore(o,t.firstElementChild),document.createElement("img"));o.className="super-user-icon-253711";let e=document.getElementsByClassName("Avatar is-circle")[0];null!=e&&(e=e.getElementsByTagName("img")[0].getAttribute("src"),o.setAttribute("src",e.replace(new RegExp("_middle"),"_small"))),t.insertBefore(o,t.firstElementChild);t.getElementsByClassName("afterpic-f864c2")[0].remove();var o=t.getElementsByClassName("text-edf4e7")[0],n=(o.className="super-text-188279",o.setAttribute("style","font: bold 23px SimHei, 'Microsoft JhengHei', Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); background: url('https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/h2_8e5e64.png'); height: 44px;"),document.createElement("div")),o=(n.setAttribute("class","afterpic-f864c2"),n.setAttribute("style","margin-top: 7px; margin-left: -1px;"),o.appendChild(n),document.createElement("img"));o.className="super-tail-6a0446",o.setAttribute("src","https://shark2.douyucdn.cn/front-publish/live_player-master/assets/images/h3_fd2e5b.png"),t.appendChild(o),console.log(o)}}}function fansToSuperRocket(e){if(0!=e.length&&0!=e[0].addedNodes.length){e=e[0].addedNodes[0];if(e.getElementsByClassName("Banner4gift-senderName")[0].title==user_name){var i=e.getElementsByClassName("Banner4gift-objectName")[0].title;if("粉丝荧光棒"==i&&(e.className="Banner4gift Banner4gift--size2",e.getElementsByClassName("Banner4gift-bg")[0].src="https://gfs-op.douyucdn.cn/dygift/2019/03/15/6651f2de52dd359c7b553a77b9d00020.png",e.getElementsByClassName("Banner4gift-objectName")[0].title="超级火箭",e.getElementsByClassName("Banner4gift-objectName")[0].innerText="超级火箭",e.getElementsByClassName("Banner4gift-headerImg")[0].src="https://gfs-op.douyucdn.cn/dygift/2018/11/27/3adbb0c17d9886c1440d55c9711f4c79.gif",!(0<document.getElementsByClassName("ex_giftAnimation_exist").length))){animationNum++;i=document.createElement("div");let t="ex_giftAnimation_"+String(animationNum),o=(i.id=t,i.className="ex_giftAnimation_exist",document.getElementsByClassName("ex_giftAnimation")[0].appendChild(i),new SVGA.Player("#"+t)),n=new SVGA.Parser("#"+t);n.load("https://gfs-op.douyucdn.cn/dygift/2018/11/27/6c6349672e662750ad5c019b240d57f2.svga",e=>{o.setVideoItem(e),o.startAnimation(),setTimeout(()=>{o=null,n=null,document.getElementById(t).remove()},4e3)})}}}}function initPkg_ExpandTool_P2P(){ExpandTool_P2P_insertDom(),ExpandTool_P2P_insertFunc(),initPkg_ExpandTool_P2P_Set()}function ExpandTool_P2P_insertDom(){var e=document.createElement("span"),t=(e.innerHTML='<label title="阻止p2p在后台占用网速，开启后直播画面会在刚进入页面时卡一下"><input style="margin-top:5px;" id="extool__p2p" type="checkbox">阻止p2p上传</label>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function getP2P(){return document.getElementById("extool__p2p").checked}function ExpandTool_P2P_insertFunc(){document.getElementById("extool__p2p").addEventListener("click",function(){saveData_P2P(),getP2P()&&showMessage("阻止p2p上传成功，刷新页面生效","success")})}function saveData_P2P(){var e={isKillP2P:getP2P()};localStorage.setItem("ExSave_P2P",JSON.stringify(e))}function initPkg_ExpandTool_P2P_Set(){var e=localStorage.getItem("ExSave_P2P");null!=e&&(e=JSON.parse(e)).isKillP2P&&(document.getElementById("extool__p2p").checked=e.isKillP2P)}function initKillP2P(){var e=localStorage.getItem("ExSave_P2P");null!=e&&JSON.parse(e).isKillP2P&&killP2P()}function killP2P(){function t(){}["RTCPeerConnection","webkitRTCPeerConnection","mozRTCPeerConnection","msRTCPeerConnectio"].forEach(e=>{void 0===unsafeWindow.RTCPeerConnection&&(unsafeWindow.RTCPeerConnection=unsafeWindow[e]),void 0!==unsafeWindow[e]&&(unsafeWindow[e]=t)})}let redpackets_room_arr=[],redpacket_room_timer;function initPkg_ExpandTool_RedPacket_Room(){ExpandTool_RedPacket_Room_insertDom(),ExpandTool_RedPacket_Room_insertFunc(),ExpandTool_RedPacket_Room_Set()}function ExpandTool_RedPacket_Room_insertDom(){var e=document.createElement("div"),t=(e.className="extool__redpacket_room",e.innerHTML='<label><input style="margin-top:5px;" id="extool__redpacekt_room_start" type="checkbox">自动抢礼物红包</label>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_RedPacket_Room_insertFunc(){document.getElementById("extool__redpacekt_room_start").addEventListener("click",function(){verifyFans("5189167",6).then(e=>{1==e?(1==document.getElementById("extool__redpacekt_room_start").checked?redpacket_room_timer=setInterval(()=>{getRoomRedPacketsList(rid)},6e4):clearInterval(redpacket_room_timer),saveData_RedPacket_Room()):(document.getElementById("extool__redpacekt_room_start").checked=!1,showMessage("本功能需拥有6级歆崽粉丝牌(5189167)才可使用","error"))})})}function getRoomRedPacketsList(e){fetch("https://www.douyu.com/japi/interactnc/web/propredpacket/getPrpList?type_id=1&room_id="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(o=>{if(0<o.data.list.length)for(let t=0;t<o.data.list.length;t++){let e=o.data.list[t].activityid;var n=redpackets_room_arr.indexOf(e),i=o.data.list[t].startTime,i=1e3*(Number(i)-Math.round((new Date).getTime()/1e3))-2e3;-1==n&&(redpackets_room_arr.push(o.data.list[t].activityid),0<i?setTimeout(()=>{getRoomRedPacket(e),getRoomRedPacket(e),getRoomRedPacket(e),showMessage("【礼物红包】抢红包执行完毕！","success")},i):(getRoomRedPacket(e),getRoomRedPacket(e),getRoomRedPacket(e),showMessage("【礼物红包】抢红包执行完毕！","success")))}}).catch(e=>{console.log("请求失败!",e)})}function getRoomRedPacket(t){fetch("https://www.douyu.com/japi/interactnc/web/propredpacket/grab_prp",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"activityid="+t+"&ctn="+getCCN()}).then(e=>e.json()).then(e=>{2==e.data.isSuc&&getRoomRedPacket(t)})}function saveData_RedPacket_Room(){var e=document.getElementById("extool__redpacekt_room_start").checked;localStorage.setItem("ExSave_RedPacket_Room",JSON.stringify({isGetRedPacket:e}))}function ExpandTool_RedPacket_Room_Set(){var e=localStorage.getItem("ExSave_RedPacket_Room");null!=e&&1==JSON.parse(e).isGetRedPacket&&verifyFans("5189167",6).then(e=>{1==e?document.getElementById("extool__redpacekt_room_start").click():(localStorage.setItem("ExSave_RedPacket_Room",JSON.stringify({isGetRedPacket:!1})),showMessage("本功能需拥有6级歆崽粉丝牌(5189167)才可使用","error"))})}function initPkg_ExpandTool_SendGift(){ExpandTool_SendGift_insertDom(),ExpandTool_SendGift_insertFunc()}function ExpandTool_SendGift_insertDom(){var e="",t=(e=(e=(e+='<label>送礼：[用于打榜,例如送出999个飞机]</label><a style="margin-left:10px;color:blue;" href="http://open.douyucdn.cn/api/RoomApi/room/'+rid+'" target="_blank">礼物id示例</a><br />')+'<label>礼物ID：</label><input id="extool__sendgift_id" type="text" style="width:50px;text-align:center;margin-right:10px;" value="20000" />'+'<label>数量：</label><input id="extool__sendgift_cnt" type="text" style="width:30px;text-align:center;margin-right:10px;" value="1" />')+'<label>间隔ms：</label><input id="extool__sendgift_delay" type="text" style="width:30px;text-align:center;" value="0" />'+'<input style="width:40px;margin-left:10px;" type="button" id="extool__sendgift_btn" value="送出" />',document.createElement("div")),e=(t.className="extool__sendgift",t.innerHTML=e,document.getElementsByClassName("extool")[0]);e.insertBefore(t,e.childNodes[0])}function ExpandTool_SendGift_insertFunc(){document.getElementById("extool__sendgift_btn").addEventListener("click",async()=>{if(1==confirm("确认送出？")){let o=document.getElementById("extool__sendgift_id").value,n=document.getElementById("extool__sendgift_cnt").value;var e=Number(document.getElementById("extool__sendgift_delay").value);let i=0,a=0;for(let t=0;t<Number(n);t++)sendGift_any(o,1,rid).then(e=>{null!=e.data&&"鱼翅不足"!=e.msg?(i+=1,a+=Number(e.data.priceType)):console.log("【送礼】"+o+e.msg),t==Number(n)-1&&(showMessage("【送礼】赠送完毕！详细信息可以在F12控制台查看","success"),console.log("【送礼】赠送完毕！详细信息可以在F12控制台查看"))}).catch(e=>{console.log("请求失败!",e)}),0<e&&await sleep(e);showMessage("【送礼】执行中...","info")}})}function sendGift_any(e,t,o){return fetch("https://www.douyu.com/japi/gift/donate/mainsite/v1",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"giftId="+e+"&giftCount="+t+"&roomId="+o+"&bizExt=%7B%22yzxq%22%3A%7B%7D%7D"}).then(e=>e.json())}function initPkg_ExpandTool_TabSwitch(){ExpandTool_TabSwitch_insertDom(),ExpandTool_TabSwitch_insertFunc(),initPkg_ExpandTool_TabSwitch_Set()}function ExpandTool_TabSwitch_insertDom(){var e=document.createElement("span"),t=(e.innerHTML='<label title="阻止页面后台挂机检测"><input style="margin-top:5px;" id="extool__tabSwitch" type="checkbox">页面防挂机</label>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function getTabSwitch(){return document.getElementById("extool__tabSwitch").checked}function ExpandTool_TabSwitch_insertFunc(){document.getElementById("extool__tabSwitch").addEventListener("click",function(){saveData_TabSwitch(),getTabSwitch()?enableTabSwitch():showMessage("已关闭页面防挂机，请刷新页面生效","info")})}function saveData_TabSwitch(){var e={isEnableTabSwitch:getTabSwitch()};localStorage.setItem("ExSave_TabSwitch",JSON.stringify(e))}function initPkg_ExpandTool_TabSwitch_Set(){var e=localStorage.getItem("ExSave_TabSwitch");null!=e&&(e=JSON.parse(e)).isEnableTabSwitch&&(document.getElementById("extool__tabSwitch").checked=e.isEnableTabSwitch,enableTabSwitch())}function enableTabSwitch(){Object.defineProperty(document,"hidden",{value:!1,writable:!1}),Object.defineProperty(document,"visibilityState",{value:"visible",writable:!1}),Object.defineProperty(document,"webkitVisibilityState",{value:"visible",writable:!1}),document.dispatchEvent(new Event("visibilitychange")),document.hasFocus=function(){return!0},document.addEventListener("visibilitychange",function(e){e.stopImmediatePropagation()},!0,!0)}var isGetTreasure=!1;function initPkg_ExpandTool_Treasure(){ExpandTool_Treasure_insertDom(),ExpandTool_Treasure_insertFunc(),ExpandTool_Treasure_Set()}function ExpandTool_Treasure_insertDom(){var e="",e=((e+='<label><input style="margin-top:5px" id="extool__treasure_start" type="checkbox">自动抢宝箱</label>')+'<label style="margin-left:10px;">延迟(抢得过快请调高)：</label><input id="extool__treasure_delay" type="text" style="width:50px;text-align:center;" value="3200" />ms'+'<div><a href="https://www.rrocr.com/" target="_blank" style="color:blue" title="点击进入rrocr官网，将账号用户中心的appkey填入右边然后开启功能即可">rrocr秘钥：</a><input id="extool__treasure_skey" type="text" style="width:200px;text-align:center;" placeholder="填写则会自动完成宝箱领取验证"></div>',document.createElement("div")),t=(e.className="extool__treasure",e.innerHTML='<label><input style="margin-top:5px" id="extool__treasure_start" type="checkbox">自动抢宝箱</label><label style="margin-left:10px;">延迟(抢得过快请调高)：</label><input id="extool__treasure_delay" type="text" style="width:50px;text-align:center;" value="3200" />ms<div><a href="https://www.rrocr.com/" target="_blank" style="color:blue" title="点击进入rrocr官网，将账号用户中心的appkey填入右边然后开启功能即可">rrocr秘钥：</a><input id="extool__treasure_skey" type="text" style="width:200px;text-align:center;" placeholder="填写则会自动完成宝箱领取验证"></div>',document.getElementsByClassName("extool")[0]);t.insertBefore(e,t.childNodes[0])}function ExpandTool_Treasure_insertFunc(){document.getElementById("extool__treasure_start").addEventListener("click",function(){verifyFans("5189167",9).then(e=>{1==e?(1==document.getElementById("extool__treasure_start").checked?(isGetTreasure=!0,getTreasure_Existing()):isGetTreasure=!1,saveData_Treasure()):(document.getElementById("extool__treasure_start").checked=!1,showMessage("本功能需拥有9级歆崽粉丝牌(5189167)才可使用","error"))})}),document.getElementById("extool__treasure_skey").addEventListener("change",()=>{saveData_Treasure()})}function saveData_Treasure(){isGetTreasure=document.getElementById("extool__treasure_start").checked;var e=document.getElementById("extool__treasure_delay").value,t=document.getElementById("extool__treasure_skey").value,e={isGetTreasure:isGetTreasure,treasureDelay:e,skey:t};localStorage.setItem("ExSave_Treasure",JSON.stringify(e))}function ExpandTool_Treasure_Set(){var e=localStorage.getItem("ExSave_Treasure");null!=e&&("treasureDelay"in(e=JSON.parse(e))==1?document.getElementById("extool__treasure_delay").value=e.treasureDelay:document.getElementById("extool__treasure_delay").value="3200","skey"in e==1&&(document.getElementById("extool__treasure_skey").value=e.skey),1==e.isGetTreasure)&&verifyFans("5189167",9).then(e=>{1==e?document.getElementById("extool__treasure_start").click():(localStorage.setItem("ExSave_Treasure",JSON.stringify({isGetTreasure:!1})),showMessage("本功能需拥有9级歆崽粉丝牌(5189167)才可使用","error"))})}function getTreasureDelay(){var e=document.getElementById("extool__treasure_delay").value;return Number(e)}function getTreasureSkey(){return document.getElementById("extool__treasure_skey").value}function getTreasure_Existing(){getTslist(i=>{if(null!=i)for(let n=0;n<i.list.length-1;n++){var a=i.list[n];let e=a.rpid;a=a.ot;let t=getCookieValue("dy_did");var a=Number(a)-Math.floor(Date.now()/1e3),r=document.createElement("div");let o="Ex_Geetest_no"+String(treasureNum);r.id=o,document.getElementById("Ex_Geetest").appendChild(r),0<=a?(a=1e3*a+getTreasureDelay(),treasureNum++,setTimeout(()=>{getTreasure(rid,e,t,o)},a)):getTreasure(rid,e,t,o)}})}function getTslist(e){unsafeWindow.socketProxy.socketStream.subscribe("tslist",e)}function initPkg_FansBadgeList(){var t=(new Date).getTime(),o=document.querySelectorAll(".fans-badge-list tr");if(!(o.length<=1))for(let e=1;e<o.length;e++){var n=o[e],i=1e3*Number(n.getAttribute("data-fans-gbdgts")),a=dateFormat("yyyy-MM-dd hh:mm:ss",new Date(i)),i=Math.floor((t-i)/864e5),r=300<=i?"font-weight:600;color:red;":"";n.getElementsByTagName("td")[1].innerHTML+=`
        已获取 <span style="${r}">${i}</span> 天<br/>
        `+a}}function initPkg_FansContinue(){initPkg_FansContinue_Dom(),initPkg_FansContinue_Func()}function initPkg_FansContinue_Dom(){FansContinue_insertIcon()}function FansContinue_insertIcon(){var e=document.createElement("div"),t=(e.className="fans-continue",e.innerHTML='<a class="ex-panel__icon" title="一键续牌"><img style="width: 32px;height: 32px;" src="https://gfs-op.douyucdn.cn/dygift/1705/7db9beee246848252f1c7fe916259f4e.png"/><i id="fans-continue__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_FansContinue_Func(){document.getElementsByClassName("fans-continue")[0].addEventListener("click",function(){let i=prompt("每个直播间赠送几根荧光棒？","1");if(null!=i&&""!=i){let n=0;getBagGifts(rid,t=>{var o=t.data.list.length;if(0<o){for(let e=0;e<o;e++){if(268==t.data.list[e].id){n=268;break}2358==t.data.list[e].id&&(n=2358)}0==n?showMessage("没有足够的道具","error"):fetch("https://www.douyu.com/member/cp/getFansBadgeList",{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.text()).then(async e=>{var o=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByClassName("fans-badge-list")[0].lastElementChild,t=o.children.length;for(let e=0;e<t;e++){let t=o.children[e].getAttribute("data-fans-room");await sleep(250).then(()=>{sendGift_bag(n,Number(i),t).then(e=>{"success"==e.msg?showMessage("【续牌】"+t+"赠送荧光棒成功","success"):(showMessage("【续牌】"+t+"赠送失败 "+e.msg,"error"),console.log(t,e))}).catch(e=>{showMessage("【续牌】"+t+"赠送失败","error"),console.log(t,e)})})}}).catch(e=>{console.log("请求失败!",e)})}else showMessage("背包礼物为空","error")})}})}function sendGift_bag(e,t,o){return fetch("https://www.douyu.com/japi/prop/donate/mainsite/v1",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"propId="+e+"&propCount="+t+"&roomId="+o+"&bizExt=%7B%22yzxq%22%3A%7B%7D%7D"}).then(e=>e.json())}function initPkg_FirePower(){initPkg_FirePower_Dom(),initPkg_FirePower_Func()}function initPkg_FirePower_Dom(){FirePower_insertIcon()}function FirePower_insertIcon(){var e=document.createElement("div"),t=(e.className="firepower",e.innerHTML='<a class="ex-panel__icon" title="跳转随机火力全开房间"><svg style="display:block;" t="1584277091105" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2603" width="32" height="32"><path d="M893.3888 499.89632C841.82016 381.67552 788.48 317.55264 769.3824 266.33216c-20.28544-54.43584-0.27648-100.82304-0.27648-100.82304-42.33216-8.448-73.79968 31.87712-97.57696 72.77568-14.71488 25.31328-33.90464 178.71872-63.95904 216.3712-5.12 6.41024-15.28832 4.84352-18.13504-2.84672C486.7072 175.16544 541.75744 27.09504 541.75744 27.09504 380.22144 87.9104 340.0192 245.26848 332.34944 269.6192c-14.83776 47.0528-8.56064 225.98656-8.56064 225.98656-0.64512 12.2368-17.3056 15.38048-22.39488 4.22912 0 0-42.56768-104.69376-47.53408-162.14016-4.05504-47.02208-4.39296-37.23264-4.39296-37.23264-73.17504 67.50208-154.4192 220.3648-154.4192 323.04128 0 206.2336 182.36416 373.41184 407.32672 373.41184 224.94208 0 407.31648-167.17824 407.31648-373.41184 0-43.99104 0-86.26176-16.30208-123.60704zM759.82848 854.36416c-68.57728 62.8736-160.01024 97.4848-257.45408 97.4848-97.45408 0-188.88704-34.6112-257.46432-97.4848-67.51232-61.9008-104.704-143.88224-104.704-230.84032 0-40.47872 16.44544-96.90112 45.1072-154.76736a608.512 608.512 0 0 1 36.16768-63.2832c14.10048 51.72224 34.82624 103.39328 38.05184 111.29856l0.34816 0.86016 0.38912 0.83968a56.20736 56.20736 0 0 0 51.68128 33.29024c30.34112 0 55.3472-23.63392 56.92416-53.82144l0.1024-1.9456-0.06144-1.95584c-2.93888-84.1728-1.31072-186.08128 6.5024-210.8928 0.41984-1.31072 0.91136-2.94912 1.49504-4.90496 4.61824-15.36 16.88576-56.14592 44.78976-98.65216 17.38752-26.48064 37.76512-49.11104 60.96896-67.71712a629.0432 629.0432 0 0 0-0.75776 23.25504c-1.29024 100.57728 20.62336 212.39808 65.14688 332.34944a55.87968 55.87968 0 0 0 52.23424 36.2496 55.5008 55.5008 0 0 0 43.59168-20.97152c23.02976-28.85632 36.48512-84.6848 52.95104-160.4096 4.97664-22.784 11.71456-53.82144 15.27808-62.28992 2.21184-3.80928 4.48512-7.5776 6.8608-11.29472a189.3376 189.3376 0 0 0 9.0624 33.28c9.80992 26.25536 25.43616 52.34688 45.2096 85.4016 23.11168 38.5536 51.84512 86.53824 79.72864 150.4256 12.55424 28.75392 12.55424 64.37888 12.55424 105.64608 0 86.96832-37.1712 168.94976-104.704 230.85056z m0 0" fill="#CE3D3A" p-id="2604"></path><path d="M492.89216 81.664s-170.7008 90.10176-147.56864 380.88704c-11.5712 62.208-60.75392 66.54976-60.75392 66.54976l-53.52448-144.67072S3.91168 631.808 194.8672 830.01344c125.87008 104.15104 234.36288 206.87872 522.26048 82.46272 73.7792-57.86624 202.52672-172.56448 157.696-400.20992-63.67232-111.91296-143.24736-295.64928-143.24736-295.64928L680.96 274.4832l-28.93824 138.88512-49.01888 83.82464L526.17216 382.976l-33.28-301.312z" fill="#CE3D3A" p-id="2605"></path></svg><i id="firepower__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_FirePower_Func(){document.getElementsByClassName("firepower")[0].addEventListener("click",function(){fetch("https://www.douyu.com/japi/firepower/apinc/activeTask/getRecRid",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"token="+getCCN()}).then(e=>e.json()).then(e=>{e=e.data;window.location.href="https://www.douyu.com/"+e}).catch(e=>{console.log("请求失败!",e)})})}let followListHook;function initPkg_FollowList(){let e=setInterval(()=>{void 0!==document.getElementsByClassName("PlayerToolbar-wealthNum")[0]&&(followListHook=new DomHook(".Header-follow-content",!1,handleFollowList),clearInterval(e))},1e3)}function handleFollowList(e){var t=document.getElementsByClassName("Header-follow-tab is-active")[0].innerText;"特别关注"!==t&&"视频动态"!==t&&0!=(t=document.getElementsByClassName("Header-follow-listWrap")).length&&(document.getElementsByClassName("Header-follow-listBox")[0].style.display="none",setNewFollowList(t[0]))}async function setNewFollowList(e){var n=await getFollowList();if("0"==n.error){let t=0;var i='<div id="refreshFollowList"><span style="margin-left:3px">长按弹出同屏播放</span></div>',a=Math.floor(Date.now()/1e3),r=document.createElement("ul");r.className="Header-follow-listBox";for(let e=0;e<n.data.list.length;e++){var s=n.data.list[e];"1"==s.show_status&&"0"==s.videoLoop&&(s=`<li class="DropPaneList FollowList ExFollowListItem" rid="${s.room_id}"><a><div class="DropPaneList-cover"><div class="LazyLoad is-visible DyImg "><img src="${String(s.avatar_small).replace("_big","_small")}" alt="${s.nickname}" class="DyImg-content is-normal "></div></div><div class="DropPaneList-info"><p><span class="DropPaneList-hot"><i></i>${s.online}</span><span class="DropPaneList-title">${s.room_name}</span></p><p><span class="DropPaneList-name">${s.nickname}</span><span class="DropPaneList-time">已播${formatSeconds(a-Number(s.show_time))}</span></p></div></a></li>`,r.innerHTML+=s,t++)}i+=r.outerHTML,e.innerHTML+=i;let o=document.getElementsByClassName("ExFollowListItem");for(let t=0;t<o.length;t++){var l=new CClick(o[t]);l.longClick(()=>{createNewVideo(videoPlayerArr.length,o[t].getAttribute("rid"),"Douyu"),document.querySelector(".Follow .public-DropMenu").className="public-DropMenu"}),l.click(()=>{openPage("https://www.douyu.com/"+o[t].getAttribute("rid"),!0)}),o[t].addEventListener("mousedown",e=>{1==e.button&&openPage("https://www.douyu.com/"+o[t].getAttribute("rid"),!1)})}}}function getFollowList(){return new Promise(t=>{fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/list?sort=1&cid1=0",{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(e=>{t(e)})})}function initPkg_HighResoltion(){waitAndSetHighResolution()}async function waitAndSetHighResolution(){let e=await mscststs.wait('.c5-6a3710[value*="画质"] + ul',!0,timeout=50);setTimeout(function(){e.firstChild.click()},1e3)}function initPkg_ImageDanmaku(){initPkg_ImageDanmaku_Dom(),initPkg_ImageDanmaku_Func()}function initPkg_ImageDanmaku_Dom(){var e=document.getElementsByClassName("ChatToolBar__right")[0],t=document.createElement("div");t.className="BarrageFilter",t.title="添加图片弹幕（仅安装插件的用户可见）",t.innerHTML=`
  <input id="ex-upload-image-input" type="file" id="ex-upload-image" style="display: none" accept="image/*">
  <svg id="ex-upload-image-svg" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21426" width="18" height="18"><path d="M864.896 639.68a37.76 37.76 0 0 1 37.568 37.568v112.832h112.832a37.76 37.76 0 0 1 37.568 37.568 37.76 37.76 0 0 1-37.568 37.632H902.4v112.768a37.76 37.76 0 0 1-37.568 37.632 37.76 37.76 0 0 1-37.632-37.632V865.28h-112.832a37.76 37.76 0 0 1-37.568-37.632 37.76 37.76 0 0 1 37.568-37.568h112.832v-112.832a37.76 37.76 0 0 1 37.632-37.568zM930.688 0.384c46.656 0 84.608 37.952 84.608 84.608v474.688a37.632 37.632 0 0 1-75.2 0V398.208l-377.088 304.64a84.352 84.352 0 0 1-94.4 8.32l-1.28-0.768-209.216-127.616a9.344 9.344 0 0 0-7.552-0.256l-175.36 125.632v147.712c0 5.12 4.288 9.408 9.408 9.408H595.2a37.632 37.632 0 0 1 0 75.2H84.608A84.672 84.672 0 0 1 0 855.872V84.992C0 38.4 37.952 0.384 84.608 0.384z m0 75.2H84.608a9.536 9.536 0 0 0-9.408 9.408V615.68l135.552-97.152 1.792-1.024a84.032 84.032 0 0 1 82.432-0.256l1.344 0.768L505.6 645.632a9.344 9.344 0 0 0 10.048-1.152l0.128-0.128 424.32-342.848V84.992a9.536 9.536 0 0 0-9.344-9.408zM282.048 150.784c72.512 0 131.584 59.072 131.584 131.648a131.776 131.776 0 0 1-131.584 131.584A131.776 131.776 0 0 1 150.4 282.432c0-72.576 59.072-131.648 131.648-131.648z m0 75.264a56.448 56.448 0 0 0 0 112.768 56.448 56.448 0 0 0 0-112.768z" fill="#BBBBBB" p-id="21427"></path></svg>
  `,e.insertBefore(t,e.firstChild)}function initPkg_ImageDanmaku_Func(){const i=document.getElementsByClassName("ChatSend-txt")[0];document.addEventListener("paste",async e=>{if(document.activeElement===i){var t,o=(e.clipboardData||e.originalEvent.clipboardData).items;for(t in o){var n=o[t];if("file"===n.kind&&n.type.startsWith("image/")){i.value+="[DouyuEx图片上传中]",addImageDanmaku(await getUploadImageUrl(n.getAsFile()));break}}}});let e=setInterval(()=>{void 0!==document.getElementById("js-barrage-list")&&(clearInterval(e),new DomHook("#js-barrage-list",!1,e=>{var t;e.length<=0||e[0].addedNodes.length<=0||(t=(e=e[0].addedNodes[0]).getElementsByClassName("Barrage-content"))&&0!==t.length&&(t=t[0].innerHTML).includes("[DouyuEx图片")&&(t=t.replace(/\[DouyuEx图片(.*?)\]/g,(e,t)=>getImageDanmakuHtml(t)),e.getElementsByClassName("Barrage-content")[0].innerHTML=t)}))},1e3),t=setInterval(()=>{void 0!==document.getElementsByClassName("danmu-6e95c1")[0]&&(clearInterval(t),new DomHook(".danmu-6e95c1",!1,e=>{var t;e.length<=0||e[0].addedNodes.length<=0||(e=e[0].addedNodes[0])&&e.innerHTML&&(t=e.innerHTML).includes("[DouyuEx图片")&&(t=t.replace(/\[DouyuEx图片(.*?)\]/g,(e,t)=>getImageDanmakuHtml(t)),e.innerHTML=t)}))},1e3);document.getElementById("ex-upload-image-svg").addEventListener("click",()=>{document.getElementById("ex-upload-image-input").click()}),document.getElementById("ex-upload-image-input").addEventListener("change",async e=>{i.value+="[DouyuEx图片上传中]",addImageDanmaku(await getUploadImageUrl(e.target.files[0]).catch(e=>console.log(e)))})}function getImageDanmakuHtml(e){var t;return isValidImageFile(e)?(t=decompressImageUrl((e=e.split("."))[0]),e=`<a href="${(t=DOMPurify.sanitize(`https://img.douyucdn.cn/data/yuba/weibo/${t.slice(0,4)+"/"+t.slice(4,6)+"/"+t.slice(6,8)+"/"+t}.200x0.`+e[1])).replace("200x0.","")}" target="_blank"><img class="ex-image-danmaku" src="${t}" alt=""></a>`,DOMPurify.sanitize(e)):""}function addImageDanmaku(e){var t=document.getElementsByClassName("ChatSend-txt")[0],e=e.split(".");t.value=t.value.replace("[DouyuEx图片上传中]",`[DouyuEx图片${compressImageUrl(e[0])}.${e[1]}]`)}function compressImageUrl(e){return BigInt(e).toString(36)}function decompressImageUrl(t){let o=0n,n=1n;for(let e=t.length-1;0<=e;e--){var i=t[e].toUpperCase(),a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i);if(-1===a)throw new Error("Invalid base36 character: "+i);o+=BigInt(a)*n,n*=36n}return o.toString()}function getUploadPreRequest(){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"https://yuba.douyu.com/wbapi/web/image/preRequest?source=&timestamp="+(new Date).getTime(),responseType:"json",headers:{"dy-client":"pc","dy-token":dyToken},onload:function(e){t(e.response)}})})}function dataURLtoBlob(e){for(var e=e.split(","),t=e[0].match(/:(.*?);/)[1],o=atob(e[1]),n=o.length,i=new Uint8Array(n);n--;)i[n]=o.charCodeAt(n);return new Blob([i],{type:t})}function getUploadImageUrl(r){return new Promise(async(t,o)=>{var e=(await getUploadPreRequest()).data;if(e){var n,i=new FormData;for(n in e)i.append(n,e[n]);i.append("file",r);var a=new XMLHttpRequest;a.open("POST","https://img.douyucdn.cn/upload",!0),a.onload=function(){if(200<=this.status&&this.status<400)try{var e=JSON.parse(this.response).uri.split("/").pop().split("?")[0];t(e)}catch(e){o(e)}else o("图片上传失败")},a.send(i)}})}function getImageDanmakuFromImgSrc(e){e=e.split("/").pop().split(".");return`[DouyuEx图片${compressImageUrl(e[0])}.${e[2]}]`}async function initPkg_LevelTask_Timer(){var t=await getLevelTasks(await getLevelTaskIds(rid));for(let e=0;e<t.length;e++){var o=t[e],n=o.taskId,i=o.name,a=o.taskStatus,o=o.prizeStatus;if(1==a&&0==o){var r=await finishLevelTask(rid,n);for(let e=0;e<r.length;e++)showMessage(`【等级任务】${i} 获得`+r[e].name+r[e].num,"success")}}}function getLevelTaskIds(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/interactnc/web/userLevel/userLevelDetail?rid="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(e=>{e=e.data.taskIds.join(",");t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function getLevelTasks(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/tasksys/userLevelTask/getTaskStatus?taskIds="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(e=>{t(e.data.list)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function finishLevelTask(e,n){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/tasksys/userLevelTask/getPrize",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&taskIds=${n}&roomId=`+e}).then(e=>e.json()).then(e=>{t(e.data.list)}).catch(e=>{console.log("请求失败!",e),o(e)})})}let myLastBarrage="",barrageSendCheckTimer=0,barrageSendCheckTimer2=0;async function initPkg_LiveTool_BarrageSendCheck(){myName=await getUserName();let e=setInterval(()=>{void 0!==document.getElementById("js-barrage-list")&&(clearInterval(e),new DomHook("#js-barrage-list",!1,e=>{if(!(e.length<=0||e[0].addedNodes.length<=0)){let o=e[0].addedNodes[0];if(0<o.getElementsByClassName("is-self").length){e=o.getElementsByClassName("Barrage-content");if(e&&0!==e.length){let t=e[0].innerText.trim();clearTimeout(barrageSendCheckTimer),barrageSendCheckTimer=setTimeout(()=>{var e;""!==myLastBarrage&&""!==t&&(e=stt_deserialize(myLastBarrage)).txt&&(e.txt.includes("[DouyuEx图片")&&(e.txt=e.txt.replace(/\[DouyuEx图片[^\]]+\]/g,"").trim()),e.txt.replace(/\s+/g," ")!==t.replace(/\s+/g," "))&&((e=o.getElementsByClassName("Barrage-content")[0]).style.textDecoration="line-through gray 1px",e)&&e.parentNode&&e.parentNode.insertBefore(createBarrageFailDom(),e.nextSibling)},300)}}}}))},1e3)}function createBarrageFailDom(){var e=document.createElement("span");return e.textContent="(可能发送失败)",e.style.marginLeft="4px",e.style.color="gray",e.style.fontSize="9px",e.style.cursor="point",e.title="该条弹幕发送失败，不会被其他人看到（可能会误判）",e}function initPkg_LiveTool_BarrageSendCheck_Handle(e){"chatmsg"==getType(e)&&e.includes(myName)&&(myLastBarrage=e)}let barrageSpeed_count=0;function initPkg_LiveTool_BarrageSpeed(){setInterval(()=>{var e=Number(barrageSpeed_count/5*60).toFixed(0);barrageSpeed_count=0,document.getElementsByClassName("ChatSend-txt")[0].placeholder="弹幕时速："+e+"条/分 按↑↓查看历史弹幕 视频ctrl+滚轮缩放"},5e3)}function LiveTool_BarrageSpeed_Dom(){var e=document.createElement("div"),t=(e.className="barrageSpeed",e.innerHTML=`
        弹幕时速：<span class='barrageSpeed__value'>**</span>条/分 按↑↓查看历史弹幕 视频ctrl+滚轮缩放
    `,document.getElementsByClassName("Chat")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_LiveTool_BarrageSpeed_Handle(e){"chatmsg"==getType(e)&&barrageSpeed_count++}let isEnterOn=!1,enterWordList=[];function initPkg_LiveTool_Enter(){LiveTool_Enter_insertDom(),LiveTool_Enter_insertFunc(),initPkg_Enter_Set()}function LiveTool_Enter_insertDom(){var e=document.createElement("div"),t=(e.className="livetool__cell",e.innerHTML=`
        <div class='livetool__cell_title'>
            <span id='enter__title'>进场欢迎</span>
            <span id='enter__export'>导出</span>
            <span id='enter__import'>导入</span>
        </div>
        <div class='livetool__cell_option'>
            <div class="onoffswitch livetool__cell_switch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="enter__switch" tabindex="0" checked>
                <label class="onoffswitch-label" for="enter__switch"></label>
            </div>
        </div>
    `+`
        <div class='enter__panel'>
            <select id='enter__select'>
            </select>
            <input style="width:40px;margin-left:10px;" type="button" id="enter__add" value="添加"/>
            <input style="width:40px;margin-left:10px;" type="button" id="enter__del" value="删除"/>
            <div class="enter__option">
                <label>等级≥<input id="enter__level" type="text" value="1"/></label>
                <label>当前欢迎词：<input id="enter__word" type="text" placeholder="欢迎<id>光临直播间"/></label>
            </div>
        </div>
    `,document.getElementsByClassName("livetool")[0]);t.insertBefore(e,t.childNodes[0])}function LiveTool_Enter_insertFunc(){document.getElementById("enter__export").addEventListener("click",()=>{GM_setClipboard(JSON.stringify(enterWordList)),showMessage("【进场欢迎】导出完毕，已复制到剪贴板","success")}),document.getElementById("enter__import").addEventListener("click",()=>{PostbirdAlertBox.prompt({title:"请输入json文本（会覆盖原来的设置）",okBtn:"确定",onConfirm:function(e){var t=document.getElementById("enter__select"),e=JSON.parse(e||"{}")||{};if("object"==typeof e){for(var o in enterWordList={...e},t.options.length=0,enterWordList)enterWordList.hasOwnProperty(o)&&t.options.add(new Option(o,""));saveData_Enter()}showMessage("【进场欢迎】导入完毕","success")},onCancel:function(e){}})}),document.getElementById("enter__switch").addEventListener("click",()=>{var e=document.getElementById("enter__switch").checked;isEnterOn=1==e,saveData_isEnter()}),document.getElementById("enter__title").addEventListener("click",()=>{var e=document.getElementsByClassName("enter__panel")[0];"block"!=e.style.display?((e.style.display="block")==document.getElementsByClassName("mute__panel")[0].style.display&&(document.getElementsByClassName("mute__panel")[0].style.display="none"),"block"==document.getElementsByClassName("reply__panel")[0].style.display&&(document.getElementsByClassName("reply__panel")[0].style.display="none"),"block"==document.getElementsByClassName("gift__panel")[0].style.display&&(document.getElementsByClassName("gift__panel")[0].style.display="none"),"block"==document.getElementsByClassName("vote__panel")[0].style.display&&(document.getElementsByClassName("vote__panel")[0].style.display="none")):e.style.display="none"}),document.getElementById("enter__select").onclick=function(){var e,t;0!=this.options.length&&(e=this.options[this.selectedIndex].text,t=enterWordList[e].enter,document.getElementById("enter__word").value=e,document.getElementById("enter__level").value=t,localStorage.setItem("ExSave_LastEnterWord",e))},document.getElementById("enter__add").addEventListener("click",()=>{document.getElementById("enter__select");var t=document.getElementById("enter__word").value,o=document.getElementById("enter__level").value;if(""!=t&&""!=o){let e=!1;for(const n of enterWordList)if(Number(o)===Number(n.level)){e=!0;break}e?showMessage("【进场欢迎】等级已存在","error"):(enterWordList.push({level:o,word:t}),enterWordList.sort((e,t)=>t.level-e.level),refreshEnterSelectOptions(),saveData_Enter())}}),document.getElementById("enter__del").addEventListener("click",()=>{var e=document.getElementById("enter__select");e.options[e.selectedIndex].text;enterWordList.splice(e.selectedIndex,1),enterWordList.sort((e,t)=>t.level-e.level),refreshEnterSelectOptions(),saveData_Enter()})}function saveData_Enter(){var e=enterWordList;localStorage.setItem("ExSave_Enter",JSON.stringify(e))}function saveData_isEnter(){let e=[];var t=localStorage.getItem("ExSave_isEnter"),t=(e=null!=t&&"rooms"in(t=JSON.parse(t))==1?t.rooms:e).indexOf(rid),t=(1==isEnterOn?-1==t&&e.push(rid):e.splice(t,1),{rooms:e});localStorage.setItem("ExSave_isEnter",JSON.stringify(t))}function refreshEnterSelectOptions(){var e=document.getElementById("enter__select");e.options.length=0;for(const t of enterWordList)e.options.add(new Option(`【${t.level}级】`+t.word,""))}function initPkg_Enter_Set(){var t=localStorage.getItem("ExSave_Enter");if(""!=t){document.getElementById("enter__select");if(null!=t){let e=JSON.parse(t);Array.isArray(e)||(e=[],saveData_Enter()),enterWordList=e,refreshEnterSelectOptions()}if(null!=(t=localStorage.getItem("ExSave_isEnter"))){t=JSON.parse(t);let e=[];"rooms"in t==1&&(e=t.rooms),isEnterOn=-1!=e.indexOf(rid)}else isEnterOn=!1;document.getElementById("enter__switch").checked=isEnterOn}}function initPkg_LiveTool_Enter_Handle(e){if(0!=isEnterOn&&"uenter"==getType(e)){var t=getStrMiddle(e,"uid@=","/");if(t!=my_uid){var o=getStrMiddle(e,"nn@=","/"),n=getStrMiddle(e,"level@=","/");for(const i of enterWordList)if(Number(n)>=Number(i.level)){sendBarrage(reply=String(i.word).replace(/<id>/g,o));break}}}}let isGiftOn=!1,giftWordList={};function initPkg_LiveTool_Gift(){LiveTool_Gift_insertDom(),LiveTool_Gift_insertFunc(),initPkg_Gift_Set()}function LiveTool_Gift_insertDom(){var e=document.createElement("div"),t=(e.className="livetool__cell",e.innerHTML=`
        <div class='livetool__cell_title'>
            <span id='gift__title'>自动谢礼物</span>
            <span id='gift__export'>导出</span>
            <span id='gift__import'>导入</span>
        </div>
        <div class='livetool__cell_option'>
            <div class="onoffswitch livetool__cell_switch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="gift__switch" tabindex="0" checked>
                <label class="onoffswitch-label" for="gift__switch"></label>
            </div>
        </div>
    `+`
        <div class='gift__panel'>
            <select id='gift__select'>
            </select>
            <input style="width:40px;margin-left:10px;" type="button" id="gift__add" value="添加"/>
            <input style="width:40px;margin-left:10px;" type="button" id="gift__del" value="删除"/>
            <input style="width:64px;margin-left:10px;" type="button" id="gift__template" value="生成模板"/>
            <div class="gift__option">
                <label><a id="reply__show_gid" style="color:blue;" href="javascript:void(0);">礼物id：</a><input id="gift__giftId" type="text"/></label>
                <label>回复：<input id="gift__reply" type="text" placeholder="<id>=用户名 <cnt>个数"/></label>
            </div>
        </div>
    `,document.getElementsByClassName("livetool")[0]);t.insertBefore(e,t.childNodes[0])}function LiveTool_Gift_insertFunc(){document.getElementById("reply__show_gid").addEventListener("click",()=>{console.log(`
背包礼物：http://webconf.douyucdn.cn/resource/common/prop_gift_list/prop_gift_config.json
鱼翅礼物：http://open.douyucdn.cn/api/RoomApi/room/5189167
`),showMessage("请按F12到控制台(console)查看礼物id","success")}),document.getElementById("gift__switch").addEventListener("click",()=>{var e=document.getElementById("gift__switch").checked;isGiftOn=1==e,saveData_isGift()}),document.getElementById("gift__title").addEventListener("click",()=>{var e=document.getElementsByClassName("gift__panel")[0];"block"!=e.style.display?((e.style.display="block")==document.getElementsByClassName("mute__panel")[0].style.display&&(document.getElementsByClassName("mute__panel")[0].style.display="none"),"block"==document.getElementsByClassName("enter__panel")[0].style.display&&(document.getElementsByClassName("enter__panel")[0].style.display="none"),"block"==document.getElementsByClassName("reply__panel")[0].style.display&&(document.getElementsByClassName("reply__panel")[0].style.display="none"),"block"==document.getElementsByClassName("vote__panel")[0].style.display&&(document.getElementsByClassName("vote__panel")[0].style.display="none")):e.style.display="none"}),document.getElementById("gift__select").onclick=function(){var e,t;0!=this.options.length&&(e=this.options[this.selectedIndex].text,t=giftWordList[e].reply,document.getElementById("gift__giftId").value=e,document.getElementById("gift__reply").value=t)},document.getElementById("gift__add").addEventListener("click",()=>{var e=document.getElementById("gift__select"),t=document.getElementById("gift__giftId").value,o=document.getElementById("gift__reply").value;""!=t&&(giftWordList[t]={reply:o},e.options.add(new Option(t,"")),saveData_Gift())}),document.getElementById("gift__del").addEventListener("click",()=>{var e=document.getElementById("gift__select"),t=e.options[e.selectedIndex].text;delete giftWordList[t],e.options.remove(e.selectedIndex),saveData_Gift()}),document.getElementById("gift__export").addEventListener("click",()=>{GM_setClipboard(JSON.stringify(giftWordList)),showMessage("【自动谢礼物】导出完毕，已复制到剪贴板","success")}),document.getElementById("gift__import").addEventListener("click",()=>{PostbirdAlertBox.prompt({title:"请输入json文本（会覆盖原来的设置）",okBtn:"确定",onConfirm:function(e){var t=document.getElementById("gift__select"),e=JSON.parse(e||"{}")||{};if("object"==typeof e){for(var o in giftWordList={...e},t.options.length=0,giftWordList)giftWordList.hasOwnProperty(o)&&t.options.add(new Option(o,""));saveData_Gift()}showMessage("【自动谢礼物】导入完毕","success")},onCancel:function(e){}})}),document.getElementById("gift__template").addEventListener("click",()=>{setAllGiftTemplate()})}function saveData_Gift(){var e=giftWordList;localStorage.setItem("ExSave_Gift",JSON.stringify(e))}function saveData_isGift(){let e=[];var t=localStorage.getItem("ExSave_isGift"),t=(e=null!=t&&"rooms"in(t=JSON.parse(t))==1?t.rooms:e).indexOf(rid),t=(1==isGiftOn?-1==t&&e.push(rid):e.splice(t,1),{rooms:e});localStorage.setItem("ExSave_isGift",JSON.stringify(t))}function initPkg_Gift_Set(){var t=localStorage.getItem("ExSave_Gift");if(null!=t){var e,o=JSON.parse(t),n=(giftWordList=o,document.getElementById("gift__select"));for(e in o)o.hasOwnProperty(e)&&n.options.add(new Option(e,""))}if(null!=(t=localStorage.getItem("ExSave_isGift"))){t=JSON.parse(t);let e=[];"rooms"in t==1&&(e=t.rooms),isGiftOn=-1!=e.indexOf(rid)}else isGiftOn=!1;document.getElementById("gift__switch").checked=isGiftOn}function initPkg_LiveTool_Gift_Handle(e){var t,o,n,i;0!=isGiftOn&&("dgb"===(t=getType(e))?getStrMiddle(e,"uid@=","/")!=my_uid&&(o=getStrMiddle(e,"nn@=","/"),i=getStrMiddle(e,"gfid@=","/"),n=getStrMiddle(e,"gfcnt@=","/"),i in giftWordList)&&(i=giftWordList[i].reply,i=String(i).replace(/<id>/g,o),sendBarrage(i=String(i).replace(/<cnt>/g,n))):"odfbc"!==t&&"rndfbc"!==t||getStrMiddle(e,"uid@=","/")!=my_uid&&(o=getStrMiddle(e,"nick@=","/"),(n="odfbc"===t?"开通钻粉":"续费钻粉")in giftWordList)&&(i=giftWordList[n].reply,i=String(i).replace(/<id>/g,o),sendBarrage(i=String(i).replace(/<cnt>/g,"1"))))}async function setAllGiftTemplate(){var t={},o=await getRoomGiftTemplate();for(let e=0;e<o.data.gift.length;e++){var n=o.data.gift[e];t[n.id]={reply:`感谢<id>赠送的${n.name}x<cnt>`}}let e=await getBagGiftTemplate();var i={};e=(e=e.substring(0,e.length-2)).replace("DYConfigCallback(","");for(const r in(e=JSON.parse(e||"{}")||{}).data)i[r]={reply:`感谢<id>赠送的${e.data[r].name}x<cnt>`};var a={"开通钻粉":{reply:"感谢<id>开通钻粉"},"续费钻粉":{reply:"感谢<id>续费钻粉"}},a={...t,...i,...a};GM_setClipboard(JSON.stringify(a)),showMessage("【自动谢礼物】礼物模板生成完毕，已复制到剪贴板，可直接导入","success")}function getRoomGiftTemplate(){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"http://open.douyucdn.cn/api/RoomApi/room/"+rid,responseType:"json",onload:function(e){e=e.response;t(e)}})})}function getBagGiftTemplate(){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"http://webconf.douyucdn.cn/resource/common/prop_gift_list/prop_gift_config.json",responseType:"text",onload:function(e){e=e.response;t(e)}})})}let timer_closing,closingNum=0;function initPkg_LiveTool_LiveNotice(){}function initPkg_LiveTool_LiveNotice_Handle(t){if("rss"==getType(t)){let e=getStrMiddle(t,"rid@=","/");var o=getStrMiddle(t,"ss@=","/"),t=getStrMiddle(t,"ivl@=","/");"1"==o&&"0"==t&&showMessageWindow("开播提醒","直播间："+e+"开播了，点我签到",()=>{signRoom(e)})}}function getRoomAvatar(){fetch("https://www.douyu.com/betard/"+rid,{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.json()).then(e=>{roomAvatar=e.room.avatar.middle}).catch(e=>{console.log("请求失败!",e)})}function initPkg_LiveTool(){initPkg_LiveTool_Dom(),initPkg_LiveTool_Module(),initPkg_LiveTool_Func(),initPkg_LiveTool_HandleFunc()}function initPkg_LiveTool_Dom(){LiveTool_insertModal(),LiveTool_insertIcon()}function initPkg_LiveTool_Module(){initPkg_LiveTool_Vote(),initPkg_LiveTool_Enter(),initPkg_LiveTool_Mute(),initPkg_LiveTool_Gift(),initPkg_LiveTool_Reply(),initPkg_LiveTool_Treasure(),initPkg_LiveTool_BarrageSpeed(),initPkg_LiveTool_RankList(),initPkg_LiveTool_BarrageSendCheck()}function LiveTool_insertModal(){var e=document.createElement("div"),t=(e.className="livetool",document.getElementsByClassName("layout-Player-chat")[0]);t.insertBefore(e,t.childNodes[0])}function LiveTool_insertIcon(){var e=document.createElement("div"),t=(e.className="livetool-icon",e.innerHTML='<a class="ex-panel__icon" title="直播间工具"><svg t="1590294900594" style="display:block;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20028" width="36" height="36"><path d="M352.2 245.3c-5.1 0-10.2-2-14.1-5.9L196.6 98c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l141.4 141.4c7.8 7.8 7.8 20.5 0 28.3-3.9 3.9-9 5.9-14.1 5.9zM477.1 245.3c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3L604.3 69.7c7.8-7.8 20.5-7.8 28.3 0 7.8 7.8 7.8 20.5 0 28.3L491.2 239.4c-3.9 3.9-9 5.9-14.1 5.9z" fill="#0C2B4A" p-id="20029"></path><path d="M703.9 194.8H124.2c-33 0-60 27-60 60v453c0 33 27 60 60 60h418c1.7-122.5 99.6-221.8 221.7-225.5V254.8c0-33-27-60-60-60zM533.4 522.9L356.3 625.2c-24 13.9-54-3.5-54-31.2V389.5c0-27.7 30-45 54-31.2l177.1 102.2c24 13.9 24 48.6 0 62.4zM815.2 776.4c0 21.9-17.8 39.7-39.7 39.7-21.9 0-39.7-17.8-39.7-39.7 0-21.9 17.8-39.7 39.7-39.7 21.9 0 39.7 17.8 39.7 39.7z" fill="#0C2B4A" p-id="20030"></path><path d="M775.5 591C673.6 591 591 673.6 591 775.5S673.6 960 775.5 960 960 877.4 960 775.5 877.4 591 775.5 591zM879 819l-15.6 27c-2.1 3.6-6.8 4.9-10.4 2.8l-15.5-8.9c-2.7-1.6-6.1-1.3-8.5 0.6-7.5 5.9-15.9 10.6-25.1 13.8-3 1.1-5.1 4-5.1 7.2v18.7c0 4.2-3.4 7.6-7.6 7.6H760c-4.2 0-7.6-3.4-7.6-7.6v-18.5c0-3.3-2.1-6.2-5.1-7.2-9.3-3.2-17.9-7.8-25.5-13.7-2.4-1.9-5.8-2.2-8.5-0.6l-15.2 8.8c-3.6 2.1-8.3 0.9-10.4-2.8l-15.6-27c-2.1-3.6-0.8-8.3 2.8-10.4l12.2-7.1c3-1.7 4.5-5.2 3.7-8.5-1.7-6.8-2.6-13.8-2.6-21.1 0-4.1 0.3-8.2 0.9-12.2 0.4-3.1-1-6.1-3.7-7.7l-10.5-6.1c-3.6-2.1-4.9-6.8-2.8-10.4l15.6-27c2.1-3.6 6.8-4.9 10.4-2.8l7.8 4.5c2.9 1.7 6.6 1.3 9-1.1 9.1-8.7 20-15.5 32.2-19.7 3.1-1 5.1-4 5.1-7.2v-7.9c0-4.2 3.4-7.6 7.6-7.6H791c4.2 0 7.6 3.4 7.6 7.6v8.1c0 3.2 2 6.1 5.1 7.2 12.1 4.2 22.9 10.9 31.9 19.6 2.4 2.4 6.1 2.8 9.1 1.1l8.2-4.7c3.6-2.1 8.3-0.8 10.4 2.8l15.6 27c2.1 3.6 0.9 8.3-2.8 10.4l-11 6.3c-2.7 1.6-4.1 4.6-3.7 7.7 0.6 3.9 0.8 8 0.8 12.1 0 7.2-0.9 14.1-2.5 20.8-0.8 3.3 0.7 6.7 3.6 8.3l12.8 7.4c3.7 2.1 5 6.8 2.9 10.4z" fill="#0C2B4A" p-id="20031"></path></svg><i id="LiveTool__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_LiveTool_Func(){document.getElementsByClassName("livetool-icon")[0].addEventListener("click",function(){showExRightPanel("直播间工具")})}function initPkg_LiveTool_HandleFunc(){new Ex_WebSocket_UnLogin(rid,e=>{initPkg_LiveTool_LiveNotice_Handle(e),initPkg_LiveTool_Mute_Handle(e),initPkg_LiveTool_Reply_Handle(e),initPkg_LiveTool_Gift_Handle(e),initPkg_LiveTool_Treasure_Handle(e),initPkg_LiveTool_Enter_Handle(e),initPkg_LiveTool_Vote_Handle(e),initPkg_LiveTool_BarrageSpeed_Handle(e),initPkg_LiveTool_RankList_Handle(e),initPkg_LiveTool_BarrageSendCheck_Handle(e)})}function getType(e){return getStrMiddle(e,"type@=","/")}function selectOptionByValue(e,t){var o=document.getElementById(e);for(let e=0;e<o.options.length;e++)if(o.options[e].value==t){o.options[e].selected=!0;break}}let isMuteOn=!1,muteWordList={},muteIdList={},muteIdListShow=[];function initPkg_LiveTool_Mute(){LiveTool_Mute_insertDom(),LiveTool_Mute_insertFunc(),initPkg_Mute_Set()}function LiveTool_Mute_insertDom(){var e=document.createElement("div"),t=(e.className="livetool__cell",e.innerHTML=`
        <div class='livetool__cell_title'>
            <span id='mute__title'>关键词禁言</span>
            <span id='mute__idlist'>名单</span>
            <span id='mute__export'>导出</span>
            <span id='mute__import'>导入</span>
        </div>
        <div class='livetool__cell_option'>
            <div class="onoffswitch livetool__cell_switch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="mute__switch" tabindex="0" checked>
                <label class="onoffswitch-label" for="mute__switch"></label>
            </div>
        </div>
    `+`
        <div class='mute__panel'>
            <select id='mute__select'>
            </select>
            <input style="width:40px;margin-left:10px;" type="button" id="mute__add" value="添加"/>
            <input style="width:40px;margin-left:10px;" type="button" id="mute__del" value="删除"/>
            <input style="width:65px;margin-left:10px;" type="button" id="mute__delmute" value="一键解禁"/>
            <div class="mute__option">
                <label>词：<input id="mute__word" type="text" placeholder="re(式)=结果"/></label>
                <label>次数：<input id="mute__count" type="number" value="5"/></label>
                <label>时间：
                    <select id='mute__time'>
                        <option value="1">1分钟</option>
                        <option value="10">10分钟</option>
                        <option value="30">30分钟</option>
                        <option value="60">1小时</option>
                        <option value="480">8小时</option>
                        <option value="1440">1天</option>
                        <option value="4320">3天</option>
                        <option value="10080">7天</option>
                        <option value="43200">30天</option>
                        <option value="259200">180天</option>
                        <option value="518400">360天</option>
                    </select>
                </label>
            </div>
        </div>
    `,document.getElementsByClassName("livetool")[0]);t.insertBefore(e,t.childNodes[0])}function LiveTool_Mute_insertFunc(){document.getElementById("mute__export").addEventListener("click",()=>{GM_setClipboard(JSON.stringify(muteWordList)),showMessage("【关键词禁言】导出完毕，已复制到剪贴板","success")}),document.getElementById("mute__import").addEventListener("click",()=>{PostbirdAlertBox.prompt({title:"请输入json文本（会覆盖原来的设置）",okBtn:"确定",onConfirm:function(e){var t=document.getElementById("mute__select"),e=JSON.parse(e||"{}")||{};if("object"==typeof e){for(var o in muteWordList={...e},t.options.length=0,muteWordList)muteWordList.hasOwnProperty(o)&&t.options.add(new Option(o,""));saveData_Mute()}showMessage("【关键词禁言】导入完毕","success")},onCancel:function(e){}})}),document.getElementById("mute__idlist").addEventListener("click",()=>{if(0==muteIdListShow.length)showMessage("暂无禁言名单","warning");else{console.log("【禁言名单】");for(let e=0;e<muteIdListShow.length;e++){var t=muteIdListShow[e];console.log("id:【"+t.id+"】 | uid:"+t.uid+" | 弹幕:"+t.barrage+" | 检测次数:"+t.count+" | 禁言时长:"+t.time+"分钟 | 禁言时间:"+t.ts)}showMessage("禁言名单已经输出在控制台，请按F12查看","success")}}),document.getElementById("mute__delmute").addEventListener("click",async()=>{if(0==muteIdListShow.length)showMessage("暂无禁言名单","warning");else if(1==confirm("是否解禁名单上所有的id？")){for(let e=0;e<muteIdListShow.length;e++){var t=muteIdListShow[e];await deleteMuteUser(rid,t.uid)}showMessage("解除禁言完毕","success")}}),document.getElementById("mute__switch").addEventListener("click",()=>{var e=document.getElementById("mute__switch").checked;isMuteOn=1==e,saveData_isMute()}),document.getElementById("mute__title").addEventListener("click",()=>{var e=document.getElementsByClassName("mute__panel")[0];"block"!=e.style.display?((e.style.display="block")==document.getElementsByClassName("reply__panel")[0].style.display&&(document.getElementsByClassName("reply__panel")[0].style.display="none"),"block"==document.getElementsByClassName("enter__panel")[0].style.display&&(document.getElementsByClassName("enter__panel")[0].style.display="none"),"block"==document.getElementsByClassName("gift__panel")[0].style.display&&(document.getElementsByClassName("gift__panel")[0].style.display="none"),"block"==document.getElementsByClassName("vote__panel")[0].style.display&&(document.getElementsByClassName("vote__panel")[0].style.display="none")):e.style.display="none"}),document.getElementById("mute__select").onclick=function(){var e,t,o;0!=this.options.length&&(e=this.options[this.selectedIndex].text,t=muteWordList[e].count,o=muteWordList[e].time,document.getElementById("mute__word").value=e,document.getElementById("mute__count").value=t,selectOptionByValue("mute__time",o))},document.getElementById("mute__add").addEventListener("click",()=>{var e=document.getElementById("mute__time"),t=document.getElementById("mute__select"),o=document.getElementById("mute__word").value,n=document.getElementById("mute__count").value,e=e.options[e.selectedIndex].value;""!=o&&(muteWordList[o]={count:n,time:e},t.options.add(new Option(o,"")),saveData_Mute())}),document.getElementById("mute__del").addEventListener("click",()=>{var e=document.getElementById("mute__select"),t=e.options[e.selectedIndex].text;delete muteWordList[t],e.options.remove(e.selectedIndex),saveData_Mute()})}function saveData_Mute(){var e=muteWordList;localStorage.setItem("ExSave_Mute",JSON.stringify(e))}function saveData_isMute(){let e=[];var t=localStorage.getItem("ExSave_isMute"),t=(e=null!=t&&"rooms"in(t=JSON.parse(t))==1?t.rooms:e).indexOf(rid),t=(1==isMuteOn?-1==t&&e.push(rid):e.splice(t,1),{rooms:e});localStorage.setItem("ExSave_isMute",JSON.stringify(t))}async function initPkg_Mute_Set(){var t=localStorage.getItem("ExSave_Mute");if(null!=t){var e,o=JSON.parse(t),n=(muteWordList=o,document.getElementById("mute__select"));for(e in o)o.hasOwnProperty(e)&&n.options.add(new Option(e,""))}if(null!=(t=localStorage.getItem("ExSave_isMute"))){t=JSON.parse(t);let e=[];"rooms"in t==1&&(e=t.rooms),isMuteOn=-1!=e.indexOf(rid)}else isMuteOn=!1;document.getElementById("mute__switch").checked=isMuteOn}async function initPkg_LiveTool_Mute_Handle(t){if(0!=isMuteOn&&"chatmsg"==getType(t)){var o=getStrMiddle(t,"uid@=","/");if(o!=my_uid){var n,i=getStrMiddle(t,"nn@=","/"),a=getStrMiddle(t,"txt@=","/");let e=!1;for(n in muteWordList)if(""!=n)if(-1!=n.indexOf("re(")?(l=getStrMiddle(n,"re(",")="),1<(d=n.split("=")).length&&(d=d[1],0<(l=new RegExp(l,"g").exec(a)).length)&&(e=l[0]==d)):e=-1!=String(a).indexOf(n),1==e){var r,s,l=muteWordList[n].count,d=muteWordList[n].time;muteIdList.hasOwnProperty(i)?l<=(r=Number(muteIdList[i].count)+1)?(await addMuteUser(rid,i,d),showMessageWindow("禁言信息","【"+i+"】已被禁言"+d+"分钟\n弹幕："+a,()=>{}),s={id:i,uid:o,barrage:a,time:d,count:1,ts:String(dateFormat("yyyy年MM月dd日hh时mm分ss秒 ",new Date))},muteIdListShow.push(s),muteIdList[i].count=0):muteIdList[i].count=String(r):l<=1?(await addMuteUser(rid,i,d),showMessageWindow("禁言信息","【"+i+"】已被禁言"+d+"分钟\n弹幕："+a,()=>{}),s={id:i,uid:o,barrage:a,time:d,count:1,ts:String(dateFormat("yyyy年MM月dd日hh时mm分ss秒 ",new Date))},muteIdListShow.push(s)):muteIdList[i]={uid:o,count:1};break}}}}function addMuteUser(e,o,n){return new Promise(t=>{fetch("https://www.douyu.com/room/roomSetting/addMuteUser",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"ban_nickname="+o+"&room_id="+e+"&ban_time="+n+"&reason=7"}).then(e=>e.json()).then(e=>{t(e)})})}function deleteMuteUser(e,o){return new Promise(t=>{fetch("https://www.douyu.com/room/roomSetting/deleteMuteUser",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"room_id="+e+"&uid="+o}).then(e=>e.json()).then(e=>{t(e)})})}function getRoomAdminStatus(){return new Promise(o=>{fetch("https://www.douyu.com/japi/firepower/apinc/roomAdmin/getStatus?rid="+rid,{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.json()).then(e=>{let t=!1;t="0"==e.error&&"1"==e.data.has,o(t)}).catch(e=>{console.log("请求失败!",e)})})}let rankListData={day:{},week:{},all:{}};function initPkg_LiveTool_RankList(){new DomHook(".layout-Player-rankAll",!1,e=>{0<document.getElementsByClassName("RankAllMain-container").length&&0<Object.keys(rankListData.all).length&&setRankListData("all",document.querySelectorAll(".layout-Player-rankAll .ChatRankWeek-listItem--nickname"))})}function initPkg_LiveTool_RankList_Handle(e){"ranklist"==getType(e)&&((e=stt_deserialize(e)).list_day&&(rankListData.day=getRankListData(e.list_day),setRankListData("day",document.querySelectorAll(".layout-Player-rank .ChatDayRank .ChatRankWeek-listItem--nickname"))),e.list&&(rankListData.week=getRankListData(e.list),setRankListData("week",document.querySelectorAll(".layout-Player-rank .ChatRankWeek .ChatRankWeek-listItem--nickname"))),e.list_all&&(rankListData.all=getRankListData(e.list_all)),setRankListData())}function setRankListData(t,o){if(o)for(let e="week"===t?10:0;e<o.length;e++){var n=o[e],i=n.innerHTML.split("<span")[0],a=n.parentElement,r=rankListData[t][i];a.className.includes("--top")?n.innerHTML=i+`<span class="exRankPoint--top">${r}</span>`:n.innerHTML=i+`<span class="exRankPoint">${r}</span>`}}function getRankListData(t){var o={};for(let e=0;e<t.length;e++){var n=t[e];o[n.nickname]=Number(n.gold)/100}return o}let isReplyOn=!1,replyWordList={},isReplyCD=!1,replyCd=0;function initPkg_LiveTool_Reply(){LiveTool_Reply_insertDom(),LiveTool_Reply_insertFunc(),initPkg_Reply_Set()}function LiveTool_Reply_insertDom(){var e=document.createElement("div"),t=(e.className="livetool__cell",e.innerHTML=`
        <div class='livetool__cell_title'>
            <span id='reply__title'>关键词回复</span>
            <span id='reply__export'>导出</span>
            <span id='reply__import'>导入</span>
        </div>
        <div class='livetool__cell_option'>
            <div class="onoffswitch livetool__cell_switch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="reply__switch" tabindex="0" checked>
                <label class="onoffswitch-label" for="reply__switch"></label>
            </div>
        </div>
    `+`
        <div class='reply__panel'>
            <select id='reply__select'>
            </select>
            <input style="width:40px;margin-left:10px;" type="button" id="reply__add" value="添加"/>
            <input style="width:40px;margin-left:10px;" type="button" id="reply__del" value="删除"/>
            <label style="margin-left:5px">CD：<input id="reply__time" type="text" placeholder="秒" /></label>
            <div class="reply__option">
                <label>词：<input id="reply__word" type="text" placeholder="re(式)=结果"/></label>
                <label>回复：<input id="reply__reply" type="text" placeholder="<id>用户名 <txt>弹幕"/></label>
            </div>
        </div>
    `,document.getElementsByClassName("livetool")[0]);t.insertBefore(e,t.childNodes[0])}function LiveTool_Reply_insertFunc(){document.getElementById("reply__export").addEventListener("click",()=>{GM_setClipboard(JSON.stringify(replyWordList)),showMessage("【关键词回复】导出完毕，已复制到剪贴板","success")}),document.getElementById("reply__import").addEventListener("click",()=>{PostbirdAlertBox.prompt({title:"请输入json文本（会覆盖原来的设置）",okBtn:"确定",onConfirm:function(e){var t=document.getElementById("reply__select"),e=JSON.parse(e||"{}")||{};if("object"==typeof e){for(var o in replyWordList={...e},t.options.length=0,replyWordList)replyWordList.hasOwnProperty(o)&&t.options.add(new Option(o,""));saveData_Reply()}showMessage("【关键词回复】导入完毕","success")},onCancel:function(e){}})}),document.getElementById("reply__switch").addEventListener("click",()=>{replyCd=String(document.getElementById("reply__time").value)||0;var e=document.getElementById("reply__switch").checked;isReplyOn=1==e,saveData_isReply(),saveData_ReplyCd()}),document.getElementById("reply__title").addEventListener("click",()=>{var e=document.getElementsByClassName("reply__panel")[0];"block"!=e.style.display?((e.style.display="block")==document.getElementsByClassName("mute__panel")[0].style.display&&(document.getElementsByClassName("mute__panel")[0].style.display="none"),"block"==document.getElementsByClassName("enter__panel")[0].style.display&&(document.getElementsByClassName("enter__panel")[0].style.display="none"),"block"==document.getElementsByClassName("gift__panel")[0].style.display&&(document.getElementsByClassName("gift__panel")[0].style.display="none"),"block"==document.getElementsByClassName("vote__panel")[0].style.display&&(document.getElementsByClassName("vote__panel")[0].style.display="none")):e.style.display="none"}),document.getElementById("reply__select").onclick=function(){var e,t;0!=this.options.length&&(e=this.options[this.selectedIndex].text,t=replyWordList[e].reply,document.getElementById("reply__word").value=e,document.getElementById("reply__reply").value=t)},document.getElementById("reply__add").addEventListener("click",()=>{var e=document.getElementById("reply__select"),t=document.getElementById("reply__word").value,o=document.getElementById("reply__reply").value;""!=t&&(replyWordList[t]={reply:o},e.options.add(new Option(t,"")),saveData_Reply())}),document.getElementById("reply__del").addEventListener("click",()=>{var e=document.getElementById("reply__select"),t=e.options[e.selectedIndex].text;delete replyWordList[t],e.options.remove(e.selectedIndex),saveData_Reply()})}function saveData_Reply(){var e=replyWordList;localStorage.setItem("ExSave_Reply",JSON.stringify(e))}function saveData_ReplyCd(){var e=document.getElementById("reply__time").value;localStorage.setItem("ExSave_ReplyCd",e)}function saveData_isReply(){let e=[];var t=localStorage.getItem("ExSave_isReply"),t=(e=null!=t&&"rooms"in(t=JSON.parse(t))==1?t.rooms:e).indexOf(rid),t=(1==isReplyOn?-1==t&&e.push(rid):e.splice(t,1),{rooms:e});localStorage.setItem("ExSave_isReply",JSON.stringify(t))}function initPkg_Reply_Set(){var t=localStorage.getItem("ExSave_Reply");if(null!=t){var e,o=JSON.parse(t),n=(replyWordList=o,document.getElementById("reply__select"));for(e in o)o.hasOwnProperty(e)&&n.options.add(new Option(e,""))}if(null!=(t=localStorage.getItem("ExSave_isReply"))){var i=JSON.parse(t);let e=[];"rooms"in i==1&&(e=i.rooms),isReplyOn=-1!=e.indexOf(rid)}else isReplyOn=!1;document.getElementById("reply__switch").checked=isReplyOn,null!=(t=localStorage.getItem("ExSave_ReplyCd"))&&(document.getElementById("reply__time").value=t)}function initPkg_LiveTool_Reply_Handle(t){if(0!=isReplyOn&&"chatmsg"==getType(t)){var e=getStrMiddle(t,"uid@=","/");if(e!=my_uid){var o,n,i=getStrMiddle(t,"nn@=","/"),a=getStrMiddle(t,"txt@=","/");let e=!1;for(o in replyWordList)if(""!=o)if(-1!=o.indexOf("re(")?(r=getStrMiddle(o,"re(",")="),1<(n=o.split("=")).length&&(n=n[1],0<(r=new RegExp(r,"g").exec(a)).length)&&(e=r[0]==n)):e=-1!=String(a).indexOf(o),1==e){var r=replyWordList[o].reply,r=String(r).replace(/<id>/g,i);r=String(r).replace(/<txt>/g,a),0==isReplyCD&&(sendBarrage(r),0<replyCd)&&(isReplyCD=!0,setTimeout(()=>{isReplyCD=!1},1e3*replyCd));break}}}}var treasureNum=0;function initPkg_LiveTool_Treasure(){LiveTool_Treasure_insertModal()}function LiveTool_Treasure_insertModal(){var e=document.createElement("div"),t=(e.className="livetool__Treasure",e.id="Ex_Geetest",document.getElementsByClassName("Barrage-main")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_LiveTool_Treasure_Handle(i){if(0!=isGetTreasure&&"tsboxb"==getType(i)){var a=getStrMiddle(i,"ot@=","/");let e=getStrMiddle(i,"rpid@=","/"),t=getStrMiddle(i,"rid@=","/"),o=getCookieValue("dy_did");i=1e3*(Number(a)-Math.floor(Date.now()/1e3))+getTreasureDelay(),a=(treasureNum++,document.createElement("div"));let n="Ex_Geetest_no"+String(treasureNum);a.id=n,document.getElementById("Ex_Geetest").appendChild(a),setTimeout(()=>{getTreasure(t,e,o,n)},i)}}function getTreasure(a,r,s,l){GM_xmlhttpRequest({method:"POST",url:"https://pcapi.douyucdn.cn/h5nc/member/getRedPacket?token="+dyToken,data:"room_id="+a+"&package_room_id="+a+"&device_id="+s+"&packerid="+r+"&version=1",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(t){t=t.response;if("-1"==t.data.code&&"0"!=t.data.validate){var e=JSON.parse(t.data.geetest.validate_str),o=e.success,n=e.challenge,e=e.gt,i=getTreasureSkey();""!=i?getTreasure_Auto(i,e,n,window.location.href,s,r,a):null!=unsafeWindow.initGeetest?unsafeWindow.initGeetest({gt:e,challenge:n,offline:!o,product:"float"},n=>{let i=document.getElementById(l);n.appendTo("#"+l),n.onSuccess(()=>{var e=n.getValidate(),t=e.geetest_challenge,o=e.geetest_seccode,e=e.geetest_validate,t="room_id="+a+"&package_room_id="+a+"&device_id="+s+"&packerid="+r+"&version=1"+"&geetest_challenge="+t+"&geetest_validate="+e+"&geetest_seccode="+encodeURIComponent(o);GM_xmlhttpRequest({method:"POST",url:"https://pcapi.douyucdn.cn/h5nc/member/getRedPacket?token="+dyToken,data:t,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;let t="";""!=(t=""==e.data.prop_id?"鱼丸x"+e.data.silver:e.data.prop_name+"x"+e.data.prop_count)&&showMessage("【宝箱】获得"+t,"success"),null!=i&&i.remove()}})})}):showMessage("自动抢宝箱初始化失败","error")}else if("领取失败"!=t.data.msg&&"验证码不正确"!=t.data.msg){let e="";""!=(e=""==t.data.prop_id?"鱼丸x"+t.data.silver:t.data.prop_name+"x"+t.data.prop_count)&&showMessage("【宝箱】获得"+e,"success")}else showMessage("【宝箱】领取失败","error")}})}function getTreasure_Verify(e,t,o,n){var i="room_id="+roomid+"&package_room_id="+roomid+"&device_id="+deviceid+"&packerid="+rpid+"&version=1";i+="&geetest_challenge="+e+"&geetest_validate="+t+"&geetest_seccode="+encodeURIComponent(o),GM_xmlhttpRequest({method:"POST",url:"https://pcapi.douyucdn.cn/h5nc/member/getRedPacket?token="+dyToken,data:i,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e.response;null!=document.getElementById(n)&&document.getElementById(n).remove()}})}function getTreasure_Auto(e,t,o,n,i,a,r){e=`appkey=${String(e).trim()}&gt=${t}&challenge=${o}&referer=${n}&ip=&host=&sharecode=6fb45916efd144e592f3dbd905b618a5`;GM_xmlhttpRequest({method:"POST",url:"http://api.rrocr.com/api/recognize.html",data:e,timeout:6e4,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var t,e=e.response;"-1"==e.status?showMessage("【宝箱】自动识别失败","error"):(t=(t="room_id="+r+"&package_room_id="+r+"&device_id="+i+"&packerid="+a+"&version=1")+"&geetest_challenge="+e.data.challenge+"&geetest_validate="+e.data.validate+"&geetest_seccode="+e.data.validate+"%7Cjordan",GM_xmlhttpRequest({method:"POST",url:"https://pcapi.douyucdn.cn/h5nc/member/getRedPacket?token="+dyToken,data:t,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(t){t=t.response;if("-1"==t.data.code)showMessage("【宝箱】验证码不正确","error");else{let e="";""!=(e=""==t.data.prop_id?"鱼丸x"+t.data.silver:t.data.prop_name+"x"+t.data.prop_count)&&showMessage("【宝箱】获得"+e,"success")}}}))}})}let isVoteOn=!1,voteList={},voteNameList={},voteWordList={},voteTotalNum=0,timer_Vote,isRepeat=!1;function initPkg_LiveTool_Vote(){LiveTool_Vote_insertDom(),LiveTool_Vote_insertDom_VotePanel(),LiveTool_Vote_insertFunc(),initPkg_Vote_Set()}function LiveTool_Vote_insertDom(){var e=document.createElement("div"),t=(e.className="livetool__cell",e.innerHTML=`
        <div class='livetool__cell_title'>
            <span id='vote__title'>弹幕投票</span><span id='vote__show-result'>面板</span>
        </div>
        <div class='livetool__cell_option'>
            <label style="margin-right:10px;"><input id="vote__repeat" type="checkbox">重复投票</label>
            <div class="onoffswitch livetool__cell_switch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="vote__switch" tabindex="0" checked>
                <label class="onoffswitch-label" for="vote__switch"></label>
            </div>
        </div>
    `+`
        <div class='vote__panel'>
            <select id='vote__select'>
            </select>
            <input style="width:40px;margin-left:10px;" type="button" id="vote__add" value="添加"/>
            <input style="width:40px;margin-left:10px;" type="button" id="vote__del" value="删除"/>
            <label style="margin-left:5px">限时：<input id="vote__time" type="text" placeholder="秒" /></label>
            <div class="vote__option">
                <label>主题：<input id="vote__theme" type="text"/></label>
                <label>选项：<input id="vote__options" type="text" placeholder="用空格隔开每个选项"/></label>
            </div>
        </div>
    `,document.getElementsByClassName("livetool")[0]);t.insertBefore(e,t.childNodes[0])}function LiveTool_Vote_insertFunc(){document.getElementById("vote__switch").addEventListener("click",()=>{var e=document.getElementById("vote__switch").checked,t=document.getElementById("vote__select"),t=t.options[t.selectedIndex].text,o=voteList[t].options,n=voteList[t].time;if(1==e){var i=String(o).split(" ");for(let e=0;e<i.length;e++)voteWordList[i[e]]={num:0,index:e};document.getElementById("vote__repeat").disabled=!0,voteTotalNum=0,initVoteOptionsPanel(t,o),isRepeat=document.getElementById("vote__repeat").checked,isVoteOn=!0,timer_Vote=setTimeout(()=>{voteNameList={},voteWordList={},isVoteOn=!1,document.getElementById("vote__repeat").disabled=!1,document.getElementById("vote__switch").checked=!1},1e3*n),document.getElementsByClassName("vote__result")[0].style.display="block"}else clearTimeout(timer_Vote),voteNameList={},voteWordList={},isVoteOn=!1,document.getElementById("vote__repeat").disabled=!1}),document.getElementById("vote__title").addEventListener("click",()=>{var e=document.getElementsByClassName("vote__panel")[0];"block"!=e.style.display?((e.style.display="block")==document.getElementsByClassName("mute__panel")[0].style.display&&(document.getElementsByClassName("mute__panel")[0].style.display="none"),"block"==document.getElementsByClassName("enter__panel")[0].style.display&&(document.getElementsByClassName("enter__panel")[0].style.display="none"),"block"==document.getElementsByClassName("gift__panel")[0].style.display&&(document.getElementsByClassName("gift__panel")[0].style.display="none"),"block"==document.getElementsByClassName("reply__panel")[0].style.display&&(document.getElementsByClassName("reply__panel")[0].style.display="none")):e.style.display="none"}),document.getElementById("vote__select").onclick=function(){var e,t,o;0!=this.options.length&&(e=this.options[this.selectedIndex].text,t=voteList[e].options,o=voteList[e].time,document.getElementById("vote__theme").value=e,document.getElementById("vote__options").value=t,document.getElementById("vote__time").value=o)},document.getElementById("vote__add").addEventListener("click",()=>{var e=document.getElementById("vote__select"),t=document.getElementById("vote__theme").value,o=document.getElementById("vote__options").value,n=document.getElementById("vote__time").value;""!=t&&""!=o&&""!=n&&(voteList[t]={options:o,time:n},e.options.add(new Option(t,"")),saveDate_Vote())}),document.getElementById("vote__del").addEventListener("click",()=>{var e=document.getElementById("vote__select"),t=e.options[e.selectedIndex].text;delete voteList[t],e.options.remove(e.selectedIndex),saveDate_Vote()}),document.getElementById("vote__show-result").addEventListener("click",()=>{var e=document.getElementsByClassName("vote__result")[0];"block"!=e.style.display?e.style.display="block":e.style.display="none"})}function initPkg_Vote_Set(){document.getElementById("vote__switch").checked=isReplyOn;var e=localStorage.getItem("ExSave_Vote");if(null!=e){var t,o=JSON.parse(e),n=(voteList=o,document.getElementById("vote__select"));for(t in o)o.hasOwnProperty(t)&&n.options.add(new Option(t,""))}}function initPkg_LiveTool_Vote_Handle(e){var t;0!=isVoteOn&&"chatmsg"==getType(e)&&(t=getStrMiddle(e,"uid@=","/"),e=getStrMiddle(e,"txt@=","/"),isRepeat?Object(voteWordList).hasOwnProperty(e)&&(voteWordList[e].num++,voteTotalNum++,changeOptionsData()):0==Object(voteNameList).hasOwnProperty(t)&&Object(voteWordList).hasOwnProperty(e)&&(voteNameList[t]=0,voteWordList[e].num++,voteTotalNum++,changeOptionsData()))}function saveDate_Vote(){var e=voteList;localStorage.setItem("ExSave_Vote",JSON.stringify(e))}function LiveTool_Vote_insertDom_VotePanel(){var e=document.createElement("div"),t=(e.className="vote__result",e.innerHTML=`
        <div id="vote__result-theme">投票主题</div>
        <div id="vote__result-close">X</div>
        <div id="vote__result-options"></div>
    `,document.getElementsByClassName("layout-Player-main")[0]);t.insertBefore(e,t.childNodes[0]);let a=document.getElementsByClassName("vote__result")[0];a.onmousedown=function(e){e.stopPropagation();let t=e.clientX-a.offsetLeft,o=e.clientY-a.offsetTop,n,i;document.onmousemove=function(e){e.stopPropagation(),n=e.clientX-t,i=e.clientY-o,a.style.left=n+"px",a.style.top=i+"px"},document.onmouseup=function(e){e.stopPropagation(),document.onmousemove=null,document.onmouseup=null}},document.getElementById("vote__result-close").addEventListener("click",()=>{document.getElementsByClassName("vote__result")[0].style.display="none"})}function initVoteOptionsPanel(e,t){document.getElementById("vote__result-theme").innerText=e,document.getElementById("vote__result-options").innerHTML="",setVoteOptionsDom(t)}function setVoteOptionsDom(e){var t=e.split(" "),o=document.getElementById("vote__result-options");for(let e=0;e<t.length;e++){var n=document.createElement("div");n.className="vote__option-wrap",n.innerHTML=`
            <div class="vote__option-choice">${t[e]}</div>
            <div class="vote__option-num"></div>
            <div class="vote__progress">
                <div class="vote__progress-bar"></div>
            </div>
        `,o.appendChild(n)}}function changeOptionsData(){for(const i in voteWordList){var e=voteWordList[i],t=document.getElementsByClassName("vote__option-num")[e.index],o=document.getElementsByClassName("vote__progress-bar")[e.index],n=String(Number(100*Number(e.num/voteTotalNum)).toFixed(1))+"%";t.innerText=e.num+`（${n}）`,o.style.width=n}}let myFansBadgeList=[],lotteryHasNoticed={},lotteryHTML="",isLotteryNotice=!1,timer_lottery=0;function initPkg_Lottery(){setFansBadgeList(),initPkg_Lottery_Dom(),initPkg_Lottery_Func(),Lottery_Set(),timer_lottery=setInterval(()=>{initPkg_Lottery_Timer()},6e4)}function initPkg_Lottery_Dom(){Lottery_insertModal(),Lottery_insertIcon()}function Lottery_insertIcon(){var e=document.createElement("div"),t=(e.className="ex-lottery",e.innerHTML='<a class="ex-panel__icon" title="全站抽奖信息"><svg style="display:block;" t="1636332741708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19181" width="32" height="32"><path d="M508.858182 986.042182c-261.748364 0-473.925818-212.177455-473.925818-473.925818S247.109818 38.190545 508.858182 38.190545s473.925818 212.177455 473.925818 473.925819-212.200727 473.925818-473.925818 473.925818m0-981.690182C228.421818 4.352 1.093818 231.703273 1.093818 512.116364s227.351273 507.764364 507.764364 507.764363c280.413091 0 507.787636-227.351273 507.787636-507.764363S789.271273 4.352 508.858182 4.352" fill="#FF4517" p-id="19182"></path><path d="M322.536727 512.302545l0.023273-1.326545-313.064727-1.931636c0 1.093818-0.093091 2.164364-0.093091 3.281454 0 90.88 24.785455 175.918545 67.84 248.925091l270.173091-155.997091a185.274182 185.274182 0 0 1-24.878546-92.951273zM416.791273 350.440727L264.029091 82.013091A492.986182 492.986182 0 0 0 77.498182 262.981818l270.173091 155.997091a186.717091 186.717091 0 0 1 69.12-68.538182zM602.856727 351.697455l151.831273-259.211637A488.261818 488.261818 0 0 0 508.718545 21.690182l0.023273 304.453818c34.350545 0 66.513455 9.355636 94.114909 25.553455zM258.536727 939.450182a488.471273 488.471273 0 0 0 241.710546 63.674182c2.839273 0 5.632-0.139636 8.448-0.186182V698.507636a185.064727 185.064727 0 0 1-94.068364-25.553454l-156.090182 266.496zM927.325091 270.452364l-257.466182 148.666181a185.204364 185.204364 0 0 1 25.041455 93.207273l-0.046546 1.070546 296.168727 1.838545c0.023273-0.977455 0.069818-1.931636 0.069819-2.909091 0-87.994182-23.249455-170.496-63.767273-241.873454zM600.855273 674.094545l148.573091 261.073455a492.776727 492.776727 0 0 0 178.106181-181.387636l-257.466181-148.642909a187.042909 187.042909 0 0 1-69.213091 68.95709z" fill="#FF4517" p-id="19183"></path><path d="M644.142545 512.302545a135.400727 135.400727 0 0 0-135.424-135.400727l-84.619636-160.791273 20.642909 173.824c-42.658909 22.784-71.400727 70.609455-71.400727 122.368a135.447273 135.447273 0 0 0 270.801454 0z m-133.492363 70.097455a68.491636 68.491636 0 1 1 0.023273-136.96 68.491636 68.491636 0 0 1-0.023273 136.96z" fill="#FF4517" p-id="19184"></path></svg><i id="lottery__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function Lottery_insertModal(){var e=document.createElement("div"),t=(e.className="exlottery",e.innerHTML=`
        <div class="lottery__func">
            <div id="lottery-refresh">
                <svg t="1636115506027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2454" width="16" height="16"><path d="M927.999436 531.028522a31.998984 31.998984 0 0 0-31.998984 31.998984c0 51.852948-10.147341 102.138098-30.163865 149.461048a385.47252 385.47252 0 0 1-204.377345 204.377345c-47.32295 20.016524-97.6081 30.163865-149.461048 30.163865s-102.138098-10.147341-149.461048-30.163865a385.47252 385.47252 0 0 1-204.377345-204.377345c-20.016524-47.32295-30.163865-97.6081-30.163865-149.461048s10.147341-102.138098 30.163865-149.461048a385.47252 385.47252 0 0 1 204.377345-204.377345c47.32295-20.016524 97.6081-30.163865 149.461048-30.163865a387.379888 387.379888 0 0 1 59.193424 4.533611l-56.538282 22.035878A31.998984 31.998984 0 1 0 537.892156 265.232491l137.041483-53.402685a31.998984 31.998984 0 0 0 18.195855-41.434674L639.723197 33.357261a31.998984 31.998984 0 1 0-59.630529 23.23882l26.695923 68.502679a449.969005 449.969005 0 0 0-94.786785-10.060642c-60.465003 0-119.138236 11.8488-174.390489 35.217667a449.214005 449.214005 0 0 0-238.388457 238.388457c-23.361643 55.252253-35.22128 113.925486-35.22128 174.390489s11.8488 119.138236 35.217668 174.390489a449.214005 449.214005 0 0 0 238.388457 238.388457c55.252253 23.368867 113.925486 35.217667 174.390489 35.217667s119.138236-11.8488 174.390489-35.217667A449.210393 449.210393 0 0 0 924.784365 737.42522c23.368867-55.270316 35.217667-113.925486 35.217667-174.390489a31.998984 31.998984 0 0 0-32.002596-32.006209z" fill="" p-id="2455"></path></svg>
            </div>
            <div class="lottery__notice">
                <label class="lottery__notice"><input class="lottery__notice" id="lottery-notice" type="checkbox">开启提醒</label>
            </div>
        </div>
        <div class="lottery__nodata">暂无数据</div>
        <div class="lottery__wrap"></div>
    `,document.getElementsByClassName("layout-Player-chat")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Lottery_Func(){let t=document.getElementById("lottery-notice");document.getElementsByClassName("ex-lottery")[0].addEventListener("click",()=>{showExRightPanel("全站抽奖信息");var e=document.getElementsByClassName("lottery__wrap")[0];e&&(e.innerHTML=lotteryHTML)}),document.getElementById("lottery-refresh").addEventListener("click",debounce(()=>{initPkg_Lottery_Timer()},3e3)),t.addEventListener("click",()=>{var e=t.checked;isLotteryNotice=1==e,saveData_Lottery()})}async function initPkg_Lottery_Timer(){let t="";var o=await getExLotteryList();if(o.data.list){for(let e=0;e<o.data.list.length;e++){var n,i,a,r,s,l,d=o.data.list[e];0===d.status&&(a="command_content"in(i=(n=await getExLotteryInfo(d.room_id)).data.join_condition)?"发送弹幕":`赠送 ${i.gift_name}（${i.gift_price}）x`+i.gift_num,r=-1==(r=getTimeDiff(1e3*(Number(n.data.start_at)+Number(n.data.join_condition.expire_time)),(new Date).getTime()))?"已结束":"距结束："+r,(s=-1!==myFansBadgeList.indexOf(String(d.room_id))||i.lottery_range<=1)&&isLotteryNotice&&((l=n.data.prize_name+"|"+n.data.start_at)in lotteryHasNoticed||(lotteryHasNoticed[l]=1,showMessage(`<a style="font-size:14px;border:none;" target="_blank" href="https://www.douyu.com/${d.room_id}">【${n.data.prize_name}x${n.data.prize_num}】${a}</a>`,"special",{timeout:100}))),t+=`
            <a class="lottery__a" href="https://www.douyu.com/${d.room_id}" target="_blank">
                <div class="lottery__item">
                    <div class="lottery__img">
                        <div class="lottery__anchor">${d.anchor_name}</div>
                        <img loading="lazy" src="${d.verticalSrc}"/>
                        <div class="lottery__expireTime">${r}</div>
                    </div>
                    <div class="lottery__info">
                        <div class="lottery__prize">${n.data.prize_name}x${n.data.prize_num}</div>
                        <div class="lottery__jointext">${a}</div>
                        <div style="color:${s?"#64ce83":"#e74c3c"}" class="lottery__condition">${getJoinCondition(i)}</div>
                    </div>
                </div>
            </a>
        `)}var e=document.getElementsByClassName("lottery__nodata")[0],e=(""!==t.trim()?e.style.display="none":e.style.display="block",lotteryHTML=t,document.getElementsByClassName("lottery__wrap")[0]);e&&(e.innerHTML=lotteryHTML)}}function getJoinCondition(e){let t="";switch(e.lottery_range){case 0:t="所有人可参与";break;case 1:t="关注主播";break;case 2:t="成为粉丝";break;case 3:t="关注主播+成为粉丝"}return t}function getExLotteryList(){return new Promise((t,o)=>{GM_xmlhttpRequest({method:"GET",url:"https://www.douyu.com/lapi/interact/lottery/getHallList",responseType:"json",onload:e=>{e=e.response;t(e)},onerror:e=>{o(e)}})})}function getExLotteryInfo(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/member/lottery/activity_info?room_id="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{o(e)})})}async function setFansBadgeList(){var t=[],e=await fetch("https://www.douyu.com/member/cp/getFansBadgeList",{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.text()).catch(e=>{console.log("请求失败!",e)}),o=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByClassName("fans-badge-list")[0].lastElementChild,n=o.children.length;for(let e=0;e<n;e++){var i=o.children[e].getAttribute("data-fans-room");t.push(i)}myFansBadgeList=t}function saveData_Lottery(){var e={isNotice:isLotteryNotice};localStorage.setItem("ExSave_Lottery",JSON.stringify(e))}function Lottery_Set(){var e=localStorage.getItem("ExSave_Lottery");null!=e&&1==JSON.parse(e).isNotice&&document.getElementById("lottery-notice").click()}function initPkg_Menu(){GM_registerMenuCommand("检查更新",()=>{Update_checkVersion(!0)})}function initPkg_MetaTools(){}function removeAds(){}function initPkg_MiniProgram(){initPkg_MiniProgram_Dom(),initPkg_MiniProgram_Func()}function initPkg_MiniProgram_Dom(){MiniProgram_insertIcon(),MiniProgram_insertModal()}function MiniProgram_insertIcon(){var e=document.createElement("div"),t=(e.className="MiniProgram",e.innerHTML='<a class="ex-panel__icon" title="移动端"><svg style="display:block" t="1605503862776" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4759" width="32" height="32"><path d="M512.153785 1024a511.692431 511.692431 0 1 1 512.102523-511.692431 511.897477 511.897477 0 0 1-512.102523 511.692431z m207.967961-742.420505a163.21666 163.21666 0 0 0-246.670404 97.089308c0 29.372847 0 242.46696-2.306769 271.686023a86.529435 86.529435 0 0 1-134.048858 25.630757c-80.173008-77.609932 35.88306-125.898278 54.542251-135.279135a44.392471 44.392471 0 0 0-54.542251-67.665199 176.185823 176.185823 0 0 0-104.522227 130.768122 164.395675 164.395675 0 0 0 96.627954 153.37445c153.169403 51.671606 227.242291-70.894674 226.063276-108.264318V383.026031a82.428514 82.428514 0 0 1 156.603924 2.35803c11.790148 56.387665-76.892271 97.089307-74.790548 114.723268-16.454946 59.822187 54.542251 54.132159 54.54225 54.132158 207.762915-168.189027 28.501402-272.659992 28.501402-272.659992z" fill="#59B540" p-id="4760"></path></svg><i id="MiniProgram__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function MiniProgram_insertModal(){var e=document.createElement("div"),t=(e.className="miniprogram__panel",e.innerHTML=`
		<div class="miniprogram__wrap">
			<div>DouyuEx移动端上线啦</div><div>微信扫码或<b>搜索DouyuEx</b></div><div>↓ 即刻体验 ↓</div>
			<img style="width: 200px;height: 200px;" src="https://qianjiachun.github.io/DouyuEx/DouyuExQRCode.jpg">
		</div>
		<div class="miniprogram__triangle"></div>
    `,document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_MiniProgram_Func(){document.getElementsByClassName("MiniProgram")[0].addEventListener("click",function(){var e=document.getElementsByClassName("miniprogram__panel")[0];"block"!=e.style.display?e.style.display="block":e.style.display="none"})}function initPkg_Monitor(){initPkg_Monitor_Dom(),initPkg_Monitor_Func()}function initPkg_Monitor_Dom(){Monitor_insertIcon()}function Monitor_insertIcon(){var e=document.createElement("div"),t=(e.className="ex-monitor",e.innerHTML='<a class="ex-panel__icon" title="在线弹幕助手"><svg style="display:block;" t="1638235744961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="69800" width="32" height="32"><path d="M426.666667 106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h512a21.333333 21.333333 0 0 1 0 42.666667H448a21.333333 21.333333 0 0 1-21.333333-21.333333z m533.333333 789.333333H448a21.333333 21.333333 0 0 0 0 42.666667h512a21.333333 21.333333 0 0 0 0-42.666667z m0-554.666667H448a21.333333 21.333333 0 0 0 0 42.666667h512a21.333333 21.333333 0 0 0 0-42.666667z m0 298.666667H448a21.333333 21.333333 0 0 0 0 42.666667h512a21.333333 21.333333 0 0 0 0-42.666667zM245.333333 42.666667H96a53.393333 53.393333 0 0 0-53.333333 53.333333v149.333333a53.393333 53.393333 0 0 0 53.333333 53.333334h149.333333a53.393333 53.393333 0 0 0 53.333334-53.333334V96a53.393333 53.393333 0 0 0-53.333334-53.333333z m0 341.333333H96a53.393333 53.393333 0 0 0-53.333333 53.333333v149.333334a53.393333 53.393333 0 0 0 53.333333 53.333333h149.333333a53.393333 53.393333 0 0 0 53.333334-53.333333V437.333333a53.393333 53.393333 0 0 0-53.333334-53.333333z m0 341.333333H96a53.393333 53.393333 0 0 0-53.333333 53.333334v149.333333a53.393333 53.393333 0 0 0 53.333333 53.333333h149.333333a53.393333 53.393333 0 0 0 53.333334-53.333333v-149.333333a53.393333 53.393333 0 0 0-53.333334-53.333334z" fill="#13227a" p-id="69801"></path></svg><i id="Monitor__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Monitor_Func(){document.getElementsByClassName("ex-monitor")[0].addEventListener("click",function(){openPage("https://www.douyuex.com/"+String(rid))})}let totalMonthCost=0,typeNum=0,typeCount=0,svg_see='<svg t="1619141525444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4635" width="16" height="16" style="/* display: inline-block; */"><path d="M1009.592 531.212C863.184 730.624 696.96 832 512 832c-184.96 0-351.184-101.376-497.592-300.788C10.384 525.864 8 519.212 8 512s2.384-13.864 6.408-19.212C160.816 293.376 327.04 192 512 192c184.96 0 351.184 101.376 497.592 300.788 4.024 5.348 6.408 12 6.408 19.212s-2.384 13.864-6.408 19.212zM512 768c156.864 0 300.54-84.332 432.012-256C812.54 340.332 668.864 256 512 256c-156.864 0-300.54 84.332-432.012 256C211.46 683.668 355.136 768 512 768z m0-64c-106.04 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z m0-64c70.692 0 128-57.308 128-128s-57.308-128-128-128-128 57.308-128 128 57.308 128 128 128z" p-id="4636" fill="#707070"></path></svg>',svg_unsee='<svg t="1619143157694" class="icon" viewBox="0 0 1186 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1733" width="16" height="16"><path d="M591.707784 915.740462A642.870487 642.870487 0 0 1 2.965954 526.459025a39.298888 39.298888 0 0 1 0-28.91805 632.489649 632.489649 0 0 1 584.292899-388.539948h8.897862a630.265183 630.265183 0 0 1 584.292899 388.539948 39.298888 39.298888 0 0 1 0 28.91805 637.680068 637.680068 0 0 1-336.635757 337.377245 646.577929 646.577929 0 0 1-252.106073 51.904192zM77.856287 512.370744a565.755688 565.755688 0 0 0 1026.961505 0 556.116338 556.116338 0 0 0-508.661077-329.220872h-8.897862a556.857827 556.857827 0 0 0-509.402566 329.220872z" p-id="1734" fill="#707070"></path><path d="M590.966296 732.592814a218.739093 218.739093 0 1 1 222.446535-218.739093 218.739093 218.739093 0 0 1-222.446535 218.739093z m0-362.587852a144.590248 144.590248 0 1 0 148.29769 143.848759 148.29769 148.29769 0 0 0-148.29769-143.848759z" p-id="1735" fill="#707070"></path><path d="M1137.443284 1023.997776a37.074423 37.074423 0 0 1-24.469119-8.897862L20.761677 65.253208A37.074423 37.074423 0 0 1 68.958426 8.900086l1092.212489 946.880752a37.074423 37.074423 0 0 1 0 52.64568 35.591446 35.591446 0 0 1-23.727631 15.571258z" p-id="1736" fill="#707070"></path></svg>',seeStatus=1;function initPkg_MonthCost(){initPkg_MonthCost_Dom(),initPkg_MonthCost_Func(),1==(seeStatus=MonthCost_getSeeStatus())?(document.getElementsByClassName("monthcost__icon")[0].innerHTML=svg_see,MonthCost_updateCost()):document.getElementsByClassName("monthcost__icon")[0].innerHTML=svg_unsee}function initPkg_MonthCost_Dom(){MonthCost_insertIcon()}function MonthCost_insertIcon(){var e=document.createElement("span"),t=(e.className="month-cost",e.innerHTML=`
	本月已消费 <span id="monthcost__money">***</span> 元
	<span class="monthcost__icon"></span>
	`,e.title="数据每日更新，根据个人中心消费数据统计",document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_MonthCost_Func(){document.getElementsByClassName("monthcost__icon")[0].addEventListener("click",()=>{1==seeStatus?(seeStatus=0,document.getElementById("monthcost__money").innerText="***",document.getElementsByClassName("monthcost__icon")[0].innerHTML=svg_unsee):(seeStatus=1,document.getElementsByClassName("monthcost__icon")[0].innerHTML=svg_see,MonthCost_updateCost()),MonthCost_saveSeeStatus()})}function MonthCost_saveSeeStatus(){localStorage.setItem("ExSave_MonthCost_SeeStatus",seeStatus)}function MonthCost_getSeeStatus(){let e=localStorage.getItem("ExSave_MonthCost_SeeStatus");return e=null==e?1:e}function MonthCost_queryData(e){return new Promise(t=>{fetch(e,{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.json()).then(e=>{t(e)})})}async function getMonthCost(){totalMonthCost=0;var t=await MonthCost_queryData("https://www.douyu.com/member/cp/getYcConsumeTypeList");if(typeNum=t.data.length-1,0==t.code)for(let e=1;e<t.data.length;e++)calcMonthCost(t.data[e].type)}async function calcMonthCost(e){var t,[o,n]=getMonthTimeRange();let i="",a=0,r=1,s=0;do{if("0"!=(t=await MonthCost_queryData("https://www.douyu.com/member/cp/getYcTransactionList?"+`firstId=&lastId=${i}&propType=0&beginTime=${o}&endTime=${n}&type=${e}&pageNum=${r}&pageSize=50`)).code){console.log(t.msg);break}var l=t.data.details.length;if(0==l)break;i=t.data.details[l-1].id,s=Number(t.data.total),a+=Number(t.data.pageSize),r++;for(let e=0;e<t.data.details.length;e++){var d=t.data.details[e];totalMonthCost+=Number(d.price)*Number(d.number)}}while(a<s);++typeCount>=typeNum&&(MonthCost_saveData(),document.getElementById("monthcost__money").innerText=String(totalMonthCost/100))}function getMonthTimeRange(){var e=new Date,t=e.getMonth(),o=e.getFullYear(),o=new Date(o,t,1);return[Math.round(new Date(o).getTime()/1e3).toString(),Math.round(e.getTime()/1e3).toString()]}function MonthCost_saveData(){var e={monthCost:totalMonthCost,updateTime:(new Date).getTime()};let t=localStorage.getItem("ExSave_MonthCost");(t=null!==t?JSON.parse(t):{})[my_uid]=e,localStorage.setItem("ExSave_MonthCost",JSON.stringify(t))}function MonthCost_getData(){let e=localStorage.getItem("ExSave_MonthCost");return e=null!==e?JSON.parse(e):{}}function MonthCost_updateCost(){let e=1,t=0;var o=(new Date).getDate(),n=MonthCost_getData();my_uid in n&&(n=n[my_uid],e=Math.abs(o-new Date(n.updateTime).getDate()),t=n.monthCost),1<=e?getMonthCost():document.getElementById("monthcost__money").innerText=String(t/100)}let svg_night='<svg t="1587640254282" class="icon" viewBox="0 0 1055 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5670" width="26" height="26"><path d="M388.06497 594.013091c-96.566303-167.253333-39.067152-381.889939 128.217212-478.487273a348.656485 348.656485 0 0 1 256.248242-36.864C623.491879-5.306182 435.417212-11.170909 276.542061 80.616727 37.236364 218.763636-44.776727 524.815515 93.401212 764.152242c138.146909 239.305697 444.198788 321.318788 683.535515 183.140849 158.875152-91.725576 247.870061-257.520485 249.669818-428.559515a348.656485 348.656485 0 0 1-160.085333 203.496727c-167.253333 96.566303-381.889939 39.036121-478.487273-128.217212" p-id="5671" fill="#8a8a8a"></path></svg>',svg_day='<svg t="1587640423416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2270" width="26" height="26"><path d="M270.016 197.248l-83.84-84.544-69.76 70.464 83.776 84.544 69.76-70.4zM139.648 465.024H0v93.888h139.648V465.024zM558.528 0H465.472v136.192h93.056V0z m349.056 183.168l-69.76-70.464-83.84 84.544L819.2 263.04l88.384-79.872z m-153.6 643.584l83.84 84.48 65.28-65.728L819.2 760.96l-65.216 65.792z m130.368-267.84H1024V465.024h-139.648v93.888zM512.064 230.08C358.4 230.08 232.768 356.992 232.768 512c0 155.008 125.632 281.856 279.296 281.856 153.6 0 279.232-126.848 279.232-281.856 0-154.944-125.632-281.856-279.232-281.856zM465.472 1024h93.056v-136.256H465.472V1024z m-349.056-183.232l69.76 70.4 83.84-84.48L204.8 760.96 116.48 840.768z" p-id="2271" fill="#8a8a8a"></path></svg>',currentMode=0;function initPkg_Night(){initPkg_Night_Dom(),initPkg_Night_Func(),initPkg_Night_Set(),watchBottomIframe()}function initPkg_Night_Dom(){Night_insertIcon()}function Night_insertIcon(){var e=document.createElement("div");e.style="position: absolute;right: -75px;top: 18px;cursor: pointer;",e.id="ex-night",e.innerHTML=svg_day,e.title="切换夜间模式",document.getElementsByClassName("Header-right")[0].appendChild(e)}function saveData_Mode(){var e={mode:currentMode};localStorage.setItem("ExSave_Mode",JSON.stringify(e))}function initPkg_Night_Set_Fast(){var e=localStorage.getItem("ExSave_Mode");null!=e&&("mode"in(e=JSON.parse(e))==0&&(e.mode=0),1==e.mode)&&setNightMode()}function initPkg_Night_Set(){var e=localStorage.getItem("ExSave_Mode"),t=document.getElementById("ex-night");null!=e&&("mode"in(e=JSON.parse(e))==0&&(e.mode=0),1==e.mode)&&(currentMode=1,t.innerHTML=svg_night,t.title="切换日间模式")}function initPkg_Night_Func(){document.getElementById("ex-night").addEventListener("click",function(){var e=document.getElementById("ex-night");(0==currentMode?(currentMode=1,e.innerHTML=svg_night,e.title="切换日间模式",setNightMode(),saveData_Mode(),setNightModeIframe):(currentMode=0,e.innerHTML=svg_day,e.title="切换夜间模式",cancelNightMode(),saveData_Mode(),cancelNightModeIframe))()})}function setNightMode(){StyleHook_set("Ex_Style_NightMode",`
    .layout-Player-barrage,.Barrage--paddedBarrage,.Barrage-firstCharge,.Barrage-notice--replyBarrage{background-color:rgba(37,38,42,1) !important;}
    .Barrage-userEnter{background-color:rgba(37,38,42,1) !important;color:rgba(187,187,187,1) !important;}
    /*.Barrage-content,.Barrage-text{color:rgba(187,187,187,1) !important;}*/
    .Barrage-content,.Barrage-text{color:rgba(187,187,187,1);}
    .Barrage-notice--noble{background-color:rgba(37,38,42,1) !important;border:rgba(37,38,42,1) solid 1px !important;}
    .layout-Player-title{background-color:rgba(35,36,39,1) !important;border:rgba(35,36,39,1) solid 1px !important;}
    .Title-header{color:rgba(191,191,191,1) !important;}
    .Title-anchorText{color:rgba(107,176,125,1) !important;}
    .Title-row-text,.Title-anchorName{color:rgba(153,153,153,1) !important;}
    #js-player-toolbar{background:rgb(37,38,42) !important;border:1px solid rgb(37,38,42) !important;}
    .PlayerToolbar-wealthNum,.Header-wrap .Header-menu-link>a,.public-DropMenu-link,.Header-icon{color:rgb(191,191,191) !important;}
    .layout-Main{background:rgba(35,36,39,1) !important;}
    .ChatRank-rankWraper{background:rgba(47,48,53,1) !important;border:rgba(47,48,53,1) solid 1px !important;}
    .bg-icon{display:none;}
    .ChatRankWeek-headerContent,.NobleRank,.NobleRankTips{background-color:rgba(47,48,53,1) !important;}
    #js-player-asideMain{border:1px solid rgba(37,38,42,1) !important;background-color:rgb(47,48,53) !important;}
    .Chat,.ChatSend-txt{background:rgba(47,48,53,1) !important;color:rgb(187,187,187) !important;border-radius:0px !important;}
    .ChatTabContainer-titleWraper--tabLi{background:rgb(29,32,35) !important;border:1px solid rgb(47,48,53) !important;}
    .ChatTabContainer-titleWraper--tabLi.is-active,.ChatBarrageCollect-tip,.FansRankInfo{background:rgb(47,48,53) !important;}
    .FansRankInfo-txt{color:rgb(121,127,137) !important;}
    .Barrage{border:1px solid rgba(35,36,39,1) !important;}
    .layout-Player-chat{border-top:1px solid rgba(47,48,53,1) !important;}
    .layout-Player-announce{background-color:rgb(29,32,35) !important;border:1px solid rgb(29,32,35) !important;}
    .FansRankBottom,.AnchorFriend-footer{border-top:1px solid rgb(47,48,53) !important;}
    .Title-official{background:rgb(35,36,39) !important;}
    .Header-wrap{background:rgb(45,46,54) !important;border-bottom:1px solid rgb(45,46,54) !important;}
    .layout-Menu{background:rgb(47,48,53) !important;border-color:rgb(35,36,39) !important;}
    .GuessMainPanel{background:rgba(47,48,53,0.9) !important;border:1px solid rgb(47,48,53) !important;}
    .danmuAuthor-3d7b4a{color:rgb(234,234,234) !important;}
    .danmudiv-32f498{background:rgba(47,49,53,0.9) !important;}
    .danmuContent-25f266{background:rgba(35,36,39,0.9) !important;}
    .word-89c053{background:rgba(35,36,39,0.9) !important;color:rgb(187,187,187) !important;}
    .FansMedalPanel-Panel{color:black !important;}
    .AnchorLike-ItemBox,.AnchorFriendPane-content,.SociatyLabelPop-content{border:1px solid rgb(35,36,39) !important;}
    .AnchorFriendCard-info>h3,.GiftExpandPanel-descName,.GiftInfoPanel-name,.FansMedalInfo-titleL,.SociatyAnchorCard-info>h3{color:rgb(204,204,204) !important;}
    .GuessReturnYwFdSlider{background:rgba(47,48,53,0.7); !important;border-left:1px solid rgb(35,36,39) !important;}
    .GuessGuideList-itemBox,.GuessGuideList-moreGuess{background-color:rgba(47,48,53) !important;color:rgb(204,204,204) !important;}
    .AnchorFriend-footer a{background-color:rgb(47,48,53) !important;color:rgb(204,204,204) !important;}
    .AnchorFriendPane-title{border-bottom:1px solid rgb(47,48,53) !important;background-color:rgb(35,36,39) !important;}
    .AnchorLike-friendList .AnchorFriendPane-title h3,.Title svg{color:rgb(153,153,153) !important;}
    .GiftExpandPanel{background-color:rgb(35,36,39) !important;border:1px solid rgb(35,36,39) !important;}
    .GiftInfoPanel-cont{background-color:rgb(35,36,39) !important;border:1px solid rgb(35,36,39) !important;}
    .BatchGiveForm-num{background-color:rgb(35,36,39) !important;}
    .BatchGiveForm-input{background-color:rgb(35,36,39) !important;color:rgb(149,149,149) !important;}
    .BatchGiveForm-btn,.Backpack-prop.is-blank,.GuessMainPanel-sliderItem{background-color:rgb(47,48,53) !important;}
    .Backpack{background-color:rgb(35,36,39) !important;border:1px solid rgb(35,36,39) !important;}
    .Backpack-name,.NormalCard-btn,.NormalCard-close,.NobleCard-close,.ReportButton-41fa9e,.HideButton-d22988,.txtHidden-486e56,.BackpackInfoPanel-name,.NormalCard-name{color:rgb(187,187,187) !important;}
    .Backpack-propPage,.BatchProp-content{background-color:rgb(35,36,39) !important;color:rgb(149,149,149)!important;}
    .BackpackInfoPanel-content{background-color:rgb(35,36,39) !important;border:1px solid rgb(35,36,39) !important;}
    .BatchProp-customIpt,.BatchGiveForm-num,.GiftInfoPanel-intro{color:rgb(149,149,149) !important;}
    .GuessReturnYwFdSlider-numIptWrap,.GuessReturnYwFdSlider-numIpt{background-color:rgb(47,48,53) !important;color:rgb(149,149,149) !important;}
    .GuessReturnYwFdSlider-giftName{color:rgb(160,160,160) !important;}
    .NormalCard-common,.GuessRankPanel{background-color:rgb(47,48,53) !important;border:1px solid rgb(47,48,53) !important;}
    .FansMedalPanel-OwnerInfo,.FansMedalPanel-list{background-color:rgb(47,48,53) !important;color:rgb(187,187,187) !important;}
    .FansMedalList-item:hover{background-color:rgb(37,38,42) !important;}
    .AnchorFriend-content,.SociatyAnchor-content{background-color:rgb(35,36,39) !important;border-top:1px solid rgb(47,48,53) !important;}
    .SociatyLabelPop-title{border-bottom:1px solid rgb(121,127,137) !important;background-color:rgb(35,36,39) !important;color:rgb(153,153,153) !important;}
    .Barrage-nickName{color:rgb(255,119,0) !important;}
    .wm-general-wrapper{background:rgb(35,36,39) !important;}
    .ChatRank-rankWraper .ChatRankTab-title.is-active{color:rgb(255,119,0)!important;}
    .ChatRank-rankWraper .ChatRankTab-title{color:rgb(131,140,154)!important;background:rgb(29,32,35)!important;border:1px solid rgb(47,48,53)!important;}
    .MatchTeamRankList-topAvatar{background:rgb(47,48,53)!important;}
    .MatchTeamRankList-topName{color:rgb(131,140,154)!important;background-color:rgb(47,48,53)!important;}
    .MatchTeamRankTitle-content{background:rgb(47,48,53)!important;color:rgb(131,140,154)!important;}
    .MatchTeamRankBottom{background:rgb(47,48,53) !important;}
    .MatchTeamRankBottom-lable{color:rgb(131,140,154);}
    .MatchTeamRankBottom-desc{color:rgb(121,127,137);}
    .Barrage-text>a,.Barrage-firstCharge{color:rgb(187,187,187)!important;}
    .GuessMainPanelHeader-slogon{color:rgb(204,204,204)!important;}
    .Barrage-hitYwGame--text{color:rgb(187,187,187)!important;}
    .AnchorFriendPane-title h3{color:rgb(153,153,153)!important;}
    .Barrage-nickName.is-self{color:rgb(255,0,51)!important;}
    .barragePanel__funcPanel{background:rgba(47,49,53,0.9) !important;}
    .layui-text{color:rgb(187,187,187) !important;}
    .GuessReturnYwFdSlider-ywNum{color:rgb(237,90,101) !important;}
    .VideoBottomTabs span{color:rgb(204,204,204)}
    .BackpackHeader-info--title,#point__value{color:rgb(191,191,191) !important;}
    #red_envelope_text,#red_envelope_query{color:rgb(191,191,191) !important;}
    .layout-Container{background-color:rgb(35,36,39) !important;}
    .FansRankBottom-invisible,.ChatRankWeek-invisibleContent{background:rgb(47,48,53) !important;}
    .Barrage-roomVip--super{border-top: 1px solid rgb(37,38,42)!important;border-bottom: 1px solid rgb(37,38,42)!important;background: rgb(37,38,42)!important;}
    .Barrage-userEnter--vip{background: rgb(37,38,42)!important;}
    .ChatRankWeek-nobleInvisible{border-top:1px solid rgb(121,127,137) !important;}
    #refresh-video2-svg{fill:#ffffff !important}
    .VideoRecommendItem a{border-bottom: 3px solid rgb(35,36,39) !important;}
    .AnchorFriendPane-title a:after{display:none !important;}

    .MedalOwnerInfo-box{border-bottom: 1px solid rgb(79,81,88)!important;}
    .FansMedalList-item.is-NoWear{border-top: 1px solid rgb(79,81,88)!important;}

    .layout-Player-announce,#js-player-title,.DiamondsFansRankList-anniversary{background: none !important;}
    .DiamondsFansRankContainer-skinbg,.shark-webp .DiamondsFansRankList-anniversary{background: none !important;background-color: rgba(35, 36, 39, 1) !important;}
    .DiamondsFansRankList-anntitle,.DiamondsFansRankList-anntitle{color: #cfcfcf;}

    /*弹幕时速*/
    .barrageSpeed{color: rgba(255,255,255,0.5) !important;}

    /*用户等级*/
    ${getUserLevelNightModeStyle()}

    /*新背包*/
    .BackpackHeader{border-bottom: 1px solid rgb(37,38,42) !important;}
    .BackpackHeader-tabItem{color:rgb(121,127,137)!important;}
    .RightsPropsList{background-color: rgb(35,36,39) !important;color: rgb(149,149,149)!important;}
    .RightsPropsList-item{background: rgb(47,48,53) !important;}

    /*加入公会*/
    .SociatyLabelPop-content{background:rgb(35,36,39) !important;}
    `)}function cancelNightMode(){StyleHook_remove("Ex_Style_NightMode")}function getUserLevelNightModeStyle(){let t="";for(let e=1;e<70;e++)t+=".UserLevel--"+String(e)+",";return t=t.substring(0,t.length-1),t+="{background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADACAMAAAAN8R4NAAAC+lBMVEUlJioDvrdnxgPfkxaJb0lrsSIhrKYDvLVif0ftnhtnxQQKnZlZpAwnKCy+iDDYmzlFfHwrLC/ckhc5OTq1exuIbkg6PjyAa0qehVxzX0JpwA5CQT84PkEpKi5geEksLjE3lZNHamsqpKAfQEIxQiM9QT5Gd3c8RUguoJ1HbG0tLzIRt7FCUlVquxZabUpplD1TYUnOmkRBRkAzNTcVs64/REBSTUZnjEJDPDNGYWMwNDdHOyZGdHVqvRJpxAkKu7RAPz2zhDcwMTMcrqlCgYE6QUQ2ODjekxc/iIdqnjVrpDA0mZY6kY+tjFdliERqmjg9SEvGjCpHZmhEfX1VT0czOTxYaUqPc0avgzjonyZ4ZktVZElhV0k7REfZkRtLVEZ4ZkpFQkBrojJrpi5ccUmRdEY2NjdrtxsasKtGb3BPTElSTkrLmUVkhUVMSEOCc1xEWFo/S05hekinfz2oilpLSUZCSEIHvLVBT1HElktqXkprqSw8j42McUhjgkaaeUO0hDbenTNJUEVOSkThnS5qtB1u1QIkqKRBhYSGdlxpXUpnkECfe0DWkB131BIAy8NfWVFvYUprrSa4klNIRkTpnSA9jIuih1s8OzvMjSYwnZtEe3t8aUnOjiTUkCD+phRmX1NdVUcym5jkniuifT8rop5Ef393bFlQWkiWdkSrgTxqmDvBii3akhkPzMVESUNrqCqXgFyEbUg+PTx0almpfzwTtK9EW12wjVaCbEhOV0fOmUFYUki6hzLRjyLImEtXZ0m4hjPfmihsX0rUmzy4hjTlmRxBhINGTUScekGB0yj/rCXAlU5FTEPRky1tZFa8iDG0klyQfWCKeVy9lFFsX0tNRToZp6KbflA2TE65jkeddDCvfSvYlyrwoyQgzcYZycIVwbubgluFcVAyQkVESkLDkT75rjNqVTNxxBkhnJghi4h5aE5tWz67gydfoRpVjI1yjlZeTDJeqxBs0QGm1HSohUxVRzPJhhhyzBF0z82Tu2mHqmJThCGbY0TbAAAbfUlEQVR42uybe1BUVRzHv7uLyVIrXTZFXTeI8gWC4ZpYKcKaoKTp5pquEYnBWoFUQCkVIUkPSwoCAgwRg0oJKuylSVhE9iILtZe9c9KaXtP0rmmme3b3cL3uuZwzjTNZ2++Pc9z1O2fOxzlz93783YszTgrRcyvkpDOmjhgaxK2hI6aK5s49JczArbBTzhXd3+knDtZxa/CJp+OkUyFQp540YopIbsoI0dwpS0Vyy04R3d+J00RyY05ECIQqZKhYbqhoLkwsFya6v8FiucHQg9SZk4BJcQAdI7Ky7MDLcXI9ClL6INB64krgyqsAOkrr1rlBKyioP5YD5CixnDe8A80ZQGqzBbDcAdDRvOx6kzIBMOihbPAigI7yNy8DuG4LvKXXeeezxwJjLwTk8TQyrr7vaTItICMpnQ94UDBwqf4sAGlzIJOGLF+ufxQTYx977LGso4FDhwMVxmsB5BYBqKjZtcuYowCrY9XemDS8Jt47qIGHhANrDY8DWFIAYG3GmtaMOjpRYGWDo+kGgYv1CYgODrnsKOATTgYm6GYBGHc+gCtiZt92AqIXDn6AAYzYm4AI/ZkAll8AzJmINA8sCxhl8iAZHwKw8xBQVKUAM2PDi3bFk4EFjPodcig1HcCL64EnF/smP2DEBtMNYvT0VxMQPGc5CxiTF8o53dmAacbVMEXOOvn8DUzglSuArEQAkOTsoJuwIis/OIUNXFgKrHMBgFXOhtYqwBqxefFkYAIHOYAXygGgOA94dj2d/IBX3gLEjfR+PnN+AoAEJvB5M4HxM8gBv3vWmGnRAGYzgc+Sz3TaRHjqTn0akBh705yQS5nA18pnOrcKntpuzAUTmMY4wEmGJCwpgbcqU/PoRIFVG7zMs8H5F2AA4Et0l2DcXHKiH7n83suf0gAm403RI718iNiyYiW22MnJZgCTsTbC2ARPSU2lhUxgMh6Qapo4wGjbEZ3q+zXb2uikEwVWb1BPNph1A7SByfhgtG4CgGl3LwBmPK0JnH9X1g8gNfFRIHgFtpiAm1awgTua324GqaocYHipFvBw19fd4AE3fLBtI0hJQz6wkcnxwVSwgPO/u3g6mS8bGRubmHiZJvCYdybEkPlpnQmYeR4LOGGYXCm33nWBFzgt5axBczB9YsTLsQl+wNstctVteq3QC5xrvjK0lwE8j8Qe39RdOBBwtlkut3HPVpB6Zfe3vySZ5embty1mBVjZ4I+/eTaYMnr06LSHh7GAZ4+Sa9Hdj9wOUjEPWi/UTWAB60lJN+gfhWfBOYnT77Tj0TR97AXwAzaSMsX7foseL6pp3h7tB0xjO0lMG9hAyrSmPROkMsin5+lEgZUNWm/QXwdPaR5pHSlrlG4BSF0zWbdqGvyAtcsEKMAiFSSaM3AjFJhXFJhd0VCVLvBuLQNOHgJOD0U3+J8BPtZHdYRTJOf854606EXmP3PRCgJbdFX2CgRp+zBwLZlpTnutzo6HJDEflirfstOfJQ0dPus5AMPyL7LSnyWmDtumjbcBGDXmNF9OR4CZBgupltorBWHFSNmbXaqcfyiarFVcs6sn1Cniw3ntra1hmRSYqcP26SPlbxJvWJ44jAIzdHhUTGSk/GnCqqgNq0YpwGzRpfZKQTRixIgPs4FRViuz0rVsu2th3f2ZiA+3FstTCQVm6TAee1UGvmc+sDyBAvvrMCJvBBaOR1QkcP9sBVjDYDHPD5gZK9z/kBqYvZb53Slw7y4U8WGi2G3bKDBLhy94+OKR8ngzgabA/joM3YXj77sGuH01cFskE5gaLBdYiT0UCgYwe63W0nQxH94atgQUmKHDZw4CASaiqL+ZAvvr8Dm6meeP83girtCt9gemohttbOIBk9Hrw5ZmCxOYSvNuZS3zoZ4Ktg9vO9qHJacjyA8Yg86UPDo8bPowH/CdI7dAAVbrMAE+D4iMBHBvzNXQAu748O094AN3uDZ7fHjfprIyl7EsiQnc8do6Za0pG4uTwPbhPV9QH37fRiwxEwh3+APnf/mHR4ezbo2NHamPHSYNuicFDOAxMe/FgNSqC4GTL4d021eLwACmovvRgYGB5x3pw9bq6uoOV7WSo6EkuTwhutaHH4zIvNLM9OGatsVeHy5PtljMKFliswxpocD+vi7JOnzqyNGYeNfnkybRq7RKhz/16vCNUYvGXn4v5j6yeuxY1lVaMVg2MDsGvyPNXMu5m3zTJzF92KDy4ZSCjK7saArM1mFypBP1P4To76HADB22btDpzjdhBvkyigIL+uu/1IdNJqhKF3i3lgEnDwGnhwEHfIyP6vH/XzwBd9EKgkZDt2KdXDkCPpyyd12KkA9LV+17XMyHgaQ7RHw4Ii7uHBEfjhg/3pfTQdNzq8ri4+P38X3Y0ry/l3yiOU23zqvJLTI+IeLDgH1jI/g+fHMiaWPzfXj1qg0bdAsosJbn5lJYjg/vrwI+W6fkNN36gBw8sEvAh8kfdjeC58O0jc334Q23A/fPpcBanlu6r+Nrm4APG9PtU00CPuyx3J4+ER9G8fr0RvB82NfGDub7MMmdsJACa3muq6ywyNjE9WG3sbQ3l+Y4PvyuMT5CxIfT20CAOT5M29giPnyvbhwosFbft8kG9FYN4MN2Ty7FWAvs388CJqN0pFtLFaF9TB9eJh3pw+aNZgYwGfMjjvLhiGduWSniwxFXzzxPA7jjsK/v+4YJqC3V9uFurw+j5ipWf5g2kV9oBgXe/gZwsMzG8mFHrdeHIxzP2oDKTfX1jan1Zn8fHvT9kT482tvGZvjwx7+rfHjuAmDh5QqwSofNVGGbq6SKsnksYJrz/mXVTvOVpdvVORpS+fDP8dWWnl1MH970UTFItQypk1e21tXVLW2sE/DhtJRJg+azfPgRtQ+PWzT2hEgKrNX3zck1lhUK+LBpl9FYJODDSOmtcVVZMLAP/+ptDJMjzfdhs9zGTrDzfXjR+atiZtv/9+EAubUMOHkIOD0MOGDRI/ifeeQh4C5abM8lOkwKtIL8vZmO1qv2uYV8GEi6SsiH866XK5Prw3Ti+zBwyYU8Hx7e09NTagTfhytcRX2ug2wfvlbda7Z3u8wiPvxK/Zo1ayp5Pkwnrg+TXEwMG1hp6ZLaXiTgw32HgL3dGv1hda/50OHDZhEfXkJguT5MJ74PA1Efx4Dnw4DJ1STgw7Wh0ejbI+DDeHdXusss4sOOymXhNq4P04nvw7g98uwY8HwY6CgT6Q9be4w1NUkCPpweaqbAHB8urw8qCJvC82E68X347BNAgVk+bKc6X/oZE5jmrOWeXF/pGxW9Hyo5rV6zubsJbGC0LXar+sNOO9DyCsOHT1X5sG/i+vComFEDAHd8NNWnsE1G+wDAn+2p9Zxje+lBoNO4lu3D3c5+H66UG8nNxrIKZn94qK8/3EZ8GJ0mYCirP3yLyoeDfW1ihg+/947iwzMX3T15coxu8ig/4Hm+9rBPCouKwAKmqmv0qW78Tre10Oj28+FMucybXPMoMGkkH3RVsH14j68/7PgmyWLGxhIpr34x14ft3onlwzNeUnz4duusWbPGzJgFCqzhuXX0ZHN8OGe/qya3ScCHAXKk2T7c6PPhsF/DZB/OXBJWX8z1YTrxfRggR/oY+rDpfx8+jm8tA04eAk4P/ymQ49+HRR9lWCZ2VP8zPix6MToefFjdH0bF8H2SkOcmdew1H/1zk05E93qAjpmdkIjlptOfmwH7w7ZllTZuf5i+38z34WtOk2sBrz/cYeztKbMJeG5eTdHO0moFuP+eMc9AnCK5QM5tC0tGZ0ZycnKLAqztw+au9S2pj3N92Pt+cxzfh+dOjoqKGs/rDxv3Aj2FAp57aD+ws48BjI3b5JwhHQgvaE3GC8lQyjCQD7eUADsq+T58WRYAAR8edwUAjg/LQBVAVY+A59bsBd4NtTKAi4noZoBUdjLCW9KL8/yAWT4cdsdb4dUCPnxLXH6wTcCHZ44fc5+N68O5vVJOczPfc1PIYwxfH3YzgInoJpdQ4OywkuzGbAVY04ftBkfBklQBH06MXUneb+b68IzJ590/eAIbWFHYTtnl9odq9X0j+j3XTvqlB0ttfsBk3CoZplBgSybpkTGA0fbNuUf6sM0wFFi/ngL7vz5MRXjLOcD8iQwfXqjuD18t5yLnavlw6RfNIOWGpGqIsx6WJsDYPRxyKxQs4GV7ptaDAueZAYuBBdzw7fv0eWmPD7ffofG89J/5R/rwWVusnnPu78NfTVP1h6+2knOu1R/+yFXo1eFedLo6FWC/JjIFfjf02ryavSpgKrq2TY5i9B9ph9nWspECq98f7vLG2gzv15HnpdfYLI6t/P7w9InSzbEJ/P5wzI3S6qdm8/rD1fFG1z6IeO4BY00f1MBUdJMNmf3AKGnMaEmiwMz+cLshg/iwqdVgKOD7MH2/mevDC8bpJr8k4MMmYR/+G557bHzYxPdhdU4XeLeWAScPAaeHx3qDxz3wsT2CS0Vz/9yRPtYXmeP+omWAV0wzgUyPuSZRfwXSGzKP/hlJpwJLRyfWvkXq6BxZjyTo6CRfLnVjYB/uDJ8CrL2elIAPw5YVZ+P3h+lESkeAFTFN8omptKM9GVgyZGtXA90gMxdNPDf8zTffdBg0c8menLyeu7w1m66n4cPF7evb3vQumAq+Dw+bPn8++ZLjw3RSgFViatjs89fNXYCzxA/E57nRXs8t8EpudgErV09znvW2ydH0roF82GbYDGvYWo9EFIDvw0QcguO4PkwnCqz21+vLQWpxsuwrzvB0sEBI7i1vLtsDbCp3auVe6F+v0hGNbY6BfNi8GHCnbiYLZnQK+LD+ubjg17k+TCcK7OevdIMvOoaUlLOONBVYBXjpRtCc9npINrS3J/F8+EkHGZfVA1wftulvmZ+m5/uwb/IDJuMOyeBUgIHN5f4gZCyeKucUYEcDmLm2rW5lvfD69MySfhD2+8PmIWvsdEGuD9tuXQk8/DC3P+ybWMANjju60H+kWz3/+CyQhrLs96EAOw3RADPX/YWyniMciDasZQDv+PCLb0FqSlc2SDnD7Czg/Lt+Uj0vHfKcxvPSn6jeH6aTGnixt1H7WnH/Bp3ta6US9UVGaei6tkEBLigAtHLKeq0vutFgcLN8uNtnv12Oty0WCXiyBYDA89KPpUxacSfLh99R+bB3osB+/ko3iIZ2gyNTAVELrEUBpseW5jTWc5d0tSenM334RW/MaSC3m0vhTnUCAj5sXa7XzzFxfZhOCrBmSaL+KpgzHXMfNgn6MM3pAu/WMuDkIeD08K/2zjNWhiiK42dGlyzGKgnWItFWjW6xeu+9r15WogtC9LASfYPoEi1EjU4QRHQiPuglhEQLgsQXH9xr7zV7uHPPZBBlzYd3n+efO/55a9/83jn3f2rlaUrfuGmeWu50f4Hhn/9S/cN/xdMUXF1N3er++Dctm4cFudb7yq8NemAe5jJc9gX/mi/13Hprlli2zgl0JWbT9eEGS3pJnekcLz2zPL80PCzipScW5ZcCHkbYPLx3ZzeotyDHpp3oQQHJDgD7NDr9QNTPlk2n2ltS5wy6HJ/d1IeXrNs2NqqpD4t46ayJRGKIKQ07x0t3jMfjQw1p+Lt6btMk53aDTdNtDELPvmvzCxmc2gRwYBBMH8T/RuqcQZdjsZv6cPslAPNlqcU5Xppf85pLw87x0sCu5RtswxhMl3A+8kHXbtCtK3/Ya/L9PzAvx+aoqOdy08wOdD0ldTrQ7VrfTX24/jawjucXhnXx0uCL2GlLmnhpbl0aVnMuN7xkbT9r7PoRdD23SYaC/LUgdRrQ5Ybp/WDwgmjTHDoelvHSMLAcSMO6eGmIVQGVYWi/N7CzkzTsW5dhZ9cMfgXO5chrycf7aWs7QYMMI+zyJubh/EEMurZhXB9uIGRwgfdL5xi79NgO2U2ri5eGIWNA1S9dO4jjpWHoatsw5tcL7eGr4X0+6LVAWc+9/07Uc+/dDbIlOok5PyB1SNg3Kay24AiAo+E1d3uI/Y7nece/4yuAvXEpeRjHSx81GyjztF68xfHSo4wwgIqHm5yNDpKG2cH0JoHpU1T13CYPNia/3u31R99gPwzK0WBEtJeSh08L0M3xbjADXWzYlq1sn7zthR3PrH1+a2dGaNDtmpKHcbx087ZgG9bES2/gb9kqHg7wQq00DJsWNLVBPIMKh6MZojv5ed8DGaJ51dwsQZdfPZBhJIuKfummX/K0jnWLrpsvfyxp4qWbmEdtw5p46c7GKGz4x/nV542bf32/dAjwZaTfo2XawUPa4eHPvvFv0rk3/LNfWr9F570+/ONvHr9L556HdVw6K/8SC3PpeIDxjEjlx2D5LwXaqmMGipAdUzkfiSu2fvnDVrB1aL9Kcr8GydxoS+iI+nBPn5v6cDhWU+gM0HHpmtybjq9s8O0j3kw5l4l/ygKtxsPMSNvEkCAyjIXQpkCF2UMglNUcYBu2ZZJz2UZiPzs3WlMfZug0r3mErA8XYui0vOUEWR/WcWnuvozWpmi4VARaTa4u/gYbhjrsQ4gLQ5ErEDC3Zm3ewjbsPOcJ5Ubr6sNDygO0nUfVh4vC0NLsU1lq0XCpxStf2+QzLZ7LVD4iHrB4oBX/R1RPYMNYGBDf7+rYsJRJzrW+IBHKjdbVhyfPg1DCRZ7W5uUQiucShnVc2m2T1e/EWg2XMgdmC/DzJ9zCdZDh74R1zIGADWOZPecJ50br+qWbRCJmJhfnhzvXnWDEQRjGddrggtRzvCPWZlg5P4cjlyYDrYYMr2zOlGVLbBhmTw1mF0J/efMKNoznPKXsx30XOKrSDcR5WpnaXtmaqTqdp5W55ehDmZspDE/b+Oqe6Fs+VZktDcBSHlweM7ti8vtZYfwXp5Eu7NP+yLAE2K1v+Hqlwhf3yDCSDXyTul8wsaeJUpdA54e3msXZ5wUUPNzwSWp9uDF/F4uVQYaTXFpjfXfBpac78b7lsZtg6YIR33Op/8NzOZfJX5UFWlXPVPl8pCIyLIQCYKHAmEBFsycyrOBcGZBVYeH44jI3WlMfrhwZ7gu3SJD90sEJjXzhVXFhWJ1rtfMLl+6bnnvBEkWd1ie51N+WBVqFAFiddqptBAFsJUj+pzMzFQZs2JZZcr8mbSMFWEBWAf5FYURXH97aIlJge3G6Pnxo1YS6RdCPJZJz3fctO+kCYqV0QOh+9Pxw+j1aph08pB0eut3wZw+i+m2Gvb20fnzUmNv9ftv84Z89TO63vWkh3kRcKheaX/kfTwI1p3jx4/0px33U97XKlx/MlsGF+ULzcJ+sA0NueLhsx1hIM39YBjeLheLX3SjXyvE88q1ll3PmDCLD8r6Yr5+KPmiah8dkb5soF6b7pUtkKRKvEqbnD4uF5lcGahcLEHOKK7PzyIFlI23DmHOtlP1EHzTNw9kZgCXa0P3SWWIA8bnCMOZNG18DjEvFouZXW8fxtGIBYk6xv7UfBi+7jgxjbLbnHptdymd9CiQPhzilzctE8zAfPbQ8Ts8fthd840pmJcSvHE+ZYXJOMdyZYWcFaHh4sDmE90HTPDygbWh8nTo0D5cqEmpXpoxy/nDgPeNQGdwsFiW/mkdtfmV4yg1Tc4r9Z84sBYVh/vErX1tsv8FmSh+07vzw+XJmue2ZFDy8Ooh4ePRBo0qRzArDhRd+Kpcyf1gsKn7NV8fWvSkscq3Uc4ov3UgG5lU7e9gCteHCz0+K/Z5+uaHZxeG+s/ugeUuVIaQ8MF3iZgz1S4eZrkgrbHje9/OH24qF5NdAEk+JOcWnr95oMsxOjXDYb/CX+05uUlX2QZt4/DDql27e1nclcp7kYWhZxDe67mjbMOZNe/6wWDRcagsqFiDmFHfKlu3s2WzjbMOYh5/K/XhgtCX6oCkeLr7HjAwEmocbFzPqxkAY/tlc6jZPy20ftF4XoHkY64z0e7RMO3hIOzz8Z8De7fXP/OrG7fXP/HLO7WU6lnNxP7IjN4dFnZbWSX6lObc4qzfrOFcGZDUuERM6w7VhJW+2qVMh0xDcj4x0mIdFnZbUIX7Vz1FqO3lISMO5IiBrYt0ixYaGPBm2eVOWc33Zt6J+ZE19WNRpSZ3gV5JzRb1Zw7kiIOtFMx405M0w5k1Llu/tfmQHHa8PizotqRP8SnKuqDdrOFcEZHHzzeIeDKvLubgfWcOvok5L6SS/kpybjxekCpdz5txkQNbEkFESoPZBz4b5x6Dk0nwDs19B/cjfcDPXSW5GdVqss5BO8CvFueE5dr0Zc26JJOeKgKywMRFg9dAfMDyGc6ldzkX9yJiHs9ZJ4ebiok6r0FmpOkjlV3zfyuhcsKg3Kzg32QedDMh6AXWLArTa4M0w5tICYyxWzhX9yCQPB0WdltIJfiXrvqzeHGb1ZmfOTQZknYNmmcOj69b0ZhjzZsUEK+fifmSFTg48EnVaUif4leZc6G9Gpuo4VwZkbTAmbAEPhjWg6bGeS/Prj+ZkAdYZ/x8t/8ND8ko/PHS74Z+uc23Y7UvmT9e5Nuz2TeFP17k2bIAKODtw4LQA2h2SMi2XFipRNEDr5BxgWsfnI5G6xjg32r1hFXAacQachUIds2yWMh2Xlp1QbNWEQqROzAEmdWI+EqUrKuTeDGPgDCbP6uVquco2rOHSYkUANjQjdWIOMKkT85EonVy8GcbA2XjR6KJPgF3NbMNqLg2HGZfOZdQSL6LTcX6Vc4ApnZyPROnE4tEwBs6yxuYtmctgwwpZSnBzzJhI6eQcYEon5iPROrF4MWw3GieBs8EoXms8hAwjGeJSbqTMKFqH5gBjXShVJ+YjkTqxeDFsB1ElG407822HdkSGFTIZ3GzFX3ZW6qrcRjoxB5jQ3QynzkfCudFv0X5i8WQYA+dEo2aAvUiRYUcubQatdpXtXbIQqUNzgLHuUYquI5qPhHRZUnXNxOLRMAbOWEOjWAdAhjVcWpd/sRipE3OASZ2Yj0Tp5OLFMA3EhoZLf5MO8/D/R8v/8JCuePinG/nPw/952AMPO3ApymU2nLEZ5VVp9+PneGkd6m/W9EF7qw9ruBTlMhvO2IzyqjT7iXO8pA71N2v6oL3VhzW8iXKZDWdsRnlVmv3EOV5Sh/qbdX3QxbzUhx1480nnyjiX2VBj8+3OgPOqHPYre6iyPMdLcm4otb9Z0wftrT6s4U2Uy2zosBliVWhuFud4SR3ub9b0QRfyVB9GvBmDVN5EucyGDpvtvCqs64h4GJ3jxftZSCf6m1X3zYJyo73UhxFvPiqKeFO0Gyt4uHMqNqO8KrxfzdT90DlevF8sVYf6m5Hu4aEXKX3Q3urDGn5FucyGDpt5XhXNzeIcL6lD/c2aPmhv9WENb6JcZkODzSKviuJXcY6X1KH+Zk0ftLf6MMGbPoJLA7+GcwOkzvefh//Dw3885NdnBn9Rvur73V4AAAAASUVORK5CYII=) !important; !important}"}function watchBottomIframe(){new DomHook(".BottomGroup",!0,e=>{0!=currentMode&&1==e.length&&setNightModeIframe()})}function setNightModeIframe(){var e=document.getElementsByClassName("BottomGroup")[0].getElementsByTagName("iframe")[0];null!=e&&StyleHook_setIframe(e.contentWindow.document,"Ex_Style_NightModeIframe",`
    body,#groupListBox,.mainbg,.wb_card-wbCardDetail-1wzCV,.video-imgWrap-3Mf6v{background: rgb(35,36,39) !important;}
    .wb_card-wbCardWrap-22KrE,.wb_card-topListItemBox-1ui_g{border-bottom: 1px solid rgb(47,48,53) !important;}
    .wb_card-wbInfo-19JiQ a,.wb_card-wbText-2fk2Y{color: rgb(204,204,204) !important;}
    .wb_handle-wbRowLine-3OXI6 li,.wb_card-groupnameAndGrouplevel-38MGW{background: rgb(47,48,53) !important;}
    .index-dyPage-260IV a{background-color: rgb(47,48,53)!important;border: 1px solid rgb(47,48,53)!important;}
    .index-topTypeStyle-2ksW4{background-color: rgb(47,48,53)!important;color: rgb(204,204,204) !important;}
    .index-dyPage-260IV span{background-color: rgb(47,48,53)!important;}

    .index-editorArea-3XhrM input[data-input=title]{background-color: rgb(47,48,53)!important;color:rgb(204,204,204)!important;border: 1px solid rgb(47,48,53)!important;}
    .index-dyPageGoNumber-LGN4a{background-color: rgb(47,48,53)!important;color:rgb(204,204,204)!important;}
    span.index-dyPageActive-op79B{color:rgb(204,204,204)!important;}

    .editor-editorPluginsWrapper-HGPzc{background-color: rgb(47,48,53)!important;border-bottom: 1px solid rgb(47,48,53)!important;border-top: 1px solid rgb(47,48,53)!important;}
    .style-voteicon-3aTqD{color:rgb(204,204,204)!important;}
    .editor-editorWrapper-2fChb{border: 1px solid rgb(47,48,53)!important;}
    .editor-editorPluginsWrapper-HGPzc [data-role="menu"]:hover{background-color: rgb(47,48,53)!important;cursor: pointer!important;}
    .editor-editorContentRoot-3PCjH{color: rgb(204,204,204) !important;}
    .editor-editorNotLoginMask-1hCr-{background-color: rgb(47,48,53)!important;color: rgb(204,204,204) !important;}

    .style-newvoteTopwrapper-3PgJY{background: rgb(47,48,53)!important;}
    .style-newvoteHead-j0bH1{color: rgb(204,204,204) !important;}
    .style-newvoteHeadAttendView-1EgXK, .style-newvoteHeadAttendView-1EgXK:focus{background: rgb(47,48,53)!important;}
    .style-optionWrapper-2FhfD{background: rgb(35,36,39) !important;cursor: pointer!important;}
    .style-newvotestyleTitle-32flx{color: rgb(204,204,204) !important;}
    
    .editor-3MzrC{background: rgb(47,48,53)!important;border-top: 1px solid rgb(47,48,53)!important;border-bottom: 1px solid rgb(47,48,53)!important;}
    .editor-2y1wx{border: 1px solid rgb(47,48,53)!important;color:rgb(204,204,204)!important;}

    .VideoRecommendItem-liveTitle,.Bottom-tab--header{color:rgb(204,204,204)!important;}

    .wb_card-wbCardDetail-3bz_l{background-color: rgb(35,36,39)!important;}
    .wb_card-topListItemBox-7rXH3{border-bottom: 1px solid rgb(47,48,53)!important;}
    .wb_card-wbCardWrap-2iAew{border-bottom: 1px solid rgb(47,48,53)!important;}
    .wb_card-wbInfo-CLCyv a{color: rgb(204,204,204)!important;}
    .wb_card-groupnameAndGrouplevel-1KuV5{background: rgb(47,48,53)!important;}
    .wb_handle-line-FzKRd{color: rgb(125,125,125)!important;}
    .wb_handle-wbRowLine-2qn-s li{background: rgb(47,48,53)!important;}
    .wb_card-wbText-3sLfN{color: rgb(167,167,167)!important;}

    .editor-editorWrapper-2y1wx{border: 1px solid rgb(47,48,53)!important;}
    .editor-editorPluginsWrapper-3MzrC{border-top: 1px solid rgb(47,48,53)!important;border-bottom: 1px solid rgb(47,48,53)!important;background-color: rgb(47,48,53)!important;}
    .index-dyPageGoNumber-2Ib1r,.index-topTypeStyle-3MKuW,.editor-editorNotLoginMask-35J9d{background-color: rgb(47,48,53)!important;color: rgb(125,125,125)!important;}
    .index-titleInput-1uVJS{border: 1px solid rgb(47,48,53)!important;background: rgb(47,48,53)!important;color: rgb(167,167,167)!important;}
    .index-dyPage-1CwXA span, .index-dyPage-1CwXA a{color: rgb(125,125,125)!important;background-color: rgb(47,48,53)!important;border: 1px solid rgb(47,48,53)!important;}
    .editor-editorContentRoot-3QvJi{color: rgb(167,167,167)!important;}


    .wb_card-wbCardDetail-wYiL6{background: rgb(35,36,39)!important;}
    .wb_handle-wbRowLine-L5WHa>li{background: rgb(47,48,53)!important;}
    .wb_handle-line-lCiNT{color: rgb(125,125,125)!important;}
    .wb_card-wbCardWrap-OQ\\+ac{border-bottom: rgba(47,48,53,1) solid 1px !important;}
    .wb_card-groupnameAndGrouplevel-Q8fGX{background: rgb(47,48,53)!important;color: rgb(125,125,125)!important;}
    .wb_card-hiddenText-oUz98{color: rgb(125,125,125)!important;}
    .wb_card-wbCardWrap-OQ+ac,.wb_card-topListItemBox-wRCrz{border-bottom:1px solid rgba(47,48,53,1)!important;}
    .index-topTypeStyle-WHbMC{background: rgb(47,48,53)!important;color: rgb(125,125,125)!important;}
    .index-tagWrapper-x5Bnl{color: rgb(125,125,125)!important;}

    .index-dyPage-\\+pup\\+ span, .index-dyPage-\\+pup\\+ a{background-color: rgb(47,48,53)!important;border: 1px solid rgb(125,125,125)!important;}
    input[type="text"], textarea{background-color: rgb(47,48,53)!important;border: 1px solid rgb(125,125,125)!important;}

    .style-newvoteHeadAttendView-JwNdc, .style-indexLefttabcontentItemVote-VxGBz{background: rgb(47,48,53)!important;}
    .style-newvoteHead-CetsR strong{color: rgb(125,125,125)!important;}
    .style-optionWrapper-GJ6RJ{background: rgb(125,125,125)!important;}
    .style-newvotestyleTitle-j27SH{color:rgb(47,48,53)!important;}

    .index-wrapperBox-fPzNk{background: rgb(35,36,39)!important;}
    .index-content-pC8LK,.index-hotTopTitle-q1ajK,.index-title-Hmt3k{color:rgb(167,167,167)!important;}
    .index-aboutTitle-gEBas,.index-title-Hmt3k,.index-itemTitle-M\\+\\+1W{color:rgb(167,167,167)!important;}
    .index-itemContent-ti7Xk{background:rgb(47,48,53)!important;}
    .index-controlBgL-tdJKP,.index-controlBg-Pexdr{background: transparent!important;}
    .index-wrapperBox-fPzNk{border:1px solid rgb(125,125,125) !important;}
    .wb_card-wbCardWrap-4JJpr,.wb_card-topListItemBox-035It{border-bottom:1px solid rgb(125,125,125)!important;}

    .index-aboutTopic-akyQd .index-itemWrap-6-qcp{background: rgb(47,48,53)!important;}
    .index-aboutTopic-akyQd .index-topicName-a5Qxh{color:rgb(167,167,167)!important;}

    .wb_card-wbCardDetail-HysKF{background: rgb(35,36,39)!important;}
    .wb_card-wbInfo-a7-LR a,.wb_card-wbText-mwDSN{color:rgb(167,167,167)!important;}
    .wb_card-groupnameAndGrouplevel-EbL7t{background: rgb(47,48,53)!important;color: rgb(125,125,125)!important;}
    .wb_handle-wbRowLine-6D3SZ a{background: rgb(47,48,53)!important;color: rgb(125,125,125)!important;}
    .wb_handle-line-Dd0zJ{color: rgb(125,125,125)!important;}
    `)}function cancelNightModeIframe(){StyleHook_removeIframe(document.getElementsByClassName("BottomGroup")[0].getElementsByTagName("iframe")[0].contentWindow.document,"Ex_Style_NightModeIframe")}function initPkg_Point(){initPkg_Point_insertDom(),initPkg_Point_Func(),initPkg_Point_Constructor(),initPkg_Point_Module()}function initPkg_Point_Module(){initPkg_Point_PointPanel()}function initPkg_Point_insertDom(){var e=document.createElement("div"),t=(e.id="ex-point",e.innerHTML=`
    <span>💗 积分</span>
    <span id="point__value" class="PlayerToolbar-dataLoadding"></span>
    `,document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Point_Func(){document.getElementById("ex-point").addEventListener("click",()=>{var e=document.getElementsByClassName("point__panel")[0];"block"!=e.style.display?e.style.display="block":e.style.display="none"})}async function initPkg_Point_Constructor(){var e=await getUserPoint(dyToken),t=document.getElementById("point__value");"0"==e.error?(t.className="",t.innerText=e.data[0].point,document.getElementById("ex-point").title="更新时间："+e.data[0].update_time):"2"==e.error?alert(e.msg):(t.className="",t.innerText="0")}async function updateUserPoint(){var e=await getUserPoint(dyToken),t=document.getElementById("point__value");"0"==e.error?(t.className="",t.innerText=e.data[0].point,document.getElementById("ex-point").title="更新时间："+e.data[0].update_time,showMessage("【积分系统】积分更新完毕","success")):"2"==e.error?alert(e.msg):(t.className="",t.innerText="0")}function getUserPoint(e){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"http://122.51.5.63:27999/douyu/point/5189167/query_by_uid",data:"token="+e,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;t(e)}})})}function getItemList(e){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"http://122.51.5.63:27999/douyu/point/5189167/query_item",data:"token="+e,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;t(e)}})})}function exchangeItem(e,o,n,i){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"http://122.51.5.63:27999/douyu/point/5189167/exchange",data:"token="+e+"&item_id="+o+"&id="+n+"&info="+i,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;t(e)}})})}function getExchangeRecord(e,o){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"http://122.51.5.63:27999/douyu/point/5189167/query_exchange",data:"token="+e+"&offset="+o,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;t(e)}})})}function getPointList(e){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"http://122.51.5.63:27999/douyu/point/5189167/point_list",data:"token="+e,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;t(e)}})})}function initPkg_Point_PointExchange(){initPkg_Point_PointExchange_insertDom(),initPkg_Point_PointExchange_insertFunc()}function initPkg_Point_PointExchange_insertDom(){renderExchangePanel()}function initPkg_Point_PointExchange_insertFunc(){}async function renderExchangePanel(){if(null===document.getElementById("ex-exchange")){var o=await getItemList(dyToken);if("0"!=o.error)showMessage("【积分系统】获取物品列表失败："+o.msg,"error");else if(null==o.data)showMessage("【积分系统】暂无可兑换的物品","error");else{var e=document.createElement("div");e.id="ex-exchange";let t=`<div class="exchange__panel"><div class="exchange__close">X</div>
    <div class="exchange__wrap">`;for(let e=0;e<o.data.length;e++)t+=`
            <div class="item__wrap">
                <img class="item__pic" src="${o.data[e].pic}" />
                <span class="item__name">${o.data[e].name}</span>
                <span class="item__description">${o.data[e].description}</span>
                <span class="item__num">剩余 ${o.data[e].num} 件</span>
                <span class="item__price">💗${o.data[e].price}</span>
                <div class="item__exchange">兑换</div>
            </div>
        `;t+="</div></div>",e.innerHTML=t;var n=document.getElementsByClassName("PlayerToolbar-Wealth")[0];n.insertBefore(e,n.childNodes[0]),bindExchangePanel(o)}}}function bindExchangePanel(t){var o=document.getElementsByClassName("item__exchange");for(let e=0;e<o.length;e++)o[e].onclick=()=>{exchangeItemEvent(t.data[e].id,t.data[e].num,t.data[e].price)};document.getElementsByClassName("exchange__close")[0].onclick=()=>{var e=document.getElementById("ex-exchange");null!==e&&e.remove()}}async function exchangeItemEvent(o,e,t){e<=0?showMessage("【积分系统】兑换失败：物品数量不足","error"):document.getElementById("point__value").innerText-t<0?showMessage("【积分系统】兑换失败：积分不足","error"):showPrompt("请填写备注信息（联系方式/收货地址）",async e=>{var t;""==e?showMessage("【积分系统】兑换失败：未填写备注信息","error"):(t=await getUserName(),"0"==(t=await exchangeItem(dyToken,o,t,e)).error?(showMessage("【积分系统】"+t.msg,"success"),0<t.data.length&&(document.getElementById("point__value").innerText=t.data[0].point,document.getElementById("ex-point").title="更新时间："+t.data[0].update_time)):showMessage("【积分系统】"+t.msg,"error"))},()=>{})}function initPkg_Point_PointList(){initPkg_Point_PointList_insertDom()}function initPkg_Point_PointList_insertDom(){renderPointList()}function initPkg_Point_PointList_insertFunc(){document.getElementsByClassName("pointlist__close")[0].onclick=()=>{var e=document.getElementById("ex-pointlist");null!==e&&e.remove()}}async function renderPointList(){if(null===document.getElementById("ex-pointlist")){var o=await getPointList(dyToken);if("0"!=o.error)showMessage("【积分系统】获取积分榜失败："+o.msg,"error");else if(null==o.data)showMessage("【积分系统】积分榜暂无数据","error");else{var e=document.createElement("div");e.id="ex-pointlist";let t=`<div class="pointlist__close">X</div>
    <div class="pointlist__wrap">
    <table>
        <tr>
            <th>排名</th>
            <th>昵称</th>
            <th>积分</th>
        </tr>`;for(let e=0;e<o.data.length;e++)t+=`
        <tr>
            <td>${e+1}</td>
            <td>${o.data[e].id}</td>
            <td>${o.data[e].point}</td>
        </tr>
        `;t+="</table></div>",e.innerHTML=t;var n=document.getElementsByClassName("PlayerToolbar-Wealth")[0];n.insertBefore(e,n.childNodes[0]),initPkg_Point_PointList_insertFunc()}}}function initPkg_Point_PointPanel(){initPkg_Point_PointPanel_insertDom(),initPkg_Point_PointPanel_insertFunc()}function initPkg_Point_PointPanel_insertDom(){var e=document.createElement("div"),t=(e.className="point__panel",e.innerHTML=`
            <div class="panel__wrap">
                <div id="panel__update" class="panel__cell">更新积分</div>
                <div id="panel__pointlist" class="panel__cell">积分榜</div>
				<div id="panel__exchange" class="panel__cell">兑换物品</div>
				<div id="panel__record" class="panel__cell">兑换记录</div>
				<div id="panel__rules" class="panel__cell">积分规则</div>
			</div>
			<div class="panel__triangle"></div>
    `,document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Point_PointPanel_insertFunc(){document.getElementById("panel__update").addEventListener("click",()=>{closePointPanel(),updateUserPoint()}),document.getElementById("panel__pointlist").addEventListener("click",()=>{closePointPanel(),initPkg_Point_PointList()}),document.getElementById("panel__exchange").addEventListener("click",async()=>{closePointPanel(),initPkg_Point_PointExchange()}),document.getElementById("panel__record").addEventListener("click",async()=>{closePointPanel(),initPkg_Point_PointRecord()}),document.getElementById("panel__rules").addEventListener("click",async()=>{closePointPanel(),openPage("https://qianjiachun.github.io/DouyuEx/rules",!0)})}function closePointPanel(){document.getElementsByClassName("point__panel")[0].style.display="none"}let currentOffset=0,maxOffset=99999;function initPkg_Point_PointRecord(){currentOffset=0,initPkg_Point_PointRecord_insertDom(),initPkg_Point_PointRecord_insertFunc()}function initPkg_Point_PointRecord_insertDom(){renderRecordWrap(),renderRecord(currentOffset)}function initPkg_Point_PointRecord_insertFunc(){document.getElementsByClassName("record__close")[0].onclick=()=>{var e=document.getElementById("ex-record");null!==e&&e.remove()},document.getElementsByClassName("record__prev")[0].onclick=()=>{currentOffset<10?showMessage("【积分系统】兑换系统已到首页","error"):renderRecord(currentOffset-=10)},document.getElementsByClassName("record__next")[0].onclick=()=>{currentOffset>=maxOffset?showMessage("【积分系统】兑换系统已到尾页","error"):renderRecord(currentOffset+=10)}}function renderRecordWrap(){var e,t;null===document.getElementById("ex-record")&&((e=document.createElement("div")).id="ex-record",e.innerHTML=`
    <div class="record__close">X</div>
    <div class="records__wrap"></div>
    <div class="record__pagenav">
        <div class="record__prev">上一页</div>
        <div class="record__next">下一页</div>
    </div>
    `,(t=document.getElementsByClassName("PlayerToolbar-Wealth")[0]).insertBefore(e,t.childNodes[0]))}async function renderRecord(e){var o=document.getElementsByClassName("records__wrap");if(!(o.length<=0)){o[0].innerHTML="";var n=await getExchangeRecord(dyToken,e);if("0"!=n.error)showMessage("【积分系统】"+n.msg,"error");else if(null==n.data)maxOffset=currentOffset,showMessage("【积分系统】无兑换记录","error");else{let t="";for(let e=0;e<n.data.length;e++)t+=`
        <div class="record__wrap">
            <div class="record__left">
                <div class="record__name">（${"1"==n.data[e].status?"已发货":"未发货"}）${n.data[e].item_name}</div>
                <div class="record__updatetime">${n.data[e].update_time}</div>
            </div>
            <div class="record__right">
                <div class="record__price">💗${n.data[e].price}</div>
            </div>
        </div>
        `;o[0].innerHTML=t,bindRecord(n)}}}function bindRecord(t){var o=document.getElementsByClassName("record__wrap");for(let e=0;e<o.length;e++)o[e].onclick=()=>{PostbirdAlertBox.alert({title:"备注信息",content:t.data[e].info,okBtn:"确定",contentColor:"rgb(51,51,51)"})}}var videoPlayerArr=[];function initPkg_PopupPlayer(){initPkg_PopupPlayer_Dom(),initPkg_PopupPlayer_Func()}function initPkg_PopupPlayer_Dom(){PopupPlayer_insertIcon(),PopupPlayer_insertPrompt()}function PopupPlayer_insertIcon(){var e=document.createElement("div"),t=(e.className="popup-player",e.innerHTML='<a class="ex-panel__icon" title="同屏播放"><svg style="display:block;" t="1579448049771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1804" width="30" height="30"><path d="M353.024 900.416H109.952c-57.856 0-109.952-46.336-109.952-98.432V153.6c0-52.096 52.096-98.432 109.952-98.432h810.176c57.856 0 104.192 46.336 104.192 98.496v185.472c0 28.928-23.168 52.096-46.336 52.096s-46.272-23.168-46.272-52.096V159.36H98.368V807.68h248.896c34.688 0 52.032 17.408 52.032 46.336 0 28.928-17.344 46.272-46.272 46.272" fill="#f26b1f" p-id="1805"></path><path d="M619.2 631.488c-5.76 0-5.76 5.76-5.76 11.52v223.04c0 5.76 5.76 11.52 5.76 11.52h289.344c5.76 0 11.584-5.76 11.584-11.52v-222.976c0-5.824-5.76-11.584-11.52-11.584H619.136z m289.344 338.688h-289.28a103.68 103.68 0 0 1-104.192-104.128v-222.976c0-57.92 46.272-109.952 104.128-109.952h289.344c57.856 0 104.128 46.272 104.128 109.952v222.976c5.824 57.856-40.448 104.128-104.128 104.128z" fill="#f26b1f" p-id="1806"></path></svg><i id="popup-player__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function PopupPlayer_insertPrompt(){var e=document.createElement("div"),t="",t=(e.className="postbird-box-container",e.id="popup-player__prompt",(t+='<div class="postbird-box-dialog">')+'<div style="min-height:170px" class="postbird-box-content">'+'<div class="postbird-box-header">'+'<span class="postbird-box-title"><span>请输入直播间地址：</span><a style="float:right;color:royalblue;" href="http://live.douyuex.com/" target="_blank">DouyuEx联播</a></span>'+"</div>"+'<div class="postbird-box-text">'+'<input id="popup-player__url" value="https://www.douyu.com/5189167" style="height:30px;box-sizing:border-box" type="text" class="postbird-prompt-input" autofocus="true">'+'<label style="margin-right:30px" title="【直播流模式】&#10;1. 速度快&#10;2. 延迟低&#10;3. 占用少&#10;4. 不会进入直播间&#10;5. 支持斗鱼/虎牙/Bilibili"><input id="popup-player__noiframe" type="radio" name="sex" value="无弹幕" checked="checked">无弹幕(推荐)</label>'+'<label title="【框架模式】&#10;1. 速度慢&#10;2. 占用高&#10;3. 会进入直播间&#10;4. 仅支持斗鱼&#10;此模式拖动不是很灵活，请尽量在标题栏小幅度拖动&#10;若拖动无反应请点击页面任意处触发移动"><input id="popup-player__iframe" type="radio" name="sex" value="有弹幕">有弹幕</label>'+"</div>"+'<div class="postbird-box-footer"><button id="popup-player__cancel" class="btn-footer btn-left-footer btn-footer-cancel" style="color:undefined;">取消</button><button id="popup-player__ok" class="btn-footer btn-right-footer btn-footer-ok" style="color:#0e90d2;">确定</button></div></div>',e.innerHTML='<div class="postbird-box-dialog"><div style="min-height:170px" class="postbird-box-content"><div class="postbird-box-header"><span class="postbird-box-title"><span>请输入直播间地址：</span><a style="float:right;color:royalblue;" href="http://live.douyuex.com/" target="_blank">DouyuEx联播</a></span></div><div class="postbird-box-text"><input id="popup-player__url" value="https://www.douyu.com/5189167" style="height:30px;box-sizing:border-box" type="text" class="postbird-prompt-input" autofocus="true"><label style="margin-right:30px" title="【直播流模式】&#10;1. 速度快&#10;2. 延迟低&#10;3. 占用少&#10;4. 不会进入直播间&#10;5. 支持斗鱼/虎牙/Bilibili"><input id="popup-player__noiframe" type="radio" name="sex" value="无弹幕" checked="checked">无弹幕(推荐)</label><label title="【框架模式】&#10;1. 速度慢&#10;2. 占用高&#10;3. 会进入直播间&#10;4. 仅支持斗鱼&#10;此模式拖动不是很灵活，请尽量在标题栏小幅度拖动&#10;若拖动无反应请点击页面任意处触发移动"><input id="popup-player__iframe" type="radio" name="sex" value="有弹幕">有弹幕</label></div><div class="postbird-box-footer"><button id="popup-player__cancel" class="btn-footer btn-left-footer btn-footer-cancel" style="color:undefined;">取消</button><button id="popup-player__ok" class="btn-footer btn-right-footer btn-footer-ok" style="color:#0e90d2;">确定</button></div></div>',document.getElementsByClassName("layout-Main")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_PopupPlayer_Func(){document.getElementsByClassName("popup-player")[0].addEventListener("click",function(){document.getElementById("popup-player__prompt").style.display="block"}),document.getElementById("popup-player__cancel").addEventListener("click",function(){document.getElementById("popup-player__prompt").style.display="none"}),document.getElementById("popup-player__ok").addEventListener("click",function(){var e=document.getElementById("popup-player__url").value;""!=e?1==document.getElementById("popup-player__noiframe").checked?-1!=e.indexOf("douyu.com")?getRealRid_Douyu(e,e=>{createNewVideo(videoPlayerArr.length,e,"Douyu")}):-1!=e.indexOf("bilibili.com")?getRealRid_Bilibili(e,e=>{createNewVideo(videoPlayerArr.length,e,"Bilibili")}):-1!=e.indexOf("huya.com")&&createNewVideo(videoPlayerArr.length,e,"Huya"):createNewVideo_iframe(videoPlayerArr.length,e):showMessage("请输入地址","error"),document.getElementById("popup-player__prompt").style.display="none"}),document.getElementById("popup-player__prompt").addEventListener("keydown",function(t){var o=window.event||e;13==(o.keyCode||o.which||o.charCode)&&document.getElementById("popup-player__ok").click()})}function createNewVideo(e,t,o){switch(o){case"Douyu":createNewVideo_Douyu(e,t);break;case"Bilibili":createNewVideo_Bilibili(e,t);break;case"Huya":var n=String(t).split("/");createNewVideo_Huya(e,n[n.length-1],n[n.length-1]);break;default:createNewVideo_Douyu(e,t)}}function setElementVideo(e,t){var o;flvjs.isSupported()&&(o=document.getElementById("exVideoPlayer"+String(e)),t=flvjs.createPlayer({type:"flv",url:t},{fixAudioTimestampGap:!1}),e>videoPlayerArr.length-1?videoPlayerArr.push(t):videoPlayerArr[e]=t,t.attachMediaElement(o),t.load(),t.play())}function setElementResize(e){let i=document.getElementById("exVideoDiv"+String(e));document.getElementById("exVideoScale"+String(e)).onmousedown=function(e){e.stopPropagation(),e.preventDefault();let t={w:i.offsetWidth,h:i.offsetHeight,x:e.clientX,y:e.clientY},o,n;document.onmousemove=function(e){e.stopPropagation(),e.preventDefault(),o=Math.max(400,e.clientX-t.x+t.w),n=Math.max(0,e.clientY-t.y+t.h),o=o>=document.offsetWidth-i.offsetLeft?document.offsetWidth-i.offsetLeft:o,n=n>=document.offsetHeight-i.offsetTop?document.offsetHeight-i.offsetTop:n,i.style.width=o+"px",i.style.height=n+"px"},document.onmouseup=function(e){e.stopPropagation(),e.preventDefault(),document.onmousemove=null,document.onmouseup=null}}}function setElementDrag(e){let a=document.getElementById("exVideoDiv"+String(e));a.onmousedown=function(e){e.stopPropagation();let t=e.clientX-a.offsetLeft,o=e.clientY-a.offsetTop,n,i;document.onmousemove=function(e){e.stopPropagation(),n=e.clientX-t,i=e.clientY-o,a.style.left=n+"px",a.style.top=i+"px"},document.onmouseup=function(e){e.stopPropagation(),document.onmousemove=null,document.onmouseup=null}}}function createNewVideo_Douyu(i,a){getRealLive_Douyu(a,!0,!1,"1",t=>{if(""!=t||null!=t)if("None"==t)showMessage("房间未开播或其他错误","error");else{var o=String(t).split("/live");let e="";0<o.length&&(e=o[0]);var o=document.createElement("div"),n="",n=(o.id="exVideoDiv"+String(i),o.rid=a,o.className="exVideoDiv",n=(n=(n=(n=(n=(n=(n=(n=(n+="<div class='exVideoInfo' id='exVideoInfo"+String(i)+"'><a title='进入直播间' target='_blank' href='https://www.douyu.com/"+a+"'><span class='exVideoRID' id='exVideoRID"+String(i)+"' style='color:white'>斗鱼 - "+a+"</span></a>")+("<select class='exVideoQn' id='exVideoQn"+String(i)+"'><option value='2'>高清</option><option value='3'>超清</option><option value='4'>蓝光4M</option><option value='8'>蓝光8M</option></option><option value='0'>原画</option></select>"))+("<select style='display:none' class='exVideoCDN' id='exVideoCDN"+String(i)+"'><option value='1'>主线路</option><option value='2'>备用线路5</option><option value='3'>备用线路6</option></select>"))+("<a style='margin-left:5px' href='"+e+"' target='_blank'>无视频？</a>"))+`<input id='exVideoEmbed${String(i)}' type='button' value='嵌入视频' style='height:30px;'>`)+`<input id='exVideoUnEmbed${String(i)}' type='button' value='恢复视频' style='height:30px;display:none;'>`)+`<input id='exVideoCopy${String(i)}' type='button' value='复制直播流' style='height:30px;'>`)+("<a><div class='exVideoClose' id='exVideoClose"+String(i)+"'>X</div></a>")+"</div>")+("<video controls='controls' class='exVideoPlayer' id='exVideoPlayer"+String(i)+"'></video><div class='exVideoScale' id='exVideoScale"+String(i)+"'></div>"),o.innerHTML=n,document.getElementsByClassName("layout-Main")[0]);n.insertBefore(o,n.childNodes[0]),setElementDrag(i),setElementResize(i),setElementFunc_Douyu(i,a),setElementVideo(i,t)}})}function setElementFunc_Douyu(o,e){let t=document.getElementById("exVideoDiv"+String(o)),n=document.getElementById("exVideoPlayer"+String(o)),i=document.getElementById("exVideoInfo"+String(o)),a=document.getElementById("exVideoScale"+String(o)),r=document.getElementById("exVideoEmbed"+String(o)),s=document.getElementById("exVideoUnEmbed"+String(o)),l=document.getElementById("__video2"),d=(n.onclick=function(e){e.stopPropagation(),e.preventDefault(),"block"!=a.style.display?(a.style.display="block",i.style.display="block"):(a.style.display="none",i.style.display="none");for(let e=0;e<videoPlayerArr.length;e++){var t=document.getElementById("exVideoDiv"+String(e));null!=t&&(e==o?t.style.zIndex=1016:t.style.zIndex=1015)}},document.getElementById("exVideoQn"+String(o)));var c=document.getElementById("exVideoCDN"+String(o)),u=document.getElementById("exVideoClose"+String(o));d.onchange=function(){getRealLive_Douyu(e,!0,!1,d.value,e=>{videoPlayerArr[o].destroy(),setElementVideo(o,e)})},c.onchange=function(){getRealLive_Douyu(e,!0,!1,d.value,e=>{videoPlayerArr[o].destroy(),setElementVideo(o,e)})},u.onclick=function(){l.style.display="block",videoPlayerArr[o].destroy(),n.remove(),t.remove()};let m=document.getElementById("exVideoCopy"+String(o))||document.getElementById("exVideoRID"+String(o));m&&(m.onclick=function(){getRealLive_Douyu(e,!m.innerHTML.includes("斗鱼音频流"),!1,d.value,e=>{GM_setClipboard(String(e).replace("https","http")),showMessage("复制成功","success")})}),r&&(r.onclick=function(){l.style.display="none",r.style.display="none",s.style.display="inline",t.style.height="0px",l.parentElement.insertBefore(n,l)}),s&&(s.onclick=function(){l.style.display="block",s.style.display="none",r.style.display="inline",t.style.height="250px",t.insertBefore(n,t.childNodes[t.childNodes.length-1])})}function createNewAudio_Douyu(i,a){getRealLive_Douyu(a,!1,!0,"1",t=>{if(""!=t||null!=t)if("None"==t)showMessage("房间未开播或其他错误","error");else{var o=String(t).split("/live");let e="";0<o.length&&(e=o[0]);var o=document.createElement("div"),n="",n=(o.id="exVideoDiv"+String(i),o.rid=a,o.className="exVideoDiv",n=(n=(n=(n=(n=(n+="<div class='exVideoInfo' id='exVideoInfo"+String(i)+"'><a title='复制直播流地址'><span class='exVideoRID' id='exVideoRID"+String(i)+"' style='color:white'>斗鱼音频流 - "+a+"</span></a>")+("<select style='display:none' class='exVideoQn' id='exVideoQn"+String(i)+"'><option value='1'>流畅</option><option value='2'>高清</option><option value='3'>超清</option><option value='0'>蓝光</option></select>"))+("<select style='display:none' class='exVideoCDN' id='exVideoCDN"+String(i)+"'><option value='1'>主线路</option><option value='2'>备用线路5</option><option value='3'>备用线路6</option></select>"))+("<a style='margin-left:5px;display:none' href='"+e+"' target='_blank'>无视频？</a>"))+("<a><div class='exVideoClose' id='exVideoClose"+String(i)+"'>X</div></a>")+"</div>")+("<video controls='controls' class='exVideoPlayer' id='exVideoPlayer"+String(i)+"'></video><div class='exVideoScale' id='exVideoScale"+String(i)+"'></div>"),o.innerHTML=n,document.getElementsByClassName("layout-Main")[0]);n.insertBefore(o,n.childNodes[0]),setElementDrag(i),setElementResize(i),setElementFunc_Douyu(i,a),setElementVideo(i,t)}})}function createNewVideo_Bilibili(n,i){getRealLive_Bilibili(i,"1","1",e=>{var t,o;""==e&&null==e||(o="",(t=document.createElement("div")).id="exVideoDiv"+String(n),t.rid=i,t.className="exVideoDiv",o=(o=(o=(o=(o=(o=(o=(o+="<div class='exVideoInfo' id='exVideoInfo"+String(n)+"'><a title='进入直播间' target='_blank' href='https://live.bilibili.com/"+i+"'><span class='exVideoRID' id='exVideoRID"+String(n)+"' style='color:white'>Bilibili - "+i+"</span></a>")+"<select class='exVideoQn' id='exVideoQn"+String(n)+"'><option value='1'>流畅</option><option value='2'>高清</option><option value='3'>超清</option><option value='4'>蓝光</option><option value='5'>原画</option></select>")+"<select class='exVideoCDN' id='exVideoCDN"+String(n)+"'><option value='1'>主线路</option><option value='2'>备用线路1</option><option value='3'>备用线路2</option><option value='4'>备用线路3</option></select>")+`<input id='exVideoEmbed${String(n)}' type='button' value='嵌入视频' style='height:30px;'>`)+`<input id='exVideoUnEmbed${String(n)}' type='button' value='恢复视频' style='height:30px;display:none;'>`)+`<input id='exVideoCopy${String(n)}' type='button' value='复制直播流' style='height:30px;'>`)+"<a><div class='exVideoClose' id='exVideoClose"+String(n)+"'>X</div></a></div>")+"<video controls='controls' class='exVideoPlayer' id='exVideoPlayer"+String(n)+"'></video><div class='exVideoScale' id='exVideoScale"+String(n)+"'></div>",t.innerHTML=o,(o=document.getElementsByClassName("layout-Main")[0]).insertBefore(t,o.childNodes[0]),setElementDrag(n),setElementResize(n),setElementFunc_Bilibili(n,i),setElementVideo(n,e))})}function setElementFunc_Bilibili(o,e){let t=document.getElementById("exVideoDiv"+String(o)),n=document.getElementById("exVideoPlayer"+String(o)),i=document.getElementById("exVideoInfo"+String(o)),a=document.getElementById("exVideoScale"+String(o)),r=(n.onclick=function(e){e.stopPropagation(),e.preventDefault(),"block"!=a.style.display?(a.style.display="block",i.style.display="block"):(a.style.display="none",i.style.display="none");for(let e=0;e<videoPlayerArr.length;e++){var t=document.getElementById("exVideoDiv"+String(e));null!=t&&(e==o?t.style.zIndex=1016:t.style.zIndex=1015)}},document.getElementById("exVideoQn"+String(o))),s=document.getElementById("exVideoCDN"+String(o));var l=document.getElementById("exVideoClose"+String(o));let d=document.getElementById("exVideoEmbed"+String(o)),c=document.getElementById("exVideoUnEmbed"+String(o)),u=document.getElementById("__video2");r.onchange=function(){getRealLive_Bilibili(e,r.value,s.value,e=>{videoPlayerArr[o].destroy(),setElementVideo(o,e)})},s.onchange=function(){getRealLive_Bilibili(e,r.value,s.value,e=>{videoPlayerArr[o].destroy(),setElementVideo(o,e)})},l.onclick=function(){u.style.display="block",videoPlayerArr[o].destroy(),n.remove(),t.remove()},d.onclick=function(){u.style.display="none",d.style.display="none",c.style.display="inline",t.style.height="0px",u.parentElement.insertBefore(n,u)},c.onclick=function(){u.style.display="block",c.style.display="none",d.style.display="inline",t.style.height="250px",t.insertBefore(n,t.childNodes[t.childNodes.length-1])},document.getElementById("exVideoCopy"+String(o)).onclick=function(){getRealLive_Bilibili(e,r.value,s.value,e=>{GM_setClipboard(e),showMessage("复制成功","success")})}}function createNewVideo_Huya(n,i,a){getRealLive_Huya(i,"1",(e,t)=>{var o;""==e&&null==e||(""!=t?showMessage(t,"error"):(t="",(o=document.createElement("div")).id="exVideoDiv"+String(n),o.rid=i,o.className="exVideoDiv",t=(t=(t=(t=(t=(t=(t+="<div class='exVideoInfo' id='exVideoInfo"+String(n)+"'><a title='进入直播间' target='_blank' href='"+i+"'><span class='exVideoRID' id='exVideoRID"+String(n)+"' style='color:white'>Huya - "+a+"</span></a>")+"<select class='exVideoQn' id='exVideoQn"+String(n)+"'><option value='1'>流畅</option><option value='2'>超清</option><option value='3'>蓝光4M</option><option value='4'>原画</option></select>")+`<input id='exVideoEmbed${String(n)}' type='button' value='嵌入视频' style='height:30px;'>`)+`<input id='exVideoUnEmbed${String(n)}' type='button' value='恢复视频' style='height:30px;display:none;'>`)+`<input id='exVideoCopy${String(n)}' type='button' value='复制直播流' style='height:30px;'>`)+"<a><div class='exVideoClose' id='exVideoClose"+String(n)+"'>X</div></a></div>")+"<video controls='controls' class='exVideoPlayer' id='exVideoPlayer"+String(n)+"'></video><div class='exVideoScale' id='exVideoScale"+String(n)+"'></div>",o.innerHTML=t,(t=document.getElementsByClassName("layout-Main")[0]).insertBefore(o,t.childNodes[0]),setElementDrag(n),setElementResize(n),setElementFunc_Huya(n,i),setElementVideo(n,e)))})}function setElementFunc_Huya(o,e){let t=document.getElementById("exVideoDiv"+String(o)),n=document.getElementById("exVideoPlayer"+String(o)),i=document.getElementById("exVideoInfo"+String(o)),a=document.getElementById("exVideoScale"+String(o)),r=document.getElementById("exVideoEmbed"+String(o)),s=document.getElementById("exVideoUnEmbed"+String(o)),l=(n.onclick=function(e){e.stopPropagation(),e.preventDefault(),"block"!=a.style.display?(a.style.display="block",i.style.display="block"):(a.style.display="none",i.style.display="none");for(let e=0;e<videoPlayerArr.length;e++){var t=document.getElementById("exVideoDiv"+String(e));null!=t&&(e==o?t.style.zIndex=1016:t.style.zIndex=1015)}},document.getElementById("exVideoQn"+String(o)));var d=document.getElementById("exVideoClose"+String(o));let c=document.getElementById("__video2");l.onchange=function(){getRealLive_Huya(e,l.value,(e,t)=>{""!=t?showMessage(t,"error"):(videoPlayerArr[o].destroy(),setElementVideo(o,e))})},d.onclick=function(){c.style.display="block",videoPlayerArr[o].destroy(),n.remove(),t.remove()},document.getElementById("exVideoCopy"+String(o)).onclick=function(){getRealLive_Huya(e,l.value,(e,t)=>{""!=t?showMessage(t,"error"):(GM_setClipboard(e),showMessage("复制成功","success"))})},r.onclick=function(){c.style.display="none",r.style.display="none",s.style.display="inline",t.style.height="0px",c.parentElement.insertBefore(n,c)},s.onclick=function(){c.style.display="block",s.style.display="none",r.style.display="inline",t.style.height="250px",t.insertBefore(n,t.childNodes[t.childNodes.length-1])}}function createNewVideo_iframe(e,t){var o,n,i;-1==String(t).indexOf("douyu.com")?showMessage("有弹幕模式仅支持斗鱼直播","error"):(i=(i=String(t).split("/"))[i.length-1],n="",(o=document.createElement("div")).id="exVideoDiv"+String(e),o.rid=i,o.className="exVideoDiv",n=(n=(n=(n+="<div class='exVideoInfo' id='exVideoInfo"+String(e)+"'><span class='exVideoRID' id='exVideoRID"+String(e)+"' style='color:white'>斗鱼 - "+i+"</span>")+"<a><div class='exVideoClose' id='exVideoClose"+String(e)+"'>X</div></a></div>")+"<iframe class='exVideoPlayer' id='exVideoPlayer"+String(e)+"' src="+t+"?exid=chun></iframe>")+"<div class='exVideoScale' id='exVideoScale"+String(e)+"'></div>",o.innerHTML=n,(i=document.getElementsByClassName("layout-Main")[0]).insertBefore(o,i.childNodes[0]),setElementDrag(e),setElementResize(e),e>videoPlayerArr.length-1?videoPlayerArr.push("iframe"):videoPlayerArr[e]="iframe",setElementFunc_iframe(e))}function setElementFunc_iframe(o){let e=document.getElementById("exVideoDiv"+String(o));document.getElementById("exVideoClose"+String(o)).onclick=function(){videoPlayerArr[o].destroy(),e.remove()},e.onclick=function(e){e.stopPropagation(),e.preventDefault();for(let e=0;e<videoPlayerArr.length;e++){var t=document.getElementById("exVideoDiv"+String(e));null!=t&&(e==o?t.style.zIndex=1016:t.style.zIndex=1015)}}}let real_info={view:"",showtime:1015,danmu_person_count:"",gift_person_count:"",paid_person_count:"",isShow:2,money_yc:0,money_bag:0,money_total:0},hasAvatarBottom=!1;function initPkg_RealAudience(){initPkg_RealAudience_StyleHook(),initPkg_RealAudience_Dom(),initPkg_RealAudience_Func(),setAvatarVideo(),setNobleNum(),fetch("https://www.douyu.com/swf_api/h5room/"+rid,{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.json()).then(e=>{real_info.showtime=e.data.show_time,real_info.isShow=e.data.show_status,setRealViewer(),setInterval(setRealViewer,15e4),setInterval(switchRealAndTodayWatch,5e3)}).catch(e=>{console.log("请求失败!",e)})}function initPkg_RealAudience_StyleHook(){StyleHook_set("Ex_Style_RealAudience",`
    .VideoEntry{display:none !important;}
	.layout-Player-rank{top:34px !important;}
    `)}function initPkg_RealAudience_Dom(){document.getElementsByClassName("VideoEntry")[0].style.display="none";var e="",t=document.createElement("div"),e=(t.className="real-audience",e=(e=(e=(e+="<div style='flex: 1;white-space: nowrap'>")+("<div id='real-audience__t' style='display: inline-block;margin-right:3px;' title='今日累计观看人数'>"+'<svg style="width:16px;height:16px" t="1566119680547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3494" width="128" height="128"><path d="M712.820909 595.224609C807.907642 536.686746 870.40537 437.74751 870.40537 325.549212 870.400378 145.753547 709.943392 0 511.997503 0 314.055363 0 153.599626 145.753547 153.599626 325.549212 153.599626 437.74751 216.092361 536.686746 311.179092 595.219615 149.961841 657.72608 31.268214 793.205446 5.334335 955.968198 1.926253 962.195123 0 969.212275 0 976.638899 0 1002.324352 22.919038 1023.151098 51.198627 1023.151098 79.476967 1023.151098 102.396005 1002.324352 102.396005 976.638899L102.396005 1023.151098C102.396005 817.669984 285.787009 651.099674 511.997503 651.099674 738.212992 651.099674 921.602746 817.669984 921.602746 1023.151098L921.602746 976.638899C921.602746 1002.324352 944.523034 1023.151098 972.801376 1023.151098 1001.07472 1023.151098 1024 1002.324352 1024 976.638899 1024 969.212275 1022.073747 962.195123 1018.659424 955.968198 992.731789 793.205446 874.038157 657.72608 712.820909 595.224609ZM511.997503 558.080262C370.618285 558.080262 256.000624 453.967732 256.000624 325.545467 256.000624 197.121954 370.618285 93.009424 511.997503 93.009424 653.386707 93.009424 767.993133 197.121954 767.993133 325.545467 767.993133 453.972726 653.386707 558.080262 511.997503 558.080262L511.997503 558.080262Z" p-id="3495"></path></svg><span id="real-audience__total" style="color:#ed5a65">****</span></div>')+("<div style='display: inline-block;margin-right:3px;' title='弹幕人数'>"+'<svg t="1587796804183" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20780" width="16" height="16"><path d="M811.8272 62.6176H212.1728c-79.9232 0-149.8624 69.9392-149.8624 149.9136v599.6032a150.3232 150.3232 0 0 0 149.8624 149.9136h599.6544a150.3232 150.3232 0 0 0 149.8624-149.9136V212.5312c0-79.9744-69.9392-149.9136-149.8624-149.9136zM263.5264 367.104c30.0032 0 49.9712 19.968 49.9712 49.9712s-19.968 49.92-49.9712 49.92-49.9712-19.968-49.9712-49.92 20.0192-49.9712 49.9712-49.9712z m449.6896 294.8096H263.5264c-24.9856 0-49.9712-24.9856-49.9712-49.9712s24.9856-49.9712 49.9712-49.9712h449.6896c24.9856 0 49.9712 24.9856 49.9712 49.9712s-24.9856 49.9712-49.9712 49.9712z m99.9424-199.68H463.4112c-24.9856 0-49.9712-24.9856-49.9712-49.9712s24.9856-49.9712 49.9712-49.9712h349.7472c24.9856 0 49.9712 24.9856 49.9712 49.9712s-24.9856 49.7664-49.9712 49.7664z" p-id="20781" fill="#1296db"></path></svg><span id="real-audience__barrage">****</span></div>'))+("<div id='real-audience__money' style='display: inline-block;margin-right:3px;' title='今日累计礼物价值'>"+'<svg t="1579155265981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6949" width="16" height="16"><path d="M136.96 67.413h181.76L512 452.693l193.28-385.28h181.76l-245.76 445.44h163.84v84.48h-211.2l-1.28 1.28v106.24h212.48v84.48H592.64v192H431.36v-192h-211.2v-84.48h211.2v-106.24l-1.28-1.28H220.16v-84.48h162.56z" fill="#F54330" p-id="6950"></path></svg><span id="real-audience__money_yc">****</span></div>')+"</div>")+'<span id="real-audience__time" style="white-space: nowrap;display: block;">已播:****</span>'+'<span id="real-audience__watchtime" style="white-space: nowrap;display: none;">已观看:****</span>',t.innerHTML='<div style=\'flex: 1;white-space: nowrap\'><div id=\'real-audience__t\' style=\'display: inline-block;margin-right:3px;\' title=\'今日累计观看人数\'><svg style="width:16px;height:16px" t="1566119680547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3494" width="128" height="128"><path d="M712.820909 595.224609C807.907642 536.686746 870.40537 437.74751 870.40537 325.549212 870.400378 145.753547 709.943392 0 511.997503 0 314.055363 0 153.599626 145.753547 153.599626 325.549212 153.599626 437.74751 216.092361 536.686746 311.179092 595.219615 149.961841 657.72608 31.268214 793.205446 5.334335 955.968198 1.926253 962.195123 0 969.212275 0 976.638899 0 1002.324352 22.919038 1023.151098 51.198627 1023.151098 79.476967 1023.151098 102.396005 1002.324352 102.396005 976.638899L102.396005 1023.151098C102.396005 817.669984 285.787009 651.099674 511.997503 651.099674 738.212992 651.099674 921.602746 817.669984 921.602746 1023.151098L921.602746 976.638899C921.602746 1002.324352 944.523034 1023.151098 972.801376 1023.151098 1001.07472 1023.151098 1024 1002.324352 1024 976.638899 1024 969.212275 1022.073747 962.195123 1018.659424 955.968198 992.731789 793.205446 874.038157 657.72608 712.820909 595.224609ZM511.997503 558.080262C370.618285 558.080262 256.000624 453.967732 256.000624 325.545467 256.000624 197.121954 370.618285 93.009424 511.997503 93.009424 653.386707 93.009424 767.993133 197.121954 767.993133 325.545467 767.993133 453.972726 653.386707 558.080262 511.997503 558.080262L511.997503 558.080262Z" p-id="3495"></path></svg><span id="real-audience__total" style="color:#ed5a65">****</span></div><div style=\'display: inline-block;margin-right:3px;\' title=\'弹幕人数\'><svg t="1587796804183" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20780" width="16" height="16"><path d="M811.8272 62.6176H212.1728c-79.9232 0-149.8624 69.9392-149.8624 149.9136v599.6032a150.3232 150.3232 0 0 0 149.8624 149.9136h599.6544a150.3232 150.3232 0 0 0 149.8624-149.9136V212.5312c0-79.9744-69.9392-149.9136-149.8624-149.9136zM263.5264 367.104c30.0032 0 49.9712 19.968 49.9712 49.9712s-19.968 49.92-49.9712 49.92-49.9712-19.968-49.9712-49.92 20.0192-49.9712 49.9712-49.9712z m449.6896 294.8096H263.5264c-24.9856 0-49.9712-24.9856-49.9712-49.9712s24.9856-49.9712 49.9712-49.9712h449.6896c24.9856 0 49.9712 24.9856 49.9712 49.9712s-24.9856 49.9712-49.9712 49.9712z m99.9424-199.68H463.4112c-24.9856 0-49.9712-24.9856-49.9712-49.9712s24.9856-49.9712 49.9712-49.9712h349.7472c24.9856 0 49.9712 24.9856 49.9712 49.9712s-24.9856 49.7664-49.9712 49.7664z" p-id="20781" fill="#1296db"></path></svg><span id="real-audience__barrage">****</span></div><div id=\'real-audience__money\' style=\'display: inline-block;margin-right:3px;\' title=\'今日累计礼物价值\'><svg t="1579155265981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6949" width="16" height="16"><path d="M136.96 67.413h181.76L512 452.693l193.28-385.28h181.76l-245.76 445.44h163.84v84.48h-211.2l-1.28 1.28v106.24h212.48v84.48H592.64v192H431.36v-192h-211.2v-84.48h211.2v-106.24l-1.28-1.28H220.16v-84.48h162.56z" fill="#F54330" p-id="6950"></path></svg><span id="real-audience__money_yc">****</span></div></div><span id="real-audience__time" style="white-space: nowrap;display: block;">已播:****</span><span id="real-audience__watchtime" style="white-space: nowrap;display: none;">已观看:****</span>',document.getElementsByClassName("layout-Player-announce")[0]);e.insertBefore(t,e.childNodes[0])}function initPkg_RealAudience_Func(){document.getElementsByClassName("real-audience")[0].addEventListener("click",function(){openPage("https://www.doseeing.com/room/"+rid,!0)})}async function setRealViewer(){null!=document.querySelector(".MatchSystemChatRoomEntry")&&(document.querySelector(".MatchSystemChatRoomEntry").style.display="none");var e=await getRealViewer(rid),t=await getTodayWatch(rid);let o=0;o=2==real_info.isShow||1015==real_info.showtime?0:Math.floor(Date.now()/1e3)-Number(real_info.showtime),real_info.view=e.data["active.uv"]||0,real_info.danmu_person_count=e.data["chat.uv"]||0,real_info.gift_person_count=e.data["gift.all.uv"]||0,real_info.paid_person_count=e.data["gift.paid.uv"]||0,real_info.money_yc=Number(e.data["gift.paid.price"]/100||0).toFixed(2),real_info.money_total=Number(e.data["gift.all.price"]/100||0).toFixed(2),document.getElementById("real-audience__total").innerText=real_info.view,document.getElementById("real-audience__t").title="活跃人数:"+real_info.view+" 弹幕人数:"+real_info.danmu_person_count+" 送礼人数:"+real_info.gift_person_count+" 付费人数:"+real_info.paid_person_count,document.getElementById("real-audience__barrage").innerText=real_info.danmu_person_count,document.getElementById("real-audience__money_yc").innerText=real_info.money_yc,document.getElementById("real-audience__money").title="总礼物价值:"+real_info.money_total+" 鱼翅礼物:"+real_info.money_yc,document.getElementById("real-audience__time").innerText="已播:"+formatSeconds(o),document.getElementById("real-audience__time").title="开播时间:"+String(dateFormat("yyyy年MM月dd日hh时mm分ss秒 ",new Date(Number(real_info.showtime+"000"))))+"\n已观看:"+formatSeconds(t.data.todayWatch),0==t.error&&(document.getElementById("real-audience__watchtime").innerText="已观看:"+formatSeconds(t.data.todayWatch))}function setAvatarVideo(){var e,t=document.querySelectorAll(".VideoEntry-tabItem>a")[0];null!=t&&(e=t.href+"?type=video",t=t.href+"?type=liveReplay",setAvatarVideo_Dom(),setAvatarVideo_Func(e,t),document.getElementsByClassName("Title-anchorPic-bottom")[0].style.display="none",document.getElementsByClassName("Title-anchorPic-bottom")[0].style.height=hasAvatarBottom?"44px":"22px",document.getElementsByClassName("Title-anchorPicBack")[0].addEventListener("mouseenter",()=>{document.getElementsByClassName("Title-anchorPic-bottom")[0].style.display="block"}),document.getElementsByClassName("Title-anchorPicBack")[0].addEventListener("mouseleave",()=>{document.getElementsByClassName("Title-anchorPic-bottom")[0].style.display="none"}))}function setAvatarVideo_Dom(){var e=document.createElement("div");hasAvatarBottom=!!document.getElementsByClassName("Title-anchorPic-bottom")[0],e.className=hasAvatarBottom?"":"Title-anchorPic-bottom",e.innerHTML=`
	<div id="Ex_VideoReview" class="Title-anchorPic-bottomItem"><span>回看</span></div>
	<i style="top: 28px"></i>
	<div id="Ex_VideoSubmit" class="Title-anchorPic-bottomItem"><span>投稿</span></div>
	`,(document.getElementsByClassName("Title-anchorPic-bottom")[0]||document.getElementsByClassName("Title-anchorPicBack")[0]).append(e)}function setAvatarVideo_Func(e,t){document.getElementById("Ex_VideoSubmit").addEventListener("click",()=>{openPage(e,!0)}),document.getElementById("Ex_VideoReview").addEventListener("click",()=>{openPage(t,!0)})}function getTodayWatch(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/interactnc/web/fsjk/getCardTaskInfo?rid="+e,{method:"GET",mode:"no-cors",credentials:"include"}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{o(e)})})}function getRealViewer(e){return new Promise((t,o)=>{GM_xmlhttpRequest({method:"POST",url:"https://www.doseeing.com/xeee/room/aggr",headers:{Connection:"keep-alive","Content-Type":"application/json;charset=UTF-8",Origin:"https://www.doseeing.com",Referer:"https://www.doseeing.com/room/"+e,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/91.0.4472.114"},data:`{"m":"${window.btoa(`rid=${e}&dt=0`).split("").reverse().join("")}"}`,responseType:"json",onload:e=>{t(e.response)},onerror:e=>{o(e)}})})}function switchRealAndTodayWatch(){var e=document.getElementById("real-audience__time"),t=document.getElementById("real-audience__watchtime");"none"==e.style.display?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block")}function setNobleNum(){document.getElementById("real-audience__barrage").parentNode.style.display="none";var e=document.createElement("div"),e=(e.id="nobleNumbers",e.style="display: inline-block;margin-right:3px;",e.title="贵宾数量",html="",html=(html+="😯贵宾(")+'<span id="noble_numbers">****</span>'+")",e.innerHTML=html,document.getElementsByClassName("real-audience")[0].firstChild.appendChild(e),document.getElementsByClassName("ChatRank-tabTitle")[2].getElementsByTagName("em")[0]);let o=document.getElementById("noble_numbers");o.innerText=e.innerText,new MutationObserver(e=>{for(var t of e)o.innerText=t.target.textContent}).observe(e,{childList:!0,subtree:!0,characterData:!0})}function initPkg_Refresh(){initPkg_Refresh_BarrageFrame(),initPkg_Refresh_Video(),initPkg_Refresh_Barrage()}function saveData_Refresh(){var e={barrageFrame:{status:refresh_BarrageFrame_getStatus()},video:{status:refresh_Video_getStatus()},barrage:{status:refresh_Barrage_getStatus()}};localStorage.setItem("ExSave_Refresh",JSON.stringify(e))}let current_barrage_status=0;function initPkg_Refresh_Barrage(){initPkg_Refresh_Barrage_Dom(),initPkg_Refresh_Barrage_Func(),initPkg_Refresh_Barrage_Set()}function initPkg_Refresh_Barrage_Dom(){Refresh_Barrage_insertIcon()}function Refresh_Barrage_insertIcon(){var e=document.createElement("a"),t=(e.className="refresh-barrage",e.id="refresh-barrage",e.innerHTML='<svg t="1588051109604" id="refresh-barrage__svg" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3095" width="16" height="16"><path d="M588.416 516.096L787.2 317.312a54.016 54.016 0 1 0-76.416-76.416L512 439.68 313.216 241.024A54.016 54.016 0 1 0 236.8 317.376l198.784 198.848-198.016 197.888a54.016 54.016 0 1 0 76.416 76.416L512 592.576l197.888 197.952a54.016 54.016 0 1 0 76.416-76.416L588.416 516.096z" fill="#AFAFAF" p-id="3096"></path></svg><i class="Barrage-toolbarIcon"></i><span id="refresh-barrage__text" class="Barrage-toolbarText">前缀</span>',document.getElementsByClassName("Barrage-toolbar")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Refresh_Barrage_Func(){document.getElementById("refresh-barrage").addEventListener("click",function(){(0==current_barrage_status?setRefreshBarrage:cancelRefreshBarrage)(),saveData_Refresh()})}function refresh_Barrage_getStatus(){return 1==current_barrage_status}function initPkg_Refresh_Barrage_Set(){var e=localStorage.getItem("ExSave_Refresh");null!=e&&("barrage"in(e=JSON.parse(e))==0&&(e.barrage={status:!1}),1==e.barrage.status)&&setRefreshBarrage()}function setRefreshBarrage(){StyleHook_set("Ex_Style_RefreshBarrage",`
    .UserCsgoGameDataMedal,.Barrage-honor,.Barrage-listItem .Barrage-icon,.Barrage-listItem .FansMedal.is-made,.Barrage-listItem .RoomLevel,.Barrage-listItem .Motor,.Barrage-listItem .ChatAchievement,.Barrage-listItem .Barrage-hiIcon,.Barrage-listItem .Medal,.Barrage-listItem .MatchSystemTeamMedal{display:none !important;}
    /*.Barrage-listItem .UserLevel{display:none !important;}*/
    .Barrage-listItem .Baby{display:none !important;}
    `),current_barrage_status=1,document.getElementById("refresh-barrage").style.backgroundColor="rgb(18,150,219)",document.getElementById("refresh-barrage__text").style.color="#fff"}function cancelRefreshBarrage(){StyleHook_remove("Ex_Style_RefreshBarrage"),current_barrage_status=0,document.getElementById("refresh-barrage").style.backgroundColor="#fff",document.getElementById("refresh-barrage__text").style.color=""}function initPkg_Refresh_BarrageFrame(){initPkg_Refresh_BarrageFrame_Dom(),initPkg_Refresh_BarrageFrame_Func(),initPkg_Refresh_BarrageFrame_Set()}function initPkg_Refresh_BarrageFrame_Dom(){Refresh_BarrageFrame_insertIcon()}function Refresh_BarrageFrame_insertIcon(){var e=document.createElement("a"),t=(e.className="Barrage-toolbarLock",e.id="refresh-barrage-frame",e.innerHTML='<i class="Barrage-toolbarIcon"></i><span id="refresh-barrage-frame__text" class="Barrage-toolbarText">拉高</span>',document.getElementsByClassName("Barrage-toolbar")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Refresh_BarrageFrame_Func(){document.getElementById("refresh-barrage-frame").addEventListener("click",function(){var e,t=document.getElementsByClassName("layout-Player-rank")[0],o=document.getElementById("js-player-barrage"),n=document.getElementById("js-room-activity"),i=document.getElementsByClassName("Barrage")[0];"none"==t.style.display?(t.style.display="block",o.style="",n.style.display="block",i.className="Barrage",document.getElementById("refresh-barrage-frame__text").innerText="拉高"):(e=document.getElementsByClassName("layout-Player-announce")[0].offsetHeight,t.style.display="none",n.style.display="none",o.style="top:"+e+"px",i.className="Barrage top-0-important",document.getElementById("refresh-barrage-frame__text").innerText="恢复"),saveData_Refresh()})}function refresh_BarrageFrame_getStatus(){return"none"==document.getElementsByClassName("layout-Player-rank")[0].style.display}function initPkg_Refresh_BarrageFrame_Set(){var e,t,o,n=localStorage.getItem("ExSave_Refresh");null!=n&&("barrageFrame"in(n=JSON.parse(n))==0&&(n.barrageFrame={status:!1}),1==n.barrageFrame.status)&&(n=document.getElementsByClassName("layout-Player-rank")[0],e=document.getElementById("js-player-barrage"),t=document.getElementById("js-room-activity"),o=document.getElementsByClassName("layout-Player-announce")[0].offsetHeight,n.style.display="none",t.style.display="none",e.style="top:"+o+"px",document.getElementById("refresh-barrage-frame__text").innerText="恢复")}let video_num=0;function initPkg_Refresh_Video(){let e=setInterval(()=>{0<document.getElementsByClassName("right-e7ea5d").length&&(clearInterval(e),initPkg_Refresh_Video_Dom(),initPkg_Refresh_Video_Func(),initPkg_Refresh_Video_Set()),100<=++video_num&&clearInterval(e)},1500)}function initPkg_Refresh_Video_Dom(){Refresh_Video_insertIcon()}function Refresh_Video_insertIcon(){let e=document.createElement("li"),t=(e.id="refresh-video",e.innerText="简洁模式",document.getElementsByClassName("menu-da2a9e")[0]);t.insertBefore(e,t.childNodes[t.childNodes.length-1]),(e=document.createElement("div")).id="refresh-video2",e.title="视频区简洁模式",e.innerHTML='<svg t="1587295753406" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6410" width="22" height="22"><path d="M218.88 64l73.728 23.168c-9.792 20.608-18.432 41.216-25.792 61.824h224.896v73.408H362.688c19.648 25.728 39.36 54.08 59.008 84.992l-77.44 42.496a1235.456 1235.456 0 0 0-66.368-127.552h-47.936L189.376 288c-14.72 20.608-34.432 43.776-59.008 69.504L64 307.328C135.296 235.2 186.944 154.112 218.88 64z m383.488 0l70.08 23.168c-7.36 20.608-16 41.216-25.792 61.824h261.824v73.408h-151.168c19.648 25.728 36.864 52.8 51.648 81.088l-66.368 42.496a1440.32 1440.32 0 0 0-70.08-123.584h-59.072a594.816 594.816 0 0 1-95.872 131.264L451.2 303.424C520 231.36 570.432 151.552 602.368 64zM259.456 334.336a491.52 491.52 0 0 1 84.8 108.16l-70.08 38.592c-17.216-36.032-43.008-72.064-77.44-108.16l62.72-38.592z m125.376 48.832H832v472.576c0 33.472-7.36 59.2-22.144 77.248-14.72 17.984-36.864 27.008-66.368 27.008-24.576 0-44.352-1.28-78.784-3.84l-18.432-64c39.36 2.56 71.296 3.84 95.872 3.84 17.216 0 25.792-18.048 25.792-54.08V448.832H384.832V383.168zM128 448h64v512H128V448z m512 64.448V832H320V512.448h320zM576 640V576H384.832v64H576z m-191.168 64v64H576v-64H384.832z" p-id="6411" id="refresh-video2-svg"></path></svg>',(t=document.getElementsByClassName("PlayerToolbar")[0]).insertBefore(e,t.childNodes[0])}function initPkg_Refresh_Video_Func(){new DomHook(".right-e7ea5d",!0,()=>{var e=!!document.querySelector(".wfs-2a8e83.removed-9d4c42");document.getElementById("js-player-toolbar").style=e?"z-index:20":"z-index:30"}),document.getElementById("refresh-video").addEventListener("click",e=>{var t=document.getElementsByClassName("PlayerToolbar-ContentRow")[0],o=document.getElementsByClassName("layout-Player-video")[0],n=document.getElementById("refresh-video"),i=document.getElementById("refresh-video2");("hidden"==t.style.visibility?(t.style.visibility="visible",o.style="",i.style.display="none",n.innerText="简洁模式",refresh_Video_removeStyle):(t.style.visibility="hidden",o.style="bottom:0;z-index:25",i.style.display="block",n.innerText="√ 简洁模式",refresh_Video_setStyle))(),saveData_Refresh(),resizeWindow()}),document.getElementById("refresh-video2").addEventListener("click",()=>{var e=document.getElementsByClassName("PlayerToolbar-ContentRow")[0],t=document.getElementsByClassName("layout-Player-video")[0],o=document.getElementById("refresh-video"),n=document.getElementById("refresh-video2");("hidden"==e.style.visibility?(e.style.visibility="visible",t.style="",n.style.display="none",o.innerText="简洁模式",refresh_Video_removeStyle):(e.style.visibility="hidden",t.style="bottom:0;z-index:25",n.style.display="block",o.innerText="√ 简洁模式",refresh_Video_setStyle))(),saveData_Refresh(),resizeWindow()})}function refresh_Video_getStatus(){return"hidden"==document.getElementsByClassName("PlayerToolbar-ContentRow")[0].style.visibility}function initPkg_Refresh_Video_Set(){var e,t,o,n,i=localStorage.getItem("ExSave_Refresh");null!=i&&("video"in(i=JSON.parse(i))==0&&(i.video={status:!1}),1==i.video.status)&&(i=document.getElementsByClassName("PlayerToolbar-ContentRow")[0],e=document.getElementsByClassName("layout-Player-video")[0],t=document.getElementById("refresh-video2"),o=document.getElementById("refresh-video"),n=document.getElementById("js-player-toolbar"),i.style.visibility="hidden",e.style="bottom:0;z-index:25",n.style="z-index:30",null!=(i=localStorage.getItem("ExSave_FullScreen"))&&JSON.parse(i).isFullScreen&&(n.style="z-index:20"),t.style.display="block",o.innerText="√ 简洁模式",refresh_Video_setStyle(),resizeWindow())}function refresh_Video_setStyle(){StyleHook_set("Ex_Style_VideoRefresh",`
    .PELact,.pushTower-wrapper-gf1HG,.PkView-9f6a2c,.MorePk,.RandomPKBar,.LiveRoomLoopVideo,.LiveRoomDianzan,.maiMaitView-68e80c,.PkView{display:none !important;}
    `)}function refresh_Video_removeStyle(){StyleHook_remove("Ex_Style_VideoRefresh")}function initPkg_RemoveAD(){let e=setInterval(()=>{null!=document.getElementsByClassName("PlayerToolbar-wealthNum")[0]&&(clearInterval(e),optimizePageStyle(),removeChatLimit(),initPkg_RemoveMsgNotice())},1e3)}function removeAD(){StyleHook_set("Ex_Style_RemoveAD",`
    .ScreenBannerAd,.XinghaiAd,.CustomGroupGuide,.FudaiGiftToolBarTips,.UserInfo-tryEnterHiddenLead,.BargainingKit,.AnchorPocketTips,.FishShopTip,.FollowGuide,#js-bottom-right-cloudGame,.CloudGameLink,.RoomText-icon-horn,.RoomText-list,.Search-ad,.RedEnvelopAd,.noHandlerAd-0566b9,.PcDiversion,.DropMenuList-ad,.DropPane-ad,.WXTipsBox,.igl_bg-b0724a,.closure-ab91fb,.VideoAboveVivoAd,.css-widgetWrapper-EdVVC,.watermark-442a18,.FollowGuide-FadeOut,.MatchSystemChatRoomEntry-roomTabs,.FansMedalDialog-normal,.GameLauncher,.recommendAD-54569e,.recommendApp-0e23eb,.Title-ad,.Bottom-ad,.SignBarrage,.corner-ad-495ade,.SignBaseComponent-sign-ad,.SuperFansBubble,.is-noLogin,.PlayerToolbar-signCont,#js-widget,.Frawdroom,.HeaderGif-right,.HeaderGif-left,.liveos-workspace{display:none !important;}
    .Barrage-topFloater{z-index:999}
    .danmuAuthor-3d7b4a, .danmuContent-25f266{overflow: initial}
    .BattleShipTips{display:none !important;}
    .LastLiveTime,.recommendView-3e8b62{display:none !important;}
    .TurntableLottery-actTips{display:none !important;}
    .feedback-e27241{display:none !important;}
    .FansMedalEnter-maxFlag{display:none !important;}
    .Header-follow-listBox{max-height:640px !important;}

    .GuessGameMiniPanelB-wrapper{display:none !important;}

    .ZoomTip{display:none !important;}

    /*福利券*/
    .PlayerToolbar-couponInfo{display:none !important;}
    /*太空探险tips*/
    .AroundStarsActTips-actTips,.AroundStarsMoonBoxTips,.AroundStarsPlanetTips{display:none !important;}
    /*优化页面*/
    #js-barrage-list-parent{scrollbar-width: none;-ms-overflow-style: none;width:98%;height:100%}
    #js-barrage-list-parent::-webkit-scrollbar{display: none;}
    /*陪玩*/
    .InteractPlayWithEnter-enterTips1{display:none !important;}

    /*恢复emoji彩色 chrome加粗情况下emoji会变灰，需要找一个fontweight起始值在500的字体库才可以兼容*/

    /*右侧分享*/
    .SharePanel,.CommonShareToolkit{
        display: none!important;
    }

    /*去除还在电脑面前的mask*/
    .mask1-63237a,.mask2-a8df6e,.panel1-1484c9,.panel2-5ece0e{
        display: none!important;
    }
    /*左侧悬浮二维码广告*/
    .IconCardAdCard{
        display: none!important;
    }
    /*视频右侧的游戏手柄按钮AD*/
    .IconCardAd {
        display: none!important;
    }
    /*视频区视频广告*/
    .CloseVideoPlayerAd,.IconCardAdBoundsBox{
        display: none!important;
    }
    /*直播间顶部广告*/
    .room-top-banner-box {
        display: none!important;
    }
    /*弹幕框底部进场弹幕信息*/
    #js-barrage-extend-container {
        display: none!important;
        display: var(--enter-display, none) !important;
    }
    /*直播间右侧广告*/
    .LadderNav {
        display: none!important;
    }
    #js-bottom-right-recommendAd {
        display: none!important;
    }
    /*弹幕框顶部广告*/
    .aside-top-uspension-box {
        display: none!important;
    }
    #js-player-asideMain {
        top: 0!important;
    }
    `)}function removeChatLimit(){let e;null!=(e=document.getElementsByClassName("ChatSend-button")[0])&&(e.className="ChatSend-button"),null!=(e=document.getElementsByClassName("ChatSend-txt")[0])&&(e.maxLength=e.maxLength+20)}function optimizePageStyle(){document.getElementById("js-barrage-list").parentNode.id="js-barrage-list-parent"}let isRemoveMsgNotice=0;function initPkg_RemoveMsgNotice(){initPkg_RemoveMsgNotice_Dom(),initPkg_RemoveMsgNotice_Func(),initPkg_RemoveMsgNotice_Set()}function initPkg_RemoveMsgNotice_Dom(){var e=document.createElement("div"),t=(e.style="position: absolute;right: 5px;top: 40px;cursor: pointer;",e.id="ex-removeMsgNotice",e.innerHTML='<label id="msg-removeNotice" style="cursor: pointer;"><input type="checkbox" />关闭角标提醒</label>',e.title="关闭角标提醒",document.getElementsByClassName("PrivateLetter-frame")[0]);t&&t.appendChild(e)}function initPkg_RemoveMsgNotice_Func(){var t=document.getElementById("msg-removeNotice");if(t){let e=t.querySelector("input");t.addEventListener("click",()=>{(1==e.checked?(isRemoveMsgNotice=1,removeMsgNotice):(isRemoveMsgNotice=0,removeMsgNoticeCanel))(),saveData_removeMsgNotice()})}}function initPkg_RemoveMsgNotice_Set(){var e=localStorage.getItem("ExSave_isRemoveMsgNotice");e&&"1"==e&&(isRemoveMsgNotice=1,removeMsgNotice(),e=document.getElementById("msg-removeNotice"))&&(e.querySelector("input").checked=!0)}function removeMsgNotice(){StyleHook_set("Ex_Style_RemoveMsgNotice",".UserInfo .Badge,.ChatLetter-PopUnread{display:none!important;}")}function removeMsgNoticeCanel(){StyleHook_remove("Ex_Style_RemoveMsgNotice")}function saveData_removeMsgNotice(){localStorage.setItem("ExSave_isRemoveMsgNotice",isRemoveMsgNotice)}function initPkg_RemoveAdMeta(){}const roomVipExpireDayLimit=3;function initPkg_RoomVip(){setRoomVipExpireDays()}function initPkg_RoomVip_Dom(){var e=document.createElement("span"),t=(e.className="room-vip",e.innerHTML=`
	距VIP到期 <span id="room-vip-expire-days">**</span> 天
	`,document.getElementsByClassName("PlayerToolbar-Wealth")[0]);t.insertBefore(e,t.childNodes[0])}function setRoomVipExpireDays(){fetch("https://www.douyu.com/member/platform_task/effect_list",{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.text()).then(async e=>{e=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByClassName("enter-wraper is-effect");if(e&&0!=e.length){var t=e[0].getElementsByClassName("show-effect-more");if(t&&0!=t.length)for(let e=0;e<t.length;e++){var o=JSON.parse(t[e].getAttribute("data-detail"));"1646"===String(o.property_id)&&String(o.show_id_list)===String(rid)&&(o=1e3*o.expire_time,(o=Math.floor((o-Date.now())/864e5))<=roomVipExpireDayLimit)&&(initPkg_RoomVip_Dom(),document.getElementById("room-vip-expire-days").innerText=o)}}}).catch(e=>{console.log("请求失败!",e)})}let isRemoveDanmakuBackground=getLocalIsRemoveDanmakuBackground();function initPkg_Shield_RemoveDanmakuBackground(){document.getElementsByClassName("ShieldTool-list")[0].insertAdjacentHTML("beforeend",`
      <div class="ShieldTool-listItem ${isRemoveDanmakuBackground?"is-checked":"is-noChecked"}" id="ex-removeDanmakuBackground">
          <span class="ShieldTool-checkIcon"></span>
          <h5 class="ShieldTool-checkText">屏蔽弹幕背景</h5>
      </div>`),isRemoveDanmakuBackground&&removeDanmakuBackground();const e=document.getElementById("ex-removeDanmakuBackground");e.addEventListener("click",()=>{(isRemoveDanmakuBackground=!isRemoveDanmakuBackground)?(removeDanmakuBackground(),e.className=e.className.replace("is-noChecked","is-checked")):(StyleHook_remove("Ex_Style_RemoveDanmakuBackground"),e.className=e.className.replace("is-checked","is-noChecked")),saveRemoveDanmakuBackground()})}function getLocalIsRemoveDanmakuBackground(){var e=localStorage.getItem("ExSave_isRemoveDanmakuBackground");return!!e&&1===Number(e)}function saveRemoveDanmakuBackground(){localStorage.setItem("ExSave_isRemoveDanmakuBackground",isRemoveDanmakuBackground?1:0)}function removeDanmakuBackground(){StyleHook_set("Ex_Style_RemoveDanmakuBackground",`
      .danmuItem-31f924 {
        background: none !important;
      }
      .danmuItem-31f924 div{
        background: none;
      }
      .danmuItem-31f924 > img {
        display: none;
      }
      .danmuItem-31f924 div > img {
        display: none;
      }
      .super-text-0281ca {
        background: none !important;
      }
      .danmuItem-31f924 .noble-bf13ad {
        background: none !important;
      }
      .customBarrage {
        background: none !important;
        text-shadow: none !important;
      }
      .customBarrage > div {
        background: none !important;
      }
  `)}let isRemoveDanmakuImage=getLocalIsRemoveDanmakuImage();function initPkg_Shield_RemoveDanmakuImage(){document.getElementsByClassName("ShieldTool-list")[0].insertAdjacentHTML("beforeend",`
      <div class="ShieldTool-listItem ${isRemoveDanmakuImage?"is-checked":"is-noChecked"}" id="ex-RemoveDanmakuImage">
          <span class="ShieldTool-checkIcon"></span>
          <h5 class="ShieldTool-checkText">屏蔽DouyuEx图片</h5>
      </div>`),isRemoveDanmakuImage&&removeDanmakuImage();const e=document.getElementById("ex-RemoveDanmakuImage");e.addEventListener("click",()=>{(isRemoveDanmakuImage=!isRemoveDanmakuImage)?(removeDanmakuImage(),e.className=e.className.replace("is-noChecked","is-checked")):(StyleHook_remove("Ex_Style_RemoveDanmakuImage"),e.className=e.className.replace("is-checked","is-noChecked")),saveRemoveDanmakuImage()})}function getLocalIsRemoveDanmakuImage(){var e=localStorage.getItem("ExSave_isRemoveDanmakuImage");return!!e&&1===Number(e)}function saveRemoveDanmakuImage(){localStorage.setItem("ExSave_isRemoveDanmakuImage",isRemoveDanmakuImage?1:0)}function removeDanmakuImage(){StyleHook_set("Ex_Style_RemoveDanmakuImage",`
    .danmuItem-31f924 a {
      display: none !important;
    }
  `)}function initPkg_Shield_RemoveEnter(){var e=document.getElementsByClassName("ShieldTool-list")[0],t=localStorage.getItem("ExSave_isRemoveEnterBarrage"),t=null==t||"1"==t,o=window.CSS&&window.CSS.supports&&window.CSS.supports("--enter-display","none");let n=document.getElementById("js-barrage-extend-container");n&&n.style.setProperty("--enter-display",t?"none":"block","important"),null!=e&&o&&(e.insertAdjacentHTML("beforeend",`
      <div class="ShieldTool-listItem ${t?"is-checked":"is-noChecked"}" id="ex-enter-shield">
          <span class="ShieldTool-checkIcon"></span>
          <h5 class="ShieldTool-checkText">屏蔽进场弹幕</h5>
      </div>`),document.getElementById("ex-enter-shield").addEventListener("click",e=>{var e=e.currentTarget.classList,t=e.toggle("is-noChecked"),e=e.toggle("is-checked"),o=t&&!e?"block":"none";n&&n.style.setProperty("--enter-display",o,"important"),localStorage.setItem("ExSave_isRemoveEnterBarrage",t&&!e?"0":"1")}))}function initPkg_Shield(){let e=setInterval(()=>{void 0!==document.getElementsByClassName("ShieldTool-list")[0]&&(clearInterval(e),initPkg_Shield_RemoveEnter(),initPkg_Shield_RemoveDanmakuBackground())},1e3)}function initPkg_ShowDanmaku(){responseHook((e,t)=>-1!==e.indexOf("/betard")?t.replace('player_barrage":0','player_barrage":1'):t)}function initPkg_ShowDanmakuOriginAction(){scriptHook({url:"/firstqueue",callback:e=>{let t=e;return t=(t=(t=t.replace("if(s&&s.isOpenFireFBComment)","if(true)")).replace("if(A&&!this.isFireOpenRank(a))if(parseInt(A,10)&&M&&S>=R&&(!L||L&&I))","if(true)if(true) ")).replace('else if(1==+Object(m.B)("barrage_praise"))',"if(true) ")}})}function initPkg_Sign(){initPkg_Sign_Dom(),initPkg_Sign_Func()}function initPkg_Sign_Func(){var e=new CClick(document.getElementsByClassName("ex-sign")[0]);e.click(()=>{initPkg_Sign_Main(!1)}),e.longClick(()=>{initPkg_Sign_Main(!0)})}function initPkg_Sign_Dom(){Sign_insertIcon()}function Sign_insertIcon(){var e=document.createElement("div"),t=(e.className="ex-sign",e.innerHTML='<a class="ex-panel__icon" title="一键签到(所有关注的直播间/鱼吧/客户端/车队/活动)"><svg style="display: block;" t="1578566545259" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12959" width="32" height="32"><path d="M698.368 80.896v114.688c0 23.552 19.968 43.008 44.032 43.008s44.032-19.456 44.032-43.008V80.896c0-23.552-19.968-43.008-44.032-43.008s-44.032 18.944-44.032 43.008zM227.328 80.896v114.688c0 23.552 19.968 43.008 44.032 43.008 24.576 0 44.032-19.456 44.032-43.008V80.896c0-23.552-19.968-43.008-44.032-43.008-24.576 0-44.032 18.944-44.032 43.008z" fill="#F96C5D" p-id="12960"></path><path d="M977.92 195.584c0-23.552-19.968-43.008-44.032-43.008h-88.576v43.008c0 55.296-46.08 100.352-102.912 100.352s-102.912-45.056-102.912-100.352v-43.008H374.272v43.008c0 55.296-46.08 100.352-102.912 100.352-56.832 0-102.912-45.056-102.912-100.352v-43.008H79.872c-24.576 0-44.032 19.456-44.032 43.008v611.328l252.928-145.92-8.192-8.192c-10.24-9.728-16.384-23.552-16.384-38.4 0-29.696 25.088-54.272 55.808-54.272 15.36 0 29.184 6.144 39.424 15.872l28.16 27.648L977.92 263.168V195.584z" fill="#F96C5D" p-id="12961"></path><path d="M329.216 278.528c-5.632 3.584-11.264 6.656-17.408 9.216 5.632-2.56 11.776-5.632 17.408-9.216zM344.064 266.24c4.608-4.608 8.704-9.728 12.8-14.848-3.584 5.632-8.192 10.24-12.8 14.848zM329.216 278.528c5.632-3.584 10.752-7.68 15.36-12.288-5.12 4.608-10.24 8.704-15.36 12.288zM449.536 664.064l220.16-214.016c10.24-9.728 24.064-15.872 39.424-15.872 30.72 0 55.808 24.064 55.808 54.272 0 14.848-6.144 28.672-16.384 38.4l-259.072 252.416c-10.24 9.728-24.064 15.872-39.424 15.872s-29.184-6.144-39.424-15.872l-121.344-118.272L35.84 806.912v104.96c0 23.552 19.968 43.008 44.032 43.008h854.016c24.576 0 44.032-19.456 44.032-43.008V263.168L387.584 603.648l61.952 60.416zM350.72 569.856c-4.608-3.072-9.216-5.12-14.336-6.656 5.12 1.024 10.24 3.584 14.336 6.656zM271.36 295.936c14.336 0 27.648-2.56 39.936-7.68-12.288 4.608-25.6 7.68-39.936 7.68z" fill="#F15A4A" p-id="12962"></path></svg><i id="ex-sign__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Sign_Main(e){initPkg_Sign_Yuba(),initPkg_Sign_Client(),initPkg_Sign_Room(e),initPkg_Sign_Act(),initPkg_Sign_ActqzsUserTask(),initPkg_Sign_ReadPosts(),initPkg_Sign_Follow(),initPkg_Sign_FansTree(),initPkg_Sign_SuperFans()}let actList={};function initPkg_Sign_Act(){getAct()}async function getAct(){if("data"in actList!=0)for(let e=0;e<actList.data.length;e++){var o=actList.data[e],n=o.name;for(let e=0;e<o.script.length;e++){var i,a=o.script[e],r=a.value;let t;switch(a.name){case"signAct":"0"==(t=await signAct(r)).error?showMessage(`【${n}】签到完毕`,"success"):showMessage(`【${n}】`+t.msg,"error");break;case"userStatus":if(0==(t=await userStatus(r)).error)for(var s in t.data){var l=t.data[s],d=l.curCompleteNum-l.curDeliverNum,c=n+"-"+l.taskName;for(let e=0;e<d;e++){var u=await takeActPrize(s);"0"==u.error?showMessage(`【${c}】获得`+u.data.sendRes.items[0].prizeName+"*"+u.data.sendRes.items[0].prizeNum,"success"):showMessage(`【${c}】`+u.msg,"error")}}break;case"addFollowRoom":await addFollowRoom(r);break;case"removeFollowRoom":await removeFollowRoom(r);break;case"shareAct":await shareAct(r);break;case"doSign":await doSign(r);break;case"getActRemaining":if("0"==(t=await getActRemaining(r)).error)for(let e=0;e<t.data.freeCount;e++)"0"==(i=await getJackpot(r)).error&&showMessage(`【${n}】礼盒开启：`+i.data.giftName,"success")}}}}async function initPkg_Sign_ActqzsUserTask(){var e,t,o,n=["5189167","290935","6979222","5132174","4042402"];let i=await getActivityId(dateFormat("yyyyMM",new Date)),a=(i||(o=(t=new Date).getMonth()+1,e=t.getMonth()-1,e=new Date(t.getFullYear(),e,1),t=new Date(t.getFullYear(),o,1),i=(i=await getActivityId(dateFormat("yyyyMM",e)))||await getActivityId(dateFormat("yyyyMM",t))),await getCardArenaId(dateFormat("yyyyMM",new Date)));a||(e=(o=new Date).getMonth()+1,t=o.getMonth()-1,t=new Date(o.getFullYear(),t,1),o=new Date(o.getFullYear(),e,1),a=(a=await getCardArenaId(dateFormat("yyyyMM",t)))||await getCardArenaId(dateFormat("yyyyMM",o)));for(const s of[i,a])for(const l of n){var r=await signinAct(s,l),r=(0==r.error&&showMessage("【一键签到】右侧活动直播间已签到，获得"+r.data.awards.map(e=>e.name+"x"+e.num).join("、"),"success"),await signinCardArena(s,l));0==r.error&&showMessage("【一键签到】右侧活动直播间已签到，获得"+r.data.awards.map(e=>e.name+"x"+e.num).join("、"),"success")}}function getActivityId(e){return new Promise(o=>{fetch(`https://webconf.douyucdn.cn/resource/common/activity/actqzs${e}_w.json`).then(e=>e.text()).then(e=>{let t=e.substring(String("DYConfigCallback(").length,e.length);t=t.substring(0,t.lastIndexOf(")"));try{t=JSON.parse(t),o(t.data.activity_setting.activity_id)}catch(e){o(null)}}).catch(e=>{o(null)})})}function getCardArenaId(e){return new Promise(o=>{fetch(`https://webconf.douyucdn.cn/resource/common/activity/cardArena${e}_w.json`).then(e=>e.text()).then(e=>{let t=e.substring(String("DYConfigCallback(").length,e.length);t=t.substring(0,t.lastIndexOf(")"));try{t=JSON.parse(t),o(t.data.activity_setting.activity_id)}catch(e){o(null)}}).catch(e=>{o(null)})})}function signinCardArena(e,n){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/revenuenc/web/cardArena/userTask/signIn",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&activity_id=${e}&rid=`+n}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function signinAct(e,n){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/revenuenc/web/actqzs/userTask/signIn",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&activity_id=${e}&rid=`+n}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function initPkg_Sign_Ad_Sign(){getFishBall_Ad_Sign()}function getFishBall_Ad_Sign(){let t,o="1064246";GM_xmlhttpRequest({method:"GET",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/inspire/getFishBallNum?posId="+o+"&ct=1&token="+dyToken,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;"0"==e.error&&(t=e.data.num,GM_xmlhttpRequest({method:"GET",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/inspire/sendFishBall?uid="+getUID()+"&posCode="+o+"&ct=1&token="+dyToken,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;"0"==e.error?showMessage("【签到鱼丸】成功领取"+t+"个鱼丸","success"):"null"==e.msg?showMessage("【签到鱼丸】未绑定手机","warning"):showMessage("【签到鱼丸】"+e.msg,"warning")}}))}})}function initPkg_Sign_Client(){signClient()}function signClient(){GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/h5nc/sign/sendSign",data:"token="+dyToken,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var o=e.response;if(0==o.data.length)showMessage("【客户端】今日已签到","warning");else if(0!=o.data.sign_pl.length){let t="";for(let e=0;e<o.data.sign_pl.length;e++)t=t+o.data.sign_pl[e].cnt+"个"+o.data.sign_pl[e].name+",";showMessage("【客户端】签到成功! 获得物品:"+t,"success")}else showMessage("【客户端】签到成功! 可惜没有获得东西","success")}})}async function initPkg_Sign_FansTree(){for(let e=0;e<myFansBadgeList.length;e++){var t=myFansBadgeList[e],o=await signRoomTree(t);0!==o.error?showMessage("【粉丝家园】"+t+o.msg,"error"):showMessage(`【粉丝家园】${t}签到成功！`,"success")}}function signRoomTree(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/interactnc/web/fanshome/sign",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&rid=`+e}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}async function initPkg_Sign_Follow(){var e="3186571";await followRoom(e),await unfollowRoom(e)}function unfollowRoom(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/rm",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&rid=`+e}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function followRoom(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/add",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&rid=`+e}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function initPkg_Sign_Motorcade(){signMotorcade()}function signMotorcade(){openPage("https://msg.douyu.com/motorcade/#/motorcade/list/recommend?exid=chun",!1)}function getCookie(t){let o="";var n=document.cookie.split("; ");for(let e=0;e<n.length;e++){var i=n[e].split("=");t==i[0]&&(o=i[1])}return""==o&&(o=Math.random().toString(36).substr(2),document.cookie="post-csrfToken="+escape(o)+";path=/"),o}async function signMotorcade_Sign(){var e=await motorcadeConnect(),t=await motorcadeConnect2(e.data.uid,e.data.sig);let o=await getMotorcadeID(t.TinyId,t.A2Key,e.data.uid);o&&""!=o?(console.log("mid是：",o),o=encodeURIComponent(o),GM_xmlhttpRequest({method:"GET",url:"https://msg.douyu.com/v3/motorcade/signs/weekly?mid="+o+"&timestamp="+Math.random().toFixed(17),responseType:"json",headers:{"dy-device-id":"-","dy-client":"web","dy-csrf-token":getCookie("post-csrfToken"),"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;console.log("weekly:",e),"1"==e.data.is_sign?closePage():GM_xmlhttpRequest({method:"POST",url:"https://msg.douyu.com/v3/msign/add?timestamp="+Math.random().toFixed(17),data:"to_mid="+o+"&expression="+String(Number(e.data.total)+1),responseType:"json",headers:{"dy-device-id":"-","dy-client":"web","dy-csrf-token":getCookie("post-csrfToken"),"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){2==Math.floor(e.response.status_code/100)?console.log("【车队】签到成功"):console.log(e.response.message),closePage()}})}})):closePage()}function motorcadeConnect(){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"https://msg.douyu.com/v3/login/getusersig?t="+String((new Date).getTime())+"&timestamp="+Math.random().toFixed(17),data:'{"State":"Online"}',responseType:"json",headers:{"dy-device-id":"-","dy-client":"web","dy-csrf-token":getCookie("post-csrfToken"),"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){t(e.response)}})})}function motorcadeConnect2(e,t){let o="https://webim.tim.qq.com/v4/openim/login?identifier="+e+"&usersig="+t+"&contenttype=json&sdkappid=1400029396";return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:o,data:'{"State":"Online"}',responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},onload:function(e){t(e.response)}})})}function getMotorcadeID(e,o,n){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://webim.tim.qq.com/v4/group_open_http_svc/get_joined_group_list?tinyid="+e+"&a2="+o+"&contenttype=json&sdkappid=1400029396",data:'{"Member_Account":"'+n+'"}',responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e.response.GroupIdList&&0<e.response.GroupIdList.length?t(e.response.GroupIdList[0].GroupId):t("")}})})}async function initPkg_Sign_ReadPosts(){for(let e=0;e<5;e++)await readPosts(),await sleep(2e3)}function readPosts(){GM_xmlhttpRequest({method:"GET",url:"https://yuba.douyu.com/wbapi/web/post/detail/555691541586843641?cid=&timestamp="+(new Date).getTime(),responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded","dy-token":dyToken,"dy-client":"pc"},onload:function(e){}})}function initPkg_Sign_Room(e){signAllRoom(e)}function signAllRoom(i){let t,a=0,r=0;fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/list?page=1015",{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.json()).then(e=>{t=Number(e.data.pageCount);for(let e=1;e<=t;e++)fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/list?page="+String(e),{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.json()).then(t=>{var o,n=Number(t.data.list.length);for(let e=0;e<n;e++)(0!=i||"1"==t.data.list[e].show_status)&&(signRoom(t.data.list[e].room_id),a++),++r==t.data.total&&e==n-1&&(o=Number(t.data.total)-a,showMessage("【房间签到】"+String(a)+"个房间签到已完成，"+String(o)+"个房间未签到","success"))}).catch(e=>{console.log("请求失败!",e)});showMessage("【房间签到】"+e.data.total+"个房间正在签到中...","info")}).catch(e=>{console.log("请求失败!",e)})}function signRoom(e){GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/roomuserlevel/apinc/checkIn?client_sys=android",data:"rid="+e,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded",token:dyToken,aid:"android1"},onload:function(e){}})}async function initPkg_Sign_SuperFans(){for(let e=0;e<myFansBadgeList.length;e++){var t=myFansBadgeList[e];0===(await signSuperFans(t)).error&&showMessage(`【钻粉联赛签到】${t}签到成功！`,"success")}}function signSuperFans(e){return new Promise((t,o)=>{fetch("https://www.douyu.com/japi/interactnc/web/dfansact/userSign",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`ctn=${getCCN()}&rid=`+e}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e),o(e)})})}function initPkg_Sign_TV(){signTV()}function signTV(){var e=window.btoa(getDyDid());GM_xmlhttpRequest({method:"GET",url:"https://apitv.douyucdn.cn/user/sign/index?token="+dyToken+"&client_sys=android",responseType:"json",headers:{"User-Device":e},onload:function(e){e=e.response;"0"==e.error?showMessage("【电视端】签到成功！获得100鱼丸","success"):showMessage("【电视端】"+e.data.msg,"warning")}})}let signedYuba=0,totalYuba=0,doneYuba=0,signCountMap={};function initPkg_Sign_Yuba(){signYubaList()}function signYubaFast(){GM_xmlhttpRequest({method:"POST",url:"https://mapi-yuba.douyu.com/wb/v3/fastSign",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded",client:"android",token:dyToken},onload:function(e){""==e.response.message&&0!=e.response.data||e.response.data}})}async function signYuba(t,o){GM_xmlhttpRequest({method:"POST",url:"https://yuba.douyu.com/ybapi/topic/sign",data:"group_id="+t,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded","dy-client":"pc","dy-token":o,Referer:"https://yuba.douyu.com/group/"+t},onload:async function(e){10<=signCountMap[t]||("签到失败"==e.response.message?(await sleep(2e3),signYuba(t,o)):(signCountMap[t]?signCountMap[t]++:signCountMap[t]=1,doneYuba++,""==e.response.message&&signedYuba++,signYubaSupplementary(t),doneYuba==totalYuba&&(0<signedYuba?totalYuba-signedYuba==0?showMessage("【鱼吧】"+String(signedYuba)+"个鱼吧签到完成","success"):showMessage("【鱼吧】"+String(signedYuba)+"个鱼吧签到完成，"+String(totalYuba-signedYuba)+"个鱼吧已签到","success"):showMessage("【鱼吧】"+String(totalYuba)+"个鱼吧已签到","warning"),signedYuba=null,totalYuba=null,doneYuba=null)))}})}async function signYubaSupplementary(t){var o=await signSupplementary(t);for(let e=0;e<o.data.supplementary_cards;e++)await signSupplementary(t)}async function signYubaList(){let t=[];var o=await getYubaPage(1),n=(t=t.concat(o.list),Number(o.count_page)-1);if(1<=n)for(let e=0;e<n;e++){o=await getYubaPage(2+e);t=t.concat(o.list)}totalYuba=t.length,signYubaFast();for(let e=0;e<t.length;e++)signYuba(t[e].group_id,dyToken)}function getYubaPage(e){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"https://yuba.douyu.com/wbapi/web/group/myFollow?page="+String(e)+"&limit=30",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded","dy-client":"pc","dy-token":dyToken},onload:function(e){t(e.response.data)}})})}function getSupplementaryNums(e){return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:"https://yuba.douyu.com/wbapi/web/signDetail?group_id="+e,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded","dy-client":"pc","dy-token":dyToken},onload:function(e){t(e.response)}})})}function signSupplementary(e){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://mapi-yuba.douyu.com/wb/v3/supplement",responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded",client:"android",token:dyToken},data:"group_id="+e,onload:function(e){t(e.response)}})})}function initPkg_Sign_Yuba_Like(){likeYuba()}function likeYuba(){let e="555691541586843641";likeYubaPost(e,"-1").then(()=>{likeYubaPost(e,"1")}),showMessage("【鱼吧点赞】已完成","success")}function likeYubaPostComment(e,t,o){let n=`pid=${e}&comment_id=${t}&type=`+o;return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://yuba.douyu.com/ybapi/follow/like",data:n,responseType:"json",headers:{"dy-token":dyToken,"dy-client":"pc","Content-Type":"application/x-www-form-urlencoded",Referer:"https://yuba.douyu.com/p/555691541586843641"},onload:function(e){e=e.response;t(e)}})})}function likeYubaPost(e,t){let o=`pid=${e}&type=`+t;return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://yuba.douyu.com/ybapi/follow/like",data:o,responseType:"json",headers:{"dy-token":dyToken,"dy-client":"pc","Content-Type":"application/x-www-form-urlencoded",Referer:"https://yuba.douyu.com/p/"+e},onload:function(e){e=e.response;t(e)}})})}var _hmt=_hmt||[];function initPkg_Statistics(){var e=document.createElement("script"),t=(e.src="https://hm.baidu.com/hm.js?4dc4fb0549a56fe03ba53c022b1ff455",document.getElementsByTagName("script")[0]);t.parentNode.insertBefore(e,t)}function initPkg_SyncJoy(){initPkg_SyncJoy_Dom(),initPkg_SyncJoy_Func()}function initPkg_SyncJoy_Dom(){SyncJoy_insertIcon()}function SyncJoy_insertIcon(){var e=document.createElement("div"),t=(e.className="ex-syncjoy",e.innerHTML='<a class="ex-panel__icon" title="SyncJoy"><svg style="display:block;" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42930" width="32" height="32"><path d="M1280.012 768.4c0-10.514-0.916-21.2-2.812-31.96l-66.76-423.2C1182.812 155.92 1044.012 64 638.212 64 238.012 64 97.432 154.92 69.572 313.2L2.812 736.4a183.96 183.96 0 0 0-2.812 31.96c0 103.78 89.16 191.62 203 191.62 99.38 0 187.56-60.12 219-149.28l15-42.72h406l15 42.72c31.44 89.16 119.62 149.28 219 149.28C1190.812 958.2 1280.012 872.2 1280.012 768.4zM494.212 496l-63.92-0.02-0.08 64.02c0 26.4-21.56 48-47.96 48-26.4 0-48.04-21.6-48.04-48l0.074-64.02-64.074 0.02c-26.4 0-47.96-21.6-47.96-48s21.54-48 47.96-48l64.08-0.022L334.212 336c0-26.4 21.64-48 48.04-48s47.96 21.6 47.96 48l0.074 63.98 63.926 0.02c26.4 0 48.04 21.6 48.04 48-0.04 26.4-19.84 48-48.04 48zM864.012 622.2c-44.18 0-80-35.84-80-80s35.82-80 80-80 80 35.84 80 80c0 46-35.8 80-80 80z m128-192c-44.18 0-80-35.84-80-80s35.82-80 80-80 80 35.84 80 80c0 46-35.8 80-80 80z" p-id="42931" fill="#533566"></path></svg><i id="SyncJoy__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_SyncJoy_Func(){document.getElementsByClassName("ex-syncjoy")[0].addEventListener("click",function(){openPage("https://sb.douyuex.com/")})}var curVersion="2024.12.25.01",isNeedUpdate=!1,lastestVersion="";function initPkg_Update(){initPkg_Update_Dom(),initPkg_Update_Func(),isNeedUpdate&&Update_showTip(!0)}function initPkg_Update_Dom(){Update_insertIcon()}function Update_insertIcon(){var e=document.createElement("div"),t=(e.className="ex-update",e.innerHTML='<a class="ex-panel__icon" title="版本更新"><svg t="1578767541873" style="display:block;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23715" width="32" height="32"><path d="M768 810.7H512c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h256c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" p-id="23716"></path><path d="M554.7 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3L487 768l97.8 97.8c16.7 16.7 16.7 43.7 0 60.3-8.3 8.4-19.2 12.6-30.1 12.6z" fill="#5F6379" p-id="23717"></path></svg><i id="ex-update__tip" class="ex-panel__tip"></i></a>',document.getElementsByClassName("ex-panel__wrap")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_Update_Func(){document.getElementsByClassName("ex-update")[0].addEventListener("click",Update_openUpdatePage)}function checkUpdate_Src(){return new Promise((t,o)=>{fetch("http://src.douyuex.com/src/douyuex_version.txt",{method:"GET",mode:"cors",cache:"no-store",credentials:"omit"}).then(e=>e.text()).then(e=>{null!=e&&e!=curVersion&&t([!0,e]),t(!1)}).catch(e=>{console.error("请求失败",e),o()})})}function checkUpdate_GreasyFork(){return new Promise((t,o)=>{fetch("https://greasyfork.org/zh-CN/scripts/394497",{method:"GET",mode:"cors",cache:"no-store",credentials:"omit"}).then(e=>e.text()).then(e=>{e=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByClassName("script-show-version")[1];null!=e&&e.innerText!=curVersion&&t([!0,e.innerText]),t(!1)}).catch(e=>{console.error("请求失败",e),o()})})}async function Update_checkVersion(t=!1){let o=[];isNeedUpdate=(o=await checkUpdate_GreasyFork().catch(e=>{o=[!1,curVersion],isNeedUpdate=o[0],lastestVersion=o[1],isNeedUpdate?(Update_showMessage(),isNeedUpdate&&Update_showTip(!0)):t&&showMessage(`【版本更新】当前版本${curVersion}已为最新，<a href="https://html.douyuex.com/update/" target="_blank">点击查看更新内容</a>`,"success")}))[0],lastestVersion=o[1],isNeedUpdate?(Update_showMessage(),isNeedUpdate&&Update_showTip(!0)):t&&showMessage(`【版本更新】当前版本${curVersion}已为最新，<a href="https://html.douyuex.com/update/" target="_blank">点击查看更新内容</a>`,"success")}function Update_openUpdatePage(){openPage("https://html.douyuex.com/install/web.html",!0)}function Update_showTip(e){var t=document.getElementById("ex-update__tip");t&&(e?"block"!=t.style.display&&(t.style.display="block"):t.style.display="none")}function Update_showMessage(){showMessage(`【版本更新】最新版本：${lastestVersion}，点击<a href="https://html.douyuex.com/install/web.html" target="_blank">官方源</a>或者<a href="https://greasyfork.org/zh-CN/scripts/394497" target="_blank">GreasyFork源</a>更新，<a href="https://html.douyuex.com/update/" target="_blank">点击查看更新内容</a>`,"error",{timeout:50})}let videoStartTime=0,videoTime_domhook_videoChange=null,videoTime_domhook_showtime=null,videoTime_timeout=0;function initPkg_VideoTime(){let o=setInterval(()=>{VideoTime_setData();var e=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("__video"),t=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("demand-video-controller-progress").shadowRoot.querySelector("demand-video-controller-preview");null!=e&&(clearInterval(o),(videoTime_domhook_videoChange=new MutationObserver(function(e){VideoTime_setData()})).observe(e,{attributes:!0,childList:!0,subtree:!1}),(videoTime_domhook_showtime=new MutationObserver(function(t){for(let e=0;e<t.length;e++){var o=t[e];if("showtime"==o.attributeName){var n=Number(VideoTime_getShowTime());VideoTime_setShowTime(String(dateFormat("yyyy-MM-dd hh:mm:ss",new Date(Number(videoStartTime+1e3*n))))+"<br/>"+formatSeconds2(n));break}if("isshow"==o.attributeName){clearTimeout(videoTime_timeout);let e=Number(VideoTime_getShowTime());videoTime_timeout=setTimeout(()=>{VideoTime_setShowTime(String(dateFormat("yyyy-MM-dd hh:mm:ss",new Date(Number(videoStartTime+1e3*e))))+"<br/>"+formatSeconds2(e))},0);break}}})).observe(t,{attributes:!0,childList:!0,subtree:!1}))},1e3)}function VideoTime_setData(){var e=String(window.location.pathname).split("/"),e=e[e.length-1];fetch("https://v.douyu.com/video/video/getVideoUrl?vid="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>e.json()).then(e=>{e=getStrMiddle(e.data.viewthumb[0].url,"--","/");videoStartTime=new Date(e.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,"$1-$2-$3 $4:$5:$6")).getTime()}).catch(e=>{console.log("请求失败!",e)})}function VideoTime_getShowTime(){var e=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("demand-video-controller-progress").shadowRoot.querySelector("demand-video-controller-preview").getAttribute("showtime");return Number(e).toFixed(0)}function VideoTime_setShowTime(e){var t=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("demandcontroller-bar").shadowRoot.querySelector("demand-video-controller-progress").shadowRoot.querySelector("demand-video-controller-preview").shadowRoot.querySelector(".Preview-Time");t&&(t.style.position="relative",t.style.bottom="60px",t.style.backgroundColor="rgba(0,0,0,0.4)",t.innerHTML=e)}function initPkg_VideoTools_Camera(){camera_anchorName=document.getElementsByClassName("Title-anchorName")[0].innerText,camera_width=.25*liveVideoNode.videoWidth,camera_height=.25*liveVideoNode.videoHeight,(camera_canvas=document.createElement("canvas")).width=camera_width,camera_canvas.height=camera_height,(camera_canvas_img=document.createElement("canvas")).width=liveVideoNode.videoWidth,camera_canvas_img.height=liveVideoNode.videoHeight,initPkg_VideoTools_Camera_Dom(),initPkg_VideoTools_Camera_Func()}function initPkg_VideoTools_Camera_Dom(){Camera_insertIcon()}function Camera_insertIcon(){var e=document.createElement("div"),t=(e.id="ex-camera",e.title="单击截图 长按录制gif",e.innerHTML=`
    <svg t="1620266708389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2080" width="38" height="38"><path d="M512 337.371136c-119.543808 0-216.800256 97.255424-216.800256 216.798208 0 119.543808 97.256448 216.800256 216.800256 216.800256s216.800256-97.256448 216.800256-216.800256C728.800256 434.625536 631.543808 337.371136 512 337.371136zM680.479744 554.16832c0 92.911616-75.579392 168.501248-168.479744 168.501248-92.900352 0-168.480768-75.589632-168.480768-168.501248 0-92.923904 75.579392-168.521728 168.480768-168.521728C604.899328 385.646592 680.479744 461.24544 680.479744 554.16832z" p-id="2081" fill="#ffffff"></path><path d="M831.209472 337.349632l-47.167488 0c-13.647872 0-24.751104 11.083776-24.751104 24.707072 0 13.635584 11.103232 24.7296 24.751104 24.7296l47.167488 0c13.646848 0 24.75008-11.094016 24.75008-24.7296C855.959552 348.433408 844.85632 337.349632 831.209472 337.349632z" p-id="2082" fill="#ffffff"></path><path d="M700.505088 171.497472c4.235264 0 6.403072 0.405504 7.232512 0.612352 1.47968 1.514496 4.790272 6.218752 11.717632 20.685824 2.83648 5.910528 8.6272 18.86208 15.888384 35.533824l11.788288 27.063296 29.518848 0 96.535552 0c35.122176 0 63.695872 28.535808 63.695872 63.609856l0 469.933056c0 35.05152-28.573696 63.567872-63.695872 63.567872L150.811648 852.503552c-35.121152 0-63.694848-28.516352-63.694848-63.567872L87.1168 319.0016c0-35.062784 28.573696-63.589376 63.694848-63.589376l99.35872 0 29.110272 0 11.964416-26.537984c4.698112-10.421248 8.416256-19.063808 11.058176-25.70752 9.86112-24.829952 15.207424-30.125056 16.239616-30.974976 0.52736-0.161792 2.64192-0.695296 7.673856-0.695296L700.505088 171.496448M700.505088 126.441472 326.216704 126.441472c-32.519168 0-47.275008 13.479936-65.787904 60.096512-3.180544 7.999488-7.689216 18.122752-10.257408 23.819264l-99.35872 0c-59.96544 0-108.750848 48.738304-108.750848 108.645376l0 469.933056c0 59.894784 48.785408 108.623872 108.750848 108.623872l722.37568 0c59.96544 0 108.751872-48.729088 108.751872-108.623872L981.940224 319.0016c0-59.91936-48.786432-108.665856-108.751872-108.665856l-96.535552 0c-4.458496-10.236928-12.420096-28.372992-16.574464-37.031936C744.823808 141.448192 733.973504 126.441472 700.505088 126.441472L700.505088 126.441472z" p-id="2083" fill="#ffffff"></path></svg>
    `,document.getElementById("js-player-dialog"));t.insertBefore(e,t.childNodes[0])}function initPkg_VideoTools_Camera_Func(){var e=document.getElementsByClassName("layout-Player-video")[0],t=document.getElementsByClassName("room-Player-Box")[0];let o=document.getElementById("ex-camera"),n=null,i=0,a=0,r,s=0;e.addEventListener("mouseenter",()=>{o.style.display="flex",s=setTimeout(()=>{o.style.display="none"},2e3)}),t.addEventListener("mousemove",()=>{o.style.display="flex",clearTimeout(s),s=setTimeout(()=>{o.style.display="none"},2e3)}),o.addEventListener("mouseenter",()=>{o.style.display="flex",clearTimeout(s)}),e.addEventListener("mouseleave",()=>{o.style.display="none"}),o.addEventListener("mousedown",e=>{a=(new Date).getTime(),camera_canvas_img.getContext("2d").drawImage(liveVideoNode,0,0,camera_canvas_img.width,camera_canvas_img.height),r=camera_canvas_img.toDataURL("image/png"),n=new GIF({workers:5,quality:3,width:camera_width,height:camera_height,workerScript:gifworkerBlob}),cameraAddFrame(liveVideoNode,camera_canvas,n,camera_fps),i=setInterval(()=>{cameraAddFrame(liveVideoNode,camera_canvas,n,camera_fps)},camera_fps)}),o.addEventListener("mouseup",e=>{var t,o=(new Date).getTime();clearInterval(i),800<=o-a?(showMessage("【录制】正在生成gif...","info"),n.on("finished",e=>{var t=document.createElement("a"),e=(t.href=URL.createObjectURL(e),t.download=`【${camera_anchorName}】`+dateFormat("yyyy-MM-dd hh-mm-ss",new Date),document.body.appendChild(t),document.createEvent("MouseEvents"));e.initEvent("click",!1,!1),t.dispatchEvent(e),document.body.removeChild(t)}),n.render()):((o=document.createElement("a")).download=`【${camera_anchorName}】`+dateFormat("yyyy-MM-dd hh-mm-ss",new Date),o.href=r,document.body.appendChild(o),(t=document.createEvent("MouseEvents")).initEvent("click",!1,!1),o.dispatchEvent(t),document.body.removeChild(o))})}function initPkg_VideoTools_Camera_Video(){let e=setInterval(()=>{null!=(liveVideoNode=document.getElementsByTagName("demand-video")[0].shadowRoot.getElementById("__video"))&&liveVideoNode.videoWidth&&(clearInterval(e),camera_anchorName=document.getElementsByTagName("demand-video-anchor")[0].shadowRoot.querySelector(".anchor-name").innerText,camera_width=.25*liveVideoNode.videoWidth,camera_height=.25*liveVideoNode.videoHeight,(camera_canvas=document.createElement("canvas")).width=camera_width,camera_canvas.height=camera_height,(camera_canvas_img=document.createElement("canvas")).width=liveVideoNode.videoWidth,camera_canvas_img.height=liveVideoNode.videoHeight,initPkg_VideoTools_Camera_Video_Dom(),initPkg_VideoTools_Camera_Video_Func())},1e3)}function initPkg_VideoTools_Camera_Video_Dom(){Camera_Video_insertIcon()}function Camera_Video_insertIcon(){var e=document.createElement("div"),t=(e.id="ex-camera",e.title="单击截图 长按录制gif",e.innerHTML=`
    <svg t="1620266708389" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2080" width="38" height="38"><path d="M512 337.371136c-119.543808 0-216.800256 97.255424-216.800256 216.798208 0 119.543808 97.256448 216.800256 216.800256 216.800256s216.800256-97.256448 216.800256-216.800256C728.800256 434.625536 631.543808 337.371136 512 337.371136zM680.479744 554.16832c0 92.911616-75.579392 168.501248-168.479744 168.501248-92.900352 0-168.480768-75.589632-168.480768-168.501248 0-92.923904 75.579392-168.521728 168.480768-168.521728C604.899328 385.646592 680.479744 461.24544 680.479744 554.16832z" p-id="2081" fill="#ffffff"></path><path d="M831.209472 337.349632l-47.167488 0c-13.647872 0-24.751104 11.083776-24.751104 24.707072 0 13.635584 11.103232 24.7296 24.751104 24.7296l47.167488 0c13.646848 0 24.75008-11.094016 24.75008-24.7296C855.959552 348.433408 844.85632 337.349632 831.209472 337.349632z" p-id="2082" fill="#ffffff"></path><path d="M700.505088 171.497472c4.235264 0 6.403072 0.405504 7.232512 0.612352 1.47968 1.514496 4.790272 6.218752 11.717632 20.685824 2.83648 5.910528 8.6272 18.86208 15.888384 35.533824l11.788288 27.063296 29.518848 0 96.535552 0c35.122176 0 63.695872 28.535808 63.695872 63.609856l0 469.933056c0 35.05152-28.573696 63.567872-63.695872 63.567872L150.811648 852.503552c-35.121152 0-63.694848-28.516352-63.694848-63.567872L87.1168 319.0016c0-35.062784 28.573696-63.589376 63.694848-63.589376l99.35872 0 29.110272 0 11.964416-26.537984c4.698112-10.421248 8.416256-19.063808 11.058176-25.70752 9.86112-24.829952 15.207424-30.125056 16.239616-30.974976 0.52736-0.161792 2.64192-0.695296 7.673856-0.695296L700.505088 171.496448M700.505088 126.441472 326.216704 126.441472c-32.519168 0-47.275008 13.479936-65.787904 60.096512-3.180544 7.999488-7.689216 18.122752-10.257408 23.819264l-99.35872 0c-59.96544 0-108.750848 48.738304-108.750848 108.645376l0 469.933056c0 59.894784 48.785408 108.623872 108.750848 108.623872l722.37568 0c59.96544 0 108.751872-48.729088 108.751872-108.623872L981.940224 319.0016c0-59.91936-48.786432-108.665856-108.751872-108.665856l-96.535552 0c-4.458496-10.236928-12.420096-28.372992-16.574464-37.031936C744.823808 141.448192 733.973504 126.441472 700.505088 126.441472L700.505088 126.441472z" p-id="2083" fill="#ffffff"></path></svg>
    `,document.getElementsByClassName("Video")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_VideoTools_Camera_Video_Func(){var e=document.getElementsByTagName("demand-video")[0];let t=document.getElementById("ex-camera"),n=null,i=0,a=0,r,o=0;e.addEventListener("mouseenter",()=>{t.style.display="flex",o=setTimeout(()=>{t.style.display="none"},2e3)}),e.addEventListener("mousemove",()=>{t.style.display="flex",clearTimeout(o),o=setTimeout(()=>{t.style.display="none"},2e3)}),t.addEventListener("mouseenter",()=>{t.style.display="flex",clearTimeout(o)}),e.addEventListener("mouseleave",()=>{t.style.display="none"}),t.addEventListener("mousedown",e=>{a=(new Date).getTime(),camera_canvas_img.getContext("2d").drawImage(liveVideoNode,0,0,camera_canvas_img.width,camera_canvas_img.height),r=camera_canvas_img.toDataURL("image/png"),n=new GIF({workers:5,quality:3,width:camera_width,height:camera_height,workerScript:gifworkerBlob}),cameraAddFrame(liveVideoNode,camera_canvas,n,camera_fps),i=setInterval(()=>{cameraAddFrame(liveVideoNode,camera_canvas,n,camera_fps)},camera_fps)}),t.addEventListener("mouseup",e=>{var t,o=(new Date).getTime();clearInterval(i),800<=o-a?(showMessage("【录制】正在生成gif...","info"),n.on("finished",e=>{var t=document.createElement("a"),e=(t.href=URL.createObjectURL(e),t.download=`【${camera_anchorName}】`+dateFormat("yyyy-MM-dd hh-mm-ss",new Date),document.body.appendChild(t),document.createEvent("MouseEvents"));e.initEvent("click",!1,!1),t.dispatchEvent(e),document.body.removeChild(t)}),n.render()):((o=document.createElement("a")).download=`【${camera_anchorName}】`+dateFormat("yyyy-MM-dd hh-mm-ss",new Date),o.href=r,document.body.appendChild(o),(t=document.createEvent("MouseEvents")).initEvent("click",!1,!1),o.dispatchEvent(t),document.body.removeChild(o))})}var camera_canvas,camera_canvas_img,camera_width,camera_height,camera_anchorName,liveVideoNode,gifworkerStr=`(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var NeuQuant=require("./TypedNeuQuant.js");var LZWEncoder=require("./LZWEncoder.js");function ByteArray(){this.page=-1;this.pages=[];this.newPage()}ByteArray.pageSize=4096;ByteArray.charMap={};for(var i=0;i<256;i++)ByteArray.charMap[i]=String.fromCharCode(i);ByteArray.prototype.newPage=function(){this.pages[++this.page]=new Uint8Array(ByteArray.pageSize);this.cursor=0};ByteArray.prototype.getData=function(){var rv="";for(var p=0;p<this.pages.length;p++){for(var i=0;i<ByteArray.pageSize;i++){rv+=ByteArray.charMap[this.pages[p][i]]}}return rv};ByteArray.prototype.writeByte=function(val){if(this.cursor>=ByteArray.pageSize)this.newPage();this.pages[this.page][this.cursor++]=val};ByteArray.prototype.writeUTFBytes=function(string){for(var l=string.length,i=0;i<l;i++)this.writeByte(string.charCodeAt(i))};ByteArray.prototype.writeBytes=function(array,offset,length){for(var l=length||array.length,i=offset||0;i<l;i++)this.writeByte(array[i])};function GIFEncoder(width,height){this.width=~~width;this.height=~~height;this.transparent=null;this.transIndex=0;this.repeat=-1;this.delay=0;this.image=null;this.pixels=null;this.indexedPixels=null;this.colorDepth=null;this.colorTab=null;this.neuQuant=null;this.usedEntry=new Array;this.palSize=7;this.dispose=-1;this.firstFrame=true;this.sample=10;this.dither=false;this.globalPavarte=false;this.out=new ByteArray}GIFEncoder.prototype.setDelay=function(milliseconds){this.delay=Math.round(milliseconds/10)};GIFEncoder.prototype.setFrameRate=function(fps){this.delay=Math.round(100/fps)};GIFEncoder.prototype.setDispose=function(disposalCode){if(disposalCode>=0)this.dispose=disposalCode};GIFEncoder.prototype.setRepeat=function(repeat){this.repeat=repeat};GIFEncoder.prototype.setTransparent=function(color){this.transparent=color};GIFEncoder.prototype.addFrame=function(imageData){this.image=imageData;this.colorTab=this.globalPavarte&&this.globalPavarte.slice?this.globalPavarte:null;this.getImagePixels();this.analyzePixels();if(this.globalPavarte===true)this.globalPavarte=this.colorTab;if(this.firstFrame){this.writeLSD();this.writePavarte();if(this.repeat>=0){this.writeNetscapeExt()}}this.writeGraphicCtrlExt();this.writeImageDesc();if(!this.firstFrame&&!this.globalPavarte)this.writePavarte();this.writePixels();this.firstFrame=false};GIFEncoder.prototype.finish=function(){this.out.writeByte(59)};GIFEncoder.prototype.setQuality=function(quality){if(quality<1)quality=1;this.sample=quality};GIFEncoder.prototype.setDither=function(dither){if(dither===true)dither="FloydSteinberg";this.dither=dither};GIFEncoder.prototype.setGlobalPavarte=function(pavarte){this.globalPavarte=pavarte};GIFEncoder.prototype.getGlobalPavarte=function(){return this.globalPavarte&&this.globalPavarte.slice&&this.globalPavarte.slice(0)||this.globalPavarte};GIFEncoder.prototype.writeHeader=function(){this.out.writeUTFBytes("GIF89a")};GIFEncoder.prototype.analyzePixels=function(){if(!this.colorTab){this.neuQuant=new NeuQuant(this.pixels,this.sample);this.neuQuant.buildColormap();this.colorTab=this.neuQuant.getColormap()}if(this.dither){this.ditherPixels(this.dither.replace("-serpentine",""),this.dither.match(/-serpentine/)!==null)}else{this.indexPixels()}this.pixels=null;this.colorDepth=8;this.palSize=7;if(this.transparent!==null){this.transIndex=this.findClosest(this.transparent,true)}};GIFEncoder.prototype.indexPixels=function(imgq){var nPix=this.pixels.length/3;this.indexedPixels=new Uint8Array(nPix);var k=0;for(var j=0;j<nPix;j++){var index=this.findClosestRGB(this.pixels[k++]&255,this.pixels[k++]&255,this.pixels[k++]&255);this.usedEntry[index]=true;this.indexedPixels[j]=index}};GIFEncoder.prototype.ditherPixels=function(kernel,serpentine){var kernels={FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[2/8,1,1]],FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]};if(!kernel||!kernels[kernel]){throw"Unknown dithering kernel: "+kernel}var ds=kernels[kernel];var index=0,height=this.height,width=this.width,data=this.pixels;var direction=serpentine?-1:1;this.indexedPixels=new Uint8Array(this.pixels.length/3);for(var y=0;y<height;y++){if(serpentine)direction=direction*-1;for(var x=direction==1?0:width-1,xend=direction==1?width:0;x!==xend;x+=direction){index=y*width+x;var idx=index*3;var r1=data[idx];var g1=data[idx+1];var b1=data[idx+2];idx=this.findClosestRGB(r1,g1,b1);this.usedEntry[idx]=true;this.indexedPixels[index]=idx;idx*=3;var r2=this.colorTab[idx];var g2=this.colorTab[idx+1];var b2=this.colorTab[idx+2];var er=r1-r2;var eg=g1-g2;var eb=b1-b2;for(var i=direction==1?0:ds.length-1,end=direction==1?ds.length:0;i!==end;i+=direction){var x1=ds[i][1];var y1=ds[i][2];if(x1+x>=0&&x1+x<width&&y1+y>=0&&y1+y<height){var d=ds[i][0];idx=index+x1+y1*width;idx*=3;data[idx]=Math.max(0,Math.min(255,data[idx]+er*d));data[idx+1]=Math.max(0,Math.min(255,data[idx+1]+eg*d));data[idx+2]=Math.max(0,Math.min(255,data[idx+2]+eb*d))}}}}};GIFEncoder.prototype.findClosest=function(c,used){return this.findClosestRGB((c&16711680)>>16,(c&65280)>>8,c&255,used)};GIFEncoder.prototype.findClosestRGB=function(r,g,b,used){if(this.colorTab===null)return-1;if(this.neuQuant&&!used){return this.neuQuant.lookupRGB(r,g,b)}var c=b|g<<8|r<<16;var minpos=0;var dmin=256*256*256;var len=this.colorTab.length;for(var i=0,index=0;i<len;index++){var dr=r-(this.colorTab[i++]&255);var dg=g-(this.colorTab[i++]&255);var db=b-(this.colorTab[i++]&255);var d=dr*dr+dg*dg+db*db;if((!used||this.usedEntry[index])&&d<dmin){dmin=d;minpos=index}}return minpos};GIFEncoder.prototype.getImagePixels=function(){var w=this.width;var h=this.height;this.pixels=new Uint8Array(w*h*3);var data=this.image;var srcPos=0;var count=0;for(var i=0;i<h;i++){for(var j=0;j<w;j++){this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];srcPos++}}};GIFEncoder.prototype.writeGraphicCtrlExt=function(){this.out.writeByte(33);this.out.writeByte(249);this.out.writeByte(4);var transp,disp;if(this.transparent===null){transp=0;disp=0}else{transp=1;disp=2}if(this.dispose>=0){disp=dispose&7}disp<<=2;this.out.writeByte(0|disp|0|transp);this.writeShort(this.delay);this.out.writeByte(this.transIndex);this.out.writeByte(0)};GIFEncoder.prototype.writeImageDesc=function(){this.out.writeByte(44);this.writeShort(0);this.writeShort(0);this.writeShort(this.width);this.writeShort(this.height);if(this.firstFrame||this.globalPavarte){this.out.writeByte(0)}else{this.out.writeByte(128|0|0|0|this.palSize)}};GIFEncoder.prototype.writeLSD=function(){this.writeShort(this.width);this.writeShort(this.height);this.out.writeByte(128|112|0|this.palSize);this.out.writeByte(0);this.out.writeByte(0)};GIFEncoder.prototype.writeNetscapeExt=function(){this.out.writeByte(33);this.out.writeByte(255);this.out.writeByte(11);this.out.writeUTFBytes("NETSCAPE2.0");this.out.writeByte(3);this.out.writeByte(1);this.writeShort(this.repeat);this.out.writeByte(0)};GIFEncoder.prototype.writePavarte=function(){this.out.writeBytes(this.colorTab);var n=3*256-this.colorTab.length;for(var i=0;i<n;i++)this.out.writeByte(0)};GIFEncoder.prototype.writeShort=function(pValue){this.out.writeByte(pValue&255);this.out.writeByte(pValue>>8&255)};GIFEncoder.prototype.writePixels=function(){var enc=new LZWEncoder(this.width,this.height,this.indexedPixels,this.colorDepth);enc.encode(this.out)};GIFEncoder.prototype.stream=function(){return this.out};module.exports=GIFEncoder},{"./LZWEncoder.js":2,"./TypedNeuQuant.js":3}],2:[function(require,module,exports){var EOF=-1;var BITS=12;var HSIZE=5003;var masks=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function LZWEncoder(width,height,pixels,colorDepth){var initCodeSize=Math.max(2,colorDepth);var accum=new Uint8Array(256);var htab=new Int32Array(HSIZE);var codetab=new Int32Array(HSIZE);var cur_accum,cur_bits=0;var a_count;var free_ent=0;var maxcode;var clear_flg=false;var g_init_bits,ClearCode,EOFCode;function char_out(c,outs){accum[a_count++]=c;if(a_count>=254)flush_char(outs)}function cl_block(outs){cl_hash(HSIZE);free_ent=ClearCode+2;clear_flg=true;output(ClearCode,outs)}function cl_hash(hsize){for(var i=0;i<hsize;++i)htab[i]=-1}function compress(init_bits,outs){var fcode,c,i,ent,disp,hsize_reg,hshift;g_init_bits=init_bits;clear_flg=false;n_bits=g_init_bits;maxcode=MAXCODE(n_bits);ClearCode=1<<init_bits-1;EOFCode=ClearCode+1;free_ent=ClearCode+2;a_count=0;ent=nextPixel();hshift=0;for(fcode=HSIZE;fcode<65536;fcode*=2)++hshift;hshift=8-hshift;hsize_reg=HSIZE;cl_hash(hsize_reg);output(ClearCode,outs);outer_loop:while((c=nextPixel())!=EOF){fcode=(c<<BITS)+ent;i=c<<hshift^ent;if(htab[i]===fcode){ent=codetab[i];continue}else if(htab[i]>=0){disp=hsize_reg-i;if(i===0)disp=1;do{if((i-=disp)<0)i+=hsize_reg;if(htab[i]===fcode){ent=codetab[i];continue outer_loop}}while(htab[i]>=0)}output(ent,outs);ent=c;if(free_ent<1<<BITS){codetab[i]=free_ent++;htab[i]=fcode}else{cl_block(outs)}}output(ent,outs);output(EOFCode,outs)}function encode(outs){outs.writeByte(initCodeSize);remaining=width*height;curPixel=0;compress(initCodeSize+1,outs);outs.writeByte(0)}function flush_char(outs){if(a_count>0){outs.writeByte(a_count);outs.writeBytes(accum,0,a_count);a_count=0}}function MAXCODE(n_bits){return(1<<n_bits)-1}function nextPixel(){if(remaining===0)return EOF;--remaining;var pix=pixels[curPixel++];return pix&255}function output(code,outs){cur_accum&=masks[cur_bits];if(cur_bits>0)cur_accum|=code<<cur_bits;else cur_accum=code;cur_bits+=n_bits;while(cur_bits>=8){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}if(free_ent>maxcode||clear_flg){if(clear_flg){maxcode=MAXCODE(n_bits=g_init_bits);clear_flg=false}else{++n_bits;if(n_bits==BITS)maxcode=1<<BITS;else maxcode=MAXCODE(n_bits)}}if(code==EOFCode){while(cur_bits>0){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}flush_char(outs)}}this.encode=encode}module.exports=LZWEncoder},{}],3:[function(require,module,exports){var ncycles=100;var netsize=256;var maxnetpos=netsize-1;var netbiasshift=4;var intbiasshift=16;var intbias=1<<intbiasshift;var gammashift=10;var gamma=1<<gammashift;var betashift=10;var beta=intbias>>betashift;var betagamma=intbias<<gammashift-betashift;var initrad=netsize>>3;var radiusbiasshift=6;var radiusbias=1<<radiusbiasshift;var initradius=initrad*radiusbias;var radiusdec=30;var alphabiasshift=10;var initalpha=1<<alphabiasshift;var alphadec;var radbiasshift=8;var radbias=1<<radbiasshift;var alpharadbshift=alphabiasshift+radbiasshift;var alpharadbias=1<<alpharadbshift;var prime1=499;var prime2=491;var prime3=487;var prime4=503;var minpicturebytes=3*prime4;function NeuQuant(pixels,samplefac){var network;var netindex;var bias;var freq;var radpower;function init(){network=[];netindex=new Int32Array(256);bias=new Int32Array(netsize);freq=new Int32Array(netsize);radpower=new Int32Array(netsize>>3);var i,v;for(i=0;i<netsize;i++){v=(i<<netbiasshift+8)/netsize;network[i]=new Float64Array([v,v,v,0]);freq[i]=intbias/netsize;bias[i]=0}}function unbiasnet(){for(var i=0;i<netsize;i++){network[i][0]>>=netbiasshift;network[i][1]>>=netbiasshift;network[i][2]>>=netbiasshift;network[i][3]=i}}function altersingle(alpha,i,b,g,r){network[i][0]-=alpha*(network[i][0]-b)/initalpha;network[i][1]-=alpha*(network[i][1]-g)/initalpha;network[i][2]-=alpha*(network[i][2]-r)/initalpha}function alterneigh(radius,i,b,g,r){var lo=Math.abs(i-radius);var hi=Math.min(i+radius,netsize);var j=i+1;var k=i-1;var m=1;var p,a;while(j<hi||k>lo){a=radpower[m++];if(j<hi){p=network[j++];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}if(k>lo){p=network[k--];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}}}function contest(b,g,r){var bestd=~(1<<31);var bestbiasd=bestd;var bestpos=-1;var bestbiaspos=bestpos;var i,n,dist,biasdist,betafreq;for(i=0;i<netsize;i++){n=network[i];dist=Math.abs(n[0]-b)+Math.abs(n[1]-g)+Math.abs(n[2]-r);if(dist<bestd){bestd=dist;bestpos=i}biasdist=dist-(bias[i]>>intbiasshift-netbiasshift);if(biasdist<bestbiasd){bestbiasd=biasdist;bestbiaspos=i}betafreq=freq[i]>>betashift;freq[i]-=betafreq;bias[i]+=betafreq<<gammashift}freq[bestpos]+=beta;bias[bestpos]-=betagamma;return bestbiaspos}function inxbuild(){var i,j,p,q,smallpos,smallval,previouscol=0,startpos=0;for(i=0;i<netsize;i++){p=network[i];smallpos=i;smallval=p[1];for(j=i+1;j<netsize;j++){q=network[j];if(q[1]<smallval){smallpos=j;smallval=q[1]}}q=network[smallpos];if(i!=smallpos){j=q[0];q[0]=p[0];p[0]=j;j=q[1];q[1]=p[1];p[1]=j;j=q[2];q[2]=p[2];p[2]=j;j=q[3];q[3]=p[3];p[3]=j}if(smallval!=previouscol){netindex[previouscol]=startpos+i>>1;for(j=previouscol+1;j<smallval;j++)netindex[j]=i;previouscol=smallval;startpos=i}}netindex[previouscol]=startpos+maxnetpos>>1;for(j=previouscol+1;j<256;j++)netindex[j]=maxnetpos}function inxsearch(b,g,r){var a,p,dist;var bestd=1e3;var best=-1;var i=netindex[g];var j=i-1;while(i<netsize||j>=0){if(i<netsize){p=network[i];dist=p[1]-g;if(dist>=bestd)i=netsize;else{i++;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}if(j>=0){p=network[j];dist=g-p[1];if(dist>=bestd)j=-1;else{j--;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}}return best}function learn(){var i;var lengthcount=pixels.length;var alphadec=30+(samplefac-1)/3;var samplepixels=lengthcount/(3*samplefac);var delta=~~(samplepixels/ncycles);var alpha=initalpha;var radius=initradius;var rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(i=0;i<rad;i++)radpower[i]=alpha*((rad*rad-i*i)*radbias/(rad*rad));var step;if(lengthcount<minpicturebytes){samplefac=1;step=3}else if(lengthcount%prime1!==0){step=3*prime1}else if(lengthcount%prime2!==0){step=3*prime2}else if(lengthcount%prime3!==0){step=3*prime3}else{step=3*prime4}var b,g,r,j;var pix=0;i=0;while(i<samplepixels){b=(pixels[pix]&255)<<netbiasshift;g=(pixels[pix+1]&255)<<netbiasshift;r=(pixels[pix+2]&255)<<netbiasshift;j=contest(b,g,r);altersingle(alpha,j,b,g,r);if(rad!==0)alterneigh(rad,j,b,g,r);pix+=step;if(pix>=lengthcount)pix-=lengthcount;i++;if(delta===0)delta=1;if(i%delta===0){alpha-=alpha/alphadec;radius-=radius/radiusdec;rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(j=0;j<rad;j++)radpower[j]=alpha*((rad*rad-j*j)*radbias/(rad*rad))}}}function buildColormap(){init();learn();unbiasnet();inxbuild()}this.buildColormap=buildColormap;function getColormap(){var map=[];var index=[];for(var i=0;i<netsize;i++)index[network[i][3]]=i;var k=0;for(var l=0;l<netsize;l++){var j=index[l];map[k++]=network[j][0];map[k++]=network[j][1];map[k++]=network[j][2]}return map}this.getColormap=getColormap;this.lookupRGB=inxsearch}module.exports=NeuQuant},{}],4:[function(require,module,exports){var GIFEncoder,renderFrame;GIFEncoder=require("./GIFEncoder.js");renderFrame=function(frame){var encoder,page,stream,transfer;encoder=new GIFEncoder(frame.width,frame.height);if(frame.index===0){encoder.writeHeader()}else{encoder.firstFrame=false}encoder.setTransparent(frame.transparent);encoder.setRepeat(frame.repeat);encoder.setDelay(frame.delay);encoder.setQuality(frame.quality);encoder.setDither(frame.dither);encoder.setGlobalPavarte(frame.globalPavarte);encoder.addFrame(frame.data);if(frame.last){encoder.finish()}if(frame.globalPavarte===true){frame.globalPavarte=encoder.getGlobalPavarte()}stream=encoder.stream();frame.data=stream.pages;frame.cursor=stream.cursor;frame.pageSize=stream.constructor.pageSize;if(frame.canTransfer){transfer=function(){var i,len,ref,results;ref=frame.data;results=[];for(i=0,len=ref.length;i<len;i++){page=ref[i];results.push(page.buffer)}return results}();return self.postMessage(frame,transfer)}else{return self.postMessage(frame)}};self.onmessage=function(event){return renderFrame(event.data)}},{"./GIFEncoder.js":1}]},{},[4]);`,gifworkerBlob=URL.createObjectURL(new Blob([gifworkerStr],{type:"application/javascript"}));const camera_fps=83;function cameraAddFrame(e,t,o,n){t.getContext("2d").drawImage(e,0,0,t.width,t.height),o.addFrame(t,{copy:!0,delay:n})}function initPkg_VideoTools_Cinema(){initPkg_VideoTools_Cinema_Dom(),initPkg_VideoTools_Cinema_Func()}function initPkg_VideoTools_Cinema_Dom(){Cinema_insertIcon()}function Cinema_insertIcon(){var e=document.createElement("li"),t=(e.id="ex-cinema",e.innerHTML=`
    影院比例
    <ul class="cinema__wrap">
        <li id="cinema__default">默认</li>
        <li id="cinema__cover">剪裁</li>
        <li id="cinema__fill">拉伸</li>
    </ul>
    `,document.getElementsByClassName("menu-da2a9e")[0]);t.insertBefore(e,t.childNodes[1])}function initPkg_VideoTools_Cinema_Func(){document.getElementById("cinema__default").addEventListener("click",()=>{StyleHook_remove("Ex_Style_Cinema")}),document.getElementById("cinema__cover").addEventListener("click",()=>{setVideoCinemaMode("cover")}),document.getElementById("cinema__fill").addEventListener("click",()=>{setVideoCinemaMode("fill")})}function setVideoCinemaMode(e){var t=String(parseInt(liveVideoNode.style.width)/2.39)+"px",e=(StyleHook_remove("Ex_Style_Cinema"),`
    .layout-Player-videoEntity video{object-fit:${e} !important;height:${t} !important;}
    `);StyleHook_set("Ex_Style_Cinema",e)}let icon_joysound_on='<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjIgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+am95c291bmQvc2VsZWN0ZWQ8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YwQ0I5NSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTlCRTgwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImpveXNvdW5kL3NlbGVjdGVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjc4NTc1MCwgMC43MTQyMjUpIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDI4NiwwIEwxNi40Mjg2LDkuNjQzIEMxNi40Mjg2LDE0LjEzNDU1MjcgMTIuODIzMzY2NywxNy43ODQyODggOC4zNDg5MzYxOCwxNy44NTYxNjk2IEw4LjE4NzE4MTUzLDE3Ljg1NzI1NjEgTDguMTg3MTgxNTMsMTcuODU3MjU2MSBMNy44NTcxLDE3Ljg1NzI1NjEgTDcuODU3MTM4OTYsMTcuODQ5NjQxIEMzLjQ5MjM4MDEzLDE3LjY2MjA3NDQgMCwxNC4wNTMxMzQxIDAsOS42NDMwNSBDMCw1LjExMzExNTA1IDMuNjg0NDAwMiwxLjQyODU1IDguMjE0MjUsMS40Mjg1NSBDOS43MDA3OTkxMywxLjQyODU1IDExLjA5NjI5ODUsMS44MjUzNTUwMiAxMi4zMDA0MTUxLDIuNTE4NjIzMzEgQzEyLjc0OTU2ODcsMS4wNjAxNjYwMSAxNC4xMDgyMjM2LDAgMTUuNzE0MzUsMCBMMTYuNDI4NiwwIFogTTguMjE0MjUsMi40Mjg1NSBDNC4yMzY2OTQ5NiwyLjQyODU1IDEsNS42NjUzODk3OCAxLDkuNjQzMDUgQzEsMTMuNTAwNzUwOCA0LjA0NDc3MzgsMTYuNjYxNzMzMyA3Ljg1NzA4ODk5LDE2Ljg0ODU2NjggTDcuODU3MDYyNTQsMTQuNTc1MDE3IEM2Ljc3Mjk4NjcxLDE0LjQ5NzMxMDMgNS43ODQ2MTcxOSwxNC4wNjg3NDc3IDUuMDA1MTgzMTEsMTMuNDAyNTU3OCBMNC45MjI0NzY5NywxMy4zMzAyNzYyIEw0LjgwNDkyNDY4LDEzLjIyMTc5NDEgQzMuODU5Mjk3NTksMTIuMzIwNjI4MyAzLjI2OTI1LDExLjA0OTU0OTYgMy4yNjkyNSw5LjY0MzAyNSBDMy4yNjkyNSw2LjkxNTg4MjYzIDUuNDg3MTA3NjMsNC42OTgwMjUgOC4yMTQyNSw0LjY5ODAyNSBDOS44MTQwMDc1Niw0LjY5ODAyNSAxMS4yMzg0NTI3LDUuNDYxMjEyMzMgMTIuMTQyNzY0NSw2LjY0MjcxMjE1IEwxMi4xNDI3NjQ1LDMuNTk0NjQ0OTEgQzExLjAxMTU4OTYsMi44NTczNjc2NSA5LjY2MTk5NDQ5LDIuNDI4NTUgOC4yMTQyNSwyLjQyODU1IFogTTguMjE0MjUsNS42OTgwMjUgQzYuMDM5MzkyMzcsNS42OTgwMjUgNC4yNjkyNSw3LjQ2ODE2NzM3IDQuMjY5MjUsOS42NDMwMjUgQzQuMjY5MjUsMTEuNjY5NTM3MyA1LjgwNjQ4MjY0LDEzLjM0NDc0OTggNy43NzU4ODgxNSwxMy41NjM1NjcyIEw3Ljg1NzEsMTMuNTcxNSBMOC4yMTQzNSwxMy41NzE1IEMxMC4zNDk2LDEzLjU3MTUgMTIuMDg2ODUsMTEuODY4IDEyLjE0MTYsOS43NDYgTDEyLjE0MjY0NjgsOS42NDMgTDEyLjE0MjY0NjgsOS4yODIzMzIzMyBDMTEuOTU5ODU4NSw3LjI3NTc1MDI2IDEwLjI2NzQ4MjMsNS42OTgwMjUgOC4yMTQyNSw1LjY5ODAyNSBaIE04LjIxNDI1LDcuNTAwMDI1IEM5LjM5NjE5Mjg0LDcuNTAwMDI1IDEwLjM1Nyw4LjQ2MDkzMzA5IDEwLjM1Nyw5LjY0MzAyNSBDMTAuMzU3LDEwLjgyNDkxNzQgOS4zOTYxNDIzNywxMS43ODU3NzUgOC4yMTQyNSwxMS43ODU3NzUgQzcuMDMyMTgyMTUsMTEuNzg1Nzc1IDYuMDcxNSwxMC44MjQ5OTE5IDYuMDcxNSw5LjY0MzAyNSBDNi4wNzE1LDguNDYwODU4NTUgNy4wMzIxMzE2OSw3LjUwMDAyNSA4LjIxNDI1LDcuNTAwMDI1IFogTTguMjE0MjUsOC41MDAwMjUgQzcuNTg0NDYzNDgsOC41MDAwMjUgNy4wNzE1LDkuMDEzMDk2MjcgNy4wNzE1LDkuNjQzMDI1IEM3LjA3MTUsMTAuMjcyNzMwNyA3LjU4NDQ5MDQyLDEwLjc4NTc3NSA4LjIxNDI1LDEwLjc4NTc3NSBDOC44NDM4NTc2MywxMC43ODU3NzUgOS4zNTcsMTAuMjcyNjMyNiA5LjM1Nyw5LjY0MzAyNSBDOS4zNTcsOS4wMTMxOTQzMyA4Ljg0Mzg4NDU3LDguNTAwMDI1IDguMjE0MjUsOC41MDAwMjUgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="joysound-on"/>',icon_joysound_off='<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjIgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+am95c291bmQvbm9ybWFsPC90aXRsZT4KICAgIDxnIGlkPSJqb3lzb3VuZC9ub3JtYWwiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNzg1NzUwLCAwLjcxNDIyNSkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi40Mjg2LDAgTDE2LjQyODYsOS42NDMgQzE2LjQyODYsMTQuMTM0NTUyNyAxMi44MjMzNjY3LDE3Ljc4NDI4OCA4LjM0ODkzNjE4LDE3Ljg1NjE2OTYgTDguMTg3MTgxNTMsMTcuODU3MjU2MSBMOC4xODcxODE1MywxNy44NTcyNTYxIEw3Ljg1NzEsMTcuODU3MjU2MSBMNy44NTcxMzg5NiwxNy44NDk2NDEgQzMuNDkyMzgwMTMsMTcuNjYyMDc0NCAwLDE0LjA1MzEzNDEgMCw5LjY0MzA1IEMwLDUuMTEzMTE1MDUgMy42ODQ0MDAyLDEuNDI4NTUgOC4yMTQyNSwxLjQyODU1IEM5LjcwMDc5OTEzLDEuNDI4NTUgMTEuMDk2Mjk4NSwxLjgyNTM1NTAyIDEyLjMwMDQxNTEsMi41MTg2MjMzMSBDMTIuNzQ5NTY4NywxLjA2MDE2NjAxIDE0LjEwODIyMzYsMCAxNS43MTQzNSwwIEwxNi40Mjg2LDAgWiBNOC4yMTQyNSwyLjQyODU1IEM0LjIzNjY5NDk2LDIuNDI4NTUgMSw1LjY2NTM4OTc4IDEsOS42NDMwNSBDMSwxMy41MDA3NTA4IDQuMDQ0NzczOCwxNi42NjE3MzMzIDcuODU3MDg4OTksMTYuODQ4NTY2OCBMNy44NTcwNjI1NCwxNC41NzUwMTcgQzYuNzcyOTg2NzEsMTQuNDk3MzEwMyA1Ljc4NDYxNzE5LDE0LjA2ODc0NzcgNS4wMDUxODMxMSwxMy40MDI1NTc4IEw0LjkyMjQ3Njk3LDEzLjMzMDI3NjIgTDQuODA0OTI0NjgsMTMuMjIxNzk0MSBDMy44NTkyOTc1OSwxMi4zMjA2MjgzIDMuMjY5MjUsMTEuMDQ5NTQ5NiAzLjI2OTI1LDkuNjQzMDI1IEMzLjI2OTI1LDYuOTE1ODgyNjMgNS40ODcxMDc2Myw0LjY5ODAyNSA4LjIxNDI1LDQuNjk4MDI1IEM5LjgxNDAwNzU2LDQuNjk4MDI1IDExLjIzODQ1MjcsNS40NjEyMTIzMyAxMi4xNDI3NjQ1LDYuNjQyNzEyMTUgTDEyLjE0Mjc2NDUsMy41OTQ2NDQ5MSBDMTEuMDExNTg5NiwyLjg1NzM2NzY1IDkuNjYxOTk0NDksMi40Mjg1NSA4LjIxNDI1LDIuNDI4NTUgWiBNOC4yMTQyNSw1LjY5ODAyNSBDNi4wMzkzOTIzNyw1LjY5ODAyNSA0LjI2OTI1LDcuNDY4MTY3MzcgNC4yNjkyNSw5LjY0MzAyNSBDNC4yNjkyNSwxMS42Njk1MzczIDUuODA2NDgyNjQsMTMuMzQ0NzQ5OCA3Ljc3NTg4ODE1LDEzLjU2MzU2NzIgTDcuODU3MSwxMy41NzE1IEw4LjIxNDM1LDEzLjU3MTUgQzEwLjM0OTYsMTMuNTcxNSAxMi4wODY4NSwxMS44NjggMTIuMTQxNiw5Ljc0NiBMMTIuMTQyNjQ2OCw5LjY0MyBMMTIuMTQyNjQ2OCw5LjI4MjMzMjMzIEMxMS45NTk4NTg1LDcuMjc1NzUwMjYgMTAuMjY3NDgyMyw1LjY5ODAyNSA4LjIxNDI1LDUuNjk4MDI1IFogTTguMjE0MjUsNy41MDAwMjUgQzkuMzk2MTkyODQsNy41MDAwMjUgMTAuMzU3LDguNDYwOTMzMDkgMTAuMzU3LDkuNjQzMDI1IEMxMC4zNTcsMTAuODI0OTE3NCA5LjM5NjE0MjM3LDExLjc4NTc3NSA4LjIxNDI1LDExLjc4NTc3NSBDNy4wMzIxODIxNSwxMS43ODU3NzUgNi4wNzE1LDEwLjgyNDk5MTkgNi4wNzE1LDkuNjQzMDI1IEM2LjA3MTUsOC40NjA4NTg1NSA3LjAzMjEzMTY5LDcuNTAwMDI1IDguMjE0MjUsNy41MDAwMjUgWiBNOC4yMTQyNSw4LjUwMDAyNSBDNy41ODQ0NjM0OCw4LjUwMDAyNSA3LjA3MTUsOS4wMTMwOTYyNyA3LjA3MTUsOS42NDMwMjUgQzcuMDcxNSwxMC4yNzI3MzA3IDcuNTg0NDkwNDIsMTAuNzg1Nzc1IDguMjE0MjUsMTAuNzg1Nzc1IEM4Ljg0Mzg1NzYzLDEwLjc4NTc3NSA5LjM1NywxMC4yNzI2MzI2IDkuMzU3LDkuNjQzMDI1IEM5LjM1Nyw5LjAxMzE5NDMzIDguODQzODg0NTcsOC41MDAwMjUgOC4yMTQyNSw4LjUwMDAyNSBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="joysound-off"/>';function initPkg_VideoTools_Joysound(){initPkg_VideoTools_Joysound_Dom(),initPkg_VideoTools_Joysound_Func()}function initPkg_VideoTools_Joysound_Dom(){Joysound_insertIcon()}function Joysound_insertIcon(){var e=document.createElement("div"),t=(e.id="ex-joysound",e.title="Joysound音效增强",unsafeWindow.hasInstalledJoysound&&1==localStorage.getItem("Ex_isJoysound")?e.innerHTML=icon_joysound_on:e.innerHTML=icon_joysound_off,document.getElementsByClassName("right-e7ea5d")[0]);t.insertBefore(e,t.childNodes[0])}function initPkg_VideoTools_Joysound_Func(){let e=document.getElementById("ex-joysound");document.getElementById("ex-joysound").addEventListener("click",()=>{unsafeWindow.hasInstalledJoysound?1==localStorage.getItem("Ex_isJoysound")?(unsafeWindow.disableJoysound(),e.innerHTML=icon_joysound_off):(unsafeWindow.enableJoysound(),e.innerHTML=icon_joysound_on):openPage("https://greasyfork.org/zh-CN/scripts/439845")})}let videoMetaData=null;function initPkg_VideoTools_MetaData(){MetaData_init()}function initPkg_VideoTools_MetaData_Dom(){var e,t;videoMetaData&&(videoMetaData.dy_cpu_model||videoMetaData.dy_gpu_model||videoMetaData.dy_device_model||videoMetaData.dy_os_version||videoMetaData.z_canvas_code)&&((e=document.createElement("li")).id="ex-metadata",e.innerHTML=`
    主播配置信息
    <ul class="metadata__wrap">
      ${videoMetaData.dy_cpu_model?`<li title="${videoMetaData.dy_cpu_model}">🤖CPU<br/>${videoMetaData.dy_cpu_model}</li>`:""}
      ${videoMetaData.dy_gpu_model?`<li title="${videoMetaData.dy_gpu_model}">🎮显卡<br/>${videoMetaData.dy_gpu_model}</li>`:""}
      ${videoMetaData.dy_device_model?`<li title="${videoMetaData.dy_device_model}">📱设备<br/>${videoMetaData.dy_device_model}</li>`:""}
      ${videoMetaData.dy_os_version?`<li title="${videoMetaData.dy_os_version}">🖥️系统<br/>${videoMetaData.dy_os_version}</li>`:""}
      ${videoMetaData.z_canvas_code?`<li title="${videoMetaData.z_canvas_code}">🎥场景<br/>${videoMetaData.z_canvas_code}</li>`:""}
    </ul>
    `,(t=document.getElementsByClassName("menu-da2a9e")[0]).insertBefore(e,t.childNodes[1]))}function MetaData_init(){getRealLive_Douyu(rid,!0,!1,"1",e=>{if(""!=e||null!=e)if("None"==e)showMessage("房间未开播或其他错误","error");else{var t=String(e).split("/live");0<t.length&&t[0];let n="Fake";var t=document.createElement("div"),o="",o=(t.id="exVideoDiv"+n,t.className="exVideoDiv",o+="<video controls='controls' class='exVideoPlayer' id='exVideoPlayer"+String(n)+"'></video><div class='exVideoScale' id='exVideoScale"+String(n)+"'></div>",t.innerHTML=o,document.getElementsByClassName("layout-Main")[0]);if(o.insertBefore(t,o.childNodes[0]),flvjs.isSupported()){t=document.getElementById("exVideoPlayer"+n);let o=flvjs.createPlayer({type:"flv",url:e},{fixAudioTimestampGap:!1});o.on("media_info",e=>{var t;e&&e.metadata&&(videoMetaData=e.metadata,e=document.getElementById("exVideoDiv"+String(n)),t=document.getElementById("exVideoPlayer"+String(n)),o.destroy(),t.remove(),e.remove(),initPkg_VideoTools_MetaData_Dom())}),o.attachMediaElement(t),o.load()}}})}let currentBrightness="",currentContrast="",currentSaturate="",liveVideoParentClassName="",isMirror=!1,rotateAngle=0,transformCss={rotateY:"",rotate:"",scale:""},panorama=null;function initPkg_VideoTools_Filter(){liveVideoParentClassName=liveVideoNode.parentNode.className,initPkg_VideoTools_Filter_Dom(),initPkg_VideoTools_Filter_Func()}function initPkg_VideoTools_Filter_Dom(){Filter_insertIcon()}function Filter_insertIcon(){var e=document.createElement("div");e.id="ex-filter",e.innerHTML=`
    <div class="filter__wrap">
        <div class="filter__panel">
            <div class="filter__bright">
                <span class="filter__title">明亮度</span>
                <div class="filter__scroll" id="scroll__bright">
                    <div class="filter__scroll-bar" id="bar__bright"></div>
                    <div class="filter__scroll-mask" id="mask__bright"></div>
                </div>
            </div>
            <div class="filter__contrast">
                <span class="filter__title">对比度</span>
                <div class="filter__scroll" id="scroll__contrast">
                    <div class="filter__scroll-bar" id="bar__contrast"></div>
                    <div class="filter__scroll-mask" id="mask__contrast"></div>
                </div>
            </div>
            <div class="filter__saturate">
                <span class="filter__title">饱和度</span>
                <div class="filter__scroll" id="scroll__saturate">
                    <div class="filter__scroll-bar" id="bar__saturate"></div>
                    <div class="filter__scroll-mask" id="mask__saturate"></div>
                </div>
            </div>
            <div class="filter__filter">
                <p style="color:white;float:left;line-height:20px">滤镜</p>
                <select class="c3-4f78e3" id="filter__select">
                    <option class="option-b5745c" value="default">无</option>
                    <option class="option-b5745c" value="1977">1977</option>
                    <option class="option-b5745c" value="Aden">Aden</option>
                    <option class="option-b5745c" value="Amaro">Amaro</option>
                    <option class="option-b5745c" value="Brannan">Brannan</option>
                    <option class="option-b5745c" value="Brooklyn">Brooklyn</option>
                    <option class="option-b5745c" value="Claredon">Claredon</option>
                    <option class="option-b5745c" value="Earlybird">Earlybird</option>
                    <option class="option-b5745c" value="Gingham">Gingham</option>
                    <option class="option-b5745c" value="Hudson">Hudson</option>
                    <option class="option-b5745c" value="Inkwell">Inkwell</option>
                    <option class="option-b5745c" value="Lofi">Lofi</option>
                    <option class="option-b5745c" value="Maven">Maven</option>
                    <option class="option-b5745c" value="Perpetua">Perpetua</option>
                    <option class="option-b5745c" value="Reyes">Reyes</option>
                    <option class="option-b5745c" value="Stinson">Stinson</option>
                    <option class="option-b5745c" value="Toaster">Toaster</option>
                    <option class="option-b5745c" value="Walden">Walden</option>
                    <option class="option-b5745c" value="Valencia">Valencia</option>
                    <option class="option-b5745c" value="Xpro2">Xpro2</option>
                </select>
            </div>
            <ul style="clear:both">
                <li id="filter__reset2">重置</li>
            </ul>
        </div>
    </div>
    <svg t="1598941324196" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3146" width="24" height="24"><path d="M921.6 766.634667L257.365333 102.4a68.266667 68.266667 0 0 0-96.597333 0L102.4 160.768a68.266667 68.266667 0 0 0 0 96.597333L766.634667 921.6a68.266667 68.266667 0 0 0 96.597333 0L921.6 863.232a68.266667 68.266667 0 0 0 0-96.597333zM139.605333 199.338667l59.733334-59.733334A13.312 13.312 0 0 1 208.896 136.533333a13.653333 13.653333 0 0 1 9.898667 4.096l83.968 82.944-79.189334 79.189334-83.968-83.968a13.653333 13.653333 0 0 1 0-19.456z m744.789334 625.322666l-59.733334 59.733334a13.312 13.312 0 0 1-9.557333 4.096 13.653333 13.653333 0 0 1-9.898667-4.096L262.144 341.333333 341.333333 262.144l543.061334 543.061333a13.653333 13.653333 0 0 1 0 19.456zM230.058667 589.824l-50.517334 92.501333-92.842666 50.858667 92.842666 50.517333 50.517334 92.842667 50.517333-92.842667 92.842667-50.517333-92.842667-50.858667-50.517333-92.501333zM541.013333 270.336l31.061334-57.344 57.344-31.402667-57.344-31.402666-31.061334-57.002667-31.402666 57.002667-57.344 31.402666 57.344 31.402667 31.402666 57.344zM827.392 377.173333l21.162667-38.912L887.466667 317.098667l-38.912-21.504-21.162667-38.912-21.504 38.912-38.570667 21.504 38.570667 21.162666 21.504 38.912z" p-id="3147" fill="#ffffff"></path></svg>
    `;let t=document.getElementsByClassName("right-e7ea5d")[0];t.insertBefore(e,t.childNodes[0]),t=document.getElementsByClassName("menu-da2a9e")[0];e=document.createElement("li"),e.id="filter__panorama",e.innerText="全景",t.insertBefore(e,t.childNodes[1]),e=document.createElement("li"),e.id="filter__mirror",e.innerText="镜像画面",t.insertBefore(e,t.childNodes[1]),e=document.createElement("li"),e.id="filter__rotate",e.innerText="旋转画面",t.insertBefore(e,t.childNodes[1]),e=document.createElement("li"),e.id="filter__reset",e.innerText="重置",t.insertBefore(e,t.childNodes[1]),e=document.createElement("div");e.className="divider-f9d33d",t.insertBefore(e,t.childNodes[1])}function initPkg_VideoTools_Filter_Func(){document.onmouseup=function(){document.onmousemove=null},setScrollFunc(document.getElementById("scroll__bright"),document.getElementById("bar__bright"),document.getElementById("mask__bright"),e=>{currentBrightness=`brightness(${e}%)`,liveVideoNode.style.filter=`${currentBrightness} ${currentContrast} `+currentSaturate}),setScrollFunc(document.getElementById("scroll__contrast"),document.getElementById("bar__contrast"),document.getElementById("mask__contrast"),e=>{currentContrast=`contrast(${e}%)`,liveVideoNode.style.filter=`${currentBrightness} ${currentContrast} `+currentSaturate}),setScrollFunc(document.getElementById("scroll__saturate"),document.getElementById("bar__saturate"),document.getElementById("mask__saturate"),e=>{currentSaturate=`saturate(${e}%)`,liveVideoNode.style.filter=`${currentBrightness} ${currentContrast} `+currentSaturate});var e=document.getElementById("ex-filter");const t=document.getElementsByClassName("filter__wrap")[0];let o=!1,n=null;e.addEventListener("mouseover",function(){n&&clearTimeout(n),t.style.display="block",n=setTimeout(()=>{o||(t.style.display="none")},1500)}),t.addEventListener("mouseover",function(){o=!0}),t.addEventListener("mouseleave",function(){setTimeout(()=>{t.style.display="none",o=!1},500)}),document.getElementById("filter__reset").addEventListener("click",()=>{resetVideoFilter()}),document.getElementById("filter__reset2").addEventListener("click",()=>{resetVideoFilter()}),document.getElementById("filter__mirror").addEventListener("click",()=>{isMirror?(isMirror=!1,transformCss.rotateY="rotateY(0deg)"):(isMirror=!0,transformCss.rotateY="rotateY(180deg)"),liveVideoNode.parentNode.style.transition="all .5s",liveVideoNode.parentNode.style.transform=transformCss.rotateY+" "+transformCss.rotate+" "+transformCss.scale}),document.getElementById("filter__rotate").addEventListener("click",()=>{rotateAngle+=90,transformCss.rotate=`rotate(${String(rotateAngle)}deg)`,liveVideoNode.parentNode.style.transition="all .5s",rotateAngle/90%2!=0?window.innerWidth>window.innerHeight?transformCss.scale="scale("+String(liveVideoNode.videoHeight/liveVideoNode.videoWidth)+")":transformCss.scale="scale("+String(liveVideoNode.videoWidth/liveVideoNode.videoHeight)+")":transformCss.scale="",liveVideoNode.parentNode.style.transform=transformCss.rotateY+" "+transformCss.rotate+" "+transformCss.scale}),document.getElementById("filter__select").onchange=function(){switch(this.options[this.selectedIndex].text){case"default":StyleHook_remove("Ex_Style_Filter");break;case"1977":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(110%)brightness(110%)saturate(130%);filter:contrast(110%)brightness(110%)saturate(130%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:screen;background:rgba(243,106,188,0.3);z-index:10}`);break;case"Aden":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(90%)brightness(120%)saturate(85%)hue-rotate(20deg);filter:contrast(90%)brightness(120%)saturate(85%)hue-rotate(20deg)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:darken;background:-webkit-linear-gradient(to right,rgba(66,10,14,0.2)1,rgba(66,10,14,0));background:linear-gradient(to right,rgba(66,10,14,0.2)1,rgba(66,10,14,0));z-index:10}`);break;case"Amaro":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(90%)brightness(110%)saturate(150%)hue-rotate(-10deg);filter:contrast(90%)brightness(110%)saturate(150%)hue-rotate(-10deg)}`);break;case"Brannan":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(140%)sepia(50%);filter:contrast(140%)sepia(50%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:lighten;background:rgba(161,44,199,0.31);z-index:10}`);break;case"Brooklyn":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(90%)brightness(110%);filter:contrast(90%)brightness(110%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:overlay;background:-webkit-radial-gradient(50%50%,circle closest-corner,rgba(168,223,193,0.4)1,rgba(183,196,200,0.2));background:radial-gradient(50%50%,circle closest-corner,rgba(168,223,193,0.4)1,rgba(183,196,200,0.2));z-index:10}`);break;case"Claredon":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(120%)saturate(125%);filter:contrast(120%)saturate(125%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:overlay;background:rgba(127,187,227,0.2);z-index:10}`);break;case"Earlybird":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(90%)sepia(20%);filter:contrast(90%)sepia(20%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:overlay;background:-webkit-radial-gradient(50%50%,circle closest-corner,rgba(208,186,142,1)20,rgba(29,2,16,0.2));background:radial-gradient(50%50%,circle closest-corner,rgba(208,186,142,1)20,rgba(29,2,16,0.2));z-index:10}`);break;case"Gingham":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:brightness(105%)hue-rotate(350deg);filter:brightness(105%)hue-rotate(350deg)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:darken;background:-webkit-linear-gradient(to right,rgba(66,10,14,0.2)1,rgba(0,0,0,0));background:linear-gradient(to right,rgba(66,10,14,0.2)1,rgba(0,0,0,0));z-index:10}`);break;case"Hudson":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(90%)brightness(120%)saturate(110%);filter:contrast(90%)brightness(120%)saturate(110%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:multiply;opacity:0.5;background:-webkit-radial-gradient(50%50%,circle closest-corner,rgba(255,177,166,1)50,rgba(52,33,52,1));background:radial-gradient(50%50%,circle closest-corner,rgba(255,177,166,1)50,rgba(52,33,52,1));z-index:10}`);break;case"Inkwell":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(110%)brightness(110%)sepia(30%)grayscale(100%);filter:contrast(110%)brightness(110%)sepia(30%)grayscale(100%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;background:rgba(0,0,0,0);z-index:10}`);break;case"Lofi":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(150%)saturate(110%);filter:contrast(150%)saturate(110%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:multiply;background:-webkit-radial-gradient(50%50%,circle closest-corner,rgba(0,0,0,0)70,rgba(34,34,34,1));background:radial-gradient(50%50%,circle closest-corner,rgba(0,0,0,0)70,rgba(34,34,34,1));z-index:10}`);break;case"Maven":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(95%)brightness(95%)saturate(150%)sepia(25%);filter:contrast(95%)brightness(95%)saturate(150%)sepia(25%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:hue;background:rgba(3,230,26,0.2);z-index:10}`);break;case"Perpetua":setVideoFilter(`.${liveVideoParentClassName}{position:relative}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:soft-light;opacity:0.5;background:-webkit-linear-gradient(to bottom,rgba(0,91,154,1)1,rgba(61,193,230,0));background:linear-gradient(to bottom,rgba(0,91,154,1)1,rgba(61,193,230,0));z-index:10}`);break;case"Reyes":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(85%)brightness(110%)saturate(75%)sepia(22%);filter:contrast(85%)brightness(110%)saturate(75%)sepia(22%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:soft-light;opacity:0.5;background:rgba(173,205,239,1);z-index:10}`);break;case"Stinson":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(75%)brightness(115%)saturate(85%);filter:contrast(75%)brightness(115%)saturate(85%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:soft-light;background:rgba(240,149,128,0.2);z-index:10}`);break;case"Toaster":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(150%)brightness(90%);filter:contrast(150%)brightness(90%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:screen;opacity:0.5;background:-webkit-radial-gradient(50%50%,circle closest-corner,rgba(15,78,128,1)1,rgba(59,0,59,1));background:radial-gradient(50%50%,circle closest-corner,rgba(15,78,128,1)1,rgba(59,0,59,1));z-index:10}`);break;case"Walden":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:brightness(110%)saturate(160%)sepia(30%)hue-rotate(350deg);filter:brightness(110%)saturate(160%)sepia(30%)hue-rotate(350deg)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:screen;opacity:0.3;background:rgba(204,68,0,1);z-index:10}`);break;case"Valencia":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:contrast(108%)brightness(108%)sepia(8%);filter:contrast(108%)brightness(108%)sepia(8%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:exclusion;opacity:0.5;background:rgba(58,3,57,1);z-index:10}`);break;case"Xpro2":setVideoFilter(`.${liveVideoParentClassName}{position:relative;-webkit-filter:sepia(30%);filter:sepia(30%)}.${liveVideoParentClassName}::before{content:"";display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;mix-blend-mode:color-burn;background:-webkit-radial-gradient(50%50%,circle closest-corner,rgba(224,231,230,1)40,rgba(43,42,161,0.6));background:radial-gradient(50%50%,circle closest-corner,rgba(224,231,230,1)40,rgba(43,42,161,0.6));z-index:10}`);break;default:StyleHook_remove("Ex_Style_Filter")}},document.getElementById("filter__panorama").addEventListener("click",()=>{var e,t=document.getElementById("ex-panorama");t?(t.remove(),panorama=null):(t=document.getElementById("__h5player"),(e=document.createElement("div")).id="ex-panorama",e.style="width:100%;height:100%;z-index:1;background:black;",t.insertBefore(e,t.childNodes[0]),panoramaAnimation(panorama=new PanoramaVideo(e,liveVideoNode)))})}function resetVideoFilter(){StyleHook_remove("Ex_Style_Filter"),document.getElementById("filter__select").selectedIndex=0,liveVideoNode.style.filter="",rotateAngle=0,transformCss={rotateY:"",rotate:"",scale:""},liveVideoNode.parentNode.style.transform="",document.getElementById("bar__bright").style.left="100px",document.getElementById("bar__contrast").style.left="100px",document.getElementById("bar__saturate").style.left="100px",document.getElementById("mask__bright").style.width="100px",document.getElementById("mask__contrast").style.width="100px",document.getElementById("mask__saturate").style.width="100px";var e=document.getElementById("ex-panorama"),e=(e&&(e.remove(),panorama=null),document.getElementsByClassName("layout-Player-videoEntity")[0]);e.style.transform="",e.style.transformOrigin="",videoScale=1,StyleHook_remove("Ex_Style_Cinema"),liveVideoNode.playbackRate=1}function panoramaAnimation(e){requestAnimationFrame(()=>{panoramaAnimation(e)}),e.update()}function setVideoFilter(e){StyleHook_remove("Ex_Style_Filter"),StyleHook_set("Ex_Style_Filter",e),document.getElementsByClassName("filter__wrap")[0].style.display="none"}function setScrollFunc(e,t,o,n){let i=e,a=t,r=o,s=0;a.onmousedown=function(e){let t=(e||window.event).clientX-this.offsetLeft,o=this;document.onmousemove=function(e){e=e||window.event;(s=e.clientX-t)<0?s=0:s>i.offsetWidth-a.offsetWidth&&(s=i.offsetWidth-a.offsetWidth),r.style.width=s+"px",o.style.left=s+"px",n(parseInt(s/(i.offsetWidth-a.offsetWidth)*255)),window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()}}}function initPkg_VideoTools_VideoRecall(){initPkg_VideoTools_VideoRecall_Func()}function initPkg_VideoTools_VideoRecall_Func(){document.getElementsByClassName("layout-Player-video")[0].addEventListener("keydown",e=>{1!=isInput&&(37==e.keyCode?liveVideoNode.currentTime+=-3:39==e.keyCode&&(liveVideoNode.currentTime+=3))})}function initPkg_VideoTools_VideoSpeed(){initPkg_VideoTools_VideoSpeed_Dom(),initPkg_VideoTools_VideoSpeed_Func()}function initPkg_VideoTools_VideoSpeed_Dom(){VideoSpeed_insertIcon()}function VideoSpeed_insertIcon(){var e=document.createElement("li"),t=(e.id="ex-videospeed",e.innerHTML=`
    倍速播放
    <ul class="videospeed__wrap">
        <li id="videospeed__2.0">2.0x</li>
        <li id="videospeed__1.5">1.5x</li>
        <li id="videospeed__1.25">1.25x</li>
        <li id="videospeed__1.0">1.0x</li>
        <li id="videospeed__0.75">0.75x</li>
        <li id="videospeed__0.5">0.5x</li>
    </ul>
    `,document.getElementsByClassName("menu-da2a9e")[0]);t.insertBefore(e,t.childNodes[1])}function initPkg_VideoTools_VideoSpeed_Func(){document.getElementById("videospeed__2.0").addEventListener("click",()=>{liveVideoNode.playbackRate=2}),document.getElementById("videospeed__1.5").addEventListener("click",()=>{liveVideoNode.playbackRate=1.5}),document.getElementById("videospeed__1.25").addEventListener("click",()=>{liveVideoNode.playbackRate=1.25}),document.getElementById("videospeed__1.0").addEventListener("click",()=>{liveVideoNode.playbackRate=1}),document.getElementById("videospeed__0.75").addEventListener("click",()=>{liveVideoNode.playbackRate=.75}),document.getElementById("videospeed__0.5").addEventListener("click",()=>{liveVideoNode.playbackRate=.5})}function initPkg_VideoTools_VideoSync(){initPkg_VideoTools_VideoSync_Dom(),initPkg_VideoTools_VideoSync_Func()}function initPkg_VideoTools_VideoSync_Dom(){VideoSync_insertIcon()}function VideoSync_insertIcon(){var e=document.createElement("div"),t=(e.id="ex-videosync",e.title="同步时间",e.innerHTML=`
    <svg t="1595680402158" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7532" width="22" height="22"><path d="M938.1888 534.016h-80.7936c0.4096-7.3728 0.6144-14.6432 0.6144-22.016 0-218.624-176.8448-400.7936-389.12-400.7936C257.024 111.2064 80.6912 293.1712 80.6912 512c0 218.7264 176.4352 400.7936 388.1984 400.7936 74.752 0 149.0944-22.016 208.1792-60.0064l42.7008 68.608c-75.0592 48.9472-161.9968 74.8544-250.7776 74.752C209.8176 996.1472 0 779.264 0 512S209.8176 27.8528 468.8896 27.8528C728.3712 27.8528 938.7008 244.736 938.7008 512c0 7.3728-0.2048 14.6432-0.512 22.016z m-261.12 318.7712z m-26.4192-158.1056L426.7008 556.032V291.9424h64v226.5088L689.5616 635.904l-38.912 58.7776z m245.3504-6.656L768 512h256L896 688.0256z" fill="#ffffff" p-id="7533"></path></svg>
    `,document.getElementsByClassName("left-d3671e")[0]);t.insertBefore(e,t.childNodes[3])}function initPkg_VideoTools_VideoSync_Func(){document.getElementById("ex-videosync").addEventListener("click",()=>{setVideoSync()})}function setVideoSync(){var e=liveVideoNode.buffered;0!=e.length&&(liveVideoNode.currentTime=e.end(0))}var isInput=!1;let videotools_num=0;function initPkg_VideoTools(){let e=setInterval(()=>{0<document.getElementsByClassName("right-e7ea5d").length&&(clearInterval(e),liveVideoNode=document.querySelector(".layout-Player-videoEntity video"),document.getElementsByClassName("disable-23f484")[0].innerHTML="DouyuEx_"+curVersion,initPkg_VideoTools_Module(),initPkg_VideoTools_Func()),100<=++videotools_num&&clearInterval(e)},1500)}function initPkg_VideoTools_Module(){initPkg_VideoTools_Joysound(),initPkg_VideoTools_VideoSpeed(),initPkg_VideoTools_Cinema(),initPkg_VideoTools_VideoSync(),initPkg_VideoTools_VideoRecall(),initPkg_VideoTools_Filter(),initPkg_VideoTools_Camera(),initPkg_VideoTools_VideoZoom(),initPkg_VideoTools_MetaData()}function initPkg_VideoTools_Func(){document.getElementById("js-player-toolbar").addEventListener("mouseover",()=>{document.getElementsByClassName("filter__wrap")[0].style.display="none"}),document.getElementById("js-player-asideMain").addEventListener("mouseover",()=>{document.getElementsByClassName("filter__wrap")[0].style.display="none"}),document.getElementsByClassName("inputView-2a65aa")[0].addEventListener("focus",()=>{isInput=!0}),document.getElementsByClassName("inputView-2a65aa")[0].addEventListener("blur",()=>{isInput=!1});new DomHook(".app-f0f9c7",!1,e=>{0<e.length&&(0<e[0].addedNodes.length?isInput=!0:0<e[0].removedNodes.length&&(isInput=!1))})}let videoScale=1;function initPkg_VideoTools_VideoZoom(){let o=document.getElementsByClassName("layout-Player-video")[0],n=document.getElementsByClassName("layout-Player-videoEntity")[0],i=0,a=0,r=0,s=0,l,d;n.style.transition="all 0.1s",o.addEventListener("mousewheel",e=>{var t;e.ctrlKey&&(e.preventDefault(),e.stopPropagation(),t=e.wheelDelta||-e.detail,i=e.screenX-o.getBoundingClientRect().left,a=e.screenY-o.getBoundingClientRect().top,0<=t?videoScale+=.1:videoScale-=.1,n.style.transform=`scale(${videoScale})`,n.style.transformOrigin=`${i}px ${a}px`)}),o.addEventListener("mousedown",e=>{e.ctrlKey&&0===e.button&&(r=e.clientX-o.getBoundingClientRect().left,s=e.clientY-o.getBoundingClientRect().top)}),o.addEventListener("mouseup",e=>{var t;e.ctrlKey&&0===e.button&&(l=e.clientX-o.getBoundingClientRect().left,d=e.clientY-o.getBoundingClientRect().top,e=l-r,t=d-s,i-=e,a-=t,""!==n.style.transform)&&(n.style.transformOrigin=`${i}px ${a}px`)})}function initPkg_WeeklyPanel(){isShowWeeklyPanel()&&(initPkg_WeeklyPanel_Dom(),initPkg_WeeklyPanel_Func())}function initPkg_WeeklyPanel_Dom(){var e=document.createElement("div"),t=(e.className="weeklypanel__panel-wrap",e.innerHTML=`
		<div class="weeklypanel__panel">
            <div class="weeklypanel__close">×</div>
			<div class="weeklypanel__content">
				<div class="weeklypanel__text">😳项目维护不易，如果觉得DouyuEx有帮助到你的话</div>
				<div class="weeklypanel__text">请点击下方链接，在右上角点个免费的⭐吧！</div>
				<div class="weeklypanel__text">以鼓励我长期维护下去，感谢使用😇</div>
				<div class="weeklypanel__text"><a href="https://github.com/qianjiachun/douyuEx" target="_blank">https://github.com/qianjiachun/douyuEx</a></div>
				<img style="width: 500px;margin-top:50px;" class="weeklypanel__img" src="https://img.douyucdn.cn/data/yuba/weibo/2022/01/18/202201181035499149780732227.png"/>
			</div>
		</div>
	`,document.getElementById("root"));t.insertBefore(e,t.childNodes[0])}function initPkg_WeeklyPanel_Func(){let e=document.getElementsByClassName("weeklypanel__panel-wrap")[0];document.getElementsByClassName("weeklypanel__close")[0].addEventListener("click",()=>{e.style.display="none"})}function isShowWeeklyPanel(){return!1}function initPkg_Yuba_dark(){}class ASS{constructor(e){var t={width:1920,height:1080,fontSize:36,alpha:this._prefixInteger(Number(0).toString(16),2),stayTime:10,title:"Default"};this.options={...t,...e,...e&&e.alpha?this._prefixInteger(this.options.alpha.toString(16),2):{}},this.lines=20,this.lineBase=this.options.height/this.lines,this.currentLine=0,this.diffTime=1500}generate(e){var t=e.sort((e,t)=>e.time-t.time);let o=this._getScriptInfo()+this._getV4Styles()+this._getEvents();for(let e=0;e<t.length;e++){0<e&&t[e].time-t[e-1].time<=this.diffTime?this.currentLine++:this.currentLine=0,this.currentLine>=this.lines&&(this.currentLine=0);var n=t[e],i=Number(n.time)+1e3*Number(this.options.stayTime),a=this.lineBase*this.currentLine+this.options.fontSize,r=this.options.fontSize*n.txt.length;o+=`Dialogue: 0,${formatSeconds2(Number(n.time)/1e3)}.00,${formatSeconds2(i/1e3)}.00,Color${n.color},,0,0,0,,{\\move(${this.options.width+r},${a},${-r},${a})}${n.txt}
`}return o}_prefixInteger(e,t){return e=""+e,Array(t+1-e.length).join("0")+e}_getScriptInfo(){return`[Script Info]
; DouyuEx -By qianjiachun
; https://github.com/qianjiachun/douyuEx
ScriptType: v4.00+
Title: ${this.options.title}
PlayResX: ${this.options.width}
PlayResY: ${this.options.height}
`}_getV4Styles(){return`
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Color0,黑体,${this.options.fontSize},&H${this.options.alpha}FFFFFF,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color7,黑体,${this.options.fontSize},&H${this.options.alpha}5456FF,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color8,黑体,${this.options.fontSize},&H${this.options.alpha}2375FF,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color9,黑体,${this.options.fontSize},&H${this.options.alpha}B369FE,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color10,黑体,${this.options.fontSize},&H${this.options.alpha}00BCFF,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color11,黑体,${this.options.fontSize},&H${this.options.alpha}46C978,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color12,黑体,${this.options.fontSize},&H${this.options.alpha}FF7F9E,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
Style: Color13,黑体,${this.options.fontSize},&H${this.options.alpha}FF9B3D,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,0,0,0,0,0,0,0,0,0,134
`}_getEvents(){return`
[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`}}function doSign(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/hostSnowSign/doSign",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`actAlias=${e}&token=${dyToken}&ctn=`+getCCN()}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function signAct(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/signAct/signIn",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"token="+dyToken+"&signAlias="+e}).then(e=>e.json()).then(e=>{t(e)})})}function userStatus(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/actTask/userStatus",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`tasks=${e}&token=`+dyToken}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function takeActPrize(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/actTask/takePrize",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`token=${dyToken}&aid=android&taskAlias=`+e}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function addFollowRoom(e){return new Promise(t=>{fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/add",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`rid=${e}&ctn=`+getCCN()}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function removeFollowRoom(e){return new Promise(t=>{fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/rm",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`rid=${e}&ctn=`+getCCN()}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function shareAct(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/common/share",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`actAlias=${e}&token=`+dyToken}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.log("请求失败!",e)})})}function getJackpot(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/lottery/jackpot",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:`{"activityId":"${e}","token":"${dyToken}"}`}).then(e=>e.json()).then(e=>{t(e)})})}function getActRemaining(e){return new Promise(t=>{fetch("https://www.douyu.com/japi/carnival/nc/lottery/remaining?activityId="+e,{method:"GET",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(e=>e.json()).then(e=>{t(e)})})}function getActList(){}class CClick{constructor(e){this.func_click=null,this.func_dbClick=null,this.func_longClick=null;let t=!1,o,n=0,i;e.onmousedown=e=>{0===e.button&&(t=!1,o=setTimeout(()=>{t=!0,null!==this.func_longClick&&this.func_longClick(e)},700))},e.onmouseup=e=>{0===e.button&&0==t&&(clearTimeout(o),2<=++n?(clearTimeout(i),n=0,null!==this.func_dbClick&&this.func_dbClick(e)):i=setTimeout(()=>{n=0,null!==this.func_click&&this.func_click(e)},0))}}click(e){this.func_click=e}dbClick(e){this.func_dbClick=e}longClick(e){this.func_longClick=e}}class DomHook{constructor(e,t,o){this.selector=e,this.isSubtree=t;e=document.querySelector(this.selector);null!=e&&(t=new MutationObserver(function(e){o(e)}),this.observer=t,this.observer.observe(e,{attributes:!0,childList:!0,subtree:this.isSubtree}))}closeHook(){this.observer&&this.observer.disconnect()}}class DyVideoSign{constructor(e){this.pointId=e,this.decoder=new TextDecoder}getSign(){var e=parseInt((new Date).getTime()/1e3,10);return unsafeWindow[this.d539fa2cf7732d2a(256042,"9f4f419501570ad13334")](this.pointId,"10000000000000000000000000001501",e)}d539fa2cf7732d2a(e,t){for(var e=CryptoJS.MM(e.toString()).toString(),o=e[0].charCodeAt(0),n=e[16].charCodeAt(0),i=[],a=0;a<4;a++)i[a]=o<<24|o<<16|o<<8|o,i[a+4]=n<<24|n<<16|n<<8|n;for(var e=Math.floor(t.length/16)%4,r=[],s=t.length%8,l=Math.floor(t.length/8),a=0;a<l;a++)r[a]=255&parseInt(t.substr(8*a,2),16)|parseInt(t.substr(8*a+2,2),16)<<8&65280|parseInt(t.substr(8*a+4,2),16)<<24>>>8|parseInt(t.substr(8*a+6,2),16)<<24;var d=0==e?e86500e2(r,i):1==e?this.c30070a4(r,i):d831eb20(r,i),c=[];for(a=0;a<d.length;a++){var u=255&d[a],m=d[a]>>>8&255,p=d[a]>>>16&255,g=d[a]>>>24&255;u&&c.push(u),m&&c.push(m),p&&c.push(p),g&&c.push(g)}var h=Math.floor(s/2);for(a=0;a<h;a++)c.push(255&parseInt(t.substr(8*l+2*a,2),16));return this.decoder.decode(new Uint8Array(c))}c30070a4(e,t){for(var o=Math.floor(e.length/2),n=e.slice(0),i=0;i<o;i++){var a=this.f5a40d76(e.slice(2*i,2*i+2),32,t.slice(4*i%8,4*i%8+4));n[2*i+0]=a[0],n[2*i+1]=a[1]}return n}f5a40d76(e,t,o){for(var n=0;n<e.length;n+=2){for(var i=e[n],a=e[n+1],r=2654435769*t,s=0;s<t;s++)i-=((a-=(i<<4^i>>>5)+i^r+o[r>>>11&3])<<4^a>>>5)+a^(r-=2654435769)+o[3&r];e[n]=i,e[n+1]=a}return e}}class DyWacthAd{constructor(e,t,o){this.posid=e,this.token=t,this.rid=o,this._uid=String(t).split("_")[0],this._mid=0,this._infoBack=""}async start(){var e=await this.getInfo(this.posid,this.token,this.rid);return 0!=e&&(this._mid=e.mid,this._infoBack=e.infoBack,await this.getStart(this.posid,this.token,this._uid,this._mid,this._infoBack))}async finish(){return await this.getFinish(this.posid,this.token,this._uid,this._mid,this._infoBack)}getInfo(e,t,n){return new Promise(o=>{GM_xmlhttpRequest({method:"POST",url:"https://rtbapi.douyucdn.cn/japi/sign/app/getinfo?token="+t+"&mdid=phone&client_sys=android",data:"posid="+e+"&roomid="+n+'&cate1=1&cate2=1&chanid=30&device={"nt":"1"}',responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var t,e=e.response;"0"==e.error&&(0==e.data.length?o(!1):(t=e.data[0].mid,e=encodeURIComponent(JSON.stringify(e.data)),o({mid:t,infoBack:e})))}})})}getStart(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/start?client_sys=android",data:"&uid="+n+"&roomId="+rid+"&posCode="+e+"&token="+o+"&clientType=1&creativeId="+i+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){"0"==e.response.error&&t(!0)}})})}getFinish(e,o,n,i,a){return new Promise(t=>{GM_xmlhttpRequest({method:"POST",url:"https://apiv2.douyucdn.cn/japi/inspire/api/ad/fishpond/mobile/finish?client_sys=android",data:"uid="+n+"&clientType=1&posCode="+e+"&creativeId="+i+"&roomId="+rid+"&token="+o+"&infoBack="+a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;"0"==e.error&&"1"==e.data?t(!0):t(!1)}})})}}function M3U8(){var s=this;function l(e,t,o,n){var l=this;this.aborted=!1,this.threadNum=10,this.step=0,function n(a,i,r,s){let e=[];for(let t=0;t<l.threadNum;t++){if(!a[r+t]){e.push(Promise.resolve());break}e.push(fetch(a[r+t]).catch(e=>{fetch(a[r+t]).catch(e=>{fetch(a[r+t])})}))}l.step=e.length;Promise.all(e).then(function(e){return c(d(e,function(e){return e&&e.blob}),function(e){return e.blob()})}).then(function(e){return Promise.all(e)}).then(function(e){e=c(e,function(n,i){return new Promise(function(t,e){var o=new FileReader;o.readAsArrayBuffer(new Blob([n],{type:"octet/stream"}));o.addEventListener("loadend",function(e){t(o.result),l.onprogress&&l.onprogress({segment:r+i+1,total:a.length,percentage:((r+i+1)/a.length*100).toFixed(3),downloaded:m(+u(c(s,function(e){return e.byteLength}),function(e,t){return e+t},0)),status:"Downloading..."})})})});Promise.all(e).then(function(e){for(var t=0;t<e.length;t++)s.push(e[t]);let o=l.step;a[r+2];l.aborted?(s=null,l.aborted()):a[r+o]?l.ie?setTimeout(function(){n(a,i,r+o,s)},500):n(a,i,r+o,s):i(s)})}).catch(function(e){l.onerror&&l.onerror("Something went wrong when downloading ts file, nr. "+r+": "+e)})}(e,t,o,n)}function d(e,t){for(var o=[],n=0;n<e.length;n++)t(e[n],n)&&o.push(e[n]);return o}function c(e,t){for(var o=e.slice(0),n=0;n<e.length;n++)o[n]=t(e[n],n);return o}function u(e,o,t){var n=t;return e.forEach(function(e,t){e=+o(n,e,t);n=e}),n}function m(e){for(var t=[{divider:1e18,suffix:"EB"},{divider:1e15,suffix:"PB"},{divider:1e12,suffix:"TB"},{divider:1e9,suffix:"GB"},{divider:1e6,suffix:"MB"},{divider:1e3,suffix:"kB"}],o=0;o<t.length;o++)if(e>=t[o].divider)return(e/t[o].divider).toString().toString().split(".")[0]+t[o].suffix;return e.toString()}this.ie=0<navigator.appVersion.toString().indexOf(".NET"),this.ios=navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),this.start=function(e,i){i=i||{};var a,o,n={progress:null,finished:null,error:null,aborted:null};function r(e,t){e&&n[e]&&n[e](t)}return s.ios?r("error","Downloading on IOS is not supported."):(o={on:function(e,t){switch(e){case"progress":n.progress=t;break;case"finished":n.finished=t;break;case"error":n.error=t;break;case"aborted":n.aborted=t}return o},abort:function(){a&&(a.aborted=function(){r("aborted")})}},new Promise(function(o,t){var n=new URL(e);fetch(e).then(function(e){return e.text()}).then(function(e){e=c(d(e.split(/(\r\n|\r|\n)/gi),function(e){return-1<e.indexOf(".ts")}),function(e,t){return 0===e.indexOf("http")||0===e.indexOf("ftp")?e:n.protocol+"//"+n.host+n.pathname+"/./../"+e});if(!e.length)return t("Invalid m3u8 playlist"),r("error","Invalid m3u8 playlist");(a=new l(e,function(e){var t,e=new Blob(e,{type:"octet/stream"});r("progress",{status:"Processing..."}),i.returnBlob?(r("finished",{status:"Successfully downloaded video",data:e}),o(e)):s.ios||(s.ie?(r("progress",{status:"Sending video to Internet Explorer... this may take a while depending on your device's performance."}),window.navigator.msSaveBlob(e,i&&i.filename||"video.mp4")):(r("progress",{status:"Sending video to browser..."}),(t=document.createElementNS("http://www.w3.org/1999/xhtml","a")).href=URL.createObjectURL(e),t.download=i&&i.filename||"video.mp4",t.style.display="none",document.body.appendChild(t),t.click(),r("finished",{status:"Successfully downloaded video",data:e}),o(e)))},0,[])).onprogress=function(e){r("progress",e)}}).catch(function(e){r("error","Something went wrong when downloading m3u8 playlist: "+e)})}),o)}}var hexcase=0,b64pad="",chrsz=8;function hex_md5(e){return binl2hex(core_md5(str2binl(e),e.length*chrsz))}function b64_md5(e){return binl2b64(core_md5(str2binl(e),e.length*chrsz))}function str_md5(e){return binl2str(core_md5(str2binl(e),e.length*chrsz))}function hex_hmac_md5(e,t){return binl2hex(core_hmac_md5(e,t))}function b64_hmac_md5(e,t){return binl2b64(core_hmac_md5(e,t))}function str_hmac_md5(e,t){return binl2str(core_hmac_md5(e,t))}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc")}function core_md5(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var o=1732584193,n=-271733879,i=-1732584194,a=271733878,r=0;r<e.length;r+=16){var s=o,l=n,d=i,c=a,o=md5_ff(o,n,i,a,e[r+0],7,-680876936),a=md5_ff(a,o,n,i,e[r+1],12,-389564586),i=md5_ff(i,a,o,n,e[r+2],17,606105819),n=md5_ff(n,i,a,o,e[r+3],22,-1044525330);o=md5_ff(o,n,i,a,e[r+4],7,-176418897),a=md5_ff(a,o,n,i,e[r+5],12,1200080426),i=md5_ff(i,a,o,n,e[r+6],17,-1473231341),n=md5_ff(n,i,a,o,e[r+7],22,-45705983),o=md5_ff(o,n,i,a,e[r+8],7,1770035416),a=md5_ff(a,o,n,i,e[r+9],12,-1958414417),i=md5_ff(i,a,o,n,e[r+10],17,-42063),n=md5_ff(n,i,a,o,e[r+11],22,-1990404162),o=md5_ff(o,n,i,a,e[r+12],7,1804603682),a=md5_ff(a,o,n,i,e[r+13],12,-40341101),i=md5_ff(i,a,o,n,e[r+14],17,-1502002290),o=md5_gg(o,n=md5_ff(n,i,a,o,e[r+15],22,1236535329),i,a,e[r+1],5,-165796510),a=md5_gg(a,o,n,i,e[r+6],9,-1069501632),i=md5_gg(i,a,o,n,e[r+11],14,643717713),n=md5_gg(n,i,a,o,e[r+0],20,-373897302),o=md5_gg(o,n,i,a,e[r+5],5,-701558691),a=md5_gg(a,o,n,i,e[r+10],9,38016083),i=md5_gg(i,a,o,n,e[r+15],14,-660478335),n=md5_gg(n,i,a,o,e[r+4],20,-405537848),o=md5_gg(o,n,i,a,e[r+9],5,568446438),a=md5_gg(a,o,n,i,e[r+14],9,-1019803690),i=md5_gg(i,a,o,n,e[r+3],14,-187363961),n=md5_gg(n,i,a,o,e[r+8],20,1163531501),o=md5_gg(o,n,i,a,e[r+13],5,-1444681467),a=md5_gg(a,o,n,i,e[r+2],9,-51403784),i=md5_gg(i,a,o,n,e[r+7],14,1735328473),o=md5_hh(o,n=md5_gg(n,i,a,o,e[r+12],20,-1926607734),i,a,e[r+5],4,-378558),a=md5_hh(a,o,n,i,e[r+8],11,-2022574463),i=md5_hh(i,a,o,n,e[r+11],16,1839030562),n=md5_hh(n,i,a,o,e[r+14],23,-35309556),o=md5_hh(o,n,i,a,e[r+1],4,-1530992060),a=md5_hh(a,o,n,i,e[r+4],11,1272893353),i=md5_hh(i,a,o,n,e[r+7],16,-155497632),n=md5_hh(n,i,a,o,e[r+10],23,-1094730640),o=md5_hh(o,n,i,a,e[r+13],4,681279174),a=md5_hh(a,o,n,i,e[r+0],11,-358537222),i=md5_hh(i,a,o,n,e[r+3],16,-722521979),n=md5_hh(n,i,a,o,e[r+6],23,76029189),o=md5_hh(o,n,i,a,e[r+9],4,-640364487),a=md5_hh(a,o,n,i,e[r+12],11,-421815835),i=md5_hh(i,a,o,n,e[r+15],16,530742520),o=md5_ii(o,n=md5_hh(n,i,a,o,e[r+2],23,-995338651),i,a,e[r+0],6,-198630844),a=md5_ii(a,o,n,i,e[r+7],10,1126891415),i=md5_ii(i,a,o,n,e[r+14],15,-1416354905),n=md5_ii(n,i,a,o,e[r+5],21,-57434055),o=md5_ii(o,n,i,a,e[r+12],6,1700485571),a=md5_ii(a,o,n,i,e[r+3],10,-1894986606),i=md5_ii(i,a,o,n,e[r+10],15,-1051523),n=md5_ii(n,i,a,o,e[r+1],21,-2054922799),o=md5_ii(o,n,i,a,e[r+8],6,1873313359),a=md5_ii(a,o,n,i,e[r+15],10,-30611744),i=md5_ii(i,a,o,n,e[r+6],15,-1560198380),n=md5_ii(n,i,a,o,e[r+13],21,1309151649),o=md5_ii(o,n,i,a,e[r+4],6,-145523070),a=md5_ii(a,o,n,i,e[r+11],10,-1120210379),i=md5_ii(i,a,o,n,e[r+2],15,718787259),n=md5_ii(n,i,a,o,e[r+9],21,-343485551),o=safe_add(o,s),n=safe_add(n,l),i=safe_add(i,d),a=safe_add(a,c)}return Array(o,n,i,a)}function md5_cmn(e,t,o,n,i,a){return safe_add(bit_rol(safe_add(safe_add(t,e),safe_add(n,a)),i),o)}function md5_ff(e,t,o,n,i,a,r){return md5_cmn(t&o|~t&n,e,t,i,a,r)}function md5_gg(e,t,o,n,i,a,r){return md5_cmn(t&n|o&~n,e,t,i,a,r)}function md5_hh(e,t,o,n,i,a,r){return md5_cmn(t^o^n,e,t,i,a,r)}function md5_ii(e,t,o,n,i,a,r){return md5_cmn(o^(t|~n),e,t,i,a,r)}function core_hmac_md5(e,t){for(var o=str2binl(e),n=(16<o.length&&(o=core_md5(o,e.length*chrsz)),Array(16)),i=Array(16),a=0;a<16;a++)n[a]=909522486^o[a],i[a]=1549556828^o[a];e=core_md5(n.concat(str2binl(t)),512+t.length*chrsz);return core_md5(i.concat(e),640)}function safe_add(e,t){var o=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(o>>16)<<16|65535&o}function bit_rol(e,t){return e<<t|e>>>32-t}function str2binl(e){for(var t=Array(),o=(1<<chrsz)-1,n=0;n<e.length*chrsz;n+=chrsz)t[n>>5]|=(e.charCodeAt(n/chrsz)&o)<<n%32;return t}function binl2str(e){for(var t="",o=(1<<chrsz)-1,n=0;n<32*e.length;n+=chrsz)t+=String.fromCharCode(e[n>>5]>>>n%32&o);return t}function binl2hex(e){for(var t=hexcase?"0123456789ABCDEF":"0123456789abcdef",o="",n=0;n<4*e.length;n++)o+=t.charAt(e[n>>2]>>n%4*8+4&15)+t.charAt(e[n>>2]>>n%4*8&15);return o}function binl2b64(e){for(var t="",o=0;o<4*e.length;o+=3)for(var n=(e[o>>2]>>o%4*8&255)<<16|(e[o+1>>2]>>(o+1)%4*8&255)<<8|e[o+2>>2]>>(o+2)%4*8&255,i=0;i<4;i++)8*o+6*i>32*e.length?t+=b64pad:t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n>>6*(3-i)&63);return t}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("NoticeJs",[],t):"object"==typeof exports?exports.NoticeJs=t():e.NoticeJs=t()}("undefined"!=typeof self?self:this,function(){return o=[function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});t.noticeJsModalClassName="noticejs-modal",t.closeAnimation="noticejs-fadeOut",t.Defaults={title:"",text:"",type:"success",position:"topRight",newestOnTop:!1,timeout:30,progressBar:!0,closeWith:["button"],animation:null,modal:!1,width:320,scroll:{maxHeightContent:300,showOnHover:!0},rtl:!1,callbacks:{beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onClick:[],onHover:[],onTemplate:[]}}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.appendNoticeJs=t.addListener=t.CloseItem=t.AddModal=void 0,t.getCallback=r;var n=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}}(o(0));var a=n.Defaults;function r(t,e){t.callbacks.hasOwnProperty(e)&&t.callbacks[e].forEach(function(e){"function"==typeof e&&e.apply(t)})}var s=t.AddModal=function(){var e;document.getElementsByClassName(n.noticeJsModalClassName).length<=0&&((e=document.createElement("div")).classList.add(n.noticeJsModalClassName),e.classList.add("noticejs-modal-open"),document.body.appendChild(e),setTimeout(function(){e.className=n.noticeJsModalClassName},200))},i=t.CloseItem=function(e){r(a,"onClose"),null!==a.animation&&null!==a.animation.close&&(e.className+=" "+a.animation.close),setTimeout(function(){e.remove()},200),!0===a.modal&&1<=document.querySelectorAll("[noticejs-modal='true']").length&&(document.querySelector(".noticejs-modal").className+=" noticejs-modal-close",setTimeout(function(){document.querySelector(".noticejs-modal").remove()},500));var t="."+e.closest(".noticejs").className.replace("noticejs","").trim();setTimeout(function(){document.querySelectorAll(t+" .item").length<=0&&document.querySelector(t)&&document.querySelector(t).remove()},500)},l=t.addListener=function(t){a.closeWith.includes("button")&&t.querySelector(".close").addEventListener("click",function(){i(t)}),a.closeWith.includes("click")?(t.style.cursor="pointer",t.addEventListener("click",function(e){"close"!==e.target.className&&(r(a,"onClick"),i(t))})):t.addEventListener("click",function(e){"close"!==e.target.className&&r(a,"onClick")}),t.addEventListener("mouseover",function(){r(a,"onHover")})};t.appendNoticeJs=function(e,t,o){var n=".noticejs-"+a.position,i=document.createElement("div");return i.classList.add("item"),i.classList.add(a.type),!0===a.rtl&&i.classList.add("noticejs-rtl"),""!==a.width&&Number.isInteger(a.width)&&(i.style.width=a.width+"px"),e&&""!==e&&i.appendChild(e),i.appendChild(t),o&&""!==o&&i.appendChild(o),["top","bottom"].includes(a.position)&&(document.querySelector(n).innerHTML=""),null!==a.animation&&null!==a.animation.open&&(i.className+=" "+a.animation.open),!0===a.modal&&(i.setAttribute("noticejs-modal","true"),s()),l(i,a.closeWith),r(a,"beforeShow"),r(a,"onShow"),!0===a.newestOnTop?document.querySelector(n).insertAdjacentElement("afterbegin",i):document.querySelector(n).appendChild(i),r(a,"afterShow"),i}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e};function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=o(3),r=((a=a)&&a.__esModule,d(o(0))),s=o(4),l=d(o(1));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=this,o=c;if(t instanceof o)return this.options=Object.assign(r.Defaults,e),this.component=new s.Components,this.on("beforeShow",this.options.callbacks.beforeShow),this.on("onShow",this.options.callbacks.onShow),this.on("afterShow",this.options.callbacks.afterShow),this.on("onClose",this.options.callbacks.onClose),this.on("afterClose",this.options.callbacks.afterClose),this.on("onClick",this.options.callbacks.onClick),this.on("onHover",this.options.callbacks.onHover),this;throw new TypeError("Cannot call a class as a function")}n(c,[{key:"show",value:function(){var e=this.component.createContainer(),e=(null===document.querySelector(".noticejs-"+this.options.position)&&document.body.appendChild(e),void 0),t=this.component.createHeader(this.options.title,this.options.closeWith),o=this.component.createBody(this.options.text);return!0===this.options.progressBar&&(e=this.component.createProgressBar()),l.appendNoticeJs(t,o,e)}},{key:"on",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof t&&this.options.callbacks.hasOwnProperty(e)&&this.options.callbacks[e].push(t),this}}],[{key:"overrideDefaults",value:function(e){return this.options=Object.assign(r.Defaults,e),this}}]),t.default=c,e.exports=t.default},function(e,t){},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Components=void 0;var n=function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e};function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=r(o(0)),s=r(o(1));function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}var l=a.Defaults;t.Components=(n(d,[{key:"createContainer",value:function(){var e="noticejs-"+l.position,t=document.createElement("div");return t.classList.add("noticejs"),t.classList.add(e),t}},{key:"createHeader",value:function(){var e,t=void 0;return l.title&&""!==l.title&&((t=document.createElement("div")).setAttribute("class","noticejs-heading"),t.textContent=l.title),l.closeWith.includes("button")&&((e=document.createElement("div")).setAttribute("class","close"),e.innerHTML="&times;",t?t.appendChild(e):t=e),t}},{key:"createBody",value:function(){var e=document.createElement("div"),t=(e.setAttribute("class","noticejs-body"),document.createElement("div"));return t.setAttribute("class","noticejs-content"),t.innerHTML=l.text,e.appendChild(t),null!==l.scroll&&""!==l.scroll.maxHeight&&(e.style.overflowY="auto",e.style.maxHeight=l.scroll.maxHeight+"px",!0===l.scroll.showOnHover)&&(e.style.visibility="hidden"),e}},{key:"createProgressBar",value:function(){var e,t,o,n,i,a=document.createElement("div"),r=(a.setAttribute("class","noticejs-progressbar"),document.createElement("div"));return r.setAttribute("class","noticejs-bar"),a.appendChild(r),!0===l.progressBar&&"boolean"!=typeof l.timeout&&!1!==l.timeout&&(e=function(){var e,t;o<=0?(clearInterval(n),e=a.closest("div.item"),null!==l.animation&&null!==l.animation.close?(e.className=e.className.replace(new RegExp("(?:^|\\s)"+l.animation.open+"(?:\\s|$)")," "),e.className+=" "+l.animation.close,t=parseInt(l.timeout)+500,setTimeout(function(){s.CloseItem(e)},t)):s.CloseItem(e)):(o--,r.style.width=o+"%")},o=100,n=void 0,(t=function(){n=setInterval(e,l.timeout),console.log("startProgress")})(),(i=document.querySelector(".noticejs")).addEventListener("mouseenter",function(e){clearInterval(n),console.log("stopProgress")}),i.addEventListener("mouseleave",function(e){t()})),a}}]),d);function d(){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function")}}],i={},n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=2);function n(e){var t;return(i[e]||(t=i[e]={i:e,l:!1,exports:{}},o[e].call(t.exports,t,t.exports,n),t.l=!0,t)).exports}var o,i});class PanoramaVideo{constructor(e,t){this.domContainer=e,this.domVideo=t,this.camera=null,this.scene=null,this.renderer=null,this.isUserInteracting=!1,this.lon=0,this.lat=0,this.phi=0,this.theta=0,this.distance=50,this.onPointerDownPointerX=0,this.onPointerDownPointerY=0,this.onPointerDownLon=0,this.onPointerDownLat=0,this.onDocumentMouseDown=this.onDocumentMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.onDocumentMouseWheel=this.onDocumentMouseWheel.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.init()}init(){var e=this.domContainer,t=(this.camera=new THREE.PerspectiveCamera(75,this.domVideo.videoWidth/this.domVideo.videoHeight,1,1100),this.camera.target=new THREE.Vector3(0,0,0),this.scene=new THREE.Scene,new THREE.SphereBufferGeometry(500,60,40)),o=(t.scale(-1,1,1),new THREE.VideoTexture(this.domVideo)),o=(o.minFilter=THREE.LinearFilter,new THREE.MeshBasicMaterial({map:o})),t=new THREE.Mesh(t,o);this.scene.add(t),this.renderer=new THREE.WebGLRenderer,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.domVideo.clientWidth,this.domVideo.clientHeight),e.appendChild(this.renderer.domElement),e.addEventListener("mousedown",this.onDocumentMouseDown,!1),e.addEventListener("mousemove",this.onDocumentMouseMove,!1),e.addEventListener("mouseup",this.onDocumentMouseUp,!1),e.addEventListener("wheel",this.onDocumentMouseWheel,!1),window.addEventListener("resize",this.onWindowResize,!1)}onWindowResize(){this.camera.aspect=this.domVideo.videoWidth/this.domVideo.videoHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.domVideo.clientWidth,this.domVideo.clientHeight)}onDocumentMouseDown(e){this.isUserInteracting=!0,this.onPointerDownPointerX=e.clientX,this.onPointerDownPointerY=e.clientY,this.onPointerDownLon=this.lon,this.onPointerDownLat=this.lat}onDocumentMouseMove(e){!0===this.isUserInteracting&&(this.lon=.1*(this.onPointerDownPointerX-e.clientX)+this.onPointerDownLon,this.lat=.1*(e.clientY-this.onPointerDownPointerY)+this.onPointerDownLat)}onDocumentMouseUp(){this.isUserInteracting=!1}onDocumentMouseWheel(e){this.distance+=.05*e.deltaY,this.distance=THREE.Math.clamp(this.distance,1,50)}update(){this.lat=Math.max(-85,Math.min(85,this.lat)),this.phi=THREE.Math.degToRad(90-this.lat),this.theta=THREE.Math.degToRad(this.lon),this.camera.position.x=this.distance*Math.sin(this.phi)*Math.cos(this.theta),this.camera.position.y=this.distance*Math.cos(this.phi),this.camera.position.z=this.distance*Math.sin(this.phi)*Math.sin(this.theta),this.camera.lookAt(this.camera.target),this.renderer.render(this.scene,this.camera)}}function showAlert(e){PostbirdAlertBox.alert({title:"提示",content:e,okBtn:"确定",contentColor:"rgb(51,51,51)"})}function showConfirm(e,t,o){PostbirdAlertBox.confirm({title:"提示",content:e,okBtn:"确定",contentColor:"rgb(51,51,51)",onConfirm:function(){t()},onCancel:function(){o()}})}function showPrompt(e,t,o){PostbirdAlertBox.prompt({title:e,okBtn:"确定",onConfirm:function(e){t(e)},onCancel:function(e){o(e)}})}var PostbirdAlertBox={containerClass:"postbird-box-container active",box:null,textTemplate:{title:"提示信息",content:"提示内容",okBtn:"好的",cancelBtn:"取消",contentColor:"#000000",okBtnColor:"#0e90d2",promptTitle:"请输入内容",promptOkBtn:"确认"},getAlertTemplate:function(){return'<div class="postbird-box-dialog"><div class="postbird-box-content"><div class="postbird-box-header"><span class="postbird-box-close-btn">×</span><span class="postbird-box-title"><span >'+this.textTemplate.title+'</span></span></div><div class="postbird-box-text"><span style="color:'+this.textTemplate.contentColor+';">'+this.textTemplate.content+'</span></div><div class="postbird-box-footer"><button class="btn-footer btn-block-footer btn-footer-ok" style="color:'+this.textTemplate.okBtnColor+';">'+this.textTemplate.okBtn+"</button></div></div></div>"},getConfirmTemplate:function(){return'<div class="postbird-box-container"><div class="postbird-box-dialog"><div class="postbird-box-content"><div class="postbird-box-header"><span class="postbird-box-close-btn">×</span><span class="postbird-box-title"><span >'+this.textTemplate.title+'</span></span></div><div class="postbird-box-text"><span style="color:'+this.textTemplate.contentColor+';">'+this.textTemplate.content+'?</span></div><div class="postbird-box-footer"><button class="btn-footer btn-left-footer btn-footer-cancel" style="color:'+this.textTemplate.cancelBtnColor+';">'+this.textTemplate.cancelBtn+'</button><button class="btn-footer btn-right-footer btn-footer-ok"  style="color:'+this.textTemplate.okBtnColor+';">'+this.textTemplate.okBtn+"</button></div></div></div></div>"},getPromptTemplate:function(){return'<div class="postbird-box-container"><div class="postbird-box-dialog"><div class="postbird-box-content"><div class="postbird-box-header"><span class="postbird-box-close-btn">×</span><span class="postbird-box-title"><span >'+this.textTemplate.title+'</span></span></div><div class="postbird-box-text"><input type="text" class="postbird-prompt-input" autofocus="true" ></div><div class="postbird-box-footer"><button class="btn-footer btn-left-footer btn-footer-cancel" style="color:'+this.textTemplate.cancelBtnColor+';">'+this.textTemplate.cancelBtn+'</button><button class="btn-footer btn-right-footer btn-footer-ok"  style="color:'+this.textTemplate.okBtnColor+';">'+this.textTemplate.okBtn+"</button></div></div></div></div>"},alert:function(e){this.textTemplate.title=e.title||this.textTemplate.title,this.textTemplate.content=e.content||this.textTemplate.content,this.textTemplate.okBtn=e.okBtn||this.textTemplate.okBtn,this.textTemplate.okBtnColor=e.okBtnColor||this.textTemplate.okBtnColor,this.textTemplate.contentColor=e.contentColor||this.textTemplate.contentColor;var t=document.createElement("div"),o=this,t=(t.className=this.containerClass,t.innerHTML=this.getAlertTemplate(),this.box=t,document.body.appendChild(this.box),document.getElementsByClassName("btn-footer-ok"));t[t.length-1].focus(),t[t.length-1].onclick=function(){e.onConfirm&&e.onConfirm(),o.removeBox()}},confirm:function(e){this.textTemplate.title=e.title||this.textTemplate.promptTitle,this.textTemplate.promptPlaceholder=e.promptPlaceholder||this.textTemplate.promptPlaceholder,this.textTemplate.okBtn=e.okBtn||this.textTemplate.promptOkBtn,this.textTemplate.okBtnColor=e.okBtnColor||this.textTemplate.okBtnColor,this.textTemplate.cancelBtn=e.cancelBtn||this.textTemplate.cancelBtn,this.textTemplate.cancelBtnColor=e.cancelBtnColor||this.textTemplate.cancelBtnColor,this.textTemplate.content=e.content||this.textTemplate.content;var t=document.createElement("div"),o=this,t=((this.box=t).className=this.containerClass,t.innerHTML=this.getConfirmTemplate(),document.body.appendChild(t),document.getElementsByClassName("btn-footer-ok")),t=(t[t.length-1].focus(),t[t.length-1].onclick=function(){e.onConfirm&&e.onConfirm(),o.removeBox()},document.getElementsByClassName("btn-footer-cancel"));t[t.length-1].onclick=function(){e.onCancel&&e.onCancel(),o.removeBox()}},prompt:function(e){this.textTemplate.title=e.title||this.textTemplate.title,this.textTemplate.content=e.content||this.textTemplate.content,this.textTemplate.contentColor=e.contentColor||this.textTemplate.contentColor,this.textTemplate.okBtn=e.okBtn||this.textTemplate.okBtn,this.textTemplate.okBtnColor=e.okBtnColor||this.textTemplate.okBtnColor,this.textTemplate.cancelBtn=e.cancelBtn||this.textTemplate.cancelBtn,this.textTemplate.cancelBtnColor=e.cancelBtnColor||this.textTemplate.cancelBtnColor;var t=document.createElement("div"),o=this,n=(t.className=this.containerClass,t.innerHTML=this.getPromptTemplate(),this.box=t,document.body.appendChild(t),document.getElementsByClassName("postbird-prompt-input")),t=((n=n[n.length-1]).focus(),document.getElementsByClassName("btn-footer-ok")),t=(n.value,t[t.length-1].focus(),t[t.length-1].onclick=function(){e.onConfirm&&e.onConfirm(n.value),o.removeBox()},document.getElementsByClassName("btn-footer-cancel"));t[t.length-1].onclick=function(){e.onCancel&&e.onCancel(n.value),o.removeBox()}},colse:function(){this.removeBox()},removeBox:function(){var e=document.getElementsByClassName(this.containerClass);document.body.removeChild(e[e.length-1])}};function getRealLive_Bilibili(e,t,o,a){let n="80";switch(t){case"1":n="80";break;case"2":n="150";break;case"3":n="250";break;case"4":n="400";break;case"5":n="20000";break;default:n="80"}GM_xmlhttpRequest({method:"GET",url:`https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?room_id=${e}&platform=web&qn=${n}&protocol=0,1&format=0,1,2&codec=0,1`,responseType:"json",onload:function(e){var t=e.response;let o="";for(let e=0;e<t.data.playurl_info.playurl.stream.length;e++){var n,i=t.data.playurl_info.playurl.stream[e];String(i.protocol_name).includes("stream")&&0<i.format.length&&(n=i.format[0].codec[0].url_info[0],i=i.format[0].codec[0].base_url,o=""+n.host+i+n.extra)}e=t.data.durl;e&&(o=0<e.length?e[0].url:""),a(o)}})}function getRealRid_Bilibili(e,t){e=e.split("/"),e=e[e.length-1];GM_xmlhttpRequest({method:"GET",url:"https://api.live.bilibili.com/room/v1/Room/room_init?id="+e,responseType:"json",onload:function(e){e=e.response;t(e.data.room_id)}})}function getRealLive_Douyu(t,o,e,n,i){let a=Math.round((new Date).getTime()/1e3).toString();o?GM_xmlhttpRequest({method:"GET",url:"https://www.douyu.com/"+t,responseType:"text",onload:function(e){e=e.response.match(/(vdwdae325w_64we[\s\S]*?function ub98484234[\s\S]*?)function/i);eval1(String(e[1]).replace("ub98484234","ub98484234_ex_pc"),"exScript2"),RealLive_get_sign_url_pc(t,a,!0,n,i,o)}}):GM_xmlhttpRequest({method:"GET",url:"https://m.douyu.com/"+t,responseType:"text",onload:function(e){e=e.response.match(/(function ub9.*)[\s\S](var.*)/i);eval1(String(e[0]).replace("ub98484234","ub98484234_ex"),"exScript1"),RealLive_get_sign_url(t,a,!0,n,i,o)}})}function RealLive_get_sign_url(e,t,r,s,l,d){t=ub98484234_ex(e,getDyDid(),t);let o;o="1015"==s?t+"&ver=219032101&rid="+e+"&rate=1":t+"&ver=219032101&rid="+e+"&rate="+s,document.getElementById("exScript1").remove(),GM_xmlhttpRequest({method:"POST",url:"https://m.douyu.com/api/room/ratestream",data:o,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){var t,o,e=e.response;let n="",i=(n="0"==e.code?(t=e.data.url,-1!=String(t).indexOf("mix=1")?"PKing":(t=/^[0-9a-zA-Z]*/,o=String(e.data.url).split("/"),String(o[o.length-1]).match(t)[0])):"0","");switch(s){case"1":i="550p";break;case"2":i="1200p";break;case"3":i="2000p";break;case"4":i="4000p";break;default:i=""}let a="";a="0"==n?"None":(a=1==r?(a=String(e.data.url).replace("m3u8","flv")).replace("http:","https:"):"1015"==s||""==i?"https://openflv-huos.douyucdn2.cn/dyliveflv1/"+n+".flv?uuid=":"https://openflv-huos.douyucdn2.cn/dyliveflv1/"+n+"_"+i+".flv?uuid=",d?a:a+"&only-audio=1"),l(a)}})}function RealLive_get_sign_url_pc(e,t,o,n,i){t=ub98484234_ex_pc(e,getDyDid(),t);let a;a="1015"==n?t+"&ver=219032101&cdn=hs-h5&rid="+e+"&rate=0":t+"&ver=219032101&cdn=hs-h5&rid="+e+"&rate="+n,document.getElementById("exScript2").remove(),GM_xmlhttpRequest({method:"POST",url:"https://www.douyu.com/lapi/live/getH5Play/"+e,data:a,responseType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(e){e=e.response;let t="";0===e.error&&(t=e.data.rtmp_url+"/"+e.data.rtmp_live),i(t)}})}function eval1(e,t){var o=document.createElement("script");o.id=t,o.setAttribute("type","text/javascript"),o.appendChild(document.createTextNode(e)),document.body.appendChild(o)}function getRealRid_Douyu(e,i){fetch(e,{method:"GET",mode:"no-cors",cache:"default",credentials:"include"}).then(e=>e.text()).then(e=>{var e=(e=(new DOMParser).parseFromString(e,"text/html")).getElementsByTagName("html")[0].innerHTML,t="$ROOM.room_id =".length,o=e.indexOf("$ROOM.room_id =");let n=e.substring(o+t,e.indexOf(";",o+t));1==isRid(n=n.trim())?i(n):showMessage("获取直播间失败，请检查直播间地址是否正确！","error")}).catch(e=>{console.log("请求失败!",e)})}function getRealLive_Huya(e,t,n){let o="500";switch(t){case"1":o="500";break;case"2":o="2500";break;case"3":o="4500";break;case"4":o="0";break;default:o="500"}GM_xmlhttpRequest({method:"GET",url:"https://mp.huya.com/cache.php?m=Live&do=profileRoom&roomid="+e,responseType:"json",onload:e=>{let t="",o="";e=e.response.data.stream.flv.multiLine;null!=(o=e.length&&0<e.length?e[0].url.replace("http","https"):o)&&""!=o||(t="房间暂未开播"),n(o,t)}})}let responseHookCallbackList=[],requestBodyMap=new Map;function initResponseHook(){const t=unsafeWindow.XMLHttpRequest.prototype.send;unsafeWindow.XMLHttpRequest.prototype.send=function(e){requestBodyMap.set(this,e),t.call(this,e)};let i=Object.getOwnPropertyDescriptor(unsafeWindow.XMLHttpRequest.prototype,"responseText");Object.defineProperty(unsafeWindow.XMLHttpRequest.prototype,"responseText",{get:function(){let e=i.get.call(this);var t=requestBodyMap.get(this);for(const n of responseHookCallbackList){var o=n(this.responseURL,e,t);void 0!==o&&(e=o)}return requestBodyMap.delete(this),e},configurable:!0})}function responseHook(e){responseHookCallbackList.push(e)}function stt_unescape(e){if(e)return e.toString().replace(/@S/g,"/").replace(/@A/g,"@")}function stt_deserialize(e){if(e)return e.includes("//")?e.split("//").filter(e=>""!==e).map(e=>stt_deserialize(e)):e.includes("@=")?e.split("/").filter(e=>""!==e).reduce((e,t)=>{var[t,o]=t.split("@=");return e[t]=stt_deserialize(stt_unescape(o)),e},{}):e.includes("@A=")?stt_deserialize(stt_unescape(e)):e.toString()}let scriptHookCallbackList=[];function initScriptHook(){new DomHook("head",!0,function(e){e.forEach(e=>{e.addedNodes.forEach(o=>{if("SCRIPT"===o.tagName){const t=o.getAttribute("src");if(t){const n=scriptHookCallbackList.find(e=>t.includes(e.url));n&&fetch(o.src).then(e=>e.text()).then(e=>{var e=n.callback(e),t=document.createElement("script");t.textContent=e,o.parentNode.replaceChild(t,o)}).catch(e=>console.error("Error loading script:",e))}}})})})}function scriptHook(e){scriptHookCallbackList.push(e)}function StyleHook_set(e,t){var o;null==document.getElementById(e)&&((o=document.createElement("style")).id=e,o.innerHTML=t,document.body.append(o))}function StyleHook_remove(e){null!==document.getElementById(e)&&document.getElementById(e).remove()}function StyleHook_setIframe(e,t,o){var n;null==e.getElementById(t)&&((n=e.createElement("style")).id=t,n.innerHTML=o,e.body.append(n))}function StyleHook_removeIframe(e,t){null!==e.getElementById(t)&&e.getElementById(t).remove()}function WebSocket_Packet(e){var t=stringToByte(e),e=new Uint8Array(t.length+4+4+2+1+1+1),o=new Uint8Array(t.length);for(let e=0;e<o.length;e++)o[e]=t[e];var n=new Uint32Array([t.length+4+2+1+1+1]),i=new Uint32Array([689]);return e.set(new Uint8Array(n.buffer),0),e.set(new Uint8Array(n.buffer),4),e.set(new Uint8Array(i.buffer),8),e.set(o,12),e}function stringToByte(t){var o,n=new Array,i=t.length;for(let e=0;e<i;e++)65536<=(o=String(t).charCodeAt(e))&&o<=1114111?(n.push(o>>18&7|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(63&o|128)):2048<=o&&o<=65535?(n.push(o>>12&15|224),n.push(o>>6&63|128),n.push(63&o|128)):128<=o&&o<=2047?(n.push(o>>6&31|192),n.push(63&o|128)):n.push(255&o);return n}function byteToString(e){if("string"==typeof e)return e;let n="",i=e;for(let o=0;o<i.length;o++){var t=i[o].toString(2),a=t.match(/^1+?(?=0)/);if(a&&8==t.length){var r=a[0].length;let t=i[o].toString(2).slice(7-r);for(let e=1;e<r;e++)t+=i[e+o].toString(2).slice(2);n+=String.fromCharCode(parseInt(t,2)),o+=r-1}else n+=String.fromCharCode(i[o])}return n}function hex2bin(i){if("string"!=typeof i||i.length%8!=0)return null;for(let e=[],t=i.length,o=0;o<t;)e.push(i.substr(o,2)),o+=2;for(let e=[],t=r.length,o=0;o<t;)e.push(parseInt(r.slice(o,o+4).reverse().join(""),16)),o+=4;return n}function hex(e){if(Array.isArray(e)){let n="0123456789abcdef".split("");return e.map(function(o){for(let e="",t=0;t<4;t++)e+=n[o>>8*t+4&15]+n[o>>8*t&15];return t}).join("")}return""}class Ex_WebSocket_UnLogin{constructor(e,t){"WebSocket"in window&&(this.timer=0,this.rid=e,this.msgHandler=t,this.connect())}connect(){this.ws=new WebSocket("wss://danmuproxy.douyu.com:850"+String(getRandom(2,5))),this.ws.onopen=()=>{this.ws.send(WebSocket_Packet("type@=loginreq/roomid@="+this.rid)),this.ws.send(WebSocket_Packet("type@=joingroup/rid@="+this.rid+"/gid@=-9999/")),this.timer=setInterval(()=>{this.ws.send(WebSocket_Packet("type@=mrkl/"))},4e4)},this.ws.onerror=()=>{this.close()},this.ws.onmessage=e=>{let o=new FileReader;o.onload=()=>{var t=String(o.result).split("\0");o=null;for(let e=0;e<t.length;e++)12<t[e].length&&this.msgHandler(t[e])},o.readAsText(e.data)},this.ws.onclose=()=>{this.close(),this.reconnect()}}reconnect(){setTimeout(()=>{this.connect()},3e3)}close(){clearInterval(this.timer),this.ws.close()}}function initRouter(e){-1!==String(e).indexOf("www.douyu.com")&&initRouter_AllPage(),-1!==String(e).indexOf("passport.douyu.com")&&-1!==String(e).indexOf("exid=chun")?initRouter_Passport():-1!==String(e).indexOf("msg.douyu.com")?(-1!==e.indexOf("?exClean")?initRouter_CleanMsg:initRouter_Motorcade)():-1!==String(e).indexOf("yuba.douyu.com")?(-1!==String(e).indexOf("?exClean")?initRouter_CleanYuba:initRouter_Yuba)():-1!==String(e).indexOf("v.douyu.com")?-1!==String(e).indexOf("?exClean")?initRouter_CleanVideo():-1!==String(e).indexOf("show/")&&initRouter_Video():-1!==String(e).indexOf("cz.douyu.com")?-1!==String(e).indexOf("?exClean")&&initRouter_CleanCz():-1!==String(e).indexOf("getFansBadgeList")?initRouter_FansBadgeList():-1!==String(e).indexOf("exid=chun")?initRouter_DouyuRoom_Popup():-1===String(e).indexOf("template/")&&-1===String(e).indexOf("h5/")&&-1===String(e).indexOf("directory/myFollow")&&-1===String(e).indexOf("g_")&&initRouter_DouyuRoom_Main()}function initRouter_Motorcade(){"chun"==getQueryString("exid")&&signMotorcade_Sign()}function initRouter_DouyuRoom_Popup(){removeAD();let t=setInterval(()=>{var e;void 0!==document.querySelector("div.wfs-2a8e83")&&(document.querySelector("div.wfs-2a8e83").click(),document.querySelector("label.layout-Player-asidetoggleButton").click(),e=document.querySelectorAll(".tip-e3420a > ul > li").length,document.querySelectorAll(".tip-e3420a > ul > li")[e-1].click(),clearInterval(t))},1e3)}function initRouter_DouyuRoom_Main(){document.domain="douyu.com",init();let o=setInterval(()=>{var e=document.getElementsByClassName("BackpackButton")[0],t=document.getElementsByClassName("Barrage-main")[0];e&&t&&(setTimeout(()=>{initPkg(),initPkgSpecial(),initPkg_meta(),initTimer()},1500),clearInterval(o))},1e3)}function initPkg_meta(){initPkg_HighResoltion()}function initPkgSpecial(){}function initRouter_Yuba(){document.domain="douyu.com"}function initRouter_Passport(){var e=getStrMiddle(window.location.href,"cmd=","&"),t=getStrMiddle(window.location.href,"uid=","&");let o=getStrMiddle(window.location.href,"domain=","&");switch("clean"!==e&&addAccountPassport(t),e){case"clean":cleanCookie(()=>{window.parent.postMessage("cleanOver",decodeURIComponent(o))});break;case"switch":switchAccountPassport(t,()=>{window.parent.postMessage("switchOver",decodeURIComponent(o))});break;case"delete":deleteAccountPassport(t,()=>{window.parent.postMessage("deleteOver",decodeURIComponent(o))})}}function initRouter_CleanMsg(){let e=getStrMiddle(window.location.href,"domain=","&");cleanCookie(()=>{window.parent.postMessage("msgCleanOver",decodeURIComponent(e))})}function initRouter_CleanYuba(){let e=getStrMiddle(window.location.href,"domain=","&");cleanCookie(()=>{window.parent.postMessage("yubaCleanOver",decodeURIComponent(e))})}function initRouter_CleanVideo(){let e=getStrMiddle(window.location.href,"domain=","&");cleanCookie(()=>{window.parent.postMessage("videoCleanOver",decodeURIComponent(e))})}function initRouter_CleanCz(){let e=getStrMiddle(window.location.href,"domain=","&");cleanCookie(()=>{window.parent.postMessage("czCleanOver",decodeURIComponent(e))})}function initRouter_Video(){unsafeWindow.$DATA&&"ROOM"in unsafeWindow.$DATA&&(initStyles(),initPkg_VideoTime(),initPkg_VideoTools_Camera_Video(),initPkg_DyVideoDownload(),initPkg_DyVideoBarrageLine())}function initRouter_FansBadgeList(){initPkg_FansBadgeList()}function initRouter_AllPage(){setTimeout(()=>{initStyles(),removeAD(),initPkg_DailyAuto()},1500)}!async function(){initRouter(window.location.href)}();