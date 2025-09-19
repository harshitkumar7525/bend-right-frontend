import React,{createContext, useState} from 'react'

interface UserContext {
    user?:User;
    setUser?:React.Dispatch<React.SetStateAction<User>>;
}

interface User {
    id:string|null;
    name:string|null;
}

const userContext = createContext<UserContext>({
    user: {
        id: null,
        name: null,
    },
    setUser: () => {},
})

interface Props {
    children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User>({
        id: null,
        name: null,
    });

    const ctxValue: UserContext = {
        user,
        setUser,
    };

  return (
    <userContext.Provider value={ctxValue}>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider