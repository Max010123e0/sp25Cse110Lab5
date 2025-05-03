// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');
  
  const closedMouthImage = 'assets/images/smiling.png';
  const openMouthImage = 'assets/images/smiling-open.png';
  
  const synth = window.speechSynthesis;
  let voices = [];
  
  populateVoiceList();
  
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }
  
  speakButton.addEventListener('click', speak);
  
  function populateVoiceList() {
    voices = synth.getVoices();

    while (voiceSelect.options.length > 1) {
      voiceSelect.options.remove(1);
    }
    
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  
  function speak() {
    if (synth.speaking) {
      return;
    }
    
    const text = textArea.value.trim();
    
    if (text === '') {
      return;
    }
    
    faceImage.src = openMouthImage;
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (voiceSelect.value !== 'select') {
      const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }
    
    utterance.onend = function() {
      faceImage.src = closedMouthImage;
    };
    
    synth.speak(utterance);
  }
}