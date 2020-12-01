class Plinko{
    constructor(x,y) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':1.0,
            isStatic: true 
        }
        this.x = x
        this.y = y
        this.r = 10
        this.body = Bodies.circle(this.x, this.y,this.r/2, options);
        
        
        
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill ("white")
        ellipse( 0, 0,this.r,this.r);
        pop();
      }
}