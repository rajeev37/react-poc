export default function fetchData(URL) {
    let fData = {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        referrer: "no-referrer",
        headers: {
            // 'User-agent': agentOptions.ca,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    const url = BASE_URL;
    console.log("BASE URL ", url);
    return fetch(`${BASE_URL}${URL}`, fData).then((response) => {
        return response.json().then((data) => {
            if (!response.ok && response.status !== 401) {
                throw Error(response.statusText);
            }
            return data;
        }).catch(function (err) {
            console.log("err_backend" + err);
        });
    })
}