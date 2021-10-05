var num = 0;
var timer;

timer = setInterval(function(){

    if(num <= -120){
        num = 0;ß
        $(".list li").first().appendTo(".list");

    }else{
        num -= 2;
    }
    $(".list").css({left : num});
    console.log(num);
},50);

//list박스 마우스 호버하면
$(".listBox").on("mouseenter",function(){
    clearInterval(timer);
});
$(".listBox").on("mouseleave",function(){
    timer = setInterval(function(){

        if(num <= -120){
            num = 0;
            $(".list li").first().appendTo(".list");
    
        }else{
            num -= 2;
        }
        $(".list").css({left : num});
        console.log(num);
    },50);
})

