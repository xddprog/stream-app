import { useAppSelector } from "@shared/hooks/useAppSelector"
import StreamsList from "./streamsList"
import { streamSelector } from "@entities/streams/model/store/selectors"

const StreamsContent = () => {
  const { streams } = useAppSelector(streamSelector)

  return <StreamsList streams={streams} />
}
export default StreamsContent
