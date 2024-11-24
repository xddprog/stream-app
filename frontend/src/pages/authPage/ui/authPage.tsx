import { Outlet } from "react-router-dom"

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Outlet />
    </div>
  )
}

export default AuthPage
