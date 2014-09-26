Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  // loadingTemplate: 'loading'
  // before: function () {

  // },
  after: function () {
        Session.set('hash', this.params.hash);
  }
});

Router.onRun(function(){
    if(Session.equals('AnalyticsJS_loaded', true))
        analytics.page(this.path);
});

Router.map(function () {


  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    action: function() {
      this.redirect('/about')
    }
  });

  this.route('about', {
  });

  this.route('p2prm', {
    path: 'p2p-rm'
  });

  // MASTER THESIS

  this.route('part1', {
    path: 'paper-ethical-marketing/part-1'
  });

    this.route('part2', {
    path: 'paper-ethical-marketing/part-2'
  });

    this.route('part3', {
    path: 'paper-ethical-marketing/part-3'
  });

    this.route('bibliography', {
    path: 'paper-ethical-marketing/bibliography'
  });

  this.route('lexic', {
    path: 'paper-ethical-marketing/lexic'
  });

  this.route('paperethicalmarketing', {
    path: 'paper-ethical-marketing'
  });

  this.route('pgp', {
  });

  this.route('wikidata-and-the-apt-get-of-things',{
    path: 'wikidata-and-the-apt-get-of-things',
    template: 'wikidataaptget'
  });


  // OLD PERMALINKS
  this.route('masterthesis-post', {
    path: '#16523478807',
    action: function() {
      this.redirect('/paper-ethical-marketing')
    }
  });

  this.route('masterthesis', {
    path: 'master-thesis',
    action: function() {
      this.redirect('/paper-ethical-marketing')
    }
  });

  this.route('p2p-blog', {
    path: 'post/50921432199/what-is-p2p-resources-management',
    action: function() {
    	var hash = Session.set('hash', this.params.hash);
    	if (hash){
    		var path = '/p2p-rm#' + hash
    	} else {
    		var path = '/p2p-rm'
    	}
      	this.redirect(path)
    }
  })

  // this.route('tumblrposts', {
  //   path: '/post/*',
  // })

  this.route('404', {
    path: '/*',
  })
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