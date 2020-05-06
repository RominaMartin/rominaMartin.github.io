const MIC_OFF = "mic_off";
const MIC_ON = "more_horiz";
const TWITTER_BASE = "https://twitter.com/intent/tweet?text=Hello%20@rominamartinlib%20";

window.addEventListener("load", () => {
  const users = document.querySelector("div.users");
  const profile = document.querySelector("div.navbar .people");
  const msg = document.querySelector("div.navbar .msg");
  const msgContainer = document.querySelector("div.msg_container");
  const bottom = document.querySelector(".bottom");
  const msgLinkItem = document.querySelector(".msg_container a");
  const currentMessage = document.querySelector(".msg_container input");

  const next = document.querySelectorAll(".next");
  const prev = document.querySelectorAll(".prev");

  const displayMain = (name) => {
    document.querySelector(".main_container .active").classList.remove("active");
    let current = document.querySelector(`.main_container  .${name}`);
    current.classList.add("active");
  };

  const navbarDisplay = () => {
    users.classList.toggle("active");
    msgContainer.classList.toggle("active");
    profile.classList.toggle("selected");
    msg.classList.toggle("selected");
    bottom.classList.toggle("main");
    bottom.classList.toggle("msg");
  };

  const userSelected = (e) => {
    let prev = document.querySelector("div.users .selected");
    prev.classList.remove("selected");
    prev.querySelector(".mic").innerText = MIC_OFF;

    let current = e.target;
    current.classList.add("selected");
    current.querySelector(".mic").innerText = MIC_ON;

    displayMain(current.classList[1]);
  };

  const moveSlide = (e, direction) => {
    let hash = window.location.hash;
    let total = e.target.parentElement.previousElementSibling.children.length;

    if (hash !== "") {
      let current = Number(hash.replace(`#${e.target.parentElement.id}_`, ""));
      let value = direction === "next" ? current + 1 : current - 1;

      if (value > total) value = 1;
      else if (value < 1) value = total;

      window.location.hash = `#${e.target.parentElement.id}_${value}`;
    } else {
      let index = direction === "next" ? 2 : total;
      window.location.hash = `#${e.target.parentElement.id}_${index}`;
    }
  };

  const setMessageLink = () => {
    let formatInput = encodeURI(currentMessage.value);
    msgLinkItem.href = TWITTER_BASE + formatInput;
  };

  const addListeners = () => {
    for (let i = 0; i < users.children.length; i++) {
      users.children[i].addEventListener("click", userSelected);
    }

    for (let i = 0; i < next.length; i++) {
      next[i].addEventListener("click", (e) => {
        moveSlide(e, "next");
      });
      prev[i].addEventListener("click", (e) => {
        moveSlide(e, "prev");
      });
    }

    profile.addEventListener("click", navbarDisplay);
    msg.addEventListener("click", navbarDisplay);

    currentMessage.addEventListener("input", setMessageLink);
  };

  addListeners();
});
