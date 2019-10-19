const hero = document.querySelector(".hero");

const timeline1 = new TimelineMax();

timeline1.fromTo(hero, 1, {height: "0%"}, {height: "60%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "70%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(hero, 1, {height: "60%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "70%"}, {width: "100%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {height: "100%"}, {height: "90%", ease: Power2.easeInOut});
