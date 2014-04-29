// That's a very *** ugly/not DRY hack

// WIKIDATA APT GET
Template.wikidataaptget.rendered = function(){
    $('.active').removeClass('active')
    $("#wikidata-and-the-apt-get-of-things").find('p').addClass('active')
  }

// P2P
Template.p2prm.rendered = function(){
		$('.active').removeClass('active')
        $("#p2prm").addClass('active')
  }

// PAPER

Template.paperethicalmarketing.rendered = function(){
		$('.active').removeClass('active')
        $("#paperethicalmarketing").addClass('active')
  }
Template.part1.rendered = function(){
		$('.active').removeClass('active')
        $("#I").addClass('active')
        $("#paperethicalmarketing").addClass('active')
  }

Template.part2.rendered = function(){
		$('.active').removeClass('active')
        $("#II").addClass('active')
        $("#paperethicalmarketing").addClass('active')
  }

Template.part3.rendered = function(){
		$('.active').removeClass('active')
        $("#III").addClass('active')
        $("#paperethicalmarketing").addClass('active')
  }

Template.bibliography.rendered = function(){
		$('.active').removeClass('active')
        $("#bibliography").addClass('active')
        $("#paperethicalmarketing").addClass('active')
  }

Template.lexic.rendered = function(){
		$('.active').removeClass('active')
        $("#lexic").addClass('active')
        $("#paperethicalmarketing").addClass('active')
  }


// ABOUT
Template.about.rendered = function(){
		$('.active').removeClass('active')
        $("#about").addClass('active')
  }

