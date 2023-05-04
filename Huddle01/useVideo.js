 
import { useVideo } from '@huddle01/react/hooks';
 
const App = () => {
  const { fetchVideoStream, stopVideoStream, isProducing, stream, error} = useVideo();
 
  return (
    <div>
      
     {/* Mic */} 
      <button disabled={!fetchVideoStream.isCallable} onClick={fetchVideoStream}>
        FETCH_VIDEO_STREAM
      </button>
 
    </div>
  );
};
 
 