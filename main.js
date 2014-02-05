if (Meteor.isClient) {
  // Template.hello.greeting = function () {
  //   return "Welcome to maxlatheu.";
  // };

  Template.socialnetworks.events({
    'hover div' : function () {
      console.log("been hover here!");
      $(this).find('a').fadeOut();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

