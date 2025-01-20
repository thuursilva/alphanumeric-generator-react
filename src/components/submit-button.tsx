import React, { useState } from 'react';

type SubmitButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function SubmitButton({ onClick }: SubmitButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    onClick(event);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`bg-blue-500 w-[8rem] px-6 py-3 rounded-md text-white self-center font-semibold transition-all ${
        isPressed ? 'animate-press' : ''
      }`}
    >
      Generate
    </button>
  );
}

export default SubmitButton;
