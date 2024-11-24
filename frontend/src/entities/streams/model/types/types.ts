export interface IStream {
  id: number
  title: string
  streamer: string
  viewers: number
  category: string
  thumbnail: string
  tags?: Array<string>
}
