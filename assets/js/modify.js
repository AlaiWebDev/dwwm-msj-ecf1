import exportApprenants from './allApprenants.js';
const FORMATIONS = ["DWWM", "PRF", "TSSR", "FDV"];
const FINANCEMENTS = ["PRF", "PE", "TPRO", "PRIVE"];
let idApprenant = (new URL(document.location)).searchParams.get("id-apprenant");
// On récupère les donénes de l'apprenanr à modifier
let apprenantToModify = exportApprenants.find((apprenant) => apprenant.id == idApprenant);
// et on les injecte dans les inputs
let inputs = document.querySelectorAll("input");
for (const [index, [key, value]] of Object.entries(apprenantToModify).entries()) {
    if (key !== "id") {
        inputs[index-1].value = value;
    }
}
document.querySelector("h2").textContent += ` ${apprenantToModify.nom} ${apprenantToModify.prenom}`;
//
// On écoute le click pour revenir en arrière
document.querySelector("a").addEventListener("click", () => window.location.href = "../../index.html");
//
// On écoute le click pour supprimer l'apprenant
document.querySelector("#btn_supprimer_modif").addEventListener("click", () => {
    document.querySelector(".popup").style.visibility = "visible";
    document.querySelector("#btn_supprimer_annuler").addEventListener("click", () => document.querySelector(".popup").style.visibility = "hidden");
})