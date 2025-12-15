document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.querySelector(".typing");
  const words = ["Front-End Developer", "Web Designer","Web Developer"]; // imong mga titles
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
      typingSpeed = 40;
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex > currentWord.length) {
      typingSpeed = 1000; // pause
      isDeleting = true;
      charIndex = currentWord.length; 
    } 
   
    else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; 
      typingSpeed = 300;
      charIndex = 0; 
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
});
