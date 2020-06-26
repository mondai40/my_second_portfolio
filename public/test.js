"use strict";

{
  // const about = document.querySelector(".about");
  const about = document.getElementById("about");
  console.log(about);
  const slideTl = gsap.timeline({
    defaults: {duration: 1}
  });
  slideTl.to(about, {backgroundColor: "green"});

  const controller = new ScrollMagic.Controller();

  const slideScroll = new ScrollMagic.Scene({
    triggerElement: about,
    triggerHook: 0.2
  })
  .setTween(slideTl)
  .addTo(controller);
}