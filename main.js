//don't mind the fact this is chatgpt, im lazy ok ;-;


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("adding dropdown events")
    document.querySelector(".dropdown-btns").style.opacity = '0'
    document.querySelector(".dropdown-btns1").style.opacity = '0'
    document.getElementById('dropdown-header').addEventListener('click', function() {
        console.log("1")
        toggleButtons('.dropdown-btns');
    });
    document.getElementById('dropdown-header1').addEventListener('click', function() {
        console.log("2")
        toggleButtons('.dropdown-btns1');
    });
});
function toggleButtons(group) {
    console.log("show group: "+group)
    var dropdownBtns = document.querySelector(group);
    if (dropdownBtns.style.opacity === '0') {
        dropdownBtns.style.display = 'block';
        console.log("bloq");
        setTimeout(() => {
          console.log("opacity 1");
          dropdownBtns.style.opacity = '1';
        }, 10);
      } else {
        dropdownBtns.style.opacity = '0';
        console.log("bye bye");
        setTimeout(() => {
          dropdownBtns.style.display = 'none';
        }, 300);
      }
}


buttonClick = (wah)=>{
    console.log("bye bye :3")
    console.log(wah)
    location.href = wah;
}