const sounds = [
    "augh",
    "discord",
    "error",
    "helicopterr",
    "moscow",
    "pew",
    "wasted"
]

let soundTags = [];

sounds.forEach(soundName => {
    soundTags.push(`<audio id="${soundName}" src="Sounds/${soundName}.mp3"></audio>`);

    const btn = document.createElement('button');
    btn.classList.add("sound-board__btn");
    btn.innerHTML = soundName;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(soundName).play();
    });

    document.getElementById("buttons").appendChild(btn); 
});

document.getElementById("sounds").innerHTML = soundTags;

function stopSongs() {
    sounds.forEach(soundName => {
        const song = document.getElementById(soundName);

        song.pause();
        song.currentTime = 0;
    })
}