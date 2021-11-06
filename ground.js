class Objects_G {
    constructor(x, y, width, height, img/*,gravity,restitution,friction,density,ch_type*/) {
      this.img = img
        var options = {
        isStatic: true
      };

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("Brick_texture.jpg");
  
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.width, this.height);
      pop();
    }
  }