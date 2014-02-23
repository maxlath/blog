if (Meteor.isClient) {

  Template.menu.events({
    'click .menuentries' : function (event){
      $('body').scrollTo('#topdiv')
      console.log('menu click to topdiv')
    }
  });

  Template.layout.events({
    'click .deeplink' : function (event){
        event.preventDefault();
        console.log("click " + event.target)
        var href = $(event.target).attr('href')
        var id = "#" + href.split('#')[1]
        console.log("id: " + id)
        window.location.hash = id
        $('body').scrollTo($(id), 500);
        },
    'click .fa-link' : function(event){
        event.preventDefault();
        var text = "http://maxlath.eu/p2p-rm#" + $(event.target).prev().find('a').attr('id')
        window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    }
  });

  Template.layout.rendered = function(){
        var hash =  Session.get('hash');
        if (hash && hash != undefined && hash != "undefined" && hash != "") {
          console.log("hash in layout rendered: " + hash)
          hash = "#" + hash
          $('body').scrollTo($(hash), 500);
          Session.set('hash', '');
          } else {
            $('body').scrollTo('#topdiv')
          };
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}