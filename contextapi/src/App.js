import { createContext, useContext } from "react"
import A from "./Component/A"

export const NameCon = createContext();

function App(){
  const data = "Rahul"
  return<>
  <NameCon.Provider value={{data}}>
    <h1>App Component</h1>
      <A/>
  </NameCon.Provider>
  </>
}

export default App