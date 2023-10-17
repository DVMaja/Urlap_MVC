export const urlapleiro = {//objektum
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Valaki Vagyok",
        value: "",
        regex: "[A-Z][a-z]{2, 15}"   //regex

    },

    szul: {
        megj: "Születési idő",
        type: "number",
        placeholder: "2000",
        value: "2000",
        regex: {
            min: 1000,
            max: 2023,
        }

    }
}