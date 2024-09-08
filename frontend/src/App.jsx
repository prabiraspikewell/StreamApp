import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'
import videojs from 'video.js'

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/1538c1fd-f2e9-45d3-81f4-f9d698554302/index.m3u8"

  const videoPlayerOptions = {
    controls : true,
    responsive : true,
    fluid : true,
    sources : [
      {
        src : videoLink,
        type : "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
    </>
  )
}

export default App
