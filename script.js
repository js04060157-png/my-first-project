const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

welcomeButton.addEventListener("click", () => {
  welcomeMessage.textContent = "환영합니다! 나의 첫 번째 웹사이트에 오신 것을 환영해요. 함께 멋진 이야기를 만들어 가요!";
});
