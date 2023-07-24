function initPkg_HighResoltion() {
  waitAndSetHighResolution();
}

async function waitAndSetHighResolution() {
  // class is c5-6a3710 and value is 画质
  // ul 兄弟节点 li的第一个节点
  let resloList = await mscststs.wait(
    '.c5-6a3710[value*="画质"] + ul',
    true,
    (timeout = 50)
  );
  setTimeout(function () {
    // console.log("这段代码将在延迟之后执行");
    resloList.firstChild.click();
  }, 1000);
}
