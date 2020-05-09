"use strict";

var MIC_OFF = "mic_off";
var MIC_ON = "more_horiz";
var TWITTER_BASE = "https://twitter.com/intent/tweet?text=Hello%20@rominamartinlib%20";
window.addEventListener("load", function () {
  var users = document.querySelector("div.users");
  var profile = document.querySelector("div.navbar .people");
  var msg = document.querySelector("div.navbar .msg");
  var msgContainer = document.querySelector("div.msg_container");
  var bottom = document.querySelector(".bottom");
  var sendMessageIcon = document.querySelector(".msg_container .send i");
  var currentMessage = document.querySelector(".msg_container .send input");
  var messagesList = document.querySelector(".msg_container .messages");
  var lastTime = null;

  var sixtySecElapsed = function sixtySecElapsed() {
    var current = new Date();

    if (lastTime === null || (current - lastTime) / 1000 > 60) {
      lastTime = current;
      return true;
    }

    lastTime = current;
    return false;
  };

  var getFormatedTime = function getFormatedTime() {
    return lastTime ? "".concat(lastTime.getHours(), ":").concat(lastTime.getMinutes()) : "";
  };

  var getCurrentTime = function getCurrentTime() {
    var current = new Date();
    return "".concat(current.getHours(), ":").concat(current.getMinutes());
  };

  var displayMain = function displayMain(name) {
    document.querySelector(".main_container .active").classList.toggle("active");
    var current = document.querySelector(".main_container  .".concat(name));
    current.classList.add("active");
  };

  var navbarDisplay = function navbarDisplay(e) {
    if (e.target.classList.contains("people")) {
      users.classList.add("active");
      profile.classList.add("selected");
      bottom.classList.add("main");
      msgContainer.classList.remove("active");
      msg.classList.remove("selected");
      bottom.classList.remove("msg");
    } else {
      msgContainer.classList.add("active");
      msg.classList.add("selected");
      bottom.classList.add("msg");
      users.classList.remove("active");
      profile.classList.remove("selected");
      bottom.classList.remove("main");
    }
  };

  var userSelected = function userSelected(e) {
    var prev = document.querySelector("div.users .selected");
    prev.classList.remove("selected");
    prev.querySelector(".mic").innerText = MIC_OFF;
    var current = e.target;
    current.classList.add("selected");
    current.querySelector(".mic").innerText = MIC_ON;
    displayMain(current.classList[1]);
  };

  var sendMessage = function sendMessage(e) {
    if ((e.type === "click" || e.which === 13) && currentMessage.value.length > 0) {
      var newMessage = document.createElement("div");

      if (sixtySecElapsed()) {
        var dateTag = document.createElement("p");
        dateTag.innerHTML = "<b>You</b> <span>".concat(getFormatedTime(), "</span>");
        var message = document.createElement("p");
        newMessage.appendChild(dateTag);
        message.innerText = currentMessage.value;
        newMessage.appendChild(message);
      } else {
        newMessage.innerText = currentMessage.value;
      }

      messagesList.appendChild(newMessage);
      currentMessage.value = "";
    }
  };

  var addListeners = function addListeners() {
    for (var i = 0; i < users.children.length; i++) {
      users.children[i].addEventListener("click", userSelected);
    }

    profile.addEventListener("click", navbarDisplay);
    msg.addEventListener("click", navbarDisplay);
    currentMessage.addEventListener("keypress", sendMessage);
    sendMessageIcon.addEventListener("click", sendMessage);
  };

  document.getElementById("time").innerText = getCurrentTime();
  addListeners();
});