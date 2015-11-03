(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  Bullet = Asteroids.Bullet = function (paramsObj) {

    Asteroids.MovingObject.call(this, {
      color: "yellow",
      radius: 5,
      pos: paramsObj.pos,
      game: paramsObj.game,
      vel: paramsObj.vel
    });

  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject)

  Bullet.prototype.move = function() {
    if (this.inBounds(this.pos)) {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    } else {
      this.game.removeBullet(this)
    }
  };

  Bullet.prototype.inBounds = function(pos) {
    if (pos[0] > this.game.xDim || pos[0] < 0) {
      return false;
    }
    if (pos[1] > this.game.xDim || pos[1] < 0) {
      return false;
    }
    return true;
  }

  Bullet.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof Asteroid) {
      this.game.removeAsteroid(otherObj);
    }
  };


})();
