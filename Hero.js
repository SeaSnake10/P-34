class Hero{
    constructor(x,y,w,h){
        var options = {
            density: 1,
            frictionAir: 1
        }
                this.x=x;
                this.y=y;
                this.w=w;
                this.h=h;
                this.image=loadImage("images/Superhero-01.png");
                this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
                World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.w, this.h);
    }
}