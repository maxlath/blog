Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {

  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
  });

  this.route('about', {
  });

  this.route('p2p-rm', {
  });

  this.route('paper-ethical-marketing', {
  });




  this.route('tumblrposts', {
    path: '/post/*',
    action: function() {
      this.redirect('')
    }
  })

  console.log("Router started!!")
});


Router.tumblr = {
    mapping: {
        "about": '#16463530006',
        "p2p-rm": '#49029731709',
        "master-thesis": '#16523478807',
        "ouishare":"#16519472898",
        "booksurfing":"#16468441232",
        "aperosocent":"#16521600785",
        "contributions":"#16472770331",
        "freelancing":"#41127188749",
        "videos":"#16528497102"
      },
    redirect: {
      "myblog":"blog.maxlath.eu",
      "master-thesis":"http://labs.ouishare.net/Rethink_ethical_marketing_after_the_critiques_of_Bernard_Stiegler",
      "cv":"https://www.dropbox.com/sh/z2lw2skj8cfm85d/FUBaMFvm2g",
      "p2p-rm":"http://blog.maxlath.eu/post/50921432199/what-is-p2p-resources-management",

    }
  }