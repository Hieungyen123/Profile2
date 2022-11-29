const body = document.querySelector('body')
const check = document.querySelector('#checkbox')
const user = document.querySelector('.user')
const show = document.querySelector('.btn')
console.log(user)

check.addEventListener('change', function(){
  body.classList.toggle('dark')
  user.classList.toggle('light')
})

const $  = document.querySelector.bind(document);
const $$  = document.querySelectorAll.bind(document);


const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $(' .tab-item.active');
const line = $('.line');

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab,index) => {
    const pane  = panes[index];


    tab.onclick = function () {
      
      $(' .tab-pane.active').classList.remove('active');
      $(' .tab-item.active').classList.remove('active');

      $(' .tab-item.color').classList.remove('color');
      
      line.style.left = tab.offsetLeft + "px";
      line.style.width = tab.offsetWidth + "px";
      this.classList.add('color');

      this.classList.add('active');
      pane.classList.add('active');
      
    }
});

show.addEventListener("click", () => {
  user.classList.toggle("close");
})


