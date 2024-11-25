import { IStream } from "../types"

export interface IStreamState {
  streams: Array<IStream>
  selectStream: IStream | null
}
