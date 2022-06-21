//play audio on hover
$("#nav-two a").each(function(i) {
    if(i != 0) { 
        $("#beep-two").clone().attr("id", "beep-two" + i).appendTo($(this).parent());
    }
$(this).data("beeper", i);
}).mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
});
$("#beep-two").attr("id", "beep-two0");

$("#btn__wrapper a").each(function(i) {
    if(i != 0) { 
        $("#beep-three").clone().attr("id", "beep-three" + i).appendTo($(this).parent());
    }
$(this).data("beeper", i);
}).mouseenter(function() {
    $("#beep-three" + $(this).data("beeper"))[0].play();
});
$("#beep-three").attr("id", "beep-three0");

//play audio on click
const clicks = new Audio();
clicks.src = "../images/click.mp3";

const sents = new Audio();
sents.src = "../images/book.mp3";

//change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) { 
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    } 
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

//show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);