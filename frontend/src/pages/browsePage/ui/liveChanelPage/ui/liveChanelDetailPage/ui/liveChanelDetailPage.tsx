import Aside from "@widgets/aside/ui/aside"
import StreamerCard from "@widgets/streamerCard/ui/streamerCard"
import StreamChat from "@features/streamChat/ui/streamChat"
import { useAppSelector } from "@shared/hooks/useAppSelector"
import { streamSelector } from "@entities/streams/model/store/selectors"

const LiveChanelDetailPage = () => {
  const { selectStream } = useAppSelector(streamSelector)

  if (!selectStream) return <div>Loading...</div>

  return (
    <div className="flex ">
      <section className="w-full">
        <img
          src={"/banners/mockBanner.jpg"}
          alt={"banner"}
          className="w-full object-cover h-[540px]"
        />
        <StreamerCard selectStream={selectStream} />
      </section>
      <Aside title="none" width="450px">
        <StreamChat />
      </Aside>
    </div>
  )
}

export default LiveChanelDetailPage
