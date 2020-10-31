(function($) {

  $.fn.contentify = function(options) {

    // Initialze settings
    var settings = $.extend({
      title:            '',
      headingSelectors: ['h1', 'h2', 'h3', 'h4', 'h5'],
      scrollDuration:   1000
    }, options);

    // Initialize table of contents entries
    var toc = [];

    // Find all headings
    $(settings.headingSelectors.join(',')).each(function() {
      for (var i = 0; i < settings.headingSelectors.length; ++i) {
        if ($(this).is(settings.headingSelectors[i]) === true) {
          // Make sure ID is set
          if ($(this).attr('id') === undefined) {
            $(this).attr('id', 'contentify_' + toc.length);
          }

          // Create new entry
          toc.push({
            title: $(this).html(),
            level: i,
            id:    $(this).attr('id') 
          });
        }
      }
    });

    // Generate table of contents HTML
    var tocHTML = '';

    if (settings.title.length > 0) {
      tocHTML += '<div class="contentify_title">' + settings.title + '</div>'
    }

    for (var i = 0; i < toc.length; ++i) {
      if (i === 0 || toc[i - 1].level < toc[i].level) {
        tocHTML += '<ol class="contentify_' + toc[i].level + '">';
      }

      tocHTML += '<li>'
              +    '<a href="#' + toc[i].id + '">'
              +      toc[i].title
              +    '</a>'
              +  '</li>';

      if (i === toc.length - 1 || toc[i].level > toc[i + 1].level) {
        tocHTML += '</ol>';
      }
    }

    return this.each(function() {
      $(this).html(tocHTML); // Insert HTML

      // Add smooth scrolling
      $(this).find('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, settings.scrollDuration);

        return false;
      });

      // Apply reasonable default CSS styling
      $(this).find('ol').each(function() {
        $(this).css({
          'list-style': 'none',
          'padding':    '0px',
          'margin':     '0px'
        });
      });

      $(this).find('a').each(function() {
        $(this).css({
          'color': $(this).css('color')
        });
      });
    });
  };

})(jQuery);
