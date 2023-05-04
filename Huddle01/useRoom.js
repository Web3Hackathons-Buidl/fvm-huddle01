 
  import { useRoom } from '@huddle01/react/hooks';
 
  const App = () => {
    const { joinRoom, leaveRoom, isLoading, isRoomJoined, error } = useRoom();
 
    if(isLoading) return (<div>...loading</div>)
  
    return (
      <div> 
        <button disabled={!joinRoom.isCallable} onClick={joinRoom}>
          JOIN_ROOM 
        </button>
 
        {isRoomJoined ? "room joined": error} 
 
        <button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
          LEAVE_ROOM 
        </button>
      </div>
    );
  };
 