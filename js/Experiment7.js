/*Task1*/
$(document).ready(function(){
  var flag=true;//点击事件
  $(".ui-item1-subitem-bigbox").hide();// 大图片初始状态
  $(".ui-item1-subitem").click(function(){// 点击小图片时，出现大图片
    if(flag){
      var imgsrc=$(this).find('img').attr('src'); // 小图片路径赋值给大图片
      $("#img").attr("src", imgsrc);
      $(".ui-item1-subitem-bigbox").show();
      $(".ui-item1-ul").css("opacity","0.3");//设置ul透明
    }
    flag=false;//屏蔽点击事件
  });

  $(".ui-item1-subitem-bigbox").click(function(){ // 点击隐藏
    $(".ui-item1-subitem-bigbox").hide();
    $(".ui-item1-ul").css("opacity","1.0");
    flag=true;//解除屏蔽
  });
});


/*Task2*/
$(document).ready(function(){
$(".ui-nav-item1").click(function(){
  $(".ui-cnt").text("1");
  $(".ui-nav-item1").css("background-color","#C0C0C0");
  $(".ui-nav-item2").css("background-color","white");
  $(".ui-nav-item3").css("background-color","white");
});
$(".ui-nav-item2").click(function(){
  $(".ui-cnt").text("2");
  $(".ui-nav-item2").css("background-color","#C0C0C0");
  $(".ui-nav-item1").css("background-color","white");
  $(".ui-nav-item3").css("background-color","white");
});
$(".ui-nav-item3").click(function(){
  $(".ui-cnt").text("3");
  $(".ui-nav-item3").css("background-color","#C0C0C0");
  $(".ui-nav-item1").css("background-color","white");
  $(".ui-nav-item2").css("background-color","white");
});
});


/*Task3*/
var length=3;
$(".ui-box-button").click(function(){
var item=$(".ui-box-record-blank");
$(".ui-box-record-change").append(
  "<div class=ui-box-record-blank><div class='ui-box-record-number'></div><div class='ui-box-record-delete'>Delete</div></div>");
++length;
for(i=0;i<length;i++){
  $(".ui-box-record-number").eq(i).text(i+1);
}
});

$("body").on('click', '.ui-box-record-delete', function(event) {
   var index = $(this).parent().index();
   --length;
$(this).parent().remove();
for(i=0;i<length;++i){
$(".ui-box-record-number").eq(i).text(i+1);
 }
});