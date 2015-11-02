(function () {

var Asteroids = window.Asteroids = window.Asteroids || {};



var MovingObject = Asteroids.MovingObject = function (paramsObj) {

  this.pos = paramsObj.pos;
  this.vel = paramsObj.vel;
  this.radius = paramsObj.radius;
  this.color = paramsObj.color;
  this.game = paramsObj.game;

};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObj) {
  if ( Asteroids.Util.distance(this.pos, otherObj.pos) < (this.radius + otherObj.radius) ) {
    return true;
  }
  return false;
};

MovingObject.prototype.collideWith = function(otherObj) {
  // this.game.remove(otherObj);
  // this.game.remove(this);
};



})();
