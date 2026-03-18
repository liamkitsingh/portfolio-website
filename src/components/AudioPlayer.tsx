import React, { useState, useRef } from 'react';
import './AudioPlayer.css';

const audioTracks = [
  '/audio/track1.mp3',
  '/audio/track2.mp3',
];

const AudioPlayer: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleNextTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % audioTracks.length);
    if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };
  
  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioTracks[currentTrack]} autoPlay loop muted={isMuted} />
      <div className="player-controls">
        <button onClick={toggleMute} className="control-button">
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <div className="expanded-controls">
          <button onClick={handleNextTrack} className="control-button">
            Next Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
