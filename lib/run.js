  var canvasEl = document.getElementById("game-canvas");
  canvasEl.height = 700;
  canvasEl.width = 700;
// var obj = new Asteroids.MovingObject({
//     pos: [canvasEl.height / 2, canvasEl.width / 2],
//     vel: [0,0],
//     radius: 5,
//     color: "green"
// }) //.start(canvasEl);
// obj.draw(ctx);

var ctx = canvasEl.getContext("2d");
var game = new Asteroids.Game(canvasEl.width, canvasEl.height);
var gameView = new Asteroids.GameView(game, ctx).start();
// key('up', alert("This worked!"));
