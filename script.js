function textToAudio() {
  let msg = document.getElementById("text-to-speech").value;

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-IN";

  speech.text = msg;
  speech.volume = 10;
  speech.rate = 0.5;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
