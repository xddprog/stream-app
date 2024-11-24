import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "./useAppDispatch"
import { streamActions } from "@entities/streams"
import { recomendatedActions } from "@entities/recomendated"
import { userActions } from "@entities/user"

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(
    {
      ...streamActions,
      ...recomendatedActions,
      ...userActions
    },
    dispatch
  )
}
