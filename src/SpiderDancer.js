var SpiderDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); // instantiates the parent class
  this.timeBetweenSteps = (this.timeBetweenSteps * 1.5);
  this.image = '<img src="./image/spider.gif"></img>';
  this.$node.append(this.image);
  this.leftPos = left;
  this.creep = -50;
};

SpiderDancer.prototype = Object.create(Dancer.prototype);
SpiderDancer.prototype.constructor = SpiderDancer;

SpiderDancer.prototype.step = function(){
  Dancer.prototype.step.call(this); // old version of step function
  var creepLeft = (this.leftPos+this.creep);
  this.creep *= -1;
  this.$node.animate({left: creepLeft}, this.timeBetweenSteps);
};

SpiderDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    border: '0px'
  };
  this.$node.css(styleSettings);
}; // end setPosition

SpiderDancer.prototype.lineUp = function() {
  this.leftPos = Dancer.prototype.lineUp.call(this); // old version of step function
} // end lineUp()
