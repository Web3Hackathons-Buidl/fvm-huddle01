 
//Example Type
 
interface IPeers {
    [peerId: string]: {
      peerId: string;
      role: IRoleEnum;
      mic: MediaStreamTrack;
      cam: MediaStreamTrack;
    };
  }
   
  // IRoleEnum: "host" | "moderator" | "speaker" | "listener" | "peer";
   