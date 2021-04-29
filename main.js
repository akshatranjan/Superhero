var canvas = new fabric.Canvas("myCanvas");

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

var block_img_object = "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_img_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80')
    {
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("width").innerHTML = block_img_width;
        document.getElementById("height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keypressed == '77')
    {
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("width").innerHTML = block_img_width;
        document.getElementById("height").innerHTML = block_img_height;
    }

    if (keypressed == '70')
    {
        new_image('ironman_face.png');
    }

    if (keypressed == '66')
    {
        new_image('ironman_body.png');
    }

    if (keypressed == '82')
    {
        new_image('ironman_right_hand.png');
    }

    if (keypressed == '72')
    {
        new_image('ironman_left_hand.png');
    }

    if (keypressed == '76')
    {
        new_image('ironman_legs.png');
    }

    if (keypressed == '38')
    {
        up();
    }

    if (keypressed == '40')
    {
        down();
    }

    if (keypressed == '37')
    {
        left();
    }

    if (keypressed == '39')
    {
        right();
    }
}

function up()
{
    if (player_y > 0)
    {
        player_y = player_y - block_img_height;
        canvas.remove(player_object);
        player_update()
    }
}

function down()
{
    if (player_y < 660)
    {
        player_y = player_y + block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if (player_x > 0)
    {
        player_x = player_x - block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if (player_x < 850)
    {
        player_x = player_x + block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}