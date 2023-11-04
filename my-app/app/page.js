// pages/TextToSpeechPage.js
'use client'
import React from 'react';

const TextToSpeechPage = () => {
  const speakPredefinedText = (text) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-1/2 h-96 flex justify-center items-center shadow-xl shadow-zinc-700 rounded-xl'>
      <h1>Text-to-Speech in Next.js</h1>
      <button onClick={() => speakPredefinedText('Hello, this is a predefined message.')}>
        Speak Predefined Text
      </button>
      </div>
    </div>
  );
};

export default TextToSpeechPage;
