import { FC, PropsWithChildren, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useViewer } from "../../model/context"
import { TokenService } from "@entities/token"
import { ERoutesNames } from "@pages/routes"

export const privatePage = (children: React.ReactNode) => {
  return <PrivatePage>{children}</PrivatePage>
}

const PrivatePage: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const { isAuthenticated, loginViewer } = useViewer()
  const pathname = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = TokenService.getAccessToken()
    if (token) {
      loginViewer(token)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      navigate(ERoutesNames.LOGIN_PAGE)
    }
  }, [pathname])

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return isAuthenticated ? children : null
}
