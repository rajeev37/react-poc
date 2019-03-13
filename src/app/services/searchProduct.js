export default function searchProduct(body){
    let fData = {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        referrer: "no-referrer",
        headers: {
            // 'User-agent': agentOptions.ca,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    };
    const url = BASE_URL;
    console.log("BSAE URL ", fData);
    return fetch(`${BASE_URL}/pad/product/search`, fData).then((response) => {
        return response.json().then((data) => {
            if (!response.ok && response.status !== 401) {
                throw Error(response.statusText);
            }
            console.log("Before parsing",data);
            return data;
        }).catch(function (err) {
            console.log("err_backend" + err);
        });
    })
}