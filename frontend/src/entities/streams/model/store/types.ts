import { IStream } from "@features/streams/model/types"

export interface IStreamState {
  streams: Array<IStream>
  selectStream: IStream | null
}
