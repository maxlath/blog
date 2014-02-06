if (Meteor.isClient) {

  Template.layout.events({
    'click .deeplink' : function (event){
        event.preventDefault();
        var id = $(event.target).attr('href')
        $('body').scrollTo($(id), 500);
        }
  });

  Template.layout.rendered = function(){

        var hash =  Session.get('hash');
        if (hash) {
          console.log("hash in layout rendered: " + hash)
          $('body').scrollTo($(hash), 500);
          Session.set('hash', '');
          }
  }


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}