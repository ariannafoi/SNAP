// CAMBIO SCRITTA AL CLICK

// let scritta = document.querySelector('#scritta');
// let changeTextHomeNav = document.querySelector('#homenav');
// let changeTextHome = document.querySelector('#home');
// let changeTextGallery = document.querySelector('#gallery');
// let changeTextAbout = document.querySelector('#about');
// let changeTextContact = document.querySelector('#contact');

// changeTextHomeNav.addEventListener('click', ()=>{
//     scritta.textContent = 'Home'
//     console.log('home')
// })

// changeTextHome.addEventListener('click', ()=>{
//     scritta.textContent = 'Home'
//     console.log('home')
// })

// changeTextGallery.addEventListener('click', ()=>{
//     scritta.textContent = 'Gallery'
//     console.log('gallery')
// })

// changeTextAbout.addEventListener('click', ()=>{
//     scritta.textContent = 'About'
//     console.log('about')
// })

// changeTextContact.addEventListener('click', ()=>{
//     scritta.textContent = 'Contact'
//     console.log('contact')
// })

// MODALITA' NOTTE E COME MANTENERE LA PREFERENZA AL CAMBIO PAGINA
let darkModeToogle = document.querySelector('#dark-mode-toogle');
let link = document.createElement('link');
link.rel = 'stylesheet';

function verifyDarkMode() {
    let darkModeActive = localStorage.getItem('dark_mode');
    if (darkModeActive === 'true') {
        darkModeToogle.checked = true;
        link.href = 'dark-mode.css';
    }else{
        darkModeToogle.checked = false;
        link.href = '';
    }
}

verifyDarkMode()

darkModeToogle.addEventListener('change', ()=>{
    if(darkModeToogle.checked){
        link.href = 'dark-mode.css';
        localStorage.setItem('dark_mode', 'true');
    }else{
        link.href = '';
        localStorage.setItem('dark_mode', 'false')
    }

    document.head.appendChild(link);
});


//ABOUT-US PAGE

let wrapper = document.querySelector('.wrapper');
wrapper.classList.add('wrapper-custom');

let people = [
    {nome: 'Michael', cognome: 'Lurie', ruolo: 'CEO', photo: 'img/img1.png'},
    {nome: 'Jessica', cognome: 'Wanda', ruolo: 'CEO', photo: 'img/img2.png'},
    {nome: 'Roland', cognome: 'Keith', ruolo: 'Cinematographer', photo: 'img/img3.png'},
    {nome: 'Diana', cognome: 'Givens', ruolo: 'Art Director', photo: 'img/img4.png'},
    {nome: 'John', cognome: 'Brown', ruolo: 'Art Director', photo: 'img/img5.png'}
]

people.forEach((person)=> {
    let card = document.createElement('div'); //creazione dinamica della card
    card.classList.add('image-card'); // aggiunta di una classe CSS per posizionare le card una accanto all'altra

    let immagine = document.createElement('img'); //creazione dinamica delle immagini
    immagine.src = person.photo; //immagini che vengono prese dall'array di oggetti definito sopra
    immagine.classList.add('fluid-img');

    card.appendChild(immagine); //immagine allegata alla card

    let description = document.createElement('h2');  //creazione dinamica di un h3
    description.textContent = person.nome + ' ' + person.cognome; // assegnazione del contenuto di testo della descrizione costituito da nome e cognomi concatenati
    
    let ruolo = document.createElement('h6');
    ruolo.textContent = person.ruolo;
    ruolo.classList.add('ruolo-color');

    description.appendChild(ruolo);

    card.appendChild(description); //descrizione allegata alla card
    
    wrapper.appendChild(card); //card allegata al wrapper

})
