class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04          
        }
        //this.sling1 = loadImage('sprites/sling1.png');
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
   display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB.position;
           
        strokeWeight(7);
        line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}