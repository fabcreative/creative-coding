
setResolution(window.innerWidth*2, window.innerHeight*2) // Set retina resolution
a.show()

// Initialize a new p5 instance
p5 = new P5()
p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
p5.angleMode(p5.DEGREES)
p5.normalMaterial()


p5.draw = () => {

p5.background(0) 
p5.rotateX(p5.frameCount / 4)
p5.rotateZ(p5.frameCount / 2)
p5.stroke(255)
p5.noFill()
p5.fill(200)
p5.strokeWeight(5)
p5.box(500)

}

// Use P5 as an input to hydra
s0.init({ src: p5.canvas })

// Render the canvas
src(s0)
    //.repeat(1, () => (a.fft[0]*4))
    //.repeat(2,1)
    //.rotate(() => (a.fft[0]*4), 1)
    .out(o0)

noise(1, 0.5)
    .kaleid(1)
    .colorama(1.3)
    .pixelate(1)
    .modulateRepeatX(osc(1), 5.0, ({time}) => Math.sin(time) * 1)//
    .out(o1)

osc().thresh().modulate(osc().rotate(1)).out(o3)

src(o1).mult(o0).mult(o3).out(o2)
render(o2)
