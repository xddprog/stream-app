import { FC } from "react"

interface ITitleWrapperProps {
  title: string
  children: React.ReactNode
}

const TitleWrapper: FC<ITitleWrapperProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col space-y-9 ">
      <h1 className="text-5xl font-bold">{title}</h1>
      {children}
    </div>
  )
}

export default TitleWrapper
