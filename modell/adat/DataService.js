class DataService {
    constructor() {

    }
    getdata(apiVegpont, callback, hibaCallback) {//ez lesz az url
        //most nem a fetcet nézzük hanem az axiost
        //https://www.npmjs.com/package//axios
        //asszinkron hívás
        axios
            .get(apiVegpont)
            .then(function (response) {
                // handle success               
                console.log("Válasz objektum: ", response);
                console.log("Adatok: ", response.data);
                console.log("Státusz: ", response.status);
                console.log("Státusz szöveg: ", response.statusText);
                console.log("Válasz fejléc: ", response.headers);
                console.log("Válasz config: ", response.config);
                callback(response.data);
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                hibaCallback(error);
            })
            .finally(function () {
                // always executed
                console.log("finally");
            });

    }

    postData(apiVegpont, data) {
        axios
            .post(apiVegpont, data, {
                headers: {
                    "X-CSRF-TOKEN": response.headers["x-csrf-token"], // Az XSRF token a válasz fejlécből
                },
            })

            .then((response) => {
                console.log("RESP", response);
            })
            .catch(function (error) {
                console.log("hiba" + error);
            })
    }

    putData(apiVegpont, data) {
        console.log(data);
        console.log(`${apiVegpont}/${data.id}`);
        axios
            .put(`${apiVegpont}/${data.id}`, data)

            .then((response) => {
                onsole.log("RESP", response);
            })
            .catch(function (error) {
                console.log("hiba" + error);
            })
    }

    deleteData(apiVegpont, data) {
        console.log(`${apiVegpont}/${id}`);

        axios
            .delete(`${apiVegpont}/${id}`)

            .then((response) => {
                onsole.log("RESP", response);
            })
            .catch(function (error) {
                console.log("hiba" + error);
            })
    }

}
export default DataService;