const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

welcomeButton.addEventListener("click", () => {
  welcomeMessage.textContent = "이준서의 연습용 사이트를 방문해 주셔서 감사합니다!";
});
