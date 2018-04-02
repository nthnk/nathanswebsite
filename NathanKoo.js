window.onscroll = function() {scrollFunction()};

function scrollFunction() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		$('#topBtn').fadeIn(1000);
	} else {
		$('#topBtn').fadeOut();
	}
}

function topFunction() {
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}

topFunction();

$('#dropdownContent').hide();

$('#dropDownButton').click(function() {
	// var myClass = $('#dropdownContent').attr("class");
	// var myClassArray = myClass.split(" ");
	$('.dropdown-content').toggle('slow');
	// if(myClassArray.includes('hideContent')) {
	// 	$('#dropdownContent').addClass('dropdown-content').removeClass('hideContent');
	// }

	// else {
	// 	$('#dropdownContent').addClass('hideContent').removeClass('dropdown-content');
	// }

});

$('#mobdropdownContent').hide();

$('#mobdropDownButton').click(function() {
    // var myClass = $('#dropdownContent').attr("class");
    // var myClassArray = myClass.split(" ");
    $('.mobdropdown-content').toggle('slow');
    // if(myClassArray.includes('hideContent')) {
    //  $('#dropdownContent').addClass('dropdown-content').removeClass('hideContent');
    // }

    // else {
    //  $('#dropdownContent').addClass('hideContent').removeClass('dropdown-content');
    // }

});

function topBtnEnlarge () {
	$('#topBtn').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	})
}

topBtnEnlarge();

function whoiam () {

	$("h1").hover(function(){
    	$(this).css("background-color", "azure");
    	}, function(){
    $(this).css("background-color", "aquamarine");
	});
}

whoiam();

function contentLine1 () {

	$('#contentLine1').hover(function(){
    	$('#contentLine1').css("background-color", "paleturquoise");
    	}, function(){
    $('#contentLine1').css("background-color", "azure");
	});
}

contentLine1();

function contentLine2 () {

	$('#contentLine2').hover(function(){
    	$('#contentLine2').css("background-color", "paleturquoise");
    	}, function(){
    $('#contentLine2').css("background-color", "azure");
	});
}

contentLine2();

function contentLine3 () {

	$('#contentLine3').hover(function(){
    	$('#contentLine3').css("background-color", "paleturquoise");
    	}, function(){
    $('#contentLine3').css("background-color", "azure");
	});
}

contentLine3();

function careerLine1 () {

	$('#careerLine1').hover(function(){
    	$('#careerLine1').css("background-color", "paleturquoise");
    	}, function(){
    $('#careerLine1').css("background-color", "azure");
	});
}

careerLine1();

function careerLine2 () {

	$('#careerLine2').hover(function(){
    	$('#careerLine2').css("background-color", "paleturquoise");
    	}, function(){
    $('#careerLine2').css("background-color", "azure");
	});
}

careerLine2();

function careerLine3 () {

	$('#careerLine3').hover(function(){
    	$('#careerLine3').css("background-color", "paleturquoise");
    	}, function(){
    $('#careerLine3').css("background-color", "azure");
	});
}

function whatIveDone () {

	$('#whativedone').hover(function(){
    	$('#whativedone').css("background-color", "steelblue");
    	}, function(){
    $('#whativedone').css("background-color", "cornflowerblue");
	});
}

whatIveDone();

function veriday () {

	$('#veridayTitle').hover(function(){
    	$('#veridayTitle').css("background-color", "steelblue");
    	}, function(){
    $('#veridayTitle').css("background-color", "cornflowerblue");
	});
}

veriday();

function website () {

	$('#websiteTitle').hover(function(){
    	$(this).css("background-color", "steelblue");
    	}, function(){
    $(this).css("background-color", "cornflowerblue");
	});
}

website();

function entsoc () {

	$('#entsocTitle').hover(function(){
    	$(this).css("background-color", "steelblue");
    	}, function(){
    $(this).css("background-color", "cornflowerblue");
	});
}

entsoc();

careerLine3();

function veridayDescr () {

	$('#veridayDescription').hover(function(){
    	$('#veridayDescription').css("background-color", "dimgrey");
    	}, function(){
    $('#veridayDescription').css("background-color", "gray");
	});
}

