import React, { useCallback, useContext, useEffect, useState } from "react"
import {ContextState} from "../contexts/Context" 
import Links from './Links'
import alanBtn from "@alan-ai/alan-sdk-web";

function Search({darkMode, setDarkMode}) {
    const {setSearchTerm} = useContext(ContextState);
    const [text, setText] = useState("Elon Musk");
    const {alanInstance, setAlanInstance} = useContext(ContextState);
    // setSearchTerm(text);

    const update = useCallback(({detail:textresult})=>{
      setSearchTerm(textresult);
      setText(textresult);
  }, [alanInstance]);


    const update1 = useCallback(()=>{
      setDarkMode(true)
  }, [alanInstance]);


    const update2 = useCallback(()=>{
      setDarkMode(false)
  }, [alanInstance]);
  
  
  useEffect(()=>{
    window.addEventListener("searchResult", update);
    window.addEventListener("dark_mode", update1);
    window.addEventListener("light_mode", update2);
      return(()=>{
        window.removeEventListener("searchResult", update)
        window.removeEventListener("dark_mode", update1)
        window.removeEventListener("light_mode", update2)
      });
  }, [update]);

    useEffect(() => {
      if (alanInstance != null) return;
    
      setAlanInstance(
        alanBtn({
          bottom: "2vh",
          right: "1vw",
          key: "d507e7cf2dbb7bb18cd1f7d71e60ce922e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: ({ command, textresult }) => {
            // console.log("Karan", command);
            // console.log(command);
              window.dispatchEvent(new CustomEvent(command, {detail:textresult}));
          },
        })
      );
    }, []);

    return (
      <>
      {console.log("hey",setSearchTerm)}
        <div className="mt-4 h-auto w-100% flex flex-wrap content-around justify-around">
        <form onSubmit={(e)=>{e.preventDefault();console.log("form"); setSearchTerm(text);}}>
        <div className='w-screen flex flex-wrap justify-center'>

         <input
        value={text}
        type="text"
        className="sm:w-96 w-79 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search JustSearch or type URL"
        onChange={(e) => setText(e.target.value)}
      />
        </div>
        <div className='w-screen flex flex-wrap justify-center mt-4'>
       <button className="text-2xl text-gray-50 p-1 rounded bg-blue-500"  >
          Search
        </button>
        </div>
        </form>
        <Links />
        </div>
      </>
    )
}

export default Search;
