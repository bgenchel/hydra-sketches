var one = function() {
  osc(10, 0.1, .4)
  .rotate(0, 0.1)
  .mult(
    osc(100, 0.25)
    .modulate(
      osc(10, .1).rotate(0, -0.1), .2
    ).colorama(() => mouse.y * .0001)
  )
  .color(() => mouse.x * .01, () => mouse.y * .001, Math.sin(time))
  .mask(
    shape(400, .7, .3)
    //.thresh(.1)
    .kaleid(10)
    .scale(.5)
  )
    .rotate(0, () => mouse.x * 0.001)
    .kaleid(5)
  	.rotate(0, () => mouse.x * 0.001)
    .out(o0)
}

one();

