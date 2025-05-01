$(document).ready(function() {
    var width_size = 200;
    var height_size = 200;
    var $balloon = $('#balloon');
    var red = "rgb(255, 0, 0)";
    var green = "rgb(0, 255, 0)";
    var blue = "rgb(0, 0, 255)";

    $balloon.on('click', function() {
        var color = $balloon.css('background-color');
        if (color === red) {
            $balloon.css('background-color', green);
        } else if (color === green) {
            $balloon.css('background-color', blue);
        } else {
            $balloon.css('background-color', red);
        }

        width_size += 10;
        height_size += 10;
        if (width_size > 420) {
            width_size = 200;
            height_size = 200;
        }
        $balloon.css({
            'width': width_size + "px",
            'height': height_size + "px"
        });
    });

    $balloon.on('mouseout', function() {
        var color = $balloon.css('background-color');
        if (color === red) {
            $balloon.css('background-color', blue);
        } else if (color === blue) {
            $balloon.css('background-color', green);
        } else {
            $balloon.css('background-color', red);
        }

        if (width_size > 210) {
            width_size -= 5;
            height_size -= 5;
        }
        $balloon.css({
            'width': width_size + "px",
            'height': height_size + "px"
        });
    });
});