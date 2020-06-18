const keys = "ASDFGHJWETYU"
const pathAudioBgn = "audio/"
const pathAudioEnd = ".mp3"

for (let k in keys) {
    document.getElementById(keys[k]).addEventListener("click", function () {
        playSound(pathAudioBgn + keys[k] + pathAudioEnd)
    });
}

document.addEventListener("keydown", function (event) {
    const key = event.key.toUpperCase()
    if (keys.includes(key)) {
        playSound(pathAudioBgn + key + pathAudioEnd)
    }
})

function playSound(filePath) {
    new Audio(filePath).play()
}
