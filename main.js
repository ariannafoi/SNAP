let scritta = document.querySelector('#scritta');
let changeTextHomeNav = document.querySelector('#homenav');
let changeTextHome = document.querySelector('#home');
let changeTextGallery = document.querySelector('#gallery');
let changeTextAbout = document.querySelector('#about');
let changeTextContact = document.querySelector('#contact');

changeTextHomeNav.addEventListener('click', ()=>{
    scritta.textContent = 'Home'
    console.log('home')
})

changeTextHome.addEventListener('click', ()=>{
    scritta.textContent = 'Home'
    console.log('home')
})

changeTextGallery.addEventListener('click', ()=>{
    scritta.textContent = 'Gallery'
    console.log('gallery')
})

changeTextAbout.addEventListener('click', ()=>{
    scritta.textContent = 'About'
    console.log('about')
})

changeTextContact.addEventListener('click', ()=>{
    scritta.textContent = 'Contact'
    console.log('contact')
})
