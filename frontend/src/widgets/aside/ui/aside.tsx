import { FC } from "react"
import { IAside } from ".."
import clsx from "clsx"

const Aside: FC<IAside> = ({ width, title, children }) => {
  return (
    <section className="hidden xl:block">
      <div
        style={{ minWidth: width }}
        className={clsx("bg-gray-500 sticky top-[56px] self-start z-[5] h-[calc(100vh-56px)]")}
      >
        <div className="p-3 space-y-5 w-full h-full">
          {title !== "none" && <h2 className="text-2xl font-bold text-white">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  )
}

export default Aside
