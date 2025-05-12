
import React from 'react';
import { Mic } from 'lucide-react';

interface VideoContainerProps {
  type: 'interviewee' | 'interviewer';
  timer?: string;
  name?: string;
}

const VideoContainer: React.FC<VideoContainerProps> = ({ type, timer, name }) => {
  // Adjust height based on container type
  const containerHeight = type === 'interviewee' ? 'h-[450px]' : 'h-64';
  
  return (
    <div className={`w-full ${containerHeight} rounded-lg overflow-hidden relative bg-gray-100`}>
      {/* This is a placeholder for the video */}
      <div className="w-full h-full flex items-center justify-center">
        {type === 'interviewee' ? (
          <div className="text-center">
            <button className="bg-jobspring-blue text-white px-6 py-3 rounded-full flex items-center">
              <Mic className="mr-2" size={18} />
              Start Answering
            </button>
          </div>
        ) : null}
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        {type === 'interviewee' ? (
          <div className="bg-white rounded-full px-4 py-1 m-4 w-16 text-center ml-auto">
            {timer}
          </div>
        ) : name ? (
          <div className="bg-blue-100 rounded-full px-4 py-1 m-4 w-auto text-right ml-auto text-jobspring-blue">
            {name}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VideoContainer;
