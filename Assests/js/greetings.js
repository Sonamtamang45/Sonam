setInterval(function() {
    var greeting = document.querySelector('.greeting');
    var name = document.querySelector('.Name-type');

    if (greeting.innerText === 'Hi') {
      greeting.classList.add('fade-transition', 'hide');
      setTimeout(function() {
        greeting.innerText = 'नमस्ते';
        greeting.classList.remove('hide');
      }, 500);
    } else {
      greeting.classList.add('fade-transition', 'hide');
      setTimeout(function() {
        greeting.innerText = 'Hi';
        greeting.classList.remove('hide');
      }, 500);
    }

    name.innerText = name.innerText.replace('s', 'Hello');
  }, 3000);

// Add your JavaScript code here

    /* BLUR EFFECT */

    var $container = $('.article_center2'),
        $articles = $container.children('article'),
        timeout;

    $articles.on('mouseenter', function(event) {
        var $article = $(this);
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if ($article.hasClass('active')) return false;
            $articles.not($article).removeClass('active').addClass('blur');
            $article.removeClass('blur').addClass('active');
        }, 75);
    });
    $('.article_center2', '#services ').on('mouseleave', function(event) {
        clearTimeout(timeout);
        $articles.removeClass('active blur');
    });


    $articles.bind('click', function(){
        var title = $(this).find('h3').text();
        alert("Nothing interesting,\nonly the actual title of the article = " + title);
    });

  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });













        