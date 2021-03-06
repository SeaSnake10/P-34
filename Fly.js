class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 10
        }
        this.Fly= Constraint.create(options);
        World.add(world, this.Fly);
    }


      show(){
            var bodyA = this.Fly.bodyA;
            var pointB = this.pointB;
            line(bodyA, pointB.x, pointB.y);
        
    }
    
}