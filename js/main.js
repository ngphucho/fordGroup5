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

//Menu
$(document).ready(function(){
  $('header').each(function(){
    var headerEle = $('header .header-nav');

    if(window.innerWidth <= 992){
      headerEle.addClass('mobile-view');
    }
    else{
      headerEle.removeClass('mobile-view');
    }
    
    $('header .menu-icon').on('click', function(){
      if(headerEle.hasClass('mobile-view')){
        if(headerEle.hasClass('expanded')){
          headerEle.removeClass('expanded');
        }
        else{
          headerEle.addClass('expanded');
        }
      }
    })
  
    $(window).on('resize', function(){
      if(window.innerWidth <= 992){
        headerEle.addClass('mobile-view');
      }
      else{
        headerEle.removeClass('mobile-view');
      }
    })
  })
})

//auto close subitem when click outside
$(document).click(function(e) {
	if (!e.target.closest('.submenu-content')) {
    $('.auto-hide').collapse('hide');	
    } 
});