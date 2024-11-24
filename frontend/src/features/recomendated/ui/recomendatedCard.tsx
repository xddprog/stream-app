import { FC } from "react"
import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import { IRecomendated } from "@entities/recomendated/model/types/types"

interface IRecomendatedCardProps {
  recomendate: IRecomendated
}

const RecomendatedCard: FC<IRecomendatedCardProps> = ({ recomendate }) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex space-x-3 items-center">
        <span>
          <Icon type={recomendate.avatar} />
        </span>
        <div className="flex flex-col">
          <span className="leading-3 text-sm font-semibold">{recomendate.name}</span>
          <span className="text-sm text-gray-400">{recomendate.action}</span>
        </div>
      </section>
      <div className="flex items-center space-x-1">
        <Icon type={IconTypes.ONLINE_OUTLINED} />
        <span className="text-xs">{recomendate.online}</span>
      </div>
    </div>
  )
}

export default RecomendatedCard
