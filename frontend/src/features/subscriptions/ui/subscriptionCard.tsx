import { ISubscription } from "@entities/subscriptions/model/types/types"
import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import { FC } from "react"

interface ISubscriptionCardProps {
  subscription: ISubscription
}

const SubscriptionCard: FC<ISubscriptionCardProps> = ({ subscription }) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex space-x-3 items-center">
        <span>
          <Icon type={subscription.avatar} />
        </span>
        <div className="flex flex-col">
          <span className="leading-3 text-sm font-semibold">{subscription.name}</span>
          <span className="text-sm text-gray-400">{subscription.action}</span>
        </div>
      </section>

      <div className="flex items-center space-x-1">
        <Icon type={IconTypes.ONLINE_OUTLINED} />
        <span className="text-xs">{subscription.online}</span>
      </div>
    </div>
  )
}

export default SubscriptionCard
