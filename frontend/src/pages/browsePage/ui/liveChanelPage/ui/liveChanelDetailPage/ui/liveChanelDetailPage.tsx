import { Button } from "@shared/ui/button/ui/button"
import { Input } from "@shared/ui/input/ui/input"
import { IconTypes } from "@shared/ui/icon/lib"
import { Icon } from "@shared/ui/icon/ui/icon"
import Aside from "@widgets/aside/ui/aside"

const LiveChanelDetailPage = () => {
  return (
    <div className="flex ">
      <section className="w-full">
        <img
          src={"/banners/mockBanner.jpg"}
          alt={"banner"}
          className="w-full object-cover h-[540px]"
        />
        <div className="p-5 flex flex-col space-y-5">
          <div className="flex space-x-2 items-center justify-between">
            <section className="flex items-center space-x-4">
              <span>
                <Icon type={IconTypes.LOGO_MOCK_OUTLINED} className="h-20 w-20" />
              </span>
              <div>
                <h3>Flavorkkk</h3>
                <p>REDEMPTION ARC 4:0</p>
                <span className="text-sm text-purple-400">Dota 2</span>
              </div>
            </section>

            <div className="flex  flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">React</span>
                <Button className="bg-purple-600 px-4">Follow</Button>
                <Button>Subscribe</Button>
              </div>
              <div className="flex items-center space-x-3 justify-end">
                <span className="text-red-500">12,102</span>
                <span>2:22</span>
                <span>
                  <Icon type={IconTypes.MENU_OUTLINED} />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 p-8 rounded-lg">
            <div className="space-y-1">
              <h3 className="text-2xl">Flavorkkk</h3>
              <div className="flex   flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span>637k</span>
                  <p className="text-xs text-gray-600">followers</p>
                </div>

                <p>Hello! I m trainee streamers by Dota 2!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Aside title="none" width="450px">
        <div className="flex flex-col justify-between h-full">
          <div className="text-center pb-3 mb-2 border-b">Stream Chat</div>
          <div className="flex w-full pb-3 h-full">
            <div className="flex">
              <div className="flex flex-col text-sm">
                <p>
                  <span className="text-green-800">Mago:</span> Имба
                </p>
                <p>
                  <span className="text-red-800">Mago:</span> мид забрал
                </p>
                <p>
                  <span className="text-purple-600">Mago:</span> во скок стрим завтра
                </p>
                <p>
                  <span className="text-red-800">Mago:</span> чилл
                </p>
                <p>
                  <span className="text-red-800">Mago:</span> ноу
                </p>
              </div>
            </div>
          </div>
          <Input placeholder="Send..." />
        </div>
      </Aside>
    </div>
  )
}

export default LiveChanelDetailPage
