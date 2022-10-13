var path, path1, boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  //loadImage de path (camino)

  pathImg = loadImage("path.png");

  //loadAnimation de boy (niño)

 boyImg = loadAnimation ("Runner-1.png","Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 

 path =createSprite(220,70,20,50); 
 path.addAnimation("running",pathImg);

path1 =createSprite(220,70,20,50); 
 path1.addAnimation("running",pathImg);
 
 
 //path.y = width/2;
 

  //agregar imagen de path
 //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.scale=1;

  //crear sprite de boy (niño)
  boy = createSprite(50,330,20,50);

 //agregar animación para boy

 boy.addAnimation("correr", boyImg);

 boy.scale=0.05;
  
 // crear  left Boundary (límite izquierdo)
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visisble = false;
 ////establecer visibilidad como false (falso) para límite izquierdo

 //crear right Boundary (límite derecho)
 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible= false;
 //establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  path1.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse

  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);

  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.bounceOff(edges);
  
  //código para reiniciar el fondo

  if(path.y > 400 ){
    path.y = height/2;
  }


  drawSprites();
}
