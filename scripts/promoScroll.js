const promoBlock = document.querySelector("#promoBlock");
const aboutBlock = document.querySelector("#aboutBlock");

//click on promo block
promoBlock.addEventListener("click", () => {
  aboutBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

//scoll window
// window.addEventListener("mousewheel", () => {
//   aboutBlock.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// });
