// A drum kit I created on 2019.09.03, Day #1 of 30 days of code in the JavaScript30.com class. I learned how to setup code pen, add assets like sound and CSS, about keyboard events, playing audio, a couple methods including querySelector and querySelectorAll, how to edit CSS by using the classList property, and listening for a transitionEnd event.
  
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //you need to use a grave accent mark ` instead fo an apostrophe '. The querySelector() method returns the first element that matches a specified CSS selector(s) in the document
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0; //rewind to the start
    if (!audio) return;//stop the funciton from running 
    audio.play();
    key.classList.add('playing');
  }
  
  function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing'); // this is key from below
  }
  
  const keys = document.querySelectorAll('.key'); //The querySelectorAll() method returns an array
  keys.forEach(key => key.addEventListener('transitionend', removeTransition )); //the array will need to be cycled through to listen to each element
  
  window.addEventListener('keydown', playSound); //