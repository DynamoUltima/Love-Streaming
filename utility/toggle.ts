import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useToggle = (initialValue = false) => {
    const [isToggled, setToggle] = useState(initialValue);


    const toggle =()=>setToggle((prev) => !prev)

      
  
    return [isToggled, toggle];
}

export default useToggle;