const openNav=document.querySelector('.fa-bars');
const closeNav=document.querySelector('.fa-x');
const navItems=document.querySelector('.nav__links');

openNav.addEventListener('click',()=>{
  navItems.style.display="grid";
  openNav.style.display="none";
  closeNav.style.display="grid";
});

closeNav.addEventListener('click',()=>{
  navItems.style.display="none";
  openNav.style.display="grid";
  closeNav.style.display="none";
});

const scrollRevealOption = {
  distance: "4rem",
  origin: "bottom",
  duration: 1000,
  delay: 200,
};
ScrollReveal().reveal("body header .header__details .image img", {
  ...scrollRevealOption,
  origin: "right",
  distance: "5rem",
  duration: 1000,
  
});

ScrollReveal().reveal(".heading h1",{
  ...scrollRevealOption,
  origin: "bottom",
  distance: "5rem",
  duration: 2000,
  delay:100,
})

ScrollReveal().reveal(".heading p",{
  ...scrollRevealOption,
  origin: "bottom",
  distance: "10rem",
  duration: 3000,
  delay:200,
});
ScrollReveal().reveal(".heading .download",{
  ...scrollRevealOption,
  origin: "bottom",
  distance: "10rem",
  duration: 4000,
  delay:200,
});
ScrollReveal().reveal("article",{
  ...scrollRevealOption,
  origin: "bottom",
  interval:500,
  delay:500,
  distance: "6rem",
});
ScrollReveal().reveal(".best__service .image img ",{
  ...scrollRevealOption,
  origin: "left",
  duration: 500,
  distance: "6rem",
});
ScrollReveal().reveal(".best__service .deals h3",{
  ...scrollRevealOption,
  origin: "bottom",
  duration: 500,
});
ScrollReveal().reveal(".best__service .deals h1",{
  ...scrollRevealOption,
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".forth__section .info .image",{
  ...scrollRevealOption,
  origin: "right",
  distance:"5rem",
  duration: 1000,
});
ScrollReveal().reveal(".forth__section .info h1",{
  ...scrollRevealOption,
  origin: "bottom",
  distance:"7rem",
  duration: 2000,
});
ScrollReveal().reveal(".forth__section .info p",{
  ...scrollRevealOption,
  origin: "bottom",
  distance:"10rem",
  duration: 3000,
});
ScrollReveal().reveal(".forth__section .info .download",{
  ...scrollRevealOption,
  origin: "bottom",
  distance:"15rem",
  duration: 3500,
});
