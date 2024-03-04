//don't mind the fact this is chatgpt, im lazy ok ;-;


document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('dropdown-header').addEventListener('click', function() {
        toggleButtons('.dropdown-btns');
    });
    document.getElementById('dropdown-header1').addEventListener('click', function() {
        toggleButtons('.dropdown-btns1');
    });
});
function toggleButtons(group) {
    var dropdownBtns = document.querySelector(group);
    if (dropdownBtns.style.opacity === '0') {
      dropdownBtns.style.display = 'block';
      setTimeout(() => {
        dropdownBtns.style.opacity = '1';
      }, 10);
    } else {
      dropdownBtns.style.opacity = '0';
      setTimeout(() => {
        dropdownBtns.style.display = 'none';
      }, 300);
    }
}


buttonClick = (wah)=>{
    console.log(wah)
    location.href = wah;
}