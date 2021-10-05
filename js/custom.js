//처음 list의 위치값
var num = 0;


//0.05초 간격으로 반복하면서
setInterval(function(){
    //현재 위치값이 -120보다 작아지면 (리스트 하나가 온전히 프레임 밖으로 벗어나면) 
    if(num <= -120){
        //리스트 위치값을 0으로 초기화
        num = 0;
        //첫번째 리스트를 제일 뒤로 가져다 붙임
        $(".list li").first().appendTo(".list");

        //아직 -120보다 작아지지 않으면
    }else{
        //계속 위치값을 2씩 빼줌
        num -= 2;
    }

    //위에서 조건식에 따라 적용된 num 값을 실제 list의 위치값에 연동
    $(".list").css({left : num});
    console.log(num);

},50);


// var num = 0;

// setInterval(function(){
//     num-=2;
//     // $(".list").css({left : num}, function(){
//     //     if($(".list").css({left : -120})){
//     //         $(".list).css({left : 120});
//     //         $(".list li").first().appendTo(".list");
//     //     };
//     // });

//     // $(".list").css({left : -120}, function(){
//     //     $(".list").css().appendTo(".list");
//     //     $(".list li").first().appendTo(".list");
//     // });


//     if(num < -120){
//         num = 0;
//         $(".list li").first().appendTo(".list");
//     }
//     console.log(num);

//     $(".list").css({left : num});
    

// },50);
