import React, { useState } from 'react';

type CopyButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    copyIcon: string
    copiedIcon: string
  }

function CopyButton({onClick, copiedIcon, copyIcon}: CopyButtonProps) {
    const [copiedState, setCopy] = useState(false)

    const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event)
        setCopy(true)
        setTimeout(() => setCopy(false), 2000)
    }

return (
    <button
      type="button"
      onClick={handleCopy}
      className={'flex items-center justify-center px-6 py-3 rounded-md text-white self-center font-semibold transition-all'}
    >
      <img
        src={copiedState ? copiedIcon : copyIcon}
        alt={copiedState ? 'Copied' : 'Copy'}
        className={`h-7 w-7 transition-transform duration-1000 ease-in-out ${
          copiedState ? 'scale-110' : 'scale-100'
        }`}
      />
    </button>
)
}

export default CopyButton