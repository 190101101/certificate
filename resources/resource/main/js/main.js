$(function() {
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
});



const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    let currentWidth = 0;
    let currentLeft = 0;

    const timer = setInterval(() => {
        currentWidth+=1;
        loading.style.width = `${currentWidth}%`;

        if(currentWidth >= 100){
            currentLeft+=1;
            loading.style.left = `${currentLeft}%`;

            if(currentLeft >= 100){
                clearTimeout(timer);
            }
        }
    }, 10);
});
