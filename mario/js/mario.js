

var Mario = new Object;
Object.prototype.move=function(direction){
    switch (direction){
        case 0:
            var myMario = document.getElementById("mario");
            var top = myMario.style.top;
            top = parseInt(top.substr(0,top.length-2));
            var newTop = top-50;
            if(newTop>=0){
                myMario.style.top=newTop + "px";
            }else{
                break;
            }
            break;
        case 1:
            var myMario = document.getElementById("mario");
            var right = myMario.style.left;
            right = parseInt(right.substr(0,right.length-2));
            var newRight = right+50;
            if(newRight<=550){
                myMario.style.left=newRight + "px";
            }else{
                break;
            } 
            break;
        case 2:
            var myMario = document.getElementById("mario");
            var down = myMario.style.top;
            down = parseInt(down.substr(0,down.length-2));
            newDown = down+50;
            if(newDown<=450){
                myMario.style.top=newDown + "px";
            }else{
                break;
            }
            break;
        case 3:
            var myMario = document.getElementById("mario");
            var left = myMario.style.left;
            left = parseInt(left.substr(0,left.length-2));
            var newLeft = left-50;
            if(newLeft>=0){
                myMario.style.left=newLeft + "px";
            }else{
                break;
            } 
            break;
    } 

    //mario grow
    var myMario = document.getElementById("mario");
    if (condition) {
        
    }
}

Mario.x=0;
Mario.y=0;

//也可在onclick里直接调用Mario.move(0/1/2/3) 替换以下代码
function marioMove(direct){
    switch(direct){
        case 0:
            Mario.move(direct);
            break;
        case 1:
            Mario.move(direct);
            break;
        case 2:
            Mario.move(direct);
            break;
        case 3:
            Mario.move(direct);
            break;
    }
}




// below donesn't work
/* function marioMove(){
    alert("right");
} */



