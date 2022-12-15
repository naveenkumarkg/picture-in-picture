
const video = document.getElementById('video');
const button = document.getElementById('button')


async function captureScreen() {
    try {
        const mainStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(mainStream)
        video.srcObject = mainStream;
        console.log(video)
        video.onloadedmetadata = () => {
            video.play();
            video.requestPictureInPicture();

        }


    } catch (e) {
        console.log(e);
    }

}

button.addEventListener('click', () => {
    captureScreen();


})

