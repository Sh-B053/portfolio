/*=========================
AOS
=========================*/

AOS.init({

    duration:1000,
    once:true

});


/*=========================
Typing Animation
=========================*/

new Typed(".typing",{

    strings:[

        "Web Designer",
        "Front-End Developer",
        "React Developer",
        "UI / UX Designer"

    ],

    typeSpeed:100,

    backSpeed:60,

    backDelay:1500,

    loop:true

});


/*=========================
Mobile Menu
=========================*/

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.onclick = ()=>{

    nav.classList.toggle("active");

};


/*=========================
Close Menu
=========================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.onclick=()=>{

        nav.classList.remove("active");

    }

});


/*=========================
Sticky Header
=========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(8,17,31,.95)";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

    }

    else{

        header.style.background="rgba(15,23,42,.8)";

        header.style.boxShadow="none";

    }

});


/*=========================
Scroll Progress
=========================*/

window.onscroll=()=>{

    let winScroll=document.body.scrollTop||

    document.documentElement.scrollTop;

    let height=document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    let scrolled=(winScroll/height)*100;

    document.getElementById("progress-bar").style.width=scrolled+"%";

}


/*=========================
Back To Top
=========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*=========================
Active Nav Links
=========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*=========================
Reveal Cards
=========================*/

const cards=document.querySelectorAll(

".skill-card,.service-card,.project-card,.certificate-card,.contact-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});


/*=========================
Current Year
=========================*/

const year=document.querySelector(".copyright");

if(year){

    year.innerHTML=`© ${new Date().getFullYear()} Shimaa Bakri Ahmed. All Rights Reserved.`;

}