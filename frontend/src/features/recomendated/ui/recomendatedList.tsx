import { IRecomendated } from "@entities/recomendated/model/types/types"
import RecomendatedCard from "./recomendatedCard"
import { FC } from "react"

interface IRecomendatedListProps {
  recomendates: Array<IRecomendated>
}

const RecomendatedList: FC<IRecomendatedListProps> = ({ recomendates }) => {
  return (
    <div className="flex flex-col space-y-3">
      {recomendates.map(recomend => (
        <RecomendatedCard key={recomend.id} recomendate={recomend} />
      ))}
      <span className="text-purple-400 text-sm cursor-pointer">Show More</span>
    </div>
  )
}

export default RecomendatedList
