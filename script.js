const messages = [
    "🌹 'We could be anything we want.' – *Chase Atlantic*",
    "🌹 'I just want to hold you, feel you close.' – *Arctic Monkeys*",
    "🌹 'It’s not what you want, it’s what you need.' – *Cage the Elephant*"
  ];
  
  let roseClickCount = 0;
  
  window.onload = function () {
    const welcome = document.getElementById('welcome');
    const box = document.getElementById('box');
    setTimeout(() => {
      welcome.style.opacity = 1;
      setTimeout(() => {
        box.style.display = 'flex';
      }, 3000); // Increased time for smoother transition
    }, 1000);
  };
  
  document.getElementById('box').onclick = function () {
    this.style.transform = 'scale(0)';
    setTimeout(() => {
      this.style.display = 'none';
      const rose = document.getElementById('rose');
      rose.style.display = 'block';
      const clickPrompt = document.getElementById('clickPrompt');
      clickPrompt.style.display = 'block';
    }, 500);
  };
  
  document.getElementById('rose').onclick = function () {
    if (roseClickCount < 3) {
      const sentences = document.getElementById('sentences');
      const clickPrompt = document.getElementById('clickPrompt');
      const extraContent = document.getElementById('extraContent');
  
      clickPrompt.style.display = 'none';
      sentences.style.display = 'block';
  
      const line = document.createElement('p');
      line.innerHTML = messages[roseClickCount];
      sentences.appendChild(line);
  
      roseClickCount++;
  
      if (roseClickCount === 3) {
        setTimeout(() => {
          sentences.innerHTML = '';
          const thankYouMessage = document.createElement('p');
          thankYouMessage.innerHTML = "Thank you, Hajar. You're truly amazing!";
          thankYouMessage.style.fontFamily = 'Dancing Script, cursive';
          sentences.appendChild(thankYouMessage);
  
          const awesomeMessage = document.createElement('p');
          awesomeMessage.innerHTML = "You're awesome, Hajar! Your smile brightens up the day!";
          awesomeMessage.style.fontFamily = 'Dancing Script, cursive';
          extraContent.style.display = 'block';
          extraContent.appendChild(awesomeMessage);
        }, 3000);
      }
    }
  };
  
  // Create static stars on the page
  const starContainer = document.getElementById('stars');
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starContainer.appendChild(star);
  }
  