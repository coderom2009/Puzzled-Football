class Rabbit {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("Rabbit_wheel.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, 0);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    angle = 0

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}