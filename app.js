var can;
var px = 10;
var py = 10;
height = 300;
width = 150;
heightl = 450;
widthl = 250;
wid=null;
hei=null;
var cccc=null;
var imgg=null;
var imggl=null;
var imgg2=null;
var imgg3=null;
var imgg4=null;
var px=2;
var py=40;

var px1=2;
var px4=2;
var px2=2;
var px3=2;

var py1=40;
var py2=40;
var py4=40;
var py3=40;

var legs=["./hulk_legs.png","./spiderman_legs.png","ironman_legs.png"];

var face=["hulk_face.png","ironman_face.png","thor_face.png","spiderman_face.png"];

var left=["spiderman_left_hand.png","thor_left_hand.png","hulk_left_hand.png","ironman_left_hand.png","captain_america_left_hand.png"];

var right=["spiderman_right_hand.png","thor_right_hand.png","hulk_right_hand.png","ironman_right_hand.png"];

var body=["spiderman_body.png","hulkd_body.png","ironman_body.png"];

function up1() {
    if (py >= 0) {
        py = py - 10;
        py1 = py1 - 10;
        py2 = py2 - 10;
        py3 = py3 - 10;
        py4 = py4 - 10;
    }
}

function down1() {
    if (py <= 500) {
        py = py + 10;
        py1 = py1 + 10;
        py2 = py2 + 10;
        py3 = py3 + 10;
        py4 = py4 + 10;
        
    }
}

function left1() {
    if (px >= 0) {
        px = px - 5;
        px1 = px1 - 5;
        px2 = px2 - 5;
        px3 = px3 - 5;
        px4 = px4 - 5;
        
    }
}

function right1() {
    if (px <= 700) {
        px = px + 10;
        px1 = px1 + 10;
        px2 = px2 + 10;
        px3 = px3 + 10;
        px4 = px4 + 10;
        
    }
}





function loaded() {

    hei=document.body.clientHeight-20;
    wid=document.body.clientWidth-20;

    cccc=document.getElementById("canvas");
    cccc.width=wid;
    cccc.height=hei;
    // px=cccc.wid/2;
    can = new fabric.Canvas("canvas");
    document.body.addEventListener("keydown", function(e){
        var keycode=e.keyCode;
        console.log(keycode);
        if(keycode==70){
            let randomItem = face[Math.floor(Math.random() * face.length)];
            randomItem="./static/"+randomItem
            console.log(randomItem);
            imageg(randomItem,wid/px4,py4);
        }
        if(keycode==76){
            let randomItem = legs[Math.floor(Math.random() * legs.length)];
            randomItem="./static/"+randomItem
            console.log(randomItem);
            imagegl(randomItem,wid/px3,py3);
        }
        if(keycode==82){
            let randomItem = left[Math.floor(Math.random() * left.length)];
            randomItem="./static/"+randomItem
            console.log(randomItem);
            imageg3(randomItem,wid/px2,py2);
        }
        if(keycode==72){
            let randomItem = right[Math.floor(Math.random() * right.length)];
            randomItem="./static/"+randomItem
            console.log(randomItem);
            imageg2(randomItem,wid/px1,py1);
        }
        if(keycode==66){
            let randomItem = body[Math.floor(Math.random() * body.length)];
            randomItem="./static/"+randomItem
            console.log(randomItem);
            imageg4(randomItem,wid/px,py);
        }
        if (keycode == '38') {
            up1(); 
            e.preventDefault();
        }
        if (keycode == '40') {
            down1(); 
            e.preventDefault();
        }
        if (keycode == '37') {
            left1(); 
            e.preventDefault();
        }
        if (keycode == '39') {
            right1(); 
            e.preventDefault();
        }
    });
}
function imageg(image,xx,yy) {
    can.remove(imgg);
    fabric.Image.fromURL(image, function(Imgg) {
        imgg=Imgg;
        imgg.scaleToWidth(height);
        imgg.scaleToHeight(width);
        imgg.set({
            top: yy,
            left: xx-60
        });
        can.add(imgg);


    });
}
function imagegl(image,xx,yy) {
    can.remove(imggl);
    fabric.Image.fromURL(image, function(Img) {
        imggl=Img;
        imggl.scaleToWidth(heightl);
        imggl.scaleToHeight(widthl);
        imggl.set({
            top: yy,
            left: xx-60
        });
        can.add(imggl);


    });
}

function imageg2(image,xx,yy) {
    can.remove(imgg2);
    fabric.Image.fromURL(image, function(Img) {
        imgg2=Img;
        imgg2.scaleToWidth(heightl);
        imgg2.scaleToHeight(widthl);
        imgg2.set({
            top: yy+60,
            left: xx-40
        });
        can.add(imgg2);


    });
}

function imageg3(image,xx,yy) {
    can.remove(imgg3);
    fabric.Image.fromURL(image, function(Img3) {
        imgg3=Img3;
        imgg3.scaleToWidth(heightl);
        imgg3.scaleToHeight(widthl);
        imgg3.set({
            top: yy+60,
            left: xx-60
        });
        can.add(imgg3);


    });
}

function imageg4(image,xx,yy) {
    can.remove(imgg4);
    fabric.Image.fromURL(image, function(Img3) {
        imgg4=Img3;
        imgg4.scaleToWidth(heightl);
        imgg4.scaleToHeight(widthl);
        imgg4.set({
            top: yy+100,
            left: xx-60
        });
        can.add(imgg4);


    });
}