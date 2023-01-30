var image = document.querySelector('#image');
var audio = document.getElementById("sound-player");
var button = document.querySelector('.button-price');


document.querySelector('.button-price').addEventListener('click', (event) =>{
  button.style.display = "hidden";
  image.style.display = 'block';
  audio.play();
});



/*
var promise = document.querySelector('#sound-player').play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}
*/