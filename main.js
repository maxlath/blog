if (Meteor.isClient) {

  Template.p2prm.events({
    'click .deeplink' : function (event){
        event.preventDefault();
        var id = $(event.target).attr('title')
        $('body').scrollTo($(id), 500);
        }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
