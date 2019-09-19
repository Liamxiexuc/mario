



var Mario = new Object;
Object.prototype.move=function(direction){




    switch (direction){
        case 0: 
        case 38:     //up
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
        case 39:      //right
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
        case 40:          //down
            var myMario = document.getElementById("mario");
            var down = myMario.style.top;
            down = parseInt(down.substr(0,down.length-2));
            newDown = down+50;
            if(newDown<=500){
                myMario.style.top=newDown + "px";
            }else{
                break;
            }
            break;
        case 3:
        case 37:         //left
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


    //mario eat mushroom and grow
    //get mushroom position
    //use Dom get position from Css files.
    var ocssRules = document.styleSheets[0].rules;
      var styleM = ocssRules[3];
      var mushroomX = styleM.style.left;
      var mushroomY = styleM.style.top; 

    //getmario position
    var myMario = document.getElementById("mario");
    var marioX = myMario.style.left;
   // marioX = parseInt(marioX.substr(0,marioX.length-2));
    var marioY = myMario.style.top;
   // marioY = parseInt(marioY.substr(0,marioY.length-2));
    if ((marioX===mushroomX)&&(marioY===mushroomY)) {
        myMario.style.height = 100+"px";
        styleM.style.opacity = 0;     
    }
}

Mario.x=0;
Mario.y=0;

//也可在onclick里直接调用Mario.move(0/1/2/3) 替换以下代码
function marioMove(direct){
    switch(direct){
        case 0:
        case 38:
            Mario.move(direct);
            break;
        case 1:
        case 39:
            Mario.move(direct);
            break;
        case 2:
        case 40:
            Mario.move(direct);
            break;
        case 3:
        case 37:
            Mario.move(direct);
            break;
    }
}

function dosomething(event) {
    if (event.keyCode==37 || event.keyCode==38 ||event.keyCode==39 ||event.keyCode==40) {
        var direct=event.keyCode;
        marioMove(direct);

    }
}


