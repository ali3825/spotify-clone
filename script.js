
  const audio = document.getElementById("audioPlayer");
  const playBtn = document.getElementById("playBtn");
  const progressBar = document.getElementById("progressBar");
  const volumeBar = document.getElementById("volumeBar");
  const currentTimeEl = document.getElementById("currentTime");
  const totalTimeEl = document.getElementById("totalTime");

  let isPlaying = false;

  // ▶️ Play / Pause
  playBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
      playBtn.style.opacity = "1";
    } else {
      audio.pause();
      isPlaying = false;
    }
  });

// Update total duration
audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

// Backup safety
audio.addEventListener("canplay", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("canplay", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});


  // 📊 Update progress bar
  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  // ⏩ Seek song
  progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });

  // 🔊 Volume control
  volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
  });

  // ⏱ Time formatter
function formatTime(time) {
  if (isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
