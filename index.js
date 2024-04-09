document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById('message');
  animateMessage(message);
});

function animateMessage(element) {
  const messageText = element.innerText;
  element.innerText = '';
  let index = 0;

  function addLetter() {
    element.innerText += messageText[index];
    index++;

    if (index === messageText.length) {
      clearInterval(timer);
    }
  }

  const timer = setInterval(addLetter, 100);
}

 