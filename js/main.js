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
