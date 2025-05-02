// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  
  const jsConfetti = new JSConfetti();
  
  hornSelect.addEventListener('change', updateHornSelection);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);
  
  function updateHornSelection() {
    const selectedHorn = hornSelect.value;
    
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = selectedHorn.replace('-', ' ');
    
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  }
  
  function updateVolume() {
    const volumeValue = volumeSlider.value;
    
    audioElement.volume = volumeValue / 100;
    
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }

  function playSound() {
    audioElement.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
}