// by Benjie Genchel
// based on modified code ctrl+opt, based on modified code by Olivia Jack
// https://bgenchel.github.io

function main(kaleid, noise_scale, mod_depth, mod_rate, pixelate, pix_params){
  var core = osc(4, 0.1, 0.8)
  	.color(() => a.fft[0]*10.3 - 10,() => a.fft[0]*-15.3 + 2.3, () => a.fft[0]*120.3 - 1.8)
  	.rotate(0.10, 0.5)
  	.pixelate(20, 30)
  	.modulate(noise(noise_scale), () => mod_depth * Math.sin(mod_rate * Math.sin(0.03 * time)))
  	.kaleid(kaleid)
  
  var pixelation = () => pix_params['base'] + pix_params['scale'] * Math.sin(pix_params['rate'] * time);
  return pixelate ? core.pixelate(pixelation) : core;
}

  
/* PARAM DEFAULTS
kaleid = 2
noise_scale = 2.5
mod_depth = 1.5
mod_rate = 0.25
pixelate = false
pix_params = {'base': 500, 'scale': 1000, 'rate': 1}
*/

var kaleid = 2,
    noise_scale = 10,
    mod_depth = 1.5,
	mod_rate = 0.25,
    pixelate = false,
    pix_params = {'base': 50, 'scale': 2000, 'rate': 0.05}

s0.initCam()

main(kaleid, noise_scale, mod_depth, mod_rate, pixelate, pix_params)
	// .scrollX(1, 0.1)
	// .scrollY(0.1, () => 0.001 * Math.sin(0.5 * time))
	// .modulateKaleid(osc(1 , 0.5, 0), 10)
	// .rotate(1, 0.5).modulateRotate(src(s0), 0.5)
	// .posterize([1, 2, 3, 10, 8], 0.5)
	// .colorama(.00001)
	// .shift()
	// .modulate(src(s0))
	.color( å2, -2)
	.out(o0)


