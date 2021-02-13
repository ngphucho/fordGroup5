//ham getElementById rut gon
function getELE(id) {
  return document.getElementById(id);
}

//chuc nang ẩn/hiện ảnh trong section whatHappening
getELE("btnWhapHappening").onclick = function () {
  var icon = getELE("btnWhapHappening").querySelector("span.icon");
  var text = getELE("btnWhapHappening").querySelector("span.text");
  if (icon.innerHTML == "+") {
    text.innerHTML = "View Less";
    icon.innerHTML = "-";
  } else {
    text.innerHTML = "View All";
    icon.innerHTML = "+";
  }
  console.log(text,icon);
  console.log(getELE("btnWhapHappening").querySelector("span.text").innerHTML,getELE("btnWhapHappening").querySelector("span.icon").innerHTML)
};


$(document).ready(function(){
  $('header .menu-icon').on('click', function(){
    var leftNavEle = $('header .nav-left');
    var rightNavEle = $('header .nav-right');
    if(window.innerWidth < 992){
      if(leftNavEle.css('display') === "block" && rightNavEle.css('display') === "block"){
        leftNavEle.hide();
        rightNavEle.hide();
        $(this).removeClass('expanded');
      }
      else{
        leftNavEle.show();
        rightNavEle.show();
        $(this).addClass('expanded');
      }
    }
  })

  $(window).on('resize', function(){
    if(window.innerWidth >= 992){
      var leftNavEle = $('header .nav-left');
      var rightNavEle = $('header .nav-right');
      leftNavEle.show();
      rightNavEle.show();
    }
  })
})