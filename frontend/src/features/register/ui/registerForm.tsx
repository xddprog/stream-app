import { Input } from "@shared/ui/input/ui/input"
import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import { Checkbox } from "@shared/ui/checkbox/ui/checkbox"
import { Button } from "@shared/ui/button/ui/button"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ERoutesNames } from "@pages/routes"
import { useValidate } from "@shared/hooks/useValidate"
import { registration } from "@entities/token/api"
import DatePicker from "@widgets/datePicker/ui/datePicker"
import { formatISO } from "date-fns"
import ValidateError from "@widgets/validateError/validateError"
import { useToast } from "@shared/hooks/use-toast"
const RegisterForm = () => {
  const [requestData, setRequestData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [date, setDate] = useState<Date>()
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
    if (!isError && date && isAccepted) {
      const requestAllData = {
        ...requestData,
        birthDay: formatISO(date)
      }
      console.log(requestAllData)
      const { data, status } = await registration(requestData)
      if (status !== 201) throw new Error("Invalid registration!")
      toast({
        title: "🎉 Успешная регистрация!",
        description: "Добро пожаловать в Twitch!",
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
        <h1 className="text-center text-white text-3xl font-bold">Присоединится к Twitch</h1>
        <Icon type={IconTypes.TWITCH_OUTLINED} />
      </div>
      <section className=" flex flex-col space-y-5">
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">Email</label>
          <section className=" space-y-1">
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
          <label className="font-light uppercase text-xs text-white">Username</label>
          <section className="space-y-1">
            <Input
              name="username"
              placeholder="Username"
              value={requestData.username}
              className="text-white"
              onChange={handleChangeValue}
            />
            {error.username && <ValidateError message={error.username.message} />}
          </section>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">Пароль</label>
          <section className="space-y-1">
            <Input
              name="password"
              placeholder="Пароль"
              value={requestData.password}
              type="password"
              className="text-white"
              onChange={handleChangeValue}
            />
            {error.password && <ValidateError message={error.password.message} />}
          </section>
        </div>
        <DatePicker date={date} setDate={setDate} />
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
          <Button variant={"outline"}>Зарегистрироваться</Button>
          <span className="text-center text-white text-sm">
            Есть аккаунт? <Link to={ERoutesNames.LOGIN_PAGE}>Войти</Link>
          </span>
        </div>
      </div>
    </form>
  )
}

export default RegisterForm
