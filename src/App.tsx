import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'

function App() {
  const {user, isLoaded, isSignedIn} = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>
  }
  if (!isSignedIn) {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
