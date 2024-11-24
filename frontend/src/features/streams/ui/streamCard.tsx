import { FC } from "react"
import { Icon } from "@shared/ui/icon/ui/icon"
import { IconTypes } from "@shared/ui/icon/lib"
import { IStream } from "@entities/streams"

interface IStreamCardProps {
  stream: IStream
  onClick?: (id: number) => void
}

const StreamCard: FC<IStreamCardProps> = ({ stream, onClick = () => {} }) => {
  const handleClick = () => {
    onClick(stream.id)
  }

  return (
    <div key={stream.id} className="w-full" onClick={handleClick}>
      <div className="bg-gray-500  rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <div className="relative">
          <img src={stream.thumbnail} alt={stream.title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Live
          </div>
        </div>
        <section className="flex">
          {/* <span className="pl-2 pt-4">
            <Icon type={IconTypes.LOGO_MOCK_OUTLINED} />
          </span> */}

          <div className="p-4 pb-6 w-full">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white truncate">{stream.title}</h3>
                <span>
                  <Icon type={IconTypes.MENU_OUTLINED} className="cursor-pointer" />
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{stream.streamer}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 text-sm">{stream.viewers} viewers</span>
              <span className="text-sm text-purple-100 cursor-pointer bg-purple-600 rounded px-2 py-1">
                {stream.category}
              </span>
            </div>
            <div className="flex space-x-2 mt-4 flex-wrap">
              {stream.tags?.map(tag => (
                <div className="text-sm bg-gray-700 bo rounded-lg px-3">{tag}</div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StreamCard
