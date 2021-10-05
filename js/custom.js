var num = 0;
var timer;

timer = setInterval(move, 20);

//list박스 마우스 호버하면
$(".listBox").on("mouseenter",function(){
    clearInterval(timer);
});
$(".listBox").on("mouseleave",function(){
    timer = setInterval(move,50);
})

$(".list li").on("click", function(e){
    e.preventDefault();

    $("body")
        .append(
            $("<aside class='pop'>")
                .append(
                    $("<div class='con'>"),
                    $("<span class='btnClose'>").text("close")
                )
                .fadeIn(500)
        )
});


//setinterval로 공통함수 분리
function move(){
    if(num <= -240){
        num = 0;
        $(".list li").first().appendTo(".list");

    }else{
        num -= 2;
    }
    $(".list").css({left : num});
}
