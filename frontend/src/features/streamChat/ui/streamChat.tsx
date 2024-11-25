import { Input } from "@shared/ui/input/ui/input"

const StreamChat = () => {
  return (
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
  )
}

export default StreamChat
