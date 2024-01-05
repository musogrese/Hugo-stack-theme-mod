const musicList = [
  '/music/song1.mp3',
  '/music/song2.mp3',
  '/music/song3.mp3',
  '/music/song4.mp3',
  '/music/song5.mp3'
];
let currentTrack = 0;

const musicPlayer = document.getElementById('musicPlayer');
musicPlayer.src = musicList[currentTrack];

musicPlayer.addEventListener('ended', playNext);

function playNext() {
  currentTrack = (currentTrack + 1) % musicList.length;
  musicPlayer.src = musicList[currentTrack];
  musicPlayer.play();
}

// 点击“下一首”按钮
function playNextButton() {
  currentTrack = (currentTrack + 1) % musicList.length;
  musicPlayer.src = musicList[currentTrack];
  musicPlayer.play();
}

// 点击“上一首”按钮
function playPrevButton() {
  currentTrack = (currentTrack - 1 + musicList.length) % musicList.length;
  musicPlayer.src = musicList[currentTrack];
  musicPlayer.play();
}
