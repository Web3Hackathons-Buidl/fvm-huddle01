 
  import { useRecording } from '@huddle01/react/hooks';
  
  const App = () => {
    const { startRecording,stoprecording, isStarting, inProgress isStopping, error } = useRecording();
 
    if(inProgress) return (<div>...loading</div>)
  
    return (
      <div>
        <button 
          disabled={!startRecording.isCallable} 
          onClick={startRecording};
        }>
          START_RECORDING
        </button>
 
        {isStarting ? "Recording is starting": error} 
 
 
        <button disabled={!stoprecording.isCallable} onClick={stoprecording}>
          STOP_RECORDING
        </button>
      </div>
    );
  };
 
 
 
 