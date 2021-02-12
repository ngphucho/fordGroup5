// jQuery(function($) {
//     $('#btnWhapHappening').on('click', function() {
//       var $el = $(this),
//         textNode = this.firstChild;
//         console.log($el.find('span').);
//     //   $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
//     //   textNode.nodeValue = 'Gimme ' + ($el.hasClass('showFire') ? 'Fire ' : 'Water ')
//     //   $el.toggleClass('showFire');
//     });
//   });
function getELE(id) {
  return document.getElementById(id);
}

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
