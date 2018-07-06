// Run this function after the page has loaded
$(() => {
    const video = document.querySelector('video');

    const constraints = {
        video: {
            width: {
                ideal: video.clientWidth
            },
            height: {
                ideal: video.clientHeight
            }
        }
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream  // Play stream in <video> element
    }).catch((error) => {
        console.error(error)
    })

});