window.addEventListener('DOMContentLoaded', function() {
    $.getJSON('/js/backgrounds.json', function(backgrounds) {
        var img = $('.header-img'),
            rand = prng(Math.floor(new Date() / (5 * 60 * 1000))), // change picture every 5 minutes
            background = backgrounds[rand * backgrounds.length | 0];

        img.css('background-image', 'url(' + background.url + ')');
        img.attr('data-author', background.author || 'Unknown');
    });
});


function prng(seed) {
  var x = Math.sin(seed) * 1e6;
  return x - Math.floor(x);
}