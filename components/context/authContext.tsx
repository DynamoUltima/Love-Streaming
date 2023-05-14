import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isToggled, setToggle] = useState(false);
    const [isSearch, setSearch] = useState(false);




    const toggle =()=> {
        setToggle((prev) => !prev);
    }
    const search =()=> {
        setSearch((previous) => !previous);
    }

    return (
        <AuthContext.Provider value={{isToggled,toggle ,setToggle,isSearch,search,setSearch }}>
            { children}
        </AuthContext.Provider>
        
    );
}

