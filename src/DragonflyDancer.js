var DragonflyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); // instantiates the parent class
  this.timeBetweenSteps = (this.timeBetweenSteps * 1.5);
  this.image = '<img src="./image/dragonfly.gif"></img>';
  this.$node.append(this.image);
  this.topPos = top;
  this.creep = -50;
};

DragonflyDancer.prototype = Object.create(Dancer.prototype);
DragonflyDancer.prototype.constructor = DragonflyDancer;

DragonflyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this); // old version of step function
  var creepTop = (this.topPos+this.creep);
  this.creep *= -1;
  this.$node.animate({top: creepTop}, this.timeBetweenSteps);
};

DragonflyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    border: '0px'
  };
  this.$node.css(styleSettings);
}; // end setPosition
