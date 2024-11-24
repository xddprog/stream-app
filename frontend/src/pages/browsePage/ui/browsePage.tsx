import TitleWrapper from "@widgets/titleWrapper/ui/titleWrapper"
import { NavLink, Outlet } from "react-router-dom"
import { pathTabs } from "./utils"

import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@shared/ui/select/ui/select"
import { Input } from "@shared/ui/input/ui/input"

const BrowsePage = () => {
  const categories = [
    { title: "Games", icon: IconTypes.GAME_OUTLINED },
    { title: "IRL", icon: IconTypes.MICRO_OUTLINED },
    { title: "Music", icon: IconTypes.DEVAICE_OUTLINED },
    { title: "Creative", icon: IconTypes.PALLETE_OUTLINED },
    { title: "Esports", icon: IconTypes.CUP_OUTLINED }
  ]
  const sortedBy = [
    { value: "Рекомендовано для вас" },
    { value: "Зрители" },
    { value: "Недавно начались" },
    { value: "Тренды" },
    { value: "Категории" },
    { value: "Подписчики" }
  ]
  return (
    <TitleWrapper title="Browse">
      <section className="flex justify-cente flex-col space-y-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-2 w-full mb-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-purple-600 relative text-xl font-bold text-white cursor-pointer rounded-lg shadow-md p-3 flex justify-start items-center hover:bg-purple-600 transition duration-300"
            >
              <h2>{category.title}</h2>
              <span>
                <Icon type={category.icon} className="absolute -top-4 right-4" />
              </span>
            </div>
          ))}
        </div>

        <div className="space-x-4">
          {pathTabs.map(path => (
            <NavLink
              key={path.id}
              to={path.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b pb-1 border-purple-700 text-purple-700 text-lg hover:text-purple-500 font-bold"
                  : "text-lg hover:text-purple-500 font-bold"
              }
            >
              {path.title}
            </NavLink>
          ))}
        </div>
        <div className="flex md:justify-between items-center space-y-3 lg:space-y-0 flex-col lg:flex-row">
          <Input className="w-[280px]" placeholder="Поиск..." />
          <div className="flex items-center lg:space-x-4">
            <span className="hidden lg:block">Sort By</span>
            <Select>
              <SelectTrigger className="w-[280px] ">
                <SelectValue placeholder="Рекомендовано для вас" />
              </SelectTrigger>
              <SelectContent>
                {sortedBy.map(item => (
                  <SelectItem value={item.value}>{item.value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Outlet />
      </section>
    </TitleWrapper>
  )
}

export default BrowsePage
