import { useActions } from "@shared/hooks/useActions"
import RecomendatedContent from "@features/recomendated/ui/recomendatedContent"
import SubscriptionContent from "@features/subscriptions/ui/subscriptionContent"
import Aside from "@widgets/aside/ui/aside"
import Header from "@widgets/header/ui/header"
import clsx from "clsx"
import { Suspense, useEffect, useMemo } from "react"
import { Outlet, useLocation } from "react-router-dom"

const RootPage = () => {
  const { pathname } = useLocation()
  const { getCurrentUser } = useActions()

  const isCheckPathname = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, path, id]: Array<string> = pathname.split("/").filter(path => path)
    return !!(path && id)
  }, [pathname])

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex">
        <Aside width="240px" title="none">
          <section className="flex flex-col space-y-5 pr-1">
            <SubscriptionContent />
            <RecomendatedContent />
          </section>
        </Aside>
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen bg-black">
              <h1>Loading...</h1>
            </div>
          }
        >
          <div className={clsx("flex-grow bg-black text-white", !isCheckPathname && "p-6")}>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default RootPage
