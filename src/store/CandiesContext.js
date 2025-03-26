import { createContext } from "react"

const CandiesContext = createContext({
    candies: [],
    addCandies: () => {}
})

export default CandiesContext;