veridayDescr();

function websiteDescr () {

	$('#websiteDescription').hover(function(){
    	$('#websiteDescription').css("background-color", "dimgrey");
    	}, function(){
    $('#websiteDescription').css("background-color", "gray");
	});
}

websiteDescr();

function entsocDescr () {

	$('#entsocDescription').hover(function(){
    	$('#entsocDescription').css("background-color", "dimgrey");
    	}, function(){
    $('#entsocDescription').css("background-color", "gray");
	});
}

entsocDescr();

function veridayTitleHover () {

	$('#veridayPosition').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

veridayTitleHover();

function websiteTitleHover () {

	$('#websitePosition').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

websiteTitleHover();

function entsocTitleHover () {

	$('#entsocPosition').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

entsocTitleHover();

function veridayHover () {

	$('#veridayPic').hover(function(){
    	$('#veridayPic').addClass("transition");
    	}, function(){
    $('#veridayPic').removeClass("transition");
	});
}

veridayHover();

function webHover () {

	$('#websitePic').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

webHover();

function entsocHover () {

	$('#entsocPic').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

entsocHover();

function skillSetHover () {

	$('#skillSet').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});

	$('#skillSet').hover(function(){
    	$(this).css("color", "yellowgreen");
    	}, function(){
    $(this).css("color", "black");
	});
}

skillSetHover();

function HTML5TextHover () {

	$('#skill1').hover(function(){
    	$(this).css("color", "yellowgreen");
    	}, function(){
    $(this).css("color", "black");
	});
}

HTML5TextHover();

function HTML5Hover () {

	$('#HTML5').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

HTML5Hover();

function CSS3TextHover () {

	$('#skill2').hover(function(){
    	$(this).css("color", "yellowgreen");
    	}, function(){
    $(this).css("color", "black");
	});
}

CSS3TextHover();

function CSS3Hover () {

	$('#CSS3').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

CSS3Hover();

function JSTextHover () {

	$('#skill3').hover(function(){
    	$(this).css("color", "yellowgreen");
    	}, function(){
    $(this).css("color", "black");
	});
}

JSTextHover();

function JSHover () {

	$('#JavaScript').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

JSHover();

function jQueryTextHover () {

	$('#skill4').hover(function(){
    	$(this).css("color", "yellowgreen");
    	}, function(){
    $(this).css("color", "black");
	});
}

jQueryTextHover();

function jQueryHover () {

	$('#jQuery').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

jQueryHover();

function soccerHover () {

	$('#soccer').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

soccerHover();

function frisbee10Hover () {

	$('#frisbee10').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

frisbee10Hover();

function frisbee12Hover () {

	$('#frisbee12').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

frisbee12Hover();

function frisbeeUproarHover () {

	$('#pullup4').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

frisbeeUproarHover();

function dapperHover () {

	$('#dapper').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

dapperHover();

function frisbeeHover () {

	$('#frisbee').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

frisbeeHover();

function microphoneHover () {

	$('#microphone').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

microphoneHover();

function pingpongHover () {

	$('#pingpong').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

pingpongHover();

function flickHover () {

	$('#flick').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

flickHover();

function flick1Hover () {

	$('#flick1').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

flick1Hover();

function flick2Hover () {

	$('#flick2').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

flick2Hover();

function flick3Hover () {

	$('#flick3').hover(function(){
    	$(this).addClass("transition1");
    	}, function(){
    $(this).removeClass("transition1");
	});
}

flick3Hover();

function employmentDescriptionHover () {

	$('#employmentDescription').hover(function(){
    	$(this).css("color", "yellowgreen");
    	}, function(){
    $(this).css("color", "black");
	});
}

employmentDescriptionHover();

function linkedInHover () {

	$('#linkedin').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

linkedInHover();

function gmailHover () {

	$('#gmail').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

gmailHover();

function piazzaHover () {

	$('#piazza').hover(function(){
    	$(this).addClass("transition");
    	}, function(){
    $(this).removeClass("transition");
	});
}

piazzaHover();

