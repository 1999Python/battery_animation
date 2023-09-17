


document.addEventListener("DOMContentLoaded", function () {
    const titles = gsap.utils.toArray('p');
    const tl = gsap.timeline();
  
    titles.forEach(title => {
      const splitTitle = new SplitText(title, { type: "chars" });
  
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
      }, "<1")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.02,
      }, "<1");
    });
  });
  