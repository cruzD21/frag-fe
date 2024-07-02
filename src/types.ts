export interface FragParams {
    fragrance_id: string
}

export interface Frag {
    fragrance_id: number
    name: string
    house_id: number
    description: string
    fraganticaID: string
}

export interface SearchOutputResult {
    frag_id: number
    frag_name: string
    frag_description: string
    frag_house: string
    frag_img_url: string
}
// [
//     {
//       "fragrance_id": 565,
//       "name": "Anmitsu J-Scent for women and men",
//       "house_id": 376,
//       "description": "Anmitsu by J-Scent is a fragrance for women and men. This is a new fragrance. Anmitsu was launched in 2023. Top notes are Sugar and Orange; middle notes are Strawberry, Apricot and Peach; base notes are Pea and Whipped Cream. ",
//       "fraganticaID": "92672"
//     }
//   ]