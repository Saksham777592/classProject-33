class divBall {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            resitution: 0.9
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
           
        World.add(world, this.body);   
    }
    display() {
        var pos = this.body.position;

        push();
        strokeWeight(8);
        stroke("white");
        fill("white");
        ellipse(pos.x, pos.y, this.r, this.r);
        ellipseMode(RADIUS);
        pop();
    }
}