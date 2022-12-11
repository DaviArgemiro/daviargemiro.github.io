const nav = document.querySelector("header")

window.addEventListener('scroll', () => {
    if(window.scrollY >= 50){
        nav.classList.add('active_nav')
    }else{
        nav.classList.remove('active_nav')
    }
})