//tab-button

// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(0).addClass("active");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(1).addClass("active");
//     $(".tab-content").eq(1).addClass("show");
//   });
// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(2).addClass("active");
//     $(".tab-content").eq(2).addClass("show");
//   });

//for문으로 축약
// var tabBtn = $(".tab-button").length;
// for (let i = 0; i < tabBtn; i++) {
//   //for문에서 var로 변수선언하면 실행안됨

//   //   $(".tab-button")
//   //     .eq(i)
//   //     .click(function () {
//   //       $(".tab-button").removeClass("active");
//   //       $(".tab-content").removeClass("show");
//   //       $(".tab-button").eq(i).addClass("active");
//   //       $(".tab-content").eq(i).addClass("show");
//   //     });

//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//       openTab(i);
//     });
// }

//셀렉터.dataset.id js
$(".list").click(function (e) {
  openTab(e.target.dataset.id);
});
//함수로 축약해서 쓰기

function openTab(num) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(num).addClass("active");
  $(".tab-content").eq(num).addClass("show");
}
