// That's a very *** ugly/not DRY hack

// WIKIDATA APT GET
Template.wikidataaptget.rendered = function(){
  $('.active').removeClass('active')
  $("#wikidata-and-the-apt-get-of-things").find('p').addClass('active')
}

// P2P
Template.p2prm.rendered = function(){
  $('.active').removeClass('active')
  $("#p2prm").find('p').addClass('active')
}

// PAPER

Template.paperethicalmarketing.rendered = function(){
  $('.active').removeClass('active')
  $("#paperethicalmarketing").find('p').addClass('active')
}
Template.part1.rendered = function(){
  $('.active').removeClass('active')
  $("#I").find('p').addClass('active')
  $("#paperethicalmarketing").find('p').addClass('active')
}

Template.part2.rendered = function(){
  $('.active').removeClass('active')
  $("#II").find('p').addClass('active')
  $("#paperethicalmarketing").find('p').addClass('active')
}

Template.part3.rendered = function(){
  $('.active').removeClass('active')
  $("#III").find('p').addClass('active')
  $("#paperethicalmarketing").find('p').addClass('active')
}

Template.bibliography.rendered = function(){
  $('.active').removeClass('active')
  $("#bibliography").find('p').addClass('active')
  $("#paperethicalmarketing").find('p').addClass('active')
}

Template.lexic.rendered = function(){
  $('.active').removeClass('active')
  $("#lexic").find('p').addClass('active')
  $("#paperethicalmarketing").find('p').addClass('active')
}


// ABOUT
Template.about.rendered = function(){
  $('.active').removeClass('active')
  $("#about").find('p').addClass('active')
}

