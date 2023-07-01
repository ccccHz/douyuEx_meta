function initPkg_CategoryPage() {
  initPkg_Night_Dom();
  categorypage_dark();
  initPkg_Night_Set();
}

function categorypage_dark() {
  document.getElementById("ex-night").addEventListener("click", function () {
    let a = document.getElementById("ex-night");
    if (currentMode == 0) {
      currentMode = 1;
      a.innerHTML = svg_night;
      a.title = "切换日间模式";
      categorypage_setDark();
      saveData_Mode();
    } else {
      currentMode = 0;
      a.innerHTML = svg_day;
      a.title = "切换夜间模式";
      categorypage_cancleDark();
      saveData_Mode();
    }
  });
}
function categorypage_dark_fast() {
  let ret = localStorage.getItem("ExSave_Mode");
  if (ret != null) {
    let retJson = JSON.parse(ret);
    if ("mode" in retJson == false) {
      retJson.mode = 0;
    }
    if (retJson.mode == 1) {
      categorypage_setDark();
    }
  }
}

function categorypage_setDark() {
  let cssText = `
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
    `;

  StyleHook_set("Ex_Style_CategoryPageNightMode", cssText);
}
function categorypage_cancleDark() {
  StyleHook_remove("Ex_Style_CategoryPageNightMode");
}
