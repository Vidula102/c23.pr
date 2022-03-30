class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {

    this.width = width;
    this.height = height;
    
    var options = {
      isStatic: true,
      density: 0.1
    };

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);

    this.image = loadImage("./assets/arrow.png");

    this.archerAngle = archerAngle;
    this.velocity = 0;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  //create a shoot function
  shoot() {
    this.archerAngle = this.archerAngle * (3.14/180);

    var velocity = p5.Vector.fromAngle(this.archerAngle);

    Matter.body.setstatic(this.body, false);

    Matter.Body.setVelocity(this.body, {
      x: velocity.x * (180 / 3.14) ,
      y: velocity.y * (180 / 3.14) })
  }
}
