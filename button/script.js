let button;
let w;

function onclick() {
    alert("Hello, world!")
}

function mouseEnter(args) {
    button.offset({
        left: Math.random() * (w.width() - button.outerWidth()),
        top: Math.random() * (w.height() - button.outerHeight())
    });
}

function mouseMove(args) {
    let bc = button.center();
    let mc = {x: args.clientX, y: args.clientY};
    let dx = bc.x - mc.x;
    let dy = bc.y - mc.y;

    let d = Math.sqrt(dx * dx + dy * dy);
    let dd = button.width() * 2 - d;
    if (dd > 0) {
        let dmax = Math.max(Math.abs(dx), Math.abs(dy));
        dx = dx / dmax;
        dy = dy / dmax;

        button.center({
            x: Math.min(w.width() - button.outerWidth(), Math.max(button.outerWidth(), bc.x + dx * dd)),
            y: Math.min(w.height() - button.outerHeight(), Math.max(button.outerHeight(), bc.y + dy * dd))
        });
    }
}

$(() => {

    w = $(window);
    button = $('button');
    button.click(onclick);
    button.mouseenter(mouseEnter);

    w.mousemove(mouseMove);

    console.log('window', $(window).height(), 'doc', $(document).height());
    console.log('width', button.outerWidth());

    button.center({x: w.width() / 2, y: w.height() / 2});

});
