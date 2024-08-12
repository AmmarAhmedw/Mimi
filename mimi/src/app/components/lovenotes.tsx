import React from 'react';

type LoveNotesProps = {
  onClick: () => void;
};

const LoveNotes: React.FC<LoveNotesProps> = ({ onClick }) => {
  return (
    <section
      className="min-h-screen flex items-center justify-center w-full bg-red-500"
    >
      <div className="bg-white bg-opacity-75 p-10 rounded-[3vw] shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Love Notes</h2>
        <p className="text-lg mb-4">"Words from the heart, filled with love and affection."</p>
        <button
          aria-label="Show message for Love Notes"
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-transform transform hover:scale-105"
        >
          Show Message
        </button>
      </div>
    </section>
  );
};

export default LoveNotes;
