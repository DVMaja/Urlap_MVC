export const urlapleiro = {//objektum
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Valaki Vagyok",
        value: "",
        regex: "[A-Z][a-z]{2,15}",   //regex
        valid:"Nagybetűvel kezdődik, legalább 3 betű legyen!"
    },

    szul: {
        megj: "Születési idő",
        type: "number",
        placeholder: "2000",
        value: "2000",
        regex: {
            min: 1000,
            max: 2023,
        },
        valid:"1000 és 2023 közötti számot írj"


    }
}