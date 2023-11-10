if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  function PublicSacrificeDay(){
      var PSFarr=new Array("0707","0909","0918","1109","1213");
      var currentdate = new Date();
      var str = "";
      var mm = currentdate.getMonth()+1;
      if(currentdate.getMonth()>9){
        str += mm;
      }else{
        str += "0" + mm;
      }
      if(currentdate.getDate()>9){
        str += currentdate.getDate();
      }else{
        str += "0" + currentdate.getDate();
      }
      if(PSFarr.indexOf(str)>-1){
          return 1;
      }else{
          return 0;
      }
  }

// 自动网站变灰
// 0707 - 七七事变
// 0909 - 毛主席忌辰
// 0918 - 九一八事变
// 1109 - 娣外公忌辰
// 1213 - 南京公祭日

// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | bopmomio")[0];

window.scrollCollect = () => {
  return btf.throttle(function (e) {
    const currentTop = window.scrollY || document.documentElement.scrollTop
    const isDown = scrollDirection(currentTop)
    if (currentTop > 56) {
+           $header.classList.add('is-top-bar')
      if (isDown) {
        if ($header.classList.contains('nav-visible')) $header.classList.remove('nav-visible')
        if (isChatBtnShow && isChatShow === true) {
          chatBtnHide()
          isChatShow = false
        }
      } else {
        if (!$header.classList.contains('nav-visible')) $header.classList.add('nav-visible')
        if (isChatBtnHide && isChatShow === false) {
          chatBtnShow()
          isChatShow = true
        }
      }
      $header.classList.add('nav-fixed')
      if (window.getComputedStyle($rightside).getPropertyValue('opacity') === '0') {
        $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
      }
    } else {
      if (currentTop === 0) {
-             $header.classList.remove('nav-fixed', 'nav-visible')
+             $header.classList.remove('is-top-bar')
      }
      $rightside.style.cssText = "opacity: ''; transform: ''"
    }

    if (document.body.scrollHeight <= innerHeight) {
      $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
    }
  }, 200)()
}


if (document.querySelector('#bber-talk')) {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true,
    autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true
  },
  });
}