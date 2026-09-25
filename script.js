const btn=document.querySelector('.hamburger');
const nav=document.querySelector('.header nav');

if(btn&&nav){
  btn.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>
    a.addEventListener('click',()=>nav.classList.remove('open'))
  );
}