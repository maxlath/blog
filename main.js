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

$('.deeplink').click('a', function (event){
        event.preventDefault();
        var id = $(this).attr('title')
        console.log(this)
        console.log(id)
        $('body').scrollTo($(id), 500);
        });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
