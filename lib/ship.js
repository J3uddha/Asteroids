(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  Ship = Asteroids.Ship = function (paramsObj) {
    var Ship = this;
    Asteroids.MovingObject.call(this, {
      color: "red",
      radius: 15,
      pos: paramsObj.pos,
      game: paramsObj.game,
      vel: [0, 0]
    })
    // this.vel = 0;
  }

  Ship.COLOR = "red";
  Ship.RADIUS = 15;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)

  Ship.prototype.relocate = function() {
    this.pos = [game.xDim / 2, game.yDim / 2]
    this.vel = [0,0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.move = function() {
    if (this.vel[0] > 0) { this.vel[0] -= 0.02} else { this.vel[0] += 0.02 }
    if (this.vel[1] > 0) { this.vel[1] -= 0.02} else { this.vel[1] += 0.02 }
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.pos = this.game.wrap(this.pos);
  };





})();
