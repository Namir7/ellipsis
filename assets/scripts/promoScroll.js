const promoBlock = document.querySelector("#promoBlock");
const aboutBlock = document.querySelector("#aboutBlock");

const isMobile = detectMobile();

//click on promo block
promoBlock.addEventListener("click", () => {
  if (!isMobile) {
    aboutBlock.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

//mobile decetion function
function detectMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
