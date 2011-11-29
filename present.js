function SlideShow(jq_slides){
  this.jq_slides = jq_slides; 
  this.jq_slides.addClass('slide');
}

SlideShow.prototype.bindDeviceEvents = function(){
  var that = this;
  this.jq_slides.live('tap',function(e){
   that.next(); 
  });
  this.jq_slides.live('swipeleft',function(e){
   that.next(); 
  });
  this.jq_slides.live('swiperight',function(e){
   that.prev(); 
  });
} 

SlideShow.prototype.bindEvents = function(){
  var that = this;

  this.bindDeviceEvents();

  jQuery(document).keydown(function(e){
    if (e.keyCode == 37) { 
       that.prev();
       return false;
    }else if (e.keyCode == 39) { 
       that.next();
       return false;
    }
  }); 
}

SlideShow.prototype.currentSlide= function(){
  return this.jq_slides.filter('.displayed');
}

SlideShow.prototype.previous = function(){
  return this.prev();
}

SlideShow.prototype.prev = function(){
  var jq_prevSlide = this.currentSlide().prev('div');
  if(jq_prevSlide.length > 0){
    this.currentSlide().removeClass('displayed');
    jq_prevSlide.addClass('displayed'); 
  }
}

SlideShow.prototype.next = function(){
  var jq_nextSlide = this.currentSlide().next('div');
  if(jq_nextSlide.length > 0){
    this.currentSlide().removeClass('displayed');
    jq_nextSlide.addClass('displayed'); 
  }
}


SlideShow.prototype.show = function(index){
  var jq_pickedSlide = jQuery(this.jq_slides.get(index));
  this.currentSlide().removeClass('displayed');
  jq_pickedSlide.addClass('displayed'); 
}
