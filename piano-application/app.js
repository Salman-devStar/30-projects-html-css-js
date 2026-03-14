const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, keyElement) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  //   oscillator.type = "square";
  //   oscillator.type = "sine";
  oscillator.type = "square";
  oscillator.type = "triangle";
  //   oscillator.type = "sawtooth";

  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 1,
  );

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 1);

  // Ab sahi key highlight hogi
  keyElement.classList.add("pressed");
  setTimeout(() => keyElement.classList.remove("pressed"), 200);
}
