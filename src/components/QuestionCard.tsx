
import React from 'react';
import { Redo2 } from 'lucide-react';

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
  round: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionNumber, questionText, round }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h2 className="font-medium mb-4">
        {questionNumber}. {questionText}
      </h2>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-jobspring-blue font-medium">
          {round}
        </div>
        <div className="flex space-x-2">
          <button className="border border-gray-300 rounded-md h-10 w-10 flex items-center justify-center">
            <Redo2 size={18} />
          </button>
          <button className="border border-gray-300 rounded-md px-4 h-10">
            skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
