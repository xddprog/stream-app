import { Icon } from "@shared/ui/icon/ui/icon"
import SubscriptionsList from "./subscriptionsList"
import { IconTypes } from "@shared/ui/icon/lib"
import { useAppSelector } from "@shared/hooks/useAppSelector"
import { subscriptionsSelector } from "@entities/subscriptions"

const SubscriptionContent = () => {
  const { subscriptions } = useAppSelector(subscriptionsSelector)

  return (
    <div className="text-white flex flex-col space-y-5">
      <div>
        <div className="flex space-x-2 items-center">
          <h3 className="uppercase leading-3">Followed Channels</h3>
          <Icon type={IconTypes.ARROW_VERTICAL_OUTLINED} className="cursor-pointer" />
        </div>
        <span className="text-sm leading-3">Viewers (High to Low)</span>
      </div>
      <SubscriptionsList subscriptions={subscriptions} />
    </div>
  )
}

export default SubscriptionContent
