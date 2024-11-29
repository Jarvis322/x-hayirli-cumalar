import React from 'react';
import { RefreshCw } from 'lucide-react';
import { XLogo } from './XLogo';
import { Message } from '../types';

interface MessageCardProps {
  message: Message;
  onRefresh: () => void;
}

const categoryColors = {
  tech: 'bg-blue-600 border-blue-600',
  career: 'bg-purple-600 border-purple-600',
  motivation: 'bg-amber-600 border-amber-600',
  life: 'bg-emerald-600 border-emerald-600'
};

const categoryIcons = {
  tech: '💻',
  career: '💼',
  motivation: '🎯',
  life: '🌿'
};

const categoryNames = {
  tech: 'Teknoloji',
  career: 'Kariyer',
  motivation: 'Motivasyon',
  life: 'Hayat'
};

export function MessageCard({ message, onRefresh }: MessageCardProps) {
  const handleShare = () => {
    const text = encodeURIComponent(message.text);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-600 mb-2">Hayırlı Cumalar</h1>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="mb-6 flex justify-center">
        <span className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-semibold text-white ${categoryColors[message.category]} border-2`}>
          {categoryIcons[message.category]}
          {categoryNames[message.category]}
        </span>
      </div>

      <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed">
        {message.text}
      </p>
      
      <div className="flex gap-4">
        <button
          onClick={onRefresh}
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <RefreshCw className="w-5 h-5" />
          Yeni Mesaj
        </button>

        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <XLogo />
          Paylaş
        </button>
      </div>
    </div>
  );
}