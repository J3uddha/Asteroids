(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Util.inherits = function(ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  }

  Util.randomVec = function (length) {

    return [(Math.random() * length) - (length/2),
            (Math.random() * length) - (length/2)]
  }

  Util.distance = function (pos1, pos2) {
    x1 = pos1[0];
    y1 = pos1[1];
    x2 = pos2[0];
    y2 = pos2[1];

    return Math.sqrt( Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) );

  }

})();
