import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import { Link, NavLink } from "react-router-dom"
import { pathList } from "../model/mocks"
import { Button } from "@shared/ui/button/ui/button"
import { Input } from "@shared/ui/input/ui/input"

const Header = () => {
  return (
    <div className="h-14 flex px-6 shadow-2xl sticky top-0 z-50 bg-[#18181B]">
      <div className=" flex w-full justify-between items-center shadow-2xl">
        <div className=" flex items-center cursor-pointer space-x-8  h-full">
          <Link to={"/"}>
            <Icon type={IconTypes.TWITCH_OUTLINED} className="mt-1" />
          </Link>
          <div className="flex  h-full items-center space-x-3">
            {pathList.map(path => (
              <NavLink
                to={path.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold h-full flex items-center border-b-2 border-purple-600 text-purple-600"
                    : "text-xl font-semibold h-full flex items-center text-white"
                }
              >
                {path.title}
              </NavLink>
            ))}
          </div>
          <span>
            <Icon type={IconTypes.MENU_OUTLINED} />
          </span>
        </div>
        <div className="w-[350px]">
          <Input className=" text-white" placeholder="Поиск..." />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Icon type={IconTypes.KING_OUTLINED} className="cursor-pointer" />
            <Icon type={IconTypes.BAGS_OUTLINED} className="cursor-pointer" />
            <Icon type={IconTypes.MESSAGE_OUTLINED} className="cursor-pointer" />
          </div>
          <Button>
            <Icon type={IconTypes.CAMERA_OUTLINED} className="h-6 w-6" />
            Get Ad-Free
          </Button>
          <div className="flex items-center space-x-4">
            <Icon type={IconTypes.STREAM_OUTLINED} className="cursor-pointer" />
            <Icon type={IconTypes.PERSON_OUTLINED} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
