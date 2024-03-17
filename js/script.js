let audio = null; // Define audio element globally
let isPlaying = false;
let currentSong = {
    source: "",
    title: "",
    artist: "",
    image: ""
};

function playMusic(source, title, artist, image) {
    if (!audio || audio.src !== source) {
        // If audio is not playing or the source is different, create a new audio element with the provided source and start playing
        if (audio) {
            audio.pause();
        }
        audio = new Audio(source);
        audio.play();
        isPlaying = true; // Update the state after starting playback
        updatePlayButtonIcon(); // Update the play button icon
        currentSong.source = source;
        currentSong.title = title;
        currentSong.artist = artist;
        currentSong.image = image;
    } else {
        // If audio is playing, pause it
        if (!audio.paused) {
            audio.pause();
            isPlaying = false; // Update the state after pausing
            updatePlayButtonIcon(); // Update the play button icon
        } else {
            // If audio is paused, resume playing
            audio.play();
            isPlaying = true; // Update the state after resuming playback
            updatePlayButtonIcon(); // Update the play button icon
        }
    }

    // Update the song details in the music player section
    document.querySelector('.text h8').innerText = currentSong.title;
    document.querySelector('.text p').innerText = currentSong.artist;

    // Update the image source
    document.querySelector('.square img').src = currentSong.image;
}

function updatePlayButtonIcon() {
    const playButton = document.querySelector('.music-player i.bi-play-circle-fill');
    const holdButton = document.querySelector('.music-player i.bi-pause-circle-fill');

    // Toggle visibility of play and hold buttons based on the state of the audio
    if (isPlaying) {
        playButton.style.display = 'none';
        holdButton.style.display = 'block';
    } else {
        playButton.style.display = 'block';
        holdButton.style.display = 'none';
    }
}

// Function to toggle play/pause and update the play button icon
function togglePlayPause() {
    if (!audio || audio.paused) {
        playMusic(currentSong.source, currentSong.title,currentSong.artist,currentSong.image);
    } else {
        audio.pause();
        isPlaying = false;
        updatePlayButtonIcon();
    }
}
