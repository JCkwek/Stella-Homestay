// import { createContext, useState, useEffect } from "react";

// const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [lang, setLang] = useState(() => {
//     return localStorage.getItem("app_lang") || "en";
//   });

//   useEffect(() => {
//     localStorage.setItem("app_lang", lang);
//   }, [lang]);

//   const toggleLanguage = () => {
//     setLang((prev) => (prev === "en" ? "zh" : "en"));
//   };

//   return (
//     <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }
import { createContext } from "react";

export const LanguageContext = createContext();