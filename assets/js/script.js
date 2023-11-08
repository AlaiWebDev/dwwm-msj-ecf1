let dataGetFetch;
const getApprenants = async () => {
    const res = await fetch("https://api.jsonbin.io/v3/b/654b4bf854105e766fccffb6", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'X-Master-Key': '$2a$10$6AtMLwgZABV2SdLcW94VNO.naWSgGpBGVJfgVlHA7yZY2OJ2BzjOy'
            
        }
    });
    dataGetFetch = await res.json();
    console.log(dataGetFetch);
}
await getApprenants();
console.log(dataGetFetch.record);
const newApprenant = {
    'id': Math.floor(Math.random() * 100),
    'nom': 'GACEB',
    'prenom': 'Lina',
    'e-mail': 'l1936@hotmail.fr'
}
const postApprenant = async () => {
    const res = await fetch("https://api.jsonbin.io/v3/b", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Master-Key': '$2a$10$6AtMLwgZABV2SdLcW94VNO.naWSgGpBGVJfgVlHA7yZY2OJ2BzjOy',
            'X-Bin-Name': 'Gaceb-Collection',
        },
        body: JSON.stringify(newApprenant)
    });
    return res.json();
}
await postApprenant({ answer:42}).then((data) => {
    console.log(data);
});
