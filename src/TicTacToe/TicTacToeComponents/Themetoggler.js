import React, {useContext} from "react";
import ThemeContext from "../TicTacToeContext/ThemeContext";
import { AiOutlineBulb } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";

const Themetoggler= () => {
   const [themeMode,setThemeMode] = useContext(ThemeContext);

   return (
       <div onClick={()=>{
          setThemeMode(themeMode ==="light"?"dark":"light"); 
       }}
       >
        <h1><span>{themeMode==="light"?<AiOutlineBulb/>:<HiOutlineLightBulb/>}</span></h1>   
       </div>
   );
};
export default Themetoggler;