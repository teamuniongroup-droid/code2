import { useState } from 'react';
import { Play } from 'lucide-react';
import videoThumbnail from '@/assets/video-thumbnail.webp';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-center text-xl md:text-2xl font-bold leading-tight mb-6">
        A Priest Reveals the{' '}
        <span className="headline-highlight font-extrabold italic">ancient 7:17 Code</span>{' '}
        that explains why so many prayers have{' '}
        <strong>gone <em>unanswered</em></strong>.
      </h1>

      <div
        className="relative cursor-pointer rounded-lg overflow-hidden mx-auto"
        style={{ maxWidth: 500 }}
        onClick={() => setPlaying(true)}
      >
        <img
          src={videoThumbnail}
          alt="Video thumbnail"
          className="w-full h-auto"
        />

        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="video-overlay-bg rounded-xl p-8 md:p-12 flex flex-col items-center animate-pulse-play">
              <Play className="w-16 h-16 md:w-24 md:h-24 text-white fill-white" />
            </div>
            <p className="text-white font-bold text-lg md:text-xl mt-3 drop-shadow-lg">
              Click to listen
            </p>
          </div>
        )}

        {/* Fake progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/20">
          <div className="h-full bg-primary" style={{ width: '99%' }} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
