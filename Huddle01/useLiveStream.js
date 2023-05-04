 
 
  import { useLivestream } from '@huddle01/react/hooks';
  
  const App = () => {
    const { startLivestream,stopLivestream, isStarting, inProgress isStopping, error } = useLivestream();
 
    if(inProgress) return (<div>...loading</div>)
  
    return (
      <div>
        <button 
          disabled={!startLivestream.isCallable} 
          onClick={startLivestream}
        >
          START_LIVESTREAM
        </button>
 
        {isStarting ? "live stream is starting": error} 
 
 
        <button disabled={!stopLivestream.isCallable} onClick={stopLivestream}>
          STOP_LIVESTREAM
        </button>
      </div>
    );
  };
 
 
 
 