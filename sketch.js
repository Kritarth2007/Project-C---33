const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;
var plinkos = []
var particle  
var division = []
var divisionHeight =300
var score =  0
var count = 0
var gameState = "start"


function setup() {
  createCanvas(800, 800);
   

	engine = Engine.create();
  world = engine.world;
  
  ground = new GroundClass(400,800,800,20)
  for (var k = 0; k<=width; k = k + 80) {
    division.push(new DivisionClass(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,75))
  }
  for (var j = 20; j <=width; j=j+50){
    plinkos.push(new Plinko(j,175))
    }
    for (var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,275))
      }
      for (var j = 20; j <=width; j=j+50){
        plinkos.push(new Plinko(j,375))
        }
}

function draw() {
  background("black"); 
  Engine.update (engine)
  ground.display ()
  for (var i = 0; i < plinkos.length; i++)
   { plinkos[i].display(); } 

   if (particle!=null){
     particle.display ();

     if (particle.body.position.y>760)
{
  if (particle.body.position.x < 300)
  {
    score = score+500;
    particle = null;
    if ( count>= 5) gameState = "end"
  }
  if (particle.body.position.x < 600 && particle.body.position.x > 301)
  {
    score = score+100;
    particle = null;
    if ( count>= 5) gameState = "end"
  }
  //if (particle.body.position.x < 900 && particle.body.position.x > 601)
  //{
   // score = score+200;
    //particle = null;
    //if ( count>= 5) gameState = "end"
 // }
  


}
   }

      for (var k = 0; k < division.length; k++)
       { division[k].display(); }

       text ("Score : "+score,20,40)
       if (gameState === "end") {
         textSize (100)
         fill ("white")
         text ("Game Over",150,250)
         
       }
  
}

function mousePressed () {
  if (gameState!== "end") {
    count++;
    particle = new Particle(mouseX,10,10,10)
  }
}

