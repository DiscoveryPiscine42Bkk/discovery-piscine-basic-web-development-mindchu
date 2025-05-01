window.onload = clickevent;
var width_size = 200;
var height_size = 200;
function clickevent() {
    color = document.getElementById("balloon").style.backgroundColor;
    if (color == "red") {
        document.getElementById("balloon").style.backgroundColor = "green";
    } else if (color == "green") {
        document.getElementById("balloon").style.backgroundColor = "blue";
    } else {
        document.getElementById("balloon").style.backgroundColor = "red";
    }
    
    width_size += 10;
    height_size += 10;
    if (width_size > 420) {
        width_size = 200;
        height_size = 200;
    }
    width_str = width_size.toString();
    height_str = height_size.toString();
    balloon_width = width_str + "px";
    balloon_height = height_str + "px";
    document.getElementById("balloon").style.width = balloon_width;
    document.getElementById("balloon").style.height = balloon_height;
}
function outevent() {
    color = document.getElementById("balloon").style.backgroundColor;
    if (color == "red") {
        document.getElementById("balloon").style.backgroundColor = "blue";
    } else if (color == "blue") {
        document.getElementById("balloon").style.backgroundColor = "green";
    } else {
        document.getElementById("balloon").style.backgroundColor = "red";
    }
    
    if (width_size > 210) {
        width_size -= 5;
        height_size -= 5;
    }
    width_str = width_size.toString();
    height_str = height_size.toString();
    balloon_width = width_str + "px";
    balloon_height = height_str + "px";
    document.getElementById("balloon").style.width = balloon_width;
    document.getElementById("balloon").style.height = balloon_height;
}