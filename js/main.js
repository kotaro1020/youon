'use strict';

{
  const btn =document.getElementById('btn12');

  btn12.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'サ';
    } else if (n < 0.67){
      btn.textContent = 'マ';
    } else {
      btn.textContent = 'ハ';
    }
  });
}

{
  const btn =document.getElementById('btn47');

  btn47.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'は';
    } else if (n < 0.67){
      btn.textContent = 'や';
    } else {
      btn.textContent = 'ほ';
    }
  });
}

{
  const btn =document.getElementById('btn49');

  btn49.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'ぺ';
    } else if (n < 0.67){
      btn.textContent = 'ヤ';
    } else {
      btn.textContent = 'マ';
    }
  });
}

let fish = document.getElementById('fish');
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'o' && event.ctrlKey) {
          fish.style.display = 'block'
        }
    });
