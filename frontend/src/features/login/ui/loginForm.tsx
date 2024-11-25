import { Button } from "@shared/ui/button/ui/button"
import { Input } from "@shared/ui/input/ui/input"
import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import { Checkbox } from "@shared/ui/checkbox/ui/checkbox"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ERoutesNames } from "@pages/routes"
import { useValidate } from "@shared/hooks/useValidate"
import { login } from "@entities/token/api"
import ValidateError from "@widgets/validateError/validateError"
import { useToast } from "@shared/hooks/use-toast"

const LoginForm = () => {
  const [requestData, setRequestData] = useState({
    email: "",
    password: ""
  })
  const [isAccepted, setIsAccepted] = useState(false)
  const [acceptedError, setAcceptedError] = useState("")

  const { handleValidate, error } = useValidate(requestData)
  const { toast } = useToast()

  const navigate = useNavigate()

  const handleChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRequestData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }, [])

  const handleAccepted = useCallback(() => setIsAccepted(prevState => !prevState), [])

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { isError } = handleValidate()
    if (!isError) {
      const { data, status } = await login(requestData)
      if (status !== 200) throw new Error("Invalid registration!")
      toast({
        title: "🎉 Успешный вход!",
        description: "C возвращением в Twitch!",
        className:
          "bg-green-50 border-l-4 border-green-500 text-green-800 p-4 rounded-md shadow-lg animate-slideIn"
      })
      navigate(ERoutesNames.DEFAULT)
      return data
    } else if (!isAccepted) {
      setAcceptedError("Подтвердите согласие о политике")
    }
  }

  return (
    <form
      className=" flex flex-col space-y-4 w-[500px] p-5 py-7 bg-gray-500"
      onSubmit={onFormSubmit}
    >
      <div className="flex justify-center items-center space-x-3">
        <h1 className="text-center text-white text-3xl font-bold">Войти в Twitch</h1>
        <Icon type={IconTypes.TWITCH_OUTLINED} />
      </div>

      <section className=" flex flex-col space-y-5">
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">Email</label>
          <section className="space-y-1">
            <Input
              name="email"
              placeholder="Email"
              value={requestData.email}
              className="text-white"
              onChange={handleChangeValue}
            />
            {error.email && <ValidateError message={error.email.message} />}
          </section>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">Пароль</label>
          <section className="space-y-1">
            <Input
              name="password"
              placeholder="Пароль"
              value={requestData.password}
              className="text-white"
              onChange={handleChangeValue}
            />
            {error.password && <ValidateError message={error.password.message} />}
          </section>
        </div>
      </section>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col  space-y-1">
          <div className=" flex space-x-2 items-center">
            <Checkbox checked={isAccepted} onClick={handleAccepted} />
            <span className="text-white">Accept terms and conditions</span>
          </div>
          <div className="">
            <ValidateError message={acceptedError} />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button variant={"outline"}>Войти</Button>
          <span className="text-center text-white text-sm">
            Нет аккаунта? <Link to={ERoutesNames.REGISTER_PAGE}>Зарегестрируйтесь</Link>
          </span>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
