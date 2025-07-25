
const info = `
User:     Alan Garcia
Host:     ChatGPT Terminal
OS:       RealityOS 1.0
Kernel:   Humanized Kernel 5.1.2
Shell:    Curiosity ZSH
Uptime:   21 Years
Language: English, Spanish
Hobbies:  Coding, Music, Dogs, Modding
Website:  alan.dev
`;

let i = 0;
const speed = 30;
const infoElement = document.getElementById("info");

function typeWriter() {
  if (i < info.length) {
    infoElement.textContent += info.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
