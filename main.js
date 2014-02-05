if (Meteor.isClient) {
  // Template.hello.greeting = function () {
  //   return "Welcome to maxlatheu.";
  // };

  Template.nothome.events({
    'click h1' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

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

