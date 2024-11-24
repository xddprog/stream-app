import { ISubscription } from "@entities/subscriptions/model/types/types"
import SubscriptionCard from "./subscriptionCard"
import { FC } from "react"

interface ISubscriptionsListProps {
  subscriptions: Array<ISubscription>
}
const SubscriptionsList: FC<ISubscriptionsListProps> = ({ subscriptions }) => {
  return (
    <div className="flex flex-col space-y-3">
      {subscriptions.map(subscribed => (
        <SubscriptionCard key={subscribed.id} subscription={subscribed} />
      ))}
      <span className="text-purple-400 text-sm cursor-pointer">Show More</span>
    </div>
  )
}

export default SubscriptionsList
