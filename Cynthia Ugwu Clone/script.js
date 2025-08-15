const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: `-10`,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

     .to(".boundingelem", {
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
     })

     .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration:1.5,
        delay: -1,
        ease: Expo.easeInOut
     })
}

firstPageAnim();

function circlechaptakro() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets){
        // clearTimeout(timeout);
        
        xscale = gsap.utils.clamp(.8 ,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8 ,1.2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}




circlechaptakro();

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
  
circleMouseFollower(); 



document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;
  const img = elem.querySelector("img");

  elem.addEventListener("mousemove", function (e) {
    const bounds = elem.getBoundingClientRect();
    const diff = e.clientY - bounds.top;
    diffrot = rotate - e.clientX;
    rotate = e.clientX;

    gsap.to(img, {
      opacity: 1,
      ease: "power1.out",
      top: diff,
      left: e.clientX - bounds.left,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      duration: 0.5,
    });
  });
});




// document.querySelectorAll(".elem").forEach(function (elem) {
//     let rotate = 0;
//     let diffrot = 0;

//     const image = elem.querySelector("img");

//     // Ensure elem is relatively positioned
//     elem.style.position = "relative";

//     elem.addEventListener("mousemove", function (dets) {
//         const bounds = elem.getBoundingClientRect();

//         // Position relative to the .elem
//         const relX = dets.clientX - bounds.left;
//         const relY = dets.clientY - bounds.top;

//         // Calculate rotation from horizontal movement
//         diffrot = rotate - dets.clientX;
//         rotate = dets.clientX;

//         const rotation = gsap.utils.clamp(-20, 20, diffrot);

//         // Move and rotate image inside .elem only
//         gsap.to(image, {
//             opacity: 1,
//             left: relX,
//             top: relY,
//             rotate: rotation,
//             ease: "power1.out",
//             duration: 0.2,
//         });
//     });

//     elem.addEventListener("mouseleave", function () {
//         gsap.to(image, {
//             opacity: 0,
//             duration: 0.3,
//         });
//     });
// });
