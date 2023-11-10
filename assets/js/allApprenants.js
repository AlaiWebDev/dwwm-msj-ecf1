function compare( a, b ) {
    if ( a.nom < b.nom ){
      return -1;
    }
    if ( a.nom > b.nom ){
      return 1;
    }
    return 0;
}
//
async function exportApprenants() {
    let dataGetFetch;
    const BIND_ID = "654e021c54105e766fcdffcf";
    const MASTER_KEY = "$2a$10$6AtMLwgZABV2SdLcW94VNO.naWSgGpBGVJfgVlHA7yZY2OJ2BzjOy";
    const getApprenants = async () => {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIND_ID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'X-Master-Key': MASTER_KEY
            }
        });
        dataGetFetch = await res.json();
    }
    await getApprenants();
    const allApprenants = dataGetFetch.record.apprenants;
    allApprenants.sort( compare );
    return allApprenants;
}
//
let result = await exportApprenants();
export default result;
