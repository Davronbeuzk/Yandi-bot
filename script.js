
const inputin = document.querySelector(".inputin");
const btnsend = document.querySelector(".btn");

const botToken = '8178538468:AAGDZ8MCF1yebBdNjjfy7PRhQAfF806Aqi4';
const chatId = '6694807481';



btnsend.addEventListener('click', () => {
    
    const message = inputin.value;

    if (message) {
        sendTextMessage(message);
    }

    const photosend = document.querySelector("#photoid").files[0];
    const videoInput = document.querySelector("#videoid").files[0];

    if (photosend) {
        sendPhoto(photosend);
    }

    if (videoInput) {
        sendVideo(videoInput);
    }
});

function sendTextMessage(message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        })

}

function sendPhoto(photo) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photo);

    fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
        })
}

function sendVideo(video) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('video', video);

    fetch(`https://api.telegram.org/bot${botToken}/sendVideo`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
        })
}
