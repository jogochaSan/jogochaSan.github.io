const request = require("request");

function getName(id) {
    const URL = `https://swapi.co/api/people/${id}/`;
    request.get(URL, (error, response, body) => {
        console.log(`status code ${response.statusCode}`);
        const data = JSON.parse(body);
        console.log(data);
        if (response.statusCode === 200) {
            console.log("Peticion correcta");
            console.log(`La altura de ${data.name} es: ${data.height} mts`);
        } else {
            console.log("Peticion erronea");
            console.log(data.detail);
        }
    })
}

getName(9);