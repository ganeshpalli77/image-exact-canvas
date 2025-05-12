
import React, { useState } from 'react';
import { Clock, Redo2 } from 'lucide-react';
import JobSpringLogo from '../components/JobSpringLogo';
import ProgressIndicator from '../components/ProgressIndicator';
import VideoContainer from '../components/VideoContainer';
import QuestionCard from '../components/QuestionCard';
import PerformanceMetrics from '../components/PerformanceMetrics';

const Index = () => {
  const [currentRound, setCurrentRound] = useState<'Screening' | 'Technical' | 'Behavioral'>('Screening');
  const [totalTime, setTotalTime] = useState('02:20');
  const [questionTimer, setQuestionTimer] = useState('00:30');

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mb-8">
        <JobSpringLogo />
        <div className="flex-1 mx-8">
          <ProgressIndicator 
            steps={[
              { label: 'Screening round', active: currentRound === 'Screening' },
              { label: 'Technical round', active: currentRound === 'Technical' },
              { label: 'Behavioral round', active: currentRound === 'Behavioral' }
            ]}
          />
        </div>
        <div className="flex items-center text-gray-800">
          <span className="mr-2">Total interview time :</span>
          <Clock className="inline-block h-5 w-5" />
          <span className="ml-1 font-bold">{totalTime}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Interviewee */}
          <div className="w-full md:w-3/5">
            <VideoContainer 
              type="interviewee"
              timer={questionTimer}
            />
          </div>
          
          {/* Right Column - Interviewer */}
          <div className="w-full md:w-2/5">
            <VideoContainer 
              type="interviewer"
              name="Prashanth"
            />
            <PerformanceMetrics 
              title="UX Designer"
              metrics={[
                { label: 'Eye contacting level', value: '90%' },
                { label: 'Attention score', value: '90%' }
              ]}
            />
          </div>
        </div>

        {/* Question Section */}
        <div className="mt-8">
          <QuestionCard 
            questionNumber={1}
            questionText="As a UX designer, can you share a specific example of how you adapted your communication style to effectively convey complex design concepts to a non-technical stakeholder?"
            round="Screening round"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-end gap-4">
          <button className="w-full md:w-auto py-3 px-6 bg-jobspring-dark text-white rounded-md flex items-center justify-center">
            <span className="mr-2">Exit Interview</span>
          </button>
          <button className="w-full md:w-auto py-3 px-6 border border-gray-300 rounded-md">
            Evaluation Criteria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
