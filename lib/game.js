(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  Game = Asteroids.Game = function (width, height) {
    this.xDim = width;
    this.yDim = height;
    this.numAsteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];

    this.addAsteroids();
  };

  // Game.DIM_X = 700;
  // Game.DIM_Y = 700;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < this.numAsteroids; i++) {
      this.asteroids.push(new Asteroids.Asteroid({game: this,
                                                  pos: this.randomPosition()
                                                }))
    }
  };

  Game.prototype.randomPosition = function() {
    return [(Math.random() * this.xDim),
            (Math.random() * this.yDim)]
  };

  Game.prototype.moveObjects = function(ctx) {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    }, this)
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
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
    for (var i = 0; i < this.asteroids.length ; i++) {
      for (var j = i+1; j < this.asteroids.length ; j++) {
          // debugger
          console.log(i, j)
        if ( this.asteroids[i].isCollidedWith(this.asteroids[j]) ) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  }

  Game.prototype.remove = function(obj) {
    // debugger
    var idx = this.asteroids.indexOf(obj);
    this.asteroids.splice(idx, 1);
  };


})();
