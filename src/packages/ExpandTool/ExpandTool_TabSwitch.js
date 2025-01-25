function initPkg_ExpandTool_TabSwitch() {
  ExpandTool_TabSwitch_insertDom();
  ExpandTool_TabSwitch_insertFunc();
  initPkg_ExpandTool_TabSwitch_Set();
}

function ExpandTool_TabSwitch_insertDom() {
  let a = document.createElement("span");
  // a.className = "extool__bsize";
  a.innerHTML = '<label class="ex-label" title="阻止页面后台挂机检测"><input class="ex-checkbox" id="extool__tabSwitch" type="checkbox">页面防挂机</label><div class="ex-line" style="margin-bottom:10px"></div>';
  
  let b = document.getElementsByClassName("extool")[0];
  b.insertBefore(a, b.childNodes[0]);
}


function getTabSwitch() {
  return document.getElementById("extool__tabSwitch").checked;
}
function ExpandTool_TabSwitch_insertFunc() {
  document.getElementById("extool__tabSwitch").addEventListener("click", function() {
      saveData_TabSwitch();
      if (getTabSwitch()) {
        enableTabSwitch();
      } else {
        showMessage("已关闭页面防挂机，请刷新页面生效", "info");
      }
  });
}

function saveData_TabSwitch() {
  let data = {
    isEnableTabSwitch: getTabSwitch()
  }
  localStorage.setItem("ExSave_TabSwitch", JSON.stringify(data)); // 存储弹幕列表
}
function initPkg_ExpandTool_TabSwitch_Set() {
  // 设置初始化
  let ret = localStorage.getItem("ExSave_TabSwitch");
  if (ret != null) {
    let retJson = JSON.parse(ret);
        if (retJson.isEnableTabSwitch) {
            document.getElementById("extool__tabSwitch").checked = retJson.isEnableTabSwitch;
            enableTabSwitch();
        }
  }
}

function enableTabSwitch() {
  Object.defineProperty(document, 'hidden', {value: false, writable: false});
  Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: false});
  Object.defineProperty(document, 'webkitVisibilityState', {value: 'visible', writable: false});
  document.dispatchEvent(new Event('visibilitychange'));
  document.hasFocus = function () { return true; };
  
  document.addEventListener('visibilitychange', function(e) {
      e.stopImmediatePropagation();
  }, true, true);
}