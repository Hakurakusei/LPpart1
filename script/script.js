const swiper = new Swiper('.swiper', {
    effect:'fade',
    initialSlide: 0,
    shortSwipes: false,
    longSwipes:false,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

});
const sectionFeel = 1240;

window.addEventListener('scroll', function(){
    if(sectionFeel <= this.window.scrollY){
        document.querySelector('#nav').classList.add('open');
    }else{
        document.querySelector('#nav').classList.remove('open');
    }
});
