window.addEventListener('DOMContentLoaded', function() {
    $.getJSON('/js/backgrounds.json', function(backgrounds) {
        var img = $('.header-img'),
            rand = prng(Math.floor(new Date() / (5 * 60 * 1000))), // change picture every 5 minutes
            background = backgrounds[rand * backgrounds.length | 0];

        img.get(0).crossOrigin = 'Anonymous';
        img.attr('src', background.url);

        img.on('load', function() {
            var colorThief = new ColorThief();
            var colors = colorThief.getPalette(img.get(0), 4);

            // CSS string adding color to the .header-color-bar
            var colorCss = '.header-color-bar{border-left-color:rgb(' + colors[0].join() + ')!important;border-right-color:rgb(' + colors[1].join() + ')!important;}';
            colorCss += '.header-color-bar:before{background-color:rgb(' + colors[2].join() + ');}';
            colorCss += '.header-color-bar:after{background-color:rgb(' + colors[3].join() + ');}';

            $('<style />').text(colorCss).appendTo('head');
        });

        img.parent().attr('data-author', background.author || 'Unknown');
    });
});

function prng(seed) {
    var x = Math.sin(seed) * 1e6;
    return x - Math.floor(x);
}
