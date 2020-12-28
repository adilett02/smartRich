$(function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  $(".order").on("click", function () {
    $("body").css({ 'overflow': "hidden" });
    $(".modal-window").css({ display: "flex" });
  });
  $(".close-modal").on("click", function () {
    $("body").css({ 'overflow': "visible" });
    $(".modal-window").css({ display: "none" });
  });
});
