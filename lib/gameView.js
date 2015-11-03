(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = window.Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval(function(){
      this.game.step();

      this.game.draw(this.ctx);


    }, 20);
  }
  GameView.prototype.bindKeyHandlers = function(){
    var gv = this

    key('up',     this.game.ship.power.bind(this.game.ship, [0,-1]));
    key('down',   this.game.ship.power.bind(this.game.ship, [0, 1]));
    key('left',   this.game.ship.power.bind(this.game.ship, [-1,0]));
    key('right',  this.game.ship.power.bind(this.game.ship, [1, 0]));
  }


})();
