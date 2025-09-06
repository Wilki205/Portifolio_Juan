/* ==================== MENU RESPONSIVO ==================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Toggle menu no clique do hamburguer
if(navToggle){
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show-menu');
    });
}

// Fechar menu no X
if(navClose){
    navClose.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar em link
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.remove('show-menu');
    });
});

// Fechar menu ao clicar fora dele (mobile)
document.addEventListener('click', (e) => {
    if(window.innerWidth <= 768){
        if(!navMenu.contains(e.target) && !navToggle.contains(e.target)){
            navMenu.classList.remove('show-menu');
        }
    }
});


/* ==================== SCROLL HEADER ==================== */
function scrollHeader(){
    const header = document.getElementById('header');
    if(window.scrollY >= 80) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/* ==================== LINK ATIVO NA ROLAGEM ==================== */
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if(link){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                link.classList.add('active-link');
            }else{
                link.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/* ==================== SCROLL REVEAL ==================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

// Somente elementos da página, sem incluir menu ou nav links
sr.reveal('.hero__content, .section__title'); 
sr.reveal('.hero__image', {delay: 400, origin: 'bottom'});
sr.reveal('.service__card, .project__card', {interval: 200}); 
sr.reveal('.about__skills', {origin: 'left'});

