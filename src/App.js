import React from 'react'
import Sidebar from './Component/Sidebar/Sidebar'
import Main from './Component/Main/Main'
import Login from './Component/login/login'
const App = () => {
  let LoggedIn = false;
  return (
    <>{ LoggedIn ?
      <>
        <Sidebar/>  
        <Main/>
      </>
      :<Login/>}
    </>);
}

export default App