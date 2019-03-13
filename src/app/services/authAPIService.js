import https from "https";
import axios from "axios";
export default function authenticator() {
    // let agentOptions = {
    //     rejectUnauthorized: false,
    //     ca: "MIID1zCCAr+gAwIBAgIJAKEXBBBb3plNMA0GCSqGSIb3DQEBCwUAMIGBMQswCQYDVQQGEwJVUzELMAkGA1UECAwCQ0ExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDjAMBgNVBAoMBURFTFRBMQswCQYDVQQLDAJDWDESMBAGA1UEAwwJbG9jYWxob3N0MRwwGgYJKoZIhvcNAQkBFg10ZXN0QHRlc3QuY29tMB4XDTE2MDkyODE5NDQ1MFoXDTE3MDkyODE5NDQ1MFowgYExCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJDQTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzEOMAwGA1UECgwFREVMVEExCzAJBgNVBAsMAkNYMRIwEAYDVQQDDAlsb2NhbGhvc3QxHDAaBgkqhkiG9w0BCQEWDXRlc3RAdGVzdC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC81VknuNrY0IAN5xD8EXkq2fRuEEHXUe/GBiCSkwzsDufslWi2/7A1WvuhkqIypneJSeAD+GS20b8sM6HJTtBDlKc7O7pQ5LHExOux5FGwOxqlq67LKWat8QzVBH9bFWEpWJKZia6Qw5ITR4uNkjjq4X9Ulf7Dhmpliq/iGX0D1KXLmQO9xWEGB0BLey90L/JX7AI4fOhgK75ATB2YNr79chcLaGGAvLCcZF06GVeLanUlovPHwsaG0sueRwzEX9EIRwXXlNQ5mTVneK58zVq0Z9iGcGVw/cQ5WEVzYt5G9PSCN1kR2EGXAgBD5Cysxj42vFJHQs5AWXbKBextjwIdAgMBAAGjUDBOMB0GA1UdDgQWBBQJN2mELz0+/AbEAKbJlnErjONapDAfBgNVHSMEGDAWgBQJN2mELz0+/AbEAKbJlnErjONapDAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBKa0A1nK4EAGHjR0XwDVd4tdavKScNS0sH/ez9WOX+XZGq2ugWBru1xuC2rGlqsM6eIzQVcIB0HmPyVeKNILdImtXmLgzF7HvvKO5oWYbP/uOoo2SBb527l1XHR1M7yioLa8+FyYoCgdJnuGXuSTfqrp+2hJpU6sq51sP2dbuZ5OzFQr8HRNUJzLKF6VfHIVzx5twy4Km4BjcDvQfBOfPpOaWvCZsUV7LiMZxITHs9Ti264+q7UukaXduZl4K7Su55woqvxFunVPdwo64iG7ba14ATZOvO1xiteOCQyxG2MlboH7ikub1nEbyfAt1nngPsXFbnt4WG4BCguYJVo5J"
    //   }
    // const requestOption = {
    //     method: "GET",
    //     httpsAgent: new https.Agent(agentOptions),
    //     url: "https://dit-wso2vip.deltadev.ent:8243/api/cx/acquisitionAndRenewal/cms/v1/contents?issuer=DELTA&state=ca",
    //     json: true
    //   };

    //   return axios.get(requestOption.url, { httpsAgent: {rejectUnauthorized: false, ca: agentOptions.ca} })
    //       .then((response) => {
    //         console.log("*****1***", response);
    //         return response;
    //       })
    //       .catch((error) => {
    //           console.log("**2**", error);
    //       });
    
    let fData = {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        referrer: "no-referrer",
        // headers: new Headers({
        //     'User-agent': 'Mozilla/4.0 Custom User Agent'
        // }),
        // httpsAgent: new https.Agent(agentOptions),
        headers: {
            // 'User-agent': agentOptions.ca,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    const url = BASE_URL;
    console.log("BASE URL ", url);
    return fetch(`${BASE_URL}/pad/states`, fData).then((response) => {
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

export function replicate(body){
    let fData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        mods: "no-cors",
        body: JSON.stringify(body)
    };
    const url = BASE_URL;
    console.log("BSAE URL ", fData);
    return fetch(`${BASE_URL}/pad/replaceSch/insertPadReplaceSchedule`, fData).then((response) => {
        return response.json().then((data) => {
            if (!response.ok && response.status !== 401) {
                throw Error(response.statusText);
            }
            return JSON.parse(data);
        }).catch(function (err) {
            console.log("err_backend" + err);
        });
    })
}