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
        var id = $(event.target).attr('href')
        console.log("id: " + id)
        $('body').scrollTo($(id), 500);
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
          }
  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}