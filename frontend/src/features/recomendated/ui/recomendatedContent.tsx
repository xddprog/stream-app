import { useAppSelector } from "@shared/hooks/useAppSelector"
import RecomendatedList from "./recomendatedList"
import { recomendatedSelector } from "@entities/recomendated"

const RecomendatedContent = () => {
  const { recomendated } = useAppSelector(recomendatedSelector)

  return (
    <div className="text-white flex flex-col space-y-5">
      <h3 className="uppercase">Recommended Channels</h3>
      <RecomendatedList recomendates={recomendated} />
    </div>
  )
}

export default RecomendatedContent
