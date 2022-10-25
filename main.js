

var canvas=new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

block_image_width = 350;
block_image_height = 430;

var blockImageObject= "";

function new_image(getImage)
{
	fabric.Image.fromURL(getImage,function(Img){
		block_image_object=Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
	    block_image_object.set({
			top:blockY,
			left:blockX
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') 
	{
		blockX=50
		new_image('rr1.png');
		console.log("e");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
		console.log("a");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png');
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png');
		console.log("i");
	}
	
}

