import { useNavigate } from "react-router-dom"
import StreamCard from "./streamCard"
import { ERoutesNames } from "@pages/routes"
import { FC, useCallback } from "react"
import { IStream } from "@entities/streams"
import { useActions } from "@shared/hooks/useActions"

interface IStreamListProps {
  streams: Array<IStream>
}
const StreamsList: FC<IStreamListProps> = ({ streams }) => {
  const navigate = useNavigate()
  const { setSelectStream } = useActions()

  const handleNavigateToDetail = useCallback((id: number) => {
    setSelectStream(id)
    navigate(`${ERoutesNames.LIVE_CHANEL_PAGE}/${id}`, { replace: true })
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4  gap-6">
      {streams.map(stream => (
        <StreamCard key={stream.id} stream={stream} onClick={handleNavigateToDetail} />
      ))}
    </div>
  )
}

export default StreamsList
