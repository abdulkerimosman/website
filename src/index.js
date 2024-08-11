const main = document.querySelector('#main')
const menu = document.querySelector('#menu')
const nav2 = document.querySelector('#nav2')
const x = document.querySelector('#x')
const justify = document.querySelector('#justify')

menu.addEventListener('click',()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');

    } else{
        menu.classList.add('hidden');
        x.classList.remove('hidden');
        nav2.classList.remove('hidden');
        main.classList.add('hidden');
        justify.classList.add('justify-between flex');
    }
})

x.addEventListener('click',()=>{
    if (!x.classList.contains('hidden')){
        x.classList.add('hidden');
        nav2.classList.add('hidden');
        main.classList.remove('hidden');
        menu.classList.remove('hidden');
    }
})