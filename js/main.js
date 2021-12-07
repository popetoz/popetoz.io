// icon
let $icon = document.querySelector("nav .container .menu");
let $dropDownMenu = document.querySelector("nav .container .menu ul");
let $secondBar = document.querySelector(
  "nav .container .menu .icon > span:nth-child(2)"
);

$icon.addEventListener("click", () => {
  $dropDownMenu.classList.toggle("show");
  $secondBar.style.width = $secondBar.style.width === "100%" ? "60%" : "100%";
});
