
const info = `
User:     kernel!!
Pronouns:     He/him orThey/Them
Discord :       starr.lol
Coding:   HTML, CSS
Gaming:    COD,Roblox,Fortnite,CS2,tf2, beamng drive
Uptime:   Unknown
Language: English, Spanish
Taken:     duh. i love my pookie sm <3 (love youuu bluu!)
Website:  https://kernelkidd.vercel.app
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
