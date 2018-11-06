var c = document.getElementById( "home" );
var ctx = c.getContext("2d");
// triangle
ctx.rotate(45*Math.PI/180); // rotation
ctx.fillStyle = "#CE8539";
ctx.fillRect(210,-180,180,180)

// Fond
ctx.rotate(-45*Math.PI/180); // rotation
ctx.fillStyle = "#A9D7E6";
ctx.fillRect(150,150,250,250);

// rectangle
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(250,300,60,100);

// carré
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(200,200,50,50);
ctx.fillRect(300,200,50,50);
