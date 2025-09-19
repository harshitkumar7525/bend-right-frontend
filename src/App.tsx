import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import { RouterProvider } from 'react-router-dom';
import router from './router/routerConfig';
const App : React.FC = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App;