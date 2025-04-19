class Body {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.mass = 8;
      this.r = sqrt(this.mass) * 6;
    }
    
    attract(body) {
      let force = p5.Vector.sub(this.position, body.position);
      let d = constrain(force.mag(), 5, 25);
      let G = 1;
      let strength = (G * (this.mass * body.mass)) / (d * d);
      force.setMag(strength);
      body.applyForce(force);
    }
  
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
  
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.set(0, 0);
    }
  
    show() {
      stroke(0);
      strokeWeight(2);
      fill(255);
      circle(this.position.x, this.position.y, this.r * 4);
    }
  }
  