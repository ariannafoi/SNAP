// MODALITA' NOTTE E COME MANTENERE LA PREFERENZA AL CAMBIO PAGINA
let darkModeToggle = document.querySelector('#dark-mode-toggle');

function verifyDarkMode() {
    let darkModeActive = localStorage.getItem('dark_mode');
    if (darkModeActive === 'true') {
        document.body.classList.add('active-dark');
        darkModeToggle.checked = true;
    } else {
        document.body.classList.remove('active-dark');
        darkModeToggle.checked = false;
    }
}

verifyDarkMode();

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.body.classList.add('active-dark');
        localStorage.setItem('dark_mode', 'true');
    } else {
        document.body.classList.remove('active-dark');
        localStorage.setItem('dark_mode', 'false');
    }
});


//CONTACT PAGE
//SWIPER

//all'interno delle graffe c'è proprio lo swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }, 

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
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

    // Aggiungi l'evento mouseenter per l'effetto di zoom
    card.addEventListener('mouseenter', function () {
        card.classList.add('zoomed');
    });

    // Aggiungi l'evento mouseleave per rimuovere l'effetto di zoom
    card.addEventListener('mouseleave', function () {
        card.classList.remove('zoomed');
    });
    
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

});

