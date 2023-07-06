function initPkg_AutoDark() {
  initPkg_AutoDark_room();
  // initPkg_AutoDark_catagoryPage();
}

// 单独调用
// 预先根据系统设置 修改exsave mode
function initPkg_AutoDarkFast() {
  // func 方式 在initPkg_Night_Set_Fast()前调用
  // 提前设置好 local data和currentMode
  var matchList = matchMedia("(prefers-color-scheme: dark)");
  let ret = localStorage.getItem("ExSave_Mode");
  if (ret != null) {
    let retJson = JSON.parse(ret);
    if ("mode" in retJson == false) {
      return;
    }
    // 页面黑 系统白
    if (retJson.mode == 1 && !matchList.matches) {
      currentMode = 0;
      saveData_Mode();
      // 页面白 系统黑
    } else if (retJson.mode == 0 && matchList.matches) {
      currentMode = 1;
      saveData_Mode();
    }
  }
}

function initPkg_AutoDark_room() {
  // 自动监听，修改dom方式同步dark
  var matchList = matchMedia("(prefers-color-scheme: dark)");
  const check = (ifSysDark) => {
    let ifCurDark = currentMode === 1;
    if (ifCurDark != ifSysDark) {
      document.getElementById("ex-night").click();
    }
  };
  check(matchList.matches);
  matchList.addEventListener("change", (event) => {
    check(event.matches);
  });
}

function initPkg_AutoDark_catagoryPage() {
  var matchList = matchMedia("(prefers-color-scheme: dark)");
  const check = (ifSysDark) => {
    let ifCurDark = currentMode === 1;
    if (ifCurDark != ifSysDark) {
      document.getElementById("ex-night").click();
    }
  };
  check(matchList.matches);
  matchList.addEventListener("change", (event) => {
    check(event.matches);
  });
}
