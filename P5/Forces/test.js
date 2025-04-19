let n = 7;            // Number of particles/choreography bodies
let particles = [];   // Array to hold particle color information
let t = 0;            // Time variable for animation
const amplitude = 200;  // Base amplitude for particle orbits

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  
  // Initialize particles with unique hues based on their index.
  for (let i = 0; i < n; i++) {
    let hue = map(i, 0, n, 0, 360);
    particles.push({ hue: hue });
  }
  
  // Use a solid background at the start.
  background(0);
}

function draw() {
  // Draw a slightly transparent background to leave fading trails.
  background(0, 0, 0, 20);

  let cx = width / 2;
  let cy = height / 2;
  
  // Increase time for animation
  t += 0.02;

  // Draw each particle based on a parametric equation.
  for (let i = 0; i < n; i++) {
    // Compute a phase offset for symmetry.
    let phase = TWO_PI * i / n;
    
    // Create a radius that varies over time to produce an interesting orbit.
    let radius = amplitude + 50 * sin(3 * t + phase);
    
    // Compute the (x, y) using the phase and time.
    let x = cx + radius * cos(t + phase);
    let y = cy + radius * sin(t + phase);

    // Draw the particle.
    noStroke();
    fill(particles[i].hue, 100, 100);
    ellipse(x, y, 10, 10);
  }
  
  // Optionally, connect the particles to form a polygon that emphasizes the symmetry.
  stroke(200, 80, 100);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < n; i++) {
    let phase = TWO_PI * i / n;
    let radius = amplitude + 50 * sin(3 * t + phase);
    let x = cx + radius * cos(t + phase);
    let y = cy + radius * sin(t + phase);
    vertex(x, y);
  }
  endShape(CLOSE);
}