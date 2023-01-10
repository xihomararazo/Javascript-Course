function actionButtonReceiver() {
  console.log("Button pressed with->");
  console.log(this);
}

document
  .getElementById("thisBtn")
  .addEventListener("click", actionButtonReceiver);

document
  .getElementById("otherBtn")
  .addEventListener("click", actionButtonReceiver);
