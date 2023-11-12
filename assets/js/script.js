import exportApprenants from './allApprenants.js';
//
const allApprenants = exportApprenants;
console.log("Tous les apprenants : ", allApprenants);
export default allApprenants;
//
// Garnissage et injection du tableau
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
//
// Garnissage et injection de l'entête
const uneRow = document.createElement("tr");
Object.keys(allApprenants[0]).forEach(propriete => {
    let unTdHead = document.createElement("th");
    if (propriete != "id") {
        unTdHead.textContent = propriete.toUpperCase();
        uneRow.append(unTdHead);
    }
    
});
thead.appendChild(uneRow);
// Garnissage et injection des lignes et céllules
allApprenants.forEach(apprenant => {
    const uneRow = document.createElement("tr");
    for (const [key, value] of Object.entries(apprenant)) {
        const uneTd = document.createElement("td");
        uneTd.textContent = value;
        if (key == "id") {
            uneTd.classList.add("display-none");
        }
        uneRow.append(uneTd);
      }
    tbody.appendChild(uneRow);
});
// On écoute le click sur une ligne
document.querySelectorAll("tbody tr").forEach(row => {
    row.addEventListener("click", (eventClick) => {
        console.log(eventClick.target.parentElement.children[0]);
        window.location.href = `../../pages/modify.html?id-apprenant=${eventClick.target.parentElement.children[0].textContent}`
    })
});
// On écoute la recherche
const inputSearch = document.querySelector("input[type='text']");
inputSearch.addEventListener("input", (eventInput) => {
    document.querySelector("#search_result").innerHTML = "";
    const searchResult = allApprenants.filter(unApprenant => {
        return unApprenant.nom.startsWith(eventInput.target.value);
    })
    if (eventInput.target.value) {
        searchResult.forEach(nomApprenant => {
            let li = document.createElement("li");
            li.textContent = nomApprenant.nom;
            document.querySelector("#search_result").appendChild(li);
        })
    }
    
});