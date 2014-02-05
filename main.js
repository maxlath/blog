if (Meteor.isClient) {

  Template.layout.events({
    'click .deeplink' : function (event){
        event.preventDefault();
        var id = $(event.target).attr('href')
        $('body').scrollTo($(id), 500);
        }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
