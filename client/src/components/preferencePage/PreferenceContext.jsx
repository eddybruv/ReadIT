import React, {createContext, useState} from "react";
export const PreferenceContext = createContext();

const PreferenceProvider = ({children}) => {
  const [preferences, setPreferences] = useState([]);

  return (
    <PreferenceContext.Provider value={{preferences, setPreferences}}>
      {children}
    </PreferenceContext.Provider>
  )
}

export default PreferenceProvider