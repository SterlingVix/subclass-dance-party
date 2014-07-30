var MonkeyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); // instantiates the parent class
  this.timeBetweenSteps = (this.timeBetweenSteps * 0.33);
  this.image = '<img src="./image/monkey.gif"></img>';
  this.$node.append(this.image);
  this.rotPos = 0;
  this.creep = 1;
};

MonkeyDancer.prototype = Object.create(Dancer.prototype);
MonkeyDancer.prototype.constructor = MonkeyDancer;

MonkeyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this); // old version of step function
  if (this.rotPos === 20 || this.rotPos === -20) {
    this.creep *= -1;
  }
  this.rotPos += this.creep;
  var mRotate = 'rotate(' + this.rotPos + 'deg)';

  this.$node.css({'-webkit-transform': mRotate});
};

MonkeyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    '-webkit-transform': "rotate("+15+"deg)",
    border: '0px'
  };
  this.$node.css(styleSettings);
}; // end setPosition
