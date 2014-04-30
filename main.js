if (Meteor.isClient) {

  Template.menu.events({
    'click .menuentries' : function (event){
      $('body').scrollTo('#topdiv')
    }
  });

  Template.layout.events({
    'click .deeplink' : function (event){
        event.preventDefault();
        var href = $(event.target).attr('href')
        var id = "#" + href.split('#')[1]
        window.location.hash = id
        $('body').scrollTo($(id), 500);
        },
    'click .fa-link' : function(event){
        event.preventDefault();
        var text = "http://maxlath.eu" + window.location.pathname + "#" + $(event.target).prev().find('a').attr('id')
        window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    }
  });

  Template.layout.rendered = function(){
    defaultTitler()
    var hash =  Session.get('hash');
    if (hash && hash != undefined && hash != "undefined" && hash != "") {
      hash = "#" + hash
      $('body').scrollTo($(hash), 500);
      Session.set('hash', '');
      } else {
        $('body').scrollTo('#topdiv')
      };
  }

  var defaultTitler = function(){
    var title = $('h2').text().trim()
    if (window.location.pathname == "/about"){
      document.title = "Maxime Lathuilière"
    } else {
      document.title = title
    }
  }
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}