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

const RegisterPage = () => {
  const [requestData, setRequestData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const { handleValidate } = useValidate(requestData)

  const navigate = useNavigate()

  const handleChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRequestData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }, [])

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { isError } = handleValidate()
    if (!isError) {
      const { data, status } = await registration(requestData)
      if (status !== 201) throw new Error("Invalid registration!")
      navigate(ERoutesNames.DEFAULT)
      return data
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
          <Input
            name="email"
            placeholder="Email"
            value={requestData.email}
            className="text-white"
            onChange={handleChangeValue}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">Username</label>
          <Input
            name="username"
            placeholder="Username"
            value={requestData.username}
            className="text-white"
            onChange={handleChangeValue}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-light uppercase text-xs text-white">Пароль</label>
          <Input
            name="password"
            placeholder="Пароль"
            value={requestData.password}
            className="text-white"
            onChange={handleChangeValue}
          />
        </div>
      </section>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-3 pl-[2px]">
          <Checkbox />
          <span className="text-white">Accept terms and conditions</span>
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

export default RegisterPage
