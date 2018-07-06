$(() => {
    const button = document.querySelector('button');

    button.onclick = onclick;

});

function onclick() {
    alert("Hello, world!")
}