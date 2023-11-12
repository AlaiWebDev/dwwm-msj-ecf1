import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import exportApprenants from './allApprenants.js'
console.log(exportApprenants);
console.log();
const BIN_ID = "654e216d54105e766fce0b0f";
const MASTER_KEY = "$2a$10$6AtMLwgZABV2SdLcW94VNO.naWSgGpBGVJfgVlHA7yZY2OJ2BzjOy";
let complete = false;
document.querySelector("#plus_btn").addEventListener("click", (eventClick) => {
    const newLine = document.createElement("article");
    newLine.innerHTML = `<form action="" name="ligne-apprenant">
    <label><input type="text" name="nom"></label>
    <label><input type="text" name="prenom"></label>
    <label><input type="text" name="e-mail"></label>
    <label><input type="text" name="formation"></label>
    <label><input type="text" name="financement"></label>
    <label><input type="text" name="date-entree"></label>
</form>`;
    document.querySelector("fieldset").insertBefore(newLine, eventClick.target);
})

document.querySelector("#enregistrer").addEventListener("click", async () => {
    const bodyRequest = exportApprenants;
    document.querySelectorAll("form").forEach(async form => {
        const formData = new FormData(form);
        const newId = uuidv4();
        const formDataObj = {
            'id': newId
        }
        formData.forEach((value, key) => {
            if (value) {
                complete = true
            }
            formDataObj[key] = value;
        });
        console.log((BIN_ID));
        if (complete) bodyRequest.push(formDataObj);
        complete = false;
    })
    await postApprenant(bodyRequest);
});
// Ajout du nouvel objet
const postApprenant = async (bodyRequest) => {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Master-Key': MASTER_KEY,
            'X-Bin-Name': 'Liste-Apprenants',
        },
        body: JSON.stringify(bodyRequest)
    });
    return res.json();
}
