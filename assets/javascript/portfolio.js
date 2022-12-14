'use strict';
const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=a579e52997ac439683df37bbdd550570';
const timeouts = [];
var alreadyran = false;
var randomnumber = Math.floor(0 * (2) + 1);
document.getElementById("audio").src = "assets/others/" + randomnumber.toString() + ".mp4";
document.getElementById("background").src = "assets/others/" + randomnumber.toString() + ".mp4";
$(document).ready(() => {
    app.titleChanger(['FacuGlitch | Programador', '| Bienvenido a Mi Sitio Web!']);
});
window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("textPageNew");
    for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
    }
    if (alreadyran) {
        return;
    }
    alreadyran = true;
    runShit();
});


function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        let charElem = document.createElement("span");
        charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
        charElem.innerHTML = text[i];
        element.appendChild(charElem);
    }
}
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});


function runShit() {
    console.log('ran')
    document.body.onkeyup = (event) => {
        if (event.keyCode == 32 && app.skippedIntro) {
            if (app.backgroundToggler) {
                app.videoElement.play();
                app.audioElement.play();
            } else {
                app.videoElement.pause();
                app.audioElement.pause();
            }
            return (app.backgroundToggler = !app.backgroundToggler);
        }
    };
    setInterval(() => {
        $('.troll')
            .remove();
    }, 600);
    $('.skip')
        .click(() => {
            skipIntro();
        });
    $.fn.extend({
        animateCss: function(animationName) {
            const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass(`animated ${animationName}`)
                .one(animationEnd, () => {
                    $(this)
                        .removeClass(`animated ${animationName}`);
                });
            return this;
        },
    });
    const writeLine = (text, speed, timeout, callback) => {
        timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];
        const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);
        setTimeout(() => {
            const typed = new
            Typed(`#line${lineNumber}`, {
                strings: text,
                typeSpeed: speed,
                onComplete: callback,
            });
        }, timeout);
    };
    $.getJSON(ipgeolocation, (data) => {
        writeLine(['Cargando...', "Concediendo acceso a <span style='font-size: 30px; color: #FF0000;'>[Sitio Web]</span>..."], 30, () => {
            if (app.skippedIntro) return;
            clearCursor();
            const usernames = ['user', 'dude'];
            const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
            const country = data.country_name ? data.country_name : 'your country';
            writeLine([`Acceso permitido! <span style='font-size: 40px; color: #0f0;'>[Con ??xito]</span>`, `Bienvenido, <i style='font-size: 40px; color: #0f0'>${ip}</i>! Es bueno ver a alguien de <c style='font-size: 30px; color: #87CEEB'>${country}</c>!`], 30, 500, () => {
                if (app.skippedIntro)
                    return;
                clearCursor();
                writeLine([`<i style='color: #F62459'>root@facuglitch:~$</i> <i style=>Pulsa cualquier tecla para continuar...`], 60, 500, () => {
                    timeouts.push(setTimeout(() => {
                        document.onkeypress=function(e) {
                        if (app.skippedIntro)
                            return;
                        clearCursor();
                        setTimeout(() => {
                            skipIntro();
                        }, 2000);
                    }}, 1000));
                });
            });
        });
    });
    const skipIntro = () => {
        if (app.skippedIntro)
            return;
        app.skippedIntro = true;
        volume: 1
        timeouts.forEach((timeout) => {
            clearTimeout(timeout);
        });
        $('.top-right').remove();
        $('#main').fadeOut(100, () => {
            $('#main').remove();
            $('#marquee').marquee({
                duration: 15000,
                gap: 420,
                delayBeforeStart: 1000,
                direction: 'left',
                duplicated: true,
            });
            setTimeout(() => {
                $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
            }, 200);
            setTimeout(() => {
                const typed = new Typed('#brand', {
                    strings: app.brandDescription,
                    typeSpeed: 35,
                    onComplete: () => {
                        clearCursor();
                    },
                });
            }, 1350);
            setTimeout(() => {
                if (!app.shouldIgnoreVideo) {
                    app.videoElement.play();
                    app.audioElement.play();
                }
                $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);
                $('.marquee-container').animateCss('zoomIn');
                $('.container').fadeIn();
                $('.background').fadeIn(200, () => {
                    if (!app.shouldIgnoreVideo) $('#audio').animate({
                        volume: 1
                    }, app.musicFadeIn);
                });
            }, 300);
        });
    };
    const clearCursor = () => {
        return $('span').siblings('.typed-cursor').css('opacity', '0');
    };
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var stars = [],
        FPS = 60,
        x = 100,
        mouse = {
            x: 0,
            y: 0
        };
    for (var i = 0; i < x; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 1,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";
        for (var i = 0, x = stars.length; i < x; i++) {
            var s = stars[i];
            ctx.fillStyle = "#fffff";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 25 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.stroke();
        }
        ctx.beginPath();
        for (var i = 0, x = stars.length; i < x; i++) {
            var starI = stars[i];
            ctx.moveTo(starI.x, starI.y);
            if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
            for (var j = 0, x = stars.length; j < x; j++) {
                var starII = stars[j];
                if (distance(starI, starII) < 150) {
                    ctx.lineTo(starII.x, starII.y);
                }
            }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }

    function distance(point1, point2) {
        var xs = 0;
        var ys = 0;
        xs = point2.x - point1.x;
        xs = xs * xs;
        ys = point2.y - point1.y;
        ys = ys * ys;
        return Math.sqrt(xs + ys);
    }

    function update() {
        for (var i = 0, x = stars.length; i < x; i++) {
            var s = stars[i];
            s.x += s.vx / FPS;
            s.y += s.vy / FPS;
            if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
            if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
    }
    canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
    }
    tick();
}
