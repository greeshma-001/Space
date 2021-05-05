class Rocket{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':2.0
        }
        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
        this.image=loadImage("rocket.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}