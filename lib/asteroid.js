(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};



  Asteroid = Asteroids.Asteroid = function (paramsObj) {
    var asteroid = this;
    Asteroids.MovingObject.call(this, {
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      pos: paramsObj.pos,
      game: paramsObj.game,
      // vel: Asteroids.Util.randomVec(asteroid.radius)
    })
    this.vel = Asteroids.Util.randomVec(this.radius / 2);
  }

  Asteroid.COLOR = "#cccccc";
  Asteroid.RADIUS = 20;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject)

})();
