import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { SmartWordsAdress, SmartWordsAbi } from "./contracts/SmartWords";


export const SmartWordsContext = React.createContext(null);

function App() {
  const smartWord = useContract(SmartWordsAdress, SmartWordsAbi);
  return (
    <SmartWordsContext.Provider value={smartWord}>
      <Dapp />
    </SmartWordsContext.Provider>
  );
}

export default App;
