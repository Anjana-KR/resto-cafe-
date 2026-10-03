// Web Audio API generator for cozy cafe ambient background sound
let audioCtx = null;
let noiseNode = null;
let gainNode = null;
let filterNode = null;
let isPlaying = false;

export function toggleCafeAmbiance() {
  if (isPlaying) {
    stopCafeAmbiance();
    return false;
  } else {
    startCafeAmbiance();
    return true;
  }
}

export function isAmbiancePlaying() {
  return isPlaying;
}

export function startCafeAmbiance() {
  if (isPlaying) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate warm pink noise (gentle rain & distant cafe hum)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;

    // Lowpass filter for warm, cozy sound
    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(650, audioCtx.currentTime);

    // Master volume gain
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);

    noiseNode.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    isPlaying = true;
  } catch (err) {
    console.warn('Audio ambiance could not start:', err);
    isPlaying = false;
  }
}

export function stopCafeAmbiance() {
  if (!isPlaying || !audioCtx || !gainNode) return;

  try {
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
    setTimeout(() => {
      if (noiseNode) {
        try { noiseNode.stop(); } catch (e) {}
        noiseNode.disconnect();
      }
      isPlaying = false;
    }, 850);
  } catch (e) {
    isPlaying = false;
  }
}
