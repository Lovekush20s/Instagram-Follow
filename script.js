var istatus =document.querySelector("h5");

var btn = document.querySelector("#add");
//var removeFriend = document.querySelector("#remove");
var check = 0 ;

btn.addEventListener("click",function(){
    if(check ==0){
        istatus.innerHTML ="Friends";
        istatus.style.color ="green";
        btn.innerHTML="Following";
        check= 1;
    }
    else{
        istatus.innerHTML= "Stranger";
        istatus.style.color= "red";
        btn.innerHTML = "Follow";
        check= 0;
    }
})


// ------- LIKE --------

var con = document.querySelector("#card");
var love = document.querySelector("i");

con.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity=0.8

    setTimeout(function (){
        love.style.opacity = 0;
    },1000);
    
    setTimeout(function (){
        love.style.transform ="translate(-50%,-50%) scale(0)";
    
    },3000);
})