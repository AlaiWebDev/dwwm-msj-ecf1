import exportApprenants from './allApprenants.js'
console.log(exportApprenants);
let idApprenant = (new URL(document.location)).searchParams.get("id-apprenant");
let apprenantToModify = exportApprenants.find((apprenant) => apprenant.id == idApprenant);
console.log(apprenantToModify);
let inputs = document.querySelectorAll("input");
console.log(inputs);
for (const [index, [key, value]] of Object.entries(apprenantToModify).entries()) {
    if (key !== "id") {
        inputs[index-1].value = value;
    }
}
document.querySelector("button").addEventListener("click", () => window.location.href = "../../index.html");