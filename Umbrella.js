class Umbrella {
        constructor(x,y) {
          var options ={
            isStatic: true,
            friction: 0,
            density: 1.2,
            restitution: 0.3
          }
          this.radius = 20;
          this.body = Bodies.circle(x, y, this.radius/2, options);
          World.add(world, this.body);
          this.image = loadImage("boyWithUmbrella.png");
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        };
}