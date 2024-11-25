import { FC } from "react"

interface IValidateError {
  message: string
}
const ValidateError: FC<IValidateError> = ({ message }) => {
  return <h4 className="leading-3 text-red-700 text-xs">{message}</h4>
}

export default ValidateError
