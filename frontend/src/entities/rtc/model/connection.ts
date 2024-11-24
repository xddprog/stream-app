export class WebRTCConnection {
  private peerConnection: RTCPeerConnection

  constructor(iceServers: RTCIceServer[]) {
    this.peerConnection = new RTCPeerConnection({ iceServers })
  }
}
