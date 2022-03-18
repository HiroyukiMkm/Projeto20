var bgImg;
var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("garden.png");

    cat1 = loadImage("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat3 = loadImage("cat4.png");

    mouse1 = loadImage("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");
    mouse3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(870,600);
    cat.addImage("cat",cat1);
    cat.scale = 0.2;

    mouse = createSprite(130,600);
    mouse.addImage("mouse",mouse1);
    mouse.scale = 0.2
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat3",cat3);
        cat.changeAnimation("cat3");
        cat.x = 300;
        cat.scale = 0.2;
        
        mouse.addAnimation("mouse3",mouse3);
        mouse.changeAnimation("mouse3");
        mouse.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("provocando",mouse2);
        mouse.changeAnimation("provocando");
        mouse.frameDelay = 25;

        cat.velocityX = -5
        cat.addAnimation("andando",cat2);
        cat.changeAnimation("andando");
        
    }

}
