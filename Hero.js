class Hero{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            density:1,
            frictionAir:1
        };
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("images/Superhero-01.png");
        this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body)
    }

    show(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h)
    }
}