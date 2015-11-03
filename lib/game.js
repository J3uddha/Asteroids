(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  Game = Asteroids.Game = function (width, height) {
    this.xDim = width;
    this.yDim = height;
    this.numAsteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.gameBullets = [];
    this.ship = new Asteroids.Ship({game: this, pos: [this.xDim/2, this.yDim/2]});
    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < this.numAsteroids; i++) {
      this.asteroids.push(new Asteroids.Asteroid({game: this,
                                                  pos: this.randomPosition()
                                                }))
    }
  };

  Game.prototype.removeAsteroid = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
  };

  Game.prototype.addBullet = function (bullet) {
    this.gameBullets.push(bullet);
  };

  Game.prototype.removeBullet = function (bullet) {
    var idx = this.gameBullets.indexOf(bullet);
    this.gameBullets.splice(idx, 1);
  };

  Game.prototype.randomPosition = function() {
    return [(Math.random() * this.xDim),
            (Math.random() * this.yDim)]
  };

  Game.prototype.moveObjects = function(ctx) {
    this.allObjects().forEach(function(thing){
      thing.move();
    }, this)
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    this.allObjects().forEach(function(thing){
      thing.draw(ctx);
    }, this)
  }

  Game.prototype.step = function () {
    this.moveObjects(this.ctx);
    this.checkCollisions();
  }

  Game.prototype.wrap = function(pos) {
    return [this.wrapNum(pos[0]), this.wrapNum(pos[1])];
  };

  Game.prototype.wrapNum = function(num) {
    if (num >= 0) {
      return num % this.xDim
    } else {
      return num + this.xDim;
    }
  }

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allObjects().length ; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        if ( this.allObjects()[i].isCollidedWith(this.allObjects()[j]) ) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  }

  Game.prototype.removeObj = function(obj) {
    //pending implementation
  };

  Game.prototype.allObjects = function () {
    return this.gameBullets.concat(this.asteroids).concat([this.ship]);
  }



})();
