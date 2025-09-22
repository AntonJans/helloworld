let title = document.querySelector("h1");

title.addEventListener("mouseenter", () => title.classList.add("hovered"));
title.addEventListener("mouseleave", () => title.classList.remove("hovered"));

let cursor = true;
setInterval(() => {
  if (cursor) {
    document.querySelector(".cursor").style.opacity = 0;
    cursor = false;
  } else {
    document.querySelector(".cursor").style.opacity = 1;
    cursor = true;
  }
}, 500);
