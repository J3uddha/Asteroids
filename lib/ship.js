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

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)

  Ship.prototype.relocate = function() {
    this.pos = [game.xDim / 2, game.ydim / 2]
  };

  // Ship.COLOR = "#ffffff";
  // Ship.RADIUS = "15"

})();
