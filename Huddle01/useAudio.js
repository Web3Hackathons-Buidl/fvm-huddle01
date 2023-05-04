 
import { useAudio } from '@huddle01/react/hooks';
 
const App = () => {
  const { fetchAudioStream, stopAudioStream, isProducing, stream, error} = useAudio();
 
  return (
    <div>
      
     {/* Mic */} 
      <button disabled={!fetchAudioStream.isCallable} onClick={fetchAudioStream}>
        FETCH_AUDIO_STREAM
      </button>
 
    </div>
  );
};
 
 