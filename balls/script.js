let w;
let ww;
let wh;
let balls = [];
let run = true;
let dt = 0.1;
let G = 50;

class Ball {
    constructor(x, y) {
        this.x = x ? x : Math.random() * w.width();
        this.y = y ? y : Math.random() * w.height();
        this.vx = 50 - Math.random() * 200;
        this.vy = 50 - Math.random() * 200;
        this.color = getRandomColor();
    }

    draw() {
        if (!this.div) {
            this.div = $('<div class="ball"></div>');
            $('body').append(this.div);
            this.div.css('background-color', this.color);
        }
        this.div.center({x: this.x, y: this.y});
    }

    step() {
        this.vy += G * dt;

        this.x += this.vx * dt;
        this.y += this.vy * dt;

        if (this.x < 25 || this.x > ww) {
            this.vx *= -0.9;
        }
        if (this.y < 25 || this.y > wh) {
            this.vy *= -0.9;
        }

        this.x = Math.min(this.x, ww);
        this.y = Math.min(this.y, wh);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function draw() {
    for (let b of balls) {
        b.draw();
    }
}

function step() {
    for (let b of balls) {
        b.step();
    }
}

function onClick(args) {
    // console.log(args);
    balls.push(new Ball(args.clientX, args.clientY));
    draw();
}

function onKeyDown(args) {
    // console.log(args);
    if (args.keyCode === 32) {
        run = !run;
    } else if (args.keyCode === 13) {
        balls = [];
        $('body').empty();
    }
}

$(() => {
    w = $(window);
    ww = w.width() - 25;
    wh = w.height() - 25;
    console.log(ww, wh);
    // for (let i = 0; i < 5; i++) {
    //     balls.push(new Ball());
    // }
    w.click(onClick);
    w.keydown(onKeyDown);
    draw();
    setInterval(() => {
        if (run) {
            step();
            draw();
        }
    }, 1000 / 25);
});
