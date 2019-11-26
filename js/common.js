$(document).ready(function () {
  $('#menuToggle').click(function () {
    $('.menuToggle-overlay').css('width', '100%');
    $('#navClose, .main__socials').css('visibility', 'visible');
  });
  $('#navClose').click(function () {
    $('.menuToggle-overlay').css('width', '0%');
    $('#navClose, .main__socials').css('visibility', 'hidden');
  });
  $('#menuToggle, #navClose').click(function () {
    $('.circle').toggleClass('circle-opened');
    $('.button-text').toggleClass('button-text-opened');
  });



  $('#call_to_action, .closeDropUS').click(function () {
    $('.dropUs-overlay').toggleClass('dropUs-overlay-open');
    $('.dropUs-content').toggleClass('dropUs-content-open');
    $('.closeDropUS').toggleClass('closeDropUS-open');

  });






});


// tabs form
function openForm(evt, formName) {
  // Declare all variables
  var i, formcontent, tabform;

  // Get all elements with class="tabcontent" and hide them
  formcontent = document.getElementsByClassName("formcontent");
  for (i = 0; i < formcontent.length; i++) {
    formcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tabform = document.getElementsByClassName("tabform");
  for (i = 0; i < tabform.length; i++) {
    tabform[i].className = tabform[i].className.replace(" active", "");
  }
 
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//show the next fieldset
	next_fs.show(); 
	// hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//show the previous fieldset
	previous_fs.show(); 
	// hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})


function goBack() {
    setTimeout(function () {
        location.reload()
    }, 100);
}


$(document).ready(function () {
  $('.btn_prj, .btn_msg').click(function () {
    $('#drop_begin').toggleClass('drop_begin-close');
  });

});

// END tabs

new Vue({
  el: '#slider',
  data: {
    slideWidth: '311',
    slideHeight: '402',
    infinite: true,
    disable3d: true,
    slides: [
      {
        title: 'Jaguar Club Belarus',
        desc: '',
        src: '../img/JCB.png'
      }, {
        title: 'Woodworkshop',
        desc: '',
        src: '../img/woodwork.png'
      }, {
        title: 'Рудник',
        desc: '',
        src: '../img/rudnik.png'
      }, {
        title: 'Вам письмо',
        desc: '',
        src: '../img/vampismo.png'
      }, {
        title: 'Prodriver',
        desc: '',
        src: '../img/prodriver.png'
      }, {
        title: 'Метрополь',
        desc: '',
        src: '../img/metropol.png'
      }]
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  },
  methods: {
    addSlide() {
      this.slides.push({
        title: '',
        desc: '',
        src: ''
      })
    },
    removeSlide() {
      this.slides.pop()
    }
  }
})

$(document).ready(function () {
  $('#canvas_bgtext, #canvas_bgtext2, #canvas_bgtext3, #canvas_bgtext4').tagcanvas({
    textFont: 'Montserrat', // шрифт
    txtOpt: false, // text in image
    wheelZoom: false,
    shuffleTags: true, // тэги рандомом
    noSelect: true, // выбор тэгов 
    textColour: '#c8c8c8', // Цвет текста 
    maxSpeed: 0.04, // Максимальная скорость 
    depth: 0.9, // Глубина. От 0 до 1 
    shadow: "#c8c8c8",
    shadowBlur: 0, // степень размытия (px)
    fadeIn: 200,
    weight: true,
    weightSize: 1.5,
  })
});

$(document).ready(function () {
  var config = {
    sectionAnimateDuration: 1
  }
  var wall = new Wall('#wrapper', {
    loopToBottom: false,
    loopToTop: true,
    easeFunction: 'easeIn'

  });

});

