/** @format */
/**********************recupération du nom du visiteur*******************************/

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  let nomUser = document.getElementById("nomUser").value;
  alert(
    "merci " +
      nomUser +
      " pour votre intérêt \n vous serez contacté dans les prochaines heures par nos services"
  );
});
