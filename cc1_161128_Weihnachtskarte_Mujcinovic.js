var drawStar = function(centerX, centerY, arms, outerRadius, innerRadius){
    var angle = Math.PI / arms;
    var xPoint=[]; // array that will contain all the x coordinates for all points
    var yPoint=[]; // array for the y coordinates

    //create corners... 2 for each arm, inner and outer
    for (var i = 0; i < 2 * arms; i++) {
        // Use outer or inner radius depending on what iteration we are in.
        var radius;
        var innerOrOuter = (i & 1); //changes between 0 and 1
        if (innerOrOuter === 0){
            radius = innerRadius;
        }else if(innerOrOuter ===1){
            radius = outerRadius;
        }
        var currX = round(centerX + Math.sin(i * angle) * radius);
        var currY = round(centerY + Math.cos(i * angle) * radius);
        //push coordinates into the vectors
        xPoint.push(currX);
        yPoint.push(currY);
    }
    // male den Stern
    noStroke();
    
    beginShape();
        for(var k=0; k<2*arms;k++){ // two points per arm
            vertex(xPoint[k], yPoint[k]); //paint each point
        }
    endShape(CLOSE);
}; //diesen geilen Code habe ich von Anne bekommen :)


// KLICK AUF EINEN STERN

var x = 50;
var y = 100;
var t= 0;

var liste = ["Frohe Weihnachten!", "Sretan Božić!", "Merry Christmas!", "Joyeux Noël!", "Merii Kurisumasu!", "God Jul!"];

var weihnachtskarte = function() {
    
    fill(255, random(150, 250), 0);
    drawStar(86, 69, 15, 20, 7);
    drawStar(288, 60, 100, 40, 7);
    drawStar(144, 105, 50, 30, -1);
    drawStar(410, 147, 100, 60, -3);
    drawStar(427, 29, 85, 10, 4);
        
    noStroke();
    fill(23, 107, 2);
    triangle(100, 400, 400, 400, 250, 270);
    triangle(125, 340, 375, 340, 250, 227);
    triangle(140, 290, 360, 290, 250, 189);
    triangle(160, 240, 340, 240, 250, 158);
    triangle(175, 200, 325, 200, 250, 126);
    fill(84, 49, 18);
    rect(235, 400, 30, 50);
    
    noFill();
    stroke(255, 242, 0);
    curve(132, 232, 150, 319, 381, 384, 500, 143);
    curve(132, 232, 125, 381, 347, 314, 500, 143);
    curve(132, 232, 157, 275, 347, 314, 500, 143);
    curve(152, 232, 157, 275, 338, 271, 500, 56);
    curve(467, 324, 180, 230, 338, 271, 500, 180);
    curve(54, 150, 173, 228, 308, 183, 485, 187);
    curve(175, 41, 217, 158, 309, 183, 501, 143);

    fill(242, 211, 12, t);
    noStroke();
    ellipse(136, 383, 7, 7);
    ellipse(157, 383, 7, 7);
    ellipse(182, 380, 7, 7);
    ellipse(204, 374, 7, 7);
    ellipse(228, 367, 7, 7);
    ellipse(254, 358, 7, 7);
    ellipse(279, 348, 7, 7);
    ellipse(305, 337, 7, 7);
    ellipse(325, 327, 7, 7);
    ellipse(333, 317, 7, 7);
    ellipse(308, 319, 7, 7);
    ellipse(281, 317, 7, 7);
    ellipse(253, 311, 7, 7);
    ellipse(225, 303, 7, 7);
    ellipse(199, 294, 7, 7);
    ellipse(175, 283, 7, 7);
    ellipse(193, 283, 7, 7);
    ellipse(222, 287, 7, 7);
    ellipse(251, 290, 7, 7);
    ellipse(281, 289, 7, 7);
    ellipse(308, 285, 7, 7);
    ellipse(334, 273, 7, 7);
    ellipse(307, 270, 7, 7);
    ellipse(281, 266, 7, 7);
    ellipse(253, 258, 7, 7);
    ellipse(227, 249, 7, 7);
    ellipse(201, 240, 7, 7);
    ellipse(178, 230, 7, 7);
    ellipse(207, 224, 7, 7);
    ellipse(236, 211, 7, 7);
    ellipse(263, 199, 7, 7);
    ellipse(291, 187, 7, 7);
    ellipse(272, 183, 7, 7);
    ellipse(242, 177, 7, 7);
    ellipse(221, 162, 7, 7);
    ellipse(246, 367, 7, 7);
    ellipse(228, 359, 7, 7);
    ellipse(210, 351, 7, 7);
    ellipse(193, 343, 7, 7);
    ellipse(176, 334, 7, 7);
    ellipse(158, 324, 7, 7);
    ellipse(261, 373, 7, 7);
    ellipse(278, 378, 7, 7);
    ellipse(298, 384, 7, 7);
    ellipse(316, 388, 7, 7);
    ellipse(336, 391, 7, 7);
    ellipse(356, 391, 7, 7);
    ellipse(375, 387, 7, 7);
    
};

var spruchText="";    //Diesen Tipp hab ich von Lauritz bekommen
var spruch=false;
var draw= function() {
    background(18, 8, 79);
    
    if(spruch) {
        fill(38, 26, 204);
        textSize(30);
        text(spruchText, 10, 470, 500, 500);
    
    }
   
    weihnachtskarte();

    t=t+4;
    if (t===300) {
        t=-4;
    }
 
};

var mousePressed = function(){

if(mouseIsPressed && mouseX>65 && mouseX<105 && mouseY>50 && mouseY<90){
        spruch=true;
        spruchText=liste[round(random(0,5))];
        
    }
    
    if(mouseIsPressed && mouseX>125 && mouseX<165 && mouseY>85 && mouseY<125){
        spruch=true;
        spruchText=liste[round(random(0,5))];
        
    }
    
    if(mouseIsPressed && mouseX>250 && mouseX<330 && mouseY>20 && mouseY<100){
        spruch=true;
        spruchText=liste[round(random(0,5))];
    
    }
    
    if(mouseIsPressed && mouseX>370 && mouseX<450 && mouseY>110 && mouseY<190){
        spruch=true;
        spruchText=liste[round(random(0,5))];
        
    }
    
    if(mouseIsPressed && mouseX>415 && mouseX<435 && mouseY>20 && mouseY<40){
        spruch=true;
        spruchText=liste[round(random(0,5))];
        
    }
    
};














