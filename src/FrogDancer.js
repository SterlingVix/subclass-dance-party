var FrogDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); // instantiates the parent class
  this.timeBetweenSteps = 1150;
  this.image = '<img src="./image/frog.gif"></img>';
  this.$node.append(this.image);
  this.$node.addClass('frog');
  this.topPos = top;
  this.leftPos = left;
  this.creepTop = -50;
  this.creepLeft = -50;
};

FrogDancer.prototype = Object.create(Dancer.prototype);
FrogDancer.prototype.constructor = FrogDancer;

FrogDancer.prototype.step = function(){
  //var destination = this.findClosest();
  this.findClosest();

  this.topPos = (this.topPos + this.creepTop);
  this.leftPos = (this.leftPos + this.creepLeft);
  this.$node.animate({top: this.topPos, left: this.leftPos}, this.timeBetweenSteps);
  Dancer.prototype.step.call(this); // old version of step function
};

FrogDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    border: '0px'
  };
  this.$node.css(styleSettings);
}; // end setPosition

FrogDancer.prototype.findClosest = function(){
  var $dragonflies = $('.dragonfly');
  if ($dragonflies) {
    var smallestHypot = 9999; // hypoteneuse
    var targetX = 0;
    var targetY = 0;
    var target = target || $dragonflies[0]; // if things break ensure this doesnt run until drgnfls is defined
    for (var i = 0; i < $dragonflies.length; i++){
      //debugger;
      var dFlyX = parseInt($($dragonflies[i]).css('left'));
      var diffX = (this.leftPos - dFlyX); // position of frog.x - dragonfly.x
      var dFlyY = parseInt($($dragonflies[i]).css('top'));
      var diffY = (this.topPos - dFlyY);  // position of frog.y - dragonfly.y
      var hypot = ((diffX*diffX) + (diffY*diffY));
      hypot = Math.sqrt(hypot);
      if (hypot < smallestHypot) {
        smallestHypot = hypot;
        targetX = diffX;
        targetY = diffY;
        target = $dragonflies[i];
      }
    }
  } // end if ($dragonflies is defined)
  if(smallestHypot < 71){
    $(target).remove();
  }
  this.creepLeft = -50;
  this.creepTop = -50;
  if(targetX < 0) {
    this.creepLeft = 50;
  }
  if(targetY < 0) {
    this.creepTop = 50;
  }
};
