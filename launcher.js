class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.004,
            length: 10
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

fly(){
this.launcher.bodyA = null;


}


    display(){
if(this.launcher.bodyA){



        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}