document.addEventListener('DOMContentLoaded', function () {
    var mainBanner = document.getElementById('heroimg');

    function fadeIn(element, duration) {
        var opacity = 0;
        var interval = 10;
        var delta = interval / duration;

        function increaseOpacity() {
            opacity += delta;
            element.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }

        var fadeInterval = setInterval(increaseOpacity, interval);
    }

    fadeIn(mainBanner, 3000);
});