
let Circle = function(x, y, radius, color){
	this.x      = x;
	this.y      = y;
	this.radius = radius;
	this.color  = color;
}

let p = Circle.prototype;

p.render = function(ctx){
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
	ctx.fillStyle = this.color;
	ctx.fill();
}
