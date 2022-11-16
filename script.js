
let img = document.querySelector('#food');
let parentElement = document.querySelector('nav');

let btn  = document.querySelectorAll('button');
let parentNav = document.querySelector('nav');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

let heading = document.querySelector('#heading') ;





btn.forEach(item=>{
   item.addEventListener('click',(e)=>{
        parentNav.querySelector('.active').classList.remove('active');
        item.classList.add('active'); 
        img.classList.add('imgFade');
        heading.classList.add('imgFade');

        setTimeout(()=>{
            img.classList.remove('imgFade')
            heading.classList.remove('imgFade')
        },400)
   })
   
})




btn1.addEventListener('click', ()=>{
    heading.textContent='Pizza';
    img.src='./assets/images/pizza.png';
})

btn2.addEventListener('click', ()=>{
    heading.textContent='Burger'
    img.src='./assets/images/burger.png';
})
btn3.addEventListener('click', ()=>{
    heading.textContent='Tacos'
    img.src='./assets/images/tacos.png';
})







