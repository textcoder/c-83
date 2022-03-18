Color = "black";
width = 2;
screen_width = screen.width-70;
screen_height = screen.height-500;
current_width = screen.width;

if(current_width<992){
document.getElementById("myCanvas").width=screen_width;
document.getElementById("myCanvas").height=screen_height;
}

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouse_event = " ";



canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
console.log("touchstart");
width = document.getElementById("width").value;
Color = document.getElementById("color").value;
last_touchx = e.touches[0].clientX-canvas.offsetLeft;
    last_touchy = e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){

    current_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY-canvas.offsetTop;
    
    

ctx.beginPath();
ctx.strokeStyle = Color;
ctx.lineWidth = width;

        console.log("last position of x & y coordinates = ");
        console.log("x= " + last_touchx + "y= " + last_touchy);
ctx.moveTo(last_touchx, last_touchy);
        console.log("current position of x & y coordinates = ");
        console.log("x= " + current_touch_x + "y= " + current_touch_y);
    
        ctx.lineTo(current_touch_x, current_touch_y);
        ctx.stroke();

    

    last_touchx = current_touch_x;
    last_touchy = current_touch_y;
}

function clear_area(){
    ctx.clearRect(0,0,800,600);

}


