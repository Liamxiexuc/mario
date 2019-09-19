
// get info from css file 
var occsRules = document.styleSheets[0].rules;
var tankStyles = occsRules[1];
function $(id) {
    return document.getElementById(id);
}

function Mytank(x,y,direct) {
    this.x=x; 
    this.y=y;
    this.direct=direct;
    this.speed=5;
    //initial start position
    tankStyles.style.left = this.x + "px";
    tankStyles.style.top = this.y + "px";
    tankStyles.style.backgroundPositionX = "0px";
    // move function
    this.move=function move(event) {
        switch (event.keyCode) {
            case 65:                 //go left   key "a"
                this.x-=this.speed;
                this.direct=65;      //65 for mark left
                tankStyles.style.backgroundPositonX="240px";
                break;
            case 83:                 //go down   key "s"               
                this.y+=this.speed;
                this.direct=83;      //83 for mark down 
                tankStyles.style.backgroundPositonX="0px";            
                break;
            case 68:                 //go right  key "d"
                this.x+=this.speed;
                this.direct=68;      //68 for mark right
                tankStyles.style.backgroundPositonX="160px";
                break;
            case 87:                 //go up   key "w"               
                this.y-=this.speed;
                this.direct=87;      //87 for mark up 
                tankStyles.style.backgroundPositonX="80px";            
                break;
        }
        // reset position
        tankStyles.style.left = this.x + "px";
        tankStyles.style.top = this.y + "px";
    }

}

// determine what users what to do
function dosomething(event) {
    if(event.keyCode==65 || event.keyCode==83 || event.keyCode==68 || event.keyCode==87){
        tankOne.move(event);
    }
}

var tankOne = new Mytank(140,200,65);