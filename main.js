var mouseEvent = "empty";
var last_position_of_x,last_position_of_y ;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown",myMousedown);
function myMousedown (e) {
 mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseMove",myMousemove);
function myMousemove (e) {
    current_position_of_mouse_x = e.clientX- canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle= "black";
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y cordinates =");
        console.log("X="+ last_position_of_x+ "y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position of x and y cordinates =");
        console.log("X="+ current_position_of_mouse_x+ "y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseUp",myMouseup);
function myMouseup (e){
mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave (e){
mouseEvent = "mouseleave";
}