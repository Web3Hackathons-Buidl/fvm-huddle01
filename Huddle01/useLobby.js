 
  import { useLobby } from '@huddle01/react/hooks';
  
  const App = () => {
    const { joinLobby,leaveLobby, isLoading, isLobbyJoined, error } = useLobby();
 
    if(isLoading) return (<div>...loading</div>)
  
    return (
      <div>
        <button 
          disabled={!joinLobby.isCallable} 
          onClick={() => joinLobby('YOUR_ROOM_ID');
        }>
          Join Lobby
        </button>
 
        {isLobbyJoined ? "lobby": error} 
 
 
        <button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
          LEAVE_LOBBY 
        </button>
      </div>
    );
  };
 
 