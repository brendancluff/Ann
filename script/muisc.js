// === Slideshow Logic ===
const images = [
  'images/IMG24.webp',
  'images/IMG25.webp',
  'images/IMG26.webp',
  'images/IMG27.webp'
];

let currentIndex = 0;
const slideImage = document.getElementById('slideImage');

// Set initial image
slideImage.src = images[currentIndex];

function changeImage() {
  slideImage.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImage.src = images[currentIndex];
    slideImage.style.opacity = 1;
  }, 500);
}

// Rotate every 5 minutes (300000ms). For demo, use 5000ms.
setInterval(changeImage, 300000);


// === YouTube Audio Control ===
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer', {
    height: '0',
    width: '0',
    videoId: 'ywH2C6KVFno', // Your YouTube audio video
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: 'ywH2C6KVFno',
      mute: 1, // Muted to allow autoplay, can unmute on play
    },
    events: {
      onReady: () => {
        console.log('YouTube Player Ready');
      }
    }
  });
}

// Play/Pause buttons
document.getElementById('playMusic').addEventListener('click', () => {
  if (player) {
    player.unMute();
    player.playVideo();
  }
});

document.getElementById('pauseMusic').addEventListener('click', () => {
  if (player) {
    player.pauseVideo();
  }
});

