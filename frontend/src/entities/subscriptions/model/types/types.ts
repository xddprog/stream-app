import { IconTypes } from "@shared/ui/icon/lib"

export interface ISubscription {
  id: number
  name: string
  action: string
  avatar: IconTypes
  online: string | null
}
