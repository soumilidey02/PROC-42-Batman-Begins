class Drop {
    constructor(x,y) {
      var options ={
        isStatic: false,
        friction: 0.1,
        density: 1.2,
        restitution: 0.3
      }
      this.radius = 10;
      this.rain = Bodies.circle(x, y, this.radius/2, options);
      World.add(world, this.rain);
    }

    display(){
      var pos =this.rain.position;
      var angle = this.rain.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }

    update() {
        if(this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, {x: random(0, 480), y: random(0, 480)});
        }
    }
  };