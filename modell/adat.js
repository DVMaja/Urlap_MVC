export const urlapleiro = {//objektum
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Valaki Vagyok",
        value: "",
        regex: "[A-Z][a-z]{3}"   //regex

    },

    szul: {
        megj: "Születési idő",
        type: "number",
        placeholder: "200",
        value: "200",
        regex: {
            min: 1000,
            max: 2023,
        }

    }
